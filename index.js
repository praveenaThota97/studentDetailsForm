const express = require('express');
const app = express();


console.log("Hello Node");
console.log("Appuveena");
app.listen(4000,()=>{
    console.log("server Started");
})
app.get('/',(req,res)=>{
    res.send("Hello Node! I am Appuveena");
});

app.get('/formStudentData',(req,res)=>{
    let studentId = req.query.studentid;
    res.send(studentId);
    console.log(req);
});


