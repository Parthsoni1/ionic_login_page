const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const route = require('./routes/routes');

//connect to mongoDB
mongoose.connect('mongodb://localhost:27017/Collage');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database @27017');
});
mongoose.connection.on('error',(err)=>{  
    if(err){
        console.log('error in database connection' +err);
    }
});

//port
const port = 3001;
//middleware cors
app.use(cors({ Origin:'http://localhost:4200' })); 
//body parser
app.use(bodyparser.json());
//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8100');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

//routes
app.use('/collage',route);

//static file
app.use(express.static(path.join(__dirname,'html')));
//testing
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))