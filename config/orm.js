const connection = require("./connection.js");


const orm = {

    selectAll: function(table) {
        let s = "SELECT * FROM ??";
        connection.query(s, [table], function (err, result){
            if (err) throw err;
            console.log(result);
        });
    }, 
    insertOne: function(table, col1To) 

}