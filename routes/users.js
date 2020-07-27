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
router.post('/create-session',usersController.createSession);
module.exports=router;
// sign out route
router.post('/sign-out',usersController.signOut);