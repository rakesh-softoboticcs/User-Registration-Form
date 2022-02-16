const express = require('express');
const cor = require('cors');


const app = express();

let corOptions={
    origin:"http://localhost:4200"
}



// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
//     });

// middleware
app.use(cor(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routers
const router = require('./routes/userRoute.js')
app.use('/api/users',router)


// testing api
app.get('/',(req,res)=>{
    res.send("Hello World")
})

// port 
const port = process.env.PORT || 4000;

// server
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})