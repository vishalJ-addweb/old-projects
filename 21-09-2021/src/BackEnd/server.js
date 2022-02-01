const express = require('express');
const app = express();
const cors = require('cors');
var mysql = require('mysql2');

app.use(express.json());
app.use(cors());

var db = mysql.createConnection({
    host: "localhost",
    user: "debian-sys-maint",
    password: "soV89Z2pv9MCRp56",
    database: "bookmyshow"
});

db.connect((error) => {
    if (error) throw err;
    console.log("Connected!");
})

app.get('/movies', (req, res) =>
{
    const sqlSelect = "SELECT * FROM movies";
    db.query(sqlSelect, (err, result) =>
    {
        if(err)
        throw err;
        
      console.log(result);
      res.send(result);
    });
})

app.listen(9999, () => {
    console.log("server running... on 9999 Port");
});