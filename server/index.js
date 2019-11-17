const express = require('express')
const app = express()
const port = 3000

//import database
const db = require('./db');
//import parser
const parser = require('body-parser');
//import router
const router = require('./routers.js');

//parsing
app.use(parser.json());

//set up routes
app.use('/api', router);

app.use(express.static('./client/dist'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))