const express = require('express');

const path = require('path');

let app = express();

app.get('/', function (req, res) {
    res.send(path.join(__dirname, '/index.html'))
});

// sempre deve ficar no final do arquivo
app.listen(3000, function () {
    console.log("Servidor rodando no endereço http://localhost:3000")
});