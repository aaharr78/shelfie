const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.get('/api/inventory', controller.inventory)

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => {
    console.log('there was an error connecting to db:', err)
})

const PORT = 3001
app.listen(PORT, () => console.log('Hello', PORT))