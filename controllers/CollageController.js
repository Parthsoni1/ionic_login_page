const Collage = require('../models/Collage');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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
        console.log(req.body);
        const user = new User(req.body);
        const semester = req.body.semester;
        // console.log(students);
        const collage = await Collage.findOne({});
        console.log(collage);
        var mca = collage.Department.id('5d9eb1eb5eb23e42243dfd7a').MCA.id('5d9eb1eb5eb23e42243dfd7b');
        // var semester = mca.MCA.id('5d9abc9daba62916d0501a6d');
        // res.send(mca);
        // collage.Department.id('5d9abc9daba62916d0501a6c').semester1;
        await user.save();
        if (semester === 'semester1') {
            mca.semester1.push(user);
            collage.save();
        } else if (semester === 'semester2') {
            mca.semester2.push(user);
            collage.save();
        }
        else if (semester === 'semester3') {
            mca.semester3.push(user);
            collage.save();
        }
        else if (semester === 'semester4') {
            mca.semester4.push(user);
            collage.save();
        }
        else if (semester === 'semester5') {
            mca.semester5.push(user);
            collage.save();
        } else {
            mca.semester6.push(user);
            collage.save();
        }
    res.status(201).send(user);
},
 allStudent:  async(req, res, next) => {
    const collage = await Collage.findOne({});

    var mca = collage.Department.id('5d9eb1eb5eb23e42243dfd7a').MCA.id('5d9eb1eb5eb23e42243dfd7b');
    res.send(mca);


},
userLogin: (req, res, next) => {
    console.log(req.body)
    User.find({email:req.body.email},(err,user)=> {
        if(err) {
            res.send(err);
        } else {
            if(user.length===0 ) {
                res.status(401).send('invalid');
            } else {
                if(user[0].password!==req.body.password){
                    res.status(401).send('invalid pass')
            } else {
                let payload = { subject: user.email }
                let token = jwt.sign(payload,'secretKey')
                res.status(200).send({token , user})
            }
        }
    }
    })
 }
}