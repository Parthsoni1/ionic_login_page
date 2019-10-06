const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    enroll_no:String,
    name:String,
    email:String,
    Date_of_birth:String,
    Mobile_no:Number
});

const Student  = mongoose.model('Students',StudentSchema);

module.exports = Student;