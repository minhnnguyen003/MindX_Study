const express = require('express');
const app = express();
const port = 3000;
const courseRouter = require('./Routers/CourseRouter');

// file json
app.use(express.json());

app.use('/api/course', courseRouter);


// begin start server
app.listen(port, () => console.log(`Server is listening at port ${port}...`));

