const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    enroll_no:String,
    name:String,
    Semester:String,
    email:String,
    password:String,
    Date_of_birth:String,
    Mobile_no:String,
    Designation:String,
    subject:String,
    section:String,
    pay:String,
    address:[{
        State:String,
        dsitrict:String
    }]
});

const User  = mongoose.model('Users',UserSchema);

module.exports = User;