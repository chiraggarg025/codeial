const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/about_controller');
// getting about controller
router.get('/',aboutController.about);


module.exports=router;