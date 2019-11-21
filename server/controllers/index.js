const models = require('../models');

module.exports = {
    cowlist: {
        get: function (req, res) {
            models.cowlist.get((err,data) => {
                if(err) {
                    res.sendStatus(400);
                } else {
                    res.send(data);
                }
            });

        },
        post: function (req, res) {
            models.cowlist.post(req.body, (err,data) => {
                if(err) {
                    console.log(err);
                    res.sendStatus(400);
                } else {
                    res.status(201).send(req.body);
                }
            })

        },
        put: function(req, res) {
            //console.log(req)
            const id = parseInt(req.params.id.slice(1));
            models.cowlist.put(req.body.name, id, (err,data) => {
                if(err) {
                    res.sendStatus(400);
                } else {
                    res.status(200).send(data)
                }
            })
        },
        delete: function(req, res) {
            
            const id = parseInt(req.params.id.slice(1));
            console.log(id)
            models.cowlist.delete(id,(err,data)=> {
                if(err) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(200);
                }
            })
        }

    }
}