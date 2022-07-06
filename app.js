const express = require("express")
const port = 3000
const app = express()
const path = require ("path")

//setup view engine
app.set(`views`, path.join(__dirname, "views"))
app.set('view engine', 'ejs')

app.get('/', function(req, res, next) {
    res.render('index', {
        title: "Express trabalho DevWeb",
        version: "0.0.0"
    })
})

app.listen(port, err => {
    console.log(`Server is listening on ${port}`)
})

app.get('/')