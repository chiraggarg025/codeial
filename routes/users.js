const express = require('express');
const router=express.Router();
// getting user controller
const usersController = require('../controllers/users_controller');
// user profile route
router.get('/profile',usersController.profile);
// sign up route
router.get('/sign-up',usersController.SignUp);
router.post('/create',usersController.create);
// sign in route
router.get('/sign-in',usersController.SignIn);
module.exports=router;