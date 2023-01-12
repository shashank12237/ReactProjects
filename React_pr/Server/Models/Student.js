const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = new Schema({

    prn: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    name: {
        type: String,
    },

    course: {
        type: String,
    },

    doa: {
        type: Date,
    },

    rollno: {
        type: Number
    },

    marks: {
        type: Number
    },

    phoneno: {
        type: Number
    }
})

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;