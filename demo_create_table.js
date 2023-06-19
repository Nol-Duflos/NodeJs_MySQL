var mysql = require('mysql'); //Importation de mySQL

var con = mysql.createConnection({ //On créer l'objet qui contient la data
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) { //On créer la fonction à partir du MPD
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});