var express = require("express");
var app = express();
var port = process.env.port || 3000;

app.listen(port,() => {
    console.log("Ap listening to: " + port)
});
