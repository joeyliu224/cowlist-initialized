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
        },
        put: function(name,id,callback) {
            db.query('UPDATE cowlist SET name = ? WHERE id = ?',[name,id],(err,data) => {
                callback(err,data);
            })
        },
        delete: function(id,callback) {
            db.query('DELETE FROM cowlist WHERE id = ?',[id],(err,data) => {
                callback(err,data);
            })
        }
    }
};