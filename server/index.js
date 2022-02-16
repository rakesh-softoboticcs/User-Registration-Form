const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(cors());
app.use(bodyparser.json());

// database connection
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"simpledb",
    port:3306
})

// check database connection

db.connect((err)=>{
    if(err){console.log(err,'dberr');}
    console.log("data connected....");
})

// get all users data

app.get('/users',(req,res)=>{
    let qr = `select * from users;`

    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                message:"all user data",
                data:result
            })
        }
    })
})

// get single data 
app.get('/users/:id',(req,res)=>{
    let gId =req.params.id;
    let qr = `select * from users where id =${gId}`

    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err);
        }
        if(result.length>0)
        {
            res.send({
                message:"get single data",
                data:result
            })
        }
        else{
            res.send({
                message:"data not found"
            })
        }
    })
})

// insert the data
app.post('/users',(req,res)=>{
    console.log(req.body,'createdata');

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let userName = req.body.userName;
    let gender = req.body.gender;
    let email = req.body.email;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;

    let qr = `insert into users (firstname,lastname,username,gender,email,password,confirmPassword) values('${firstName}','${lastName}','${userName}','${gender}','${email}','${password}','${confirmPassword}')`;
    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        if(result.affectedRows>0)
        {
            res.send({message:"data inserted"})
        }
        else{
            res.send({message:"something is wrong"})
        }
    })
})

    // update the data
    app.put('/users/:id',(req,res)=>{
        console.log(req.body,'createdata');

        let gId = req.params.id;
        let firstName = req.body.firstName;
        let lastName = req.body.lastName;
        let userName = req.body.userName;
        let gender = req.body.gender;
        let email = req.body.email;
        let password = req.body.password;
        let confirmPassword = req.body.confirmPassword;
    
        let qr = `update users set firstname='${firstName}',lastname='${lastName}',username='${userName}',gender='${gender}',email='${email}',password='${password}',confirmPassword='${confirmPassword}' where id=${gId};`
        db.query(qr,(err,result)=>{
            console.log(result);
            if(err){console.log(err);}
            if(result.affectedRows>0)
            {
                res.send({message:"data updated"})
            }
            else{
                res.send({message:"something is wrong"})
            }
        })



    })

    // delete the data
    app.delete('/users/:id',(req,res)=>{
        console.log(req.body,'createdata');

        let gId = req.params.id;
      
    
        let qr = `delete from users where id=${gId};`
        db.query(qr,(err,result)=>{
            console.log(result);
            if(err){console.log(err);}
            if(result.affectedRows>0)
            {
                res.send({message:"data deleted"})
            }
            else{
                res.send({message:"something is wrong"})
            }
        })



    })

app.listen(4000,()=>console.log("Listening to port 4000"));


