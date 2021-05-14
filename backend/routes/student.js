const router= require('express').Router();
let Student = require('../models/student.models');

//home
router.route('/').get((req,res)=> {
    Student.find()
        .then (student=>res.json(student))
        .catch(error=>res.status(400).json("Error: "+error))

});

//add

router.route('/add').post((req,res)=> {

    const fullname = req.body.fullname;
    const age= req.body.age;
    const address= req.body.address;
    const newStudent = new Student ({fullname,age,address})
    newStudent.save()
         .then (student=>res.json('new student added'))
         .catch(error=>res.status(400).json("Error: "+error))
});
//details
router.route('/:id').get((req, res) => {
    student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
})







//delete

router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(student => res.json("Record was Deleted."))
        .catch(err => res.status(400).json('Error: ' + err));
})
//update
router.route('/update/:id').post((req,res)=>{
    Student.findById(req.params.id)
    .then(student=>{
    student.fullname=req.body.fullname;
    student.age=req.body.age;
    student.address=req.body.address;
    student.save()
    .then(student=>res.json("Record was updated."))
    .catch(err=>res.status(400).json('Error: '+err));
    })
    .catch(err=>res.status(400).json('Error: '+err));
    });
module.exports= router;