const express= require("express");
const res = require("express/lib/response");
const app= express();

app.get('/stopTimer/:startDateTime/:endDateTime', function(req,res,next){

    // Convert date strings to date objects
    const startDateTime = new Date(req.params.startDateTime);
    const endDateTime = new Date(req.params.endDateTime);

     // Validate dates
    if (isNaN(startDateTime) || isNaN(endDateTime)) {
      return res.status(400).json({ result: null, statusCode: 400 });
    }

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endDateTime - startDateTime;

    // Convert milliseconds to minutes
    const result = Math.floor(differenceInMilliseconds / 60000);

    res.json({ result: result, statusCode: 200 }).status(200);
});


 

const port=3000;
app.listen(port,()=> {
    console.log("Listening on port " + port);
})
