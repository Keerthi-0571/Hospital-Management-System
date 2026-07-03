// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "info123"
// });

// connection.connect(function(err) {
//     if (err) {
//         console.log("Connection Error:", err);
//         return;
//     }

//     console.log("Connected!");

//     connection.query("CREATE DATABASE hospital2", function(err, result) {
//         if (err) throw err;
//         console.log("Database Created");
//     });
// });

// const mysql = require("mysql2");

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "info123",
//     database: "hospital2"
// });

// connection.connect(function (err) {

//     connection.query(
//         "create table patient (pid int, pname varchar(25), age int, gender varchar(25))",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );

// });

// connection.connect(function (err) {

//     connection.query(
//         "create table staff (eid int, ename varchar(25), age int, gender varchar(25))",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );

// });

// connection.connect(function (err) {

//     connection.query(
//         "create table doctor (did int, dname varchar(25), age int, gender varchar(25))",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );

// });

// module.exports = connection;





// const mysql = require("mysql2");

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "info123",
//     database: "hospital2"
// });

// connection.connect(function (err) {

//     connection.query(
//         "insert into patient values (01,'sahil kumar',25,'m'),(02,'sumit kumar',28,'m'),(03,'ajay kumar',28,'m'),(04,'sudhan',27,'f')",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );

// });

// connection.connect(function (err) {

//     connection.query(
//         "insert into staff values (101,'amit',18,'m'),(102,'suketu',19,'m'),(103,'divin',45,'m')",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );

// });

// connection.connect(function (err) {

//     connection.query(
//         "insert into doctor values (202,'dr.patel',45,'f'),(202,'dr.shah',29,'m')",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );

// });

// module.exports = connection;



// const mysql = require("mysql2");

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "info123",
//     database: "hospital2"
// });

// connection.connect(function (err) {

//     connection.query("select * from patient", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

// });

// connection.connect(function (err) {

//     connection.query("select * from staff", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

// });

// connection.connect(function (err) {

//     connection.query("select * from doctor", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

// });

// module.exports = connection;



// const mysql = require("mysql2");

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "info123",
//     database: "hospital2"
// });

// connection.connect(function (err) {

//     connection.query("delete from patient where pid=4", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

// });

// connection.connect(function (err) {

//     connection.query("delete from staff where eid=3", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

// });

// connection.connect(function (err) {

//     connection.query("delete from doctor where dname='dr.shah'", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

// });

// module.exports = connection;





const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "hospital2"
});

connection.connect(function (err) {

    connection.query("select pname, age, gender from patient", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

});

connection.connect(function (err) {

    connection.query("select dname, age from doctor", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

});

connection.connect(function (err) {

    connection.query("select ename, gender from staff", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });

});

module.exports = connection;