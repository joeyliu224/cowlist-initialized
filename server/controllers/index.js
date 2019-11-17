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

        }
    }
}