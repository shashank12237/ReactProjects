const express = require('express');
const router = express.Router();
const Student = require('../Models/Student');

router.get('/getAllStudentDetails', async (req, res)=>{
    
    const students = await Student.find();
    if(!students){res.status(404).send("No student found.")};
    res.json(students);
})

router.get('/getByPrn', async (req, res)=>{

    const {prn} = req.body;
    const student = await Student.find({prn: prn});
    if(!student){res.status(404).send("No student found.")};
    res.json(student);

})

router.post('/register', async (req, res)=>{
    const {prn, password} = req.body;

    const newStudent = new Student({prn, password});
     newStudent.save();

    
})

router.post('/addDetails', async (req, res)=>{
    const {prn, rollno, name, course, doa, marks, mobile} = req.body;

    const getStudent = Student.find({prn: prn});

    if(!getStudent){res.status(404).send("No Student Found")}
    
    const newDetails = {};
    
    newDetails.rollno = rollno;
    newDetails.name = name;
    newDetails.course = course;
    newDetails.doa = doa;
    newDetails.marks = marks;
    newDetails.mobile = mobile;

    const savedStudent = Student.findOneAndUpdate(prn, {$set: newDetails}, {new: true});
    res.json(savedStudent);

})

module.exports = router;