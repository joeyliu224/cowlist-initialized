const express = require('express')
const app = express()
const port = 3000

const db = require('./db');

app.use(express.static('./client/dist'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))