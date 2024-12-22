let client = require('./dbConnection');

let collection = client.db('screenWise').collection('child');

function postChild(child, callback){
    collection.insertOne(child,callback);
}

module.exports = {postChild};