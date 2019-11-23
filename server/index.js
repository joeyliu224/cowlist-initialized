const express = require('express')
const app = express()
const port = 3000
const parser = require('body-parser')
const db = require('../db/index.js');

app.use(express.static('./client/dist'))
app.use(parser.json())

//app.get('/', (req, res) => res.send('Hello World!'))

app.post('/api/cows',(req,res) => {
    db.save(req.body);
    res.status(201).send(req.body);
})

app.get('/api/cows',(req,res) => {
    db.retreive().then(
        (data) => {
            res.status(200).send(data);
        }
    ).catch(
        (err) =>{
            console.log(err);
            res.sendStatus(404);
        }
    )
})


app.delete(`/api/cows:id`,(req,res) => {
    console.log('req.url:',req.url.slice(10))
    const id = req.url.slice(10)
    db.delete(id).then(
        res.status(200).send('deleted')
    ).catch(
        (err) => {
            res.sendStatus(500);
        }
    )
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))