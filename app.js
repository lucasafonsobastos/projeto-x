const express = require('express');

let app = express();

app.get('/', function (req, res) {
    res.send("Agora esta funcionando a rota '/' ")
});


// sempre deve ficar no final do arquivo
app.listen(3000, function(){
    console.log("Servidor rodando no endereço http://localhost:3000")
});