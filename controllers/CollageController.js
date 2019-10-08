const Collage = require('../models/Collage');
const Student = require('../models/Students');

module.exports = {

    index: (req, res, next) => {
        Collage.find({}, (err, collage) => {
            if (err) {
                next(err)
            }
            res.status(200).json(collage);
        })
    },
    Collage: (req, res, next) => {
        console.log(req.body);
        const collage = new Collage(req.body);
        collage.save((err, collage) => {
            console.log(err);
            console.log(collage)
        });
    },
    newUsers: async (req, res, next) => {
        const students = new Student(req.body);
        const semester = req.body.semester;

        const collage = await Collage.findById('5d9abc9daba62916d0501a6b');
        var mca = collage.Department.id('5d9abc9daba62916d0501a6c').MCA.id('5d9abc9daba62916d0501a6d');
        // var semester = mca.MCA.id('5d9abc9daba62916d0501a6d');
        // res.send(mca);
        // collage.Department.id('5d9abc9daba62916d0501a6c').semester1;
        // await students.save();
        if (semester === 'semester1') {
            mca.semester1.push(students);
            collage.save();
        } else if (semester === 'semester2') {
            mca.semester2.push(students);
            collage.save();
        }
        else if (semester === 'semester3') {
            mca.semester3.push(students);
            collage.save();
        }
        else if (semester === 'semester4') {
            mca.semester4.push(students);
            collage.save();
        }
        else if (semester === 'semester5') {
            mca.semester5.push(students);
            collage.save();
        } else {
            mca.semester6.push(students);
            collage.save();
        }
    res.status(201).send(students);
}
}