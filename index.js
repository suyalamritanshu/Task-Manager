const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors())
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes')

require('dotenv').config();
require('./db')
const PORT = 8000;

app.use(bodyParser.json());
app.use('/users', userRoutes );
app.use('/tasks', taskRoutes);

//Path : index.js
app.get('/', (req,res)=>{
    res.json({
        message : 'Task Manager API is working'

    })
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});