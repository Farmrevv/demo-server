const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");

// const DB = knex({
//     client: "mysql",
//     connection: {
//         host: "localhost",
//         user:"root",
//         password:"F@rmrevv2019",
//         database: "farmrevv",
// }
// })
const app = express()

app.use(bodyParser.json())
app.use(cors())

// DB("products").select("id", "tinglish_names").where('id' , '=', 3).then(data => console.log(data[0]))

app.get('/', (req, res) => {
    console.log("params", req.body);
    res.send({ key: "value" });
})

app.post('/test', (req, res) => {
    var body = req.body;
    console.log('Body ', body);
    res.send({name: 'Sydney', body});

});

app.listen(process.env.PORT || 3000, () => console.log("CONNECTED"));