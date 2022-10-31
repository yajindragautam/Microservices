const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');

const app =  express();
app.use(bodyParser.json())
const post = {};

// Routes
app.get('/posts',(req,res)=>{
    return res.send(post);
});

app.post('/posts', (req,res)=>{
    let id = randomBytes(4).toString('hex');
    const {title} = req.body;
    post[id] = { id, title};
    return res.status(201).send(post[id]);
})

// Creating Server
const port = 4000;
app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
})