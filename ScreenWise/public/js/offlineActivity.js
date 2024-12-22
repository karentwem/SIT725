let client = require('./dbConnection');

let collection = client.db('screenWise').collection('offlineActivities');

function postActivity(activity, callback){
    collection.insertOne(activity,callback);
}

module.exports = {postActivity};