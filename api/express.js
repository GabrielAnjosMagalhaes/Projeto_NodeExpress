const express = require('express')
const app = express();
const port = 3000

app.set("view engine", "ejs")
app.use(express.static('./styles'))


app.get('/home', (req, res) => {
    res.status(200).send("<h1>Essa é nossa página inicial</h1>")
    
})

app.get('/nossaapi', (req, res) => {
    var item=0;
const ditadosAPI = [
    {
        prov1: "Conselho 1: Cobra que não anda, não engole sapo."       
    },
    {
        prov2: "Conselho 2: Muito ajuda quem não atrapalha."       
    },
    {
        prov3: "Conselho 3: Não há que ser forte. Há que ser flexível."       
    },
    {
        prov4: "Conselho 4: Macaco velho não mete a mão em cumbuca."       
    },
    {
        prov5: "Conselho 5: A palavra é prata, o silêncio é ouro."       
    },
    {
        prov6: "Conselho 6: Passarinho que acompanha morcego acorda de cabeça para baixo."       
    },
    {
        prov7: "Conselho 7: Não há bem que sempre dure, nem mal que nunca se acabe."       
    },
    {
        prov8: "Conselho 8: Se queres a paz, prepara-te para a guerra."       
    }
]


// ditadosAPI.push("Conselho 9: Se queres a paz, prepara-te para a guerra.")
//  console.log(`${ditadosAPI}`)

item=ditadosAPI[Math.floor(Math.random()*ditadosAPI.length)]
console.log(item)

// item= Math.floor(Math.random()*7)
// console.log(ditadosAPI.length)
//  for(i=0;i<ditadosAPI.length ;i++){
//       item= Math.floor(Math.random()*7) 
//  }
// para buscar informações: res.status(200).render|("nomedoarquivo)"|,|({info: informacaoQueVoceQuerPassar})| 
//nesse caso usei o index vindo da pasta views
res.status(200).render("index", {info: ditadosAPI, item: item})
})



app.listen(port, () => console.log(`Estamos rodando na port ${port}`))
