// const mysql = require("mysql");

// const source = {
//     localhost: {
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password:"opeyemi",
//         database: "burger_db"
//     }, 

//     jawsDB: {
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: "opeyemi",
//         database: "burger_db"
//     }
// };


// const connection = mysql.createConnection(source.localhost);



// connection.connect(function(err) {
//     if (err) {
//       console.error("error connecting: " + err.stack);
//       return;
//     }
//     console.log("connected as id " + connection.threadId);
//   });
  
//   module.exports = connection;
  // Set up MySQL connection.



  ///////////////////////////////////////////////////////////////////////////
  var mysql = require("mysql");

  //heroku connection
  var connection = mysql.createConnection({
          host: "localhost",
          port: 3306,
          user: "root",
          password:"opeyemi",
          database: "burger_db"
  },
  );
  
  
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////
