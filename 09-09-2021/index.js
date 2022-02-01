const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const port = 5000;


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'debian-sys-maint',
    password: 'soV89Z2pv9MCRp56',
    database: 'crudapp'

})

// db.connect((error) => {
//     if(error) 
//     {
//         // throw error;
//         console.error('error connecting: ' + error.stack);
//         return;   
//     }
//     console.log("Connected to db successfully");
// })




app.post('/create', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;

    // console.log(name);

    // db.query(
    //     "INSERT INTO crud(name,description) VALUES(?,?)",
    //     [name,desc],
    //     (err) => {
    //         if(err) throw err;
    //          else {
    //             console.log("values inserted");
    //         }
    //     });
    db.query('INSERT INTO crud(name, age, phone) VALUES(?,?,?)', [name, age, phone], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send("Values Inserted Successfully!")
        }
    });
})
app.get('/show', (req, res) => {
    db.query("SELECT * from crud", (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})
app.put('/update', (req, res) => {
    const id = req.body.id;
    const phone = req.body.phone;

    db.query(`UPDATE crud SET phone = ? WHERE id = ?`, [phone, id], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

app.delete(`/delete/:id`, (req, res) => {
    const id = req.params.id;
    db.query("DELETE FROM crud WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})