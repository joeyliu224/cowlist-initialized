const db = require('../db');

module.exports = {
    cowlist: {
        get: function(callback) {
            db.query('SELECT * FROM cowlist', (err,data) => {
                callback(err,data);
            });
        },
        post: function(cow,callback) {
            db.query('INSERT INTO cowlist(name, description) VALUES (?,?)',[cow.name,cow.description],(err,data) => {
                callback(err,data);
            });
        }
    }
};