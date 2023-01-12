const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/examDB'

const connectToDB = ()=>{
    mongoose.connect(dbURI).then(()=>{
        console.log("connected to db");
    })
}

module.exports = connectToDB;