const express = require('express');
const router=express.Router();
const homeConstroller = require('../controllers/home_controller');
router.get('/',homeConstroller.home);
module.exports=router;