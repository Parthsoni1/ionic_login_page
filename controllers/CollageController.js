const Collage = require('../models/Collage');
const Student = require('../models/Students');

module.exports = {

index:(req,res,next) =>{
    Collage.find({},(err,collage)=>{
        if(err){
            next(err)
        }
        res.status(200).json(collage);
    })
},
Collage: (req,res,next) =>{
    console.log(req.body);
    const collage = new Collage(req.body);
    collage.save((err,collage) => {
        console.log(err);
        console.log(collage)
    });
},
newUsers: async(req,res,next) =>{
    const students = new Student(req.body);
    const { deptId } = req.params;
    const collage = await Collage.findById(deptId);
    await students.save();
    collage.semester1.push(students);
    collage.save();

    res.status(201).send(students);
}
}