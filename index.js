var express = require("express");
var app = express();
var connection = require('./database');

app.get('/', function(req, res) {
    let sql = "SELECT * FROM EMPLOYEE_INFO";
    connection.query(sql, function(err, results){
        if (err) throw err;
        res.send(results);
    });
});

app.listen(3000, function(){
    console.log('App Listening on port 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Database connected!');
    })
});