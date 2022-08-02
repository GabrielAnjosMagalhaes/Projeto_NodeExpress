const express = require('express')
const app = express();
const port = 3000

app.set("view engine", "ejs")
app.use(express.static('./styles'))


app.get('/home', (req, res) => {
    res.status(200).send("<h1>Essa é nossa página inicial</h1>")
    
})

app.get('/nossaapi', (req, res) => {
const criandoApi = [
    {
        info1: "alguma coisa 1",
        info2: "alguma coisa",
    },
    {
        info1: "alguma coisa 3",
        info2: "alguma coisa"
    }
]
res.status(200).render("index", {info: criandoApi})
})



app.listen(port, () => console.log(`Estamos rodando na port ${port}`))