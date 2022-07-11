const express = require('express')
const app = express();
const port = 3000

app.listen(port, () => console.log(`Estamos rodando na port ${port}`))

app.get('/home', (req, res) => {
    res.status(200).send("<h1>Essa é nossa página inicial</h1>")
})

app.get('/nossaapi', (req, res) => {
const criandoApi = [
    {
        informação1: "alguma coisa 1",
        informação2: "alguma coisa",
    },
    {
        informação1: "alguma coisa 3",
        informação2: "alguma coisa"
    }
]
res.status(200).json(criandoApi)
})