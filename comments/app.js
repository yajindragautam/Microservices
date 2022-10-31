const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto')

const app = express();
app.use(bodyParser.json());

const commentByPostId = {};

// Routes

app.get('/posts/:id/coments',(req,res)=>{
    return res.send(commentByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments',(req,res)=>{
    const commentId = randomBytes(4).toString('hex');
    const {content} = req.body;
    const comment = commentByPostId[req.params.id] || [];
    comment.push({id: commentId, content});

    commentByPostId[req.params.id] = comment;
    return res.status(201).send(comment);

})





// Creating Servers
const post = 5000;
app.listen(post,()=>{
    console.log(`App is running in port : ${post}`);
})