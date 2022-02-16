const userController = require('../controllers/userController.js');



const router = require('express').Router();

router.post('/addUser',userController.addUser)
router.get('/getAllUsers',userController.getAllUser)
router.post('/getUser',userController.getUser)
router.get('/getOneUser/:id',userController.getOneUser)
router.put('/updateUser/:id',userController.updateUser)
router.delete('/deleteUser/:id',userController.deleteUser)

module.exports=router;