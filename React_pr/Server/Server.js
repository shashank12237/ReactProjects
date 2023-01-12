const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectToDB = require('./db');
const { application } = require('express');

connectToDB();

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/api', require('./Routes/student'));

app.listen(port, ()=>{
    console.log(`app listening at ${port}`);
})