var mysql = require('mysql');

let user = mysql.createConnection({
    firstName: "name",
    lastName : "lastName",
    email: "emailAdresse",
    mdp:"motDePasse",
    dateNaissance: "00/00/0000",
    status: true

});

user.connect(functon(err)) { //err pour "error"
    if (err) throw err; //Vérification d'erreur
    console.log("Bravo, la connexion est établie");
}