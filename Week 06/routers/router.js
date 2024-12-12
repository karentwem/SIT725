const express = require('express');
const router = express.Router();
let controller = require('../controllers/controller');

// Define the route for adding an offline activity record
router.post('/',function(req,res){
    controller.postActivity(req,res);
});


module.exports = router;

