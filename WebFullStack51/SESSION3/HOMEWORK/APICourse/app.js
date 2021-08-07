const { validateCourse } = require('./validate');
const express = require('express');
const { valid } = require('joi');
const app = express();
const port = 3000;

// file json
app.use(express.json());

const listCourses = [
    {id: '1', name: 'JavaScript', cost: 100},
    {id: '2', name: 'Jquery', cost: 50},
    {id: '3', name: 'HTML & CSS', cost: 100},
    {id: '4', name: 'UI/UX', cost: 75}
]

// get api 
app.get('/api/course', (req, res) => {
    res.send(listCourses);
})

// post api

app.post('/api/course', (req, res) => {
    const {error,  value} = validateCourse(req.body);
    if(error) {res.status(400).send(error.details[0].message)}
    else {
        const newCourse = {
            id: Number(listCourses[listCourses.length - 1].id) + 1,
            name: value.name,
            cost: value.cost
        }
        listCourses.push(newCourse);
        res.send(listCourses);
    }
})

// put api

app.put('/api/course/:id_course', (req, res) => {
    const {error, value} = validateCourse(req.body);
    if(error) {res.status(400).send(error.details[0].message)}
    else {
        const index = listCourses.findIndex((course) => course.id == req.params.id_course);
        if(index != -1) {
            listCourses[index].name = value.name;
                listCourses[index].cost = value.cost;
                res.send(listCourses);
            }
        else {
            console.log(`No found course Id is ${req.params.id_course}`);
            res.status(400).send(`No found course Id is ${req.params.id_course}`);
        }
    }
})

// delete api 

app.delete('/api/course/:id_course', (req, res) => {
    const index = listCourses.findIndex((course) => course.id == req.params.id_course);
    if(index != -1) {
        listCourses.splice(index, 1);
        res.send(listCourses);
    }
    else {
        console.log(`No found course Id is ${req.params.id_course}`);
        res.status(400).send(`No found course Id is ${req.params.id_course}`);
    }
})

// begin start server
app.listen(port, () => console.log(`Server is listening at port ${port}...`));

