const connection = require("./connection.js");

const tableName = "burgers";

const orm = {

    selectAll: function(cb) {
        let s = "SELECT * FROM" + tableName;
        cb = function () {
            connection.query(s, function (err, result){
            if (err) throw err;
            return result;         
        });

        }
        return cb;
    },
    
    
    insertOne: function(insert, cb) {
        let s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
        insert.complete = insert.complete || 0;
        cb = function () {
        connection.query(s, [insert.text, insert.complete], function(err, result) {
            if (err) throw err;
            return result;
        });

        }
        return cb;

    },

    updateOne: function(insert, cb) {
        let s = "UPDATE " + tableName + " SET text=? WHERE id=?";
        cb = function () {
           connection.query(s, [
            insert.text, insert.id
        ], function(err, result) {
            cb(result)
        }); 
        }
        return cb;
        
    }


};

module.exports = orm;