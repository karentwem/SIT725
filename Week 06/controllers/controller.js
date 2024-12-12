let collection = require('../models/activity');

// Controller function to add an offline activity record
const postActivity = (req, res) => {
    let newActivity = req.body;
    collection.postActivity(newActivity, (err, result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        } 
    });
};

module.exports = {
    postActivity
};



