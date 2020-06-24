/* 
- Npm version : 6.14.4
- Node version : 14.4.0
- Expres version : 4.17.1
*/

// Imports
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Constants variables
const versionApi = '/api/v1/';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// POST /api/
app.post(`${versionApi}`, (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        data : data
    })
});

// Choix du port
app.listen(3000, () => console.log('Listen on port 3000'));
// Test => https://chatbot.test:3000