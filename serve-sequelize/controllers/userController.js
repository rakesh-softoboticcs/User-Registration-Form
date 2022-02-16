const db = require('../models');

// create main model
const User = db.users;


// create user
const addUser = async(req,res)=>{
    let user={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        gender:req.body.gender,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    }
    const users = await User.create(user)
    res.status(200).send(users);
    console.log(users);
}

// get all users
const getAllUser = async(req,res)=>{
    const users = await User.findAll({})
    res.status(200).send(users);
    console.log(users);
}

// login of user
const getUser = async(req,res)=>{

   let user = {
       username:req.body.username,
       password:req.body.password
   }  
    const users = await User.findOne({where:{userName:user.username,password:user.password}})
    res.status(200).send(users);
    console.log(users);
}

// update users
const updateUser = async(req,res)=>{
    let id = req.params.id
    let user={
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        userName:req.body.userName,
        gender:req.body.gender,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    }
    const users = await User.update(user,{where:{id:id}})
    res.status(200).send(users)
}

// delete product by id
const deleteUser = async(req,res)=>{
    let id = req.params.id
    const users = await User.destroy({where:{id:id}})
    res.status(200).send(users)
}

// get one user
const getOneUser = async(req,res)=>{
    let id = req.params.id
    const user = await User.findOne({where:{id:id}})
    res.status(200).send(user)
}

module.exports={
    addUser,
    getAllUser,
    getUser,
    getOneUser,
    updateUser,
    deleteUser
}