const express = require('express');
let app = express();
const path = require('path');
let router = require('./routers/router');

const bodyParser = require('body-parser');

// Middleware to parse JSON
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use the router for handling routes
//app.use('/', router);
app.use('/controller', router);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

