const orm = require("../config/orm.js");

const burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },

    insertOne: function(cb) {
        orm.insertOne("burgers", function (res) {
            cb(res);
        })
    },

    updateOne: function(id, cb) {
        orm.updateOne("burgers", "devoured", false, id, function(res){
            cb(res);
        })
    }

};
module.exports = burger;