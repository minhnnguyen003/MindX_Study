const joi = require('joi');
const express = require('express');
const port = 2709;

// init app
const app = express();

app.use(express.json());

// List manga
const listManga = [
    {
        id: '1', name: 'Trinh Tham'
    },
    {
        id: '2', name: 'Truyen Ma'
    },
    {
        id: '3', name: 'Lang Man'
    }
]

// get api

app.get('/api/manga', (req, res) => {
    res.send(listManga);
});




// post api
app.post('/api/manga', (req, res) => {
    const { error, value} = validateManga(req.body);
    if(error !== undefined) {res.status(400).send(error.details[0].message)}
    else {
        const newManga = {
            id: Number(listManga[listManga.length - 1].id) + 1,
            name: value.name,
        }
        listManga.push(newManga);
        res.send(listManga);
    }
});

// validate
function validateManga(manga) {
    const schema = joi.object ({
        name: joi.string().min(3).required()
    })
    return schema.validate(manga);
}

// update manga api
app.put('/api/manga/:id_manga', (req, res) => {
    const {error, value} = validateManga(req.body);
    if(error) {res.status(400).send(error.details[0].message)}
    else {
        const index = listManga.findIndex((manga) => manga.id == req.params.id_manga);
        listManga[index].name = value.name; 
        res.send(listManga);
    }
});


// delete manga api
app.delete('/api/manga/:id_manga', (req, res) => {
    const index = listManga.findIndex((manga) => manga.id == req.params.id_manga);
    listManga.splice(index, 1);
    res.send(listManga);
});

app.listen(port, () => console.log(`Server is listening at ${port} ...`));