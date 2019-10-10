var mongoose = require('mongoose');
var url = 'mongodb+srv://parth:sparth11@cluster0-dgeuw.mongodb.net/test?retryWrites=true&w=majority';
console.log(url);

mongoose.connect(url,(err,res) => {
    if(err){
        console.log(err);
    }else{
        console.log('Database Connected Successfully..');
    }
});
