// Require express
const express = require('express');
const router=express.Router();
// get controller
const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);
// for route /users and following route
router.use('/users',require('./users'));
// for route / about and following routes
router.use('/about',require('./about'));
// export router
module.exports=router;