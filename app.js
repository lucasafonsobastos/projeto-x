const express = require('express');

let app = express();

app.get('/', function (req, res) {
    res.send("<h1>Título de nível 1</h1>")
});


// sempre deve ficar no final do arquivo
app.listen(3000, function () {
    console.log("Servidor rodando no endereço http://localhost:3000")
});