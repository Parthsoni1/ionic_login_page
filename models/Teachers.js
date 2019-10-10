const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name:String,
    email:String,
    ate_of_birth:String,
    Mobile_no:String,
    subject:String,
    section:String,
    pay:String,
    address:[{
        State:String,
        dsitrict:String
    }]
});

const Teachers  = mongoose.model('Teachers',StudentSchema);

module.exports = Teachers;