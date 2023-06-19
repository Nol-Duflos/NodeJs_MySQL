var mysql = require('mysql');

let user = mysql.createConnection({
    firstName: "name",
    lastName : "lastName",
    email: "emailAdresse",
    mdp:"motDePasse",
    dateNaissance: "00/00/0000",
    status: true

});

