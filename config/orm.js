const connection = require("./connection.js");

const tableName = "burgers";

const orm = {

    selectAll: function(cb) {
        let s = "SELECT * FROM" + tableName;
        connection.query(s, function (err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    
    
    insertOne: function(insert, cb) {
        let s = "INSERT INTO " + tableName + " (text, complete) VALUES (?,?)";
        insert.complete = insert.complete || 0;
        connection.query(s, [insert.text, insert.complete], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateOne: function(insert, cb) {
        let s = "UPDATE " + tableName + " SET text=? WHERE id=?";

        connection.query(s, [
            insert.text, insert.id
        ], function(err, result) {
            cb(result)
        });
    }


};

module.exports = orm;