const express = require("express");
const app = express();


var BD = {

    Loja: [

        {
            id: 1,
            Nome: "Guaraná Antartica",
            Precounitario: 1,

            Quantidade: 100,

            Categoria: "Refrigerante",

            Fabricante: {
                "nome": "Antartica company",
                "Endereço": "Rua ticão 15",
                "Tel": 32-35548432
            }
        },
        {
            id: 2,
            Nome: "Kibe Assado",
            Precounitario: 1.59,

            Quantidade: 50,

            Categoria: "Salgado",

            Fabricante: {
                "nome": "Kibe Distribuidora",
                "Endereço": "Rua velozes 219",
                "Tel": 3238498732
            }
        },
        {
            id: 3,
            Nome: "babalooo",
            Precounitario: 0.50,

            Quantidade: 400,

            Categoria: "Goma",

            Fabricante: {
                "nome": "Babaloo ltda.",
                "Endereço": "Rua pedra 231",
                "Tel":64684232
            }
        }
    ]
}
app.listen(45678, () => {
    console.log(`Aplicação rodando na porta 45958`);
});
app.get("/Loja", (req, res) => {
    res.statusCode = 200;
    res.json(BD.Loja);
});

app.get("/Loja/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);

        var produtoLoja = BD.Loja.find(p => p.id == id)
        if (produtoLoja != undefined) {
            res.statusCode = 200;
            res.json(produtoLoja);
        }
        else {
            res.statusCode = 404;
        }
    }
});

