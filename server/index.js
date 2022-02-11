const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

app.use(bodyParser.json())
app.use(cors());




let userArray = []
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.post('/api/users',(req,res)=>{
    console.log(req.body);
    
    userArray.push(req.body);
    console.log(userArray);
    res.status(200);
})

app.put('/api/users/:id',(req,res)=>{
    const index = userArray.findIndex((data)=>data.id===parseInt(req.params.id));
    userArray.splice(index, 1);
    userArray.splice(index, 0, req.body);
    console.log(userArray);
    res.send(200);

})

app.delete('/api/users/:id',(req,res)=>{
    let result = userArray.findIndex((user) => user.id ===parseInt(req.params.id) );
      userArray.splice(result, 1);
      res.send(200);
})

app.get('/api/users',(req,res)=>{
    res.send(userArray);
})





const port = process.env.PORT || 3000;
app.listen(port ,()=>console.log(`Listening to port ${port}`));