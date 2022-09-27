const express = require('express');

let app = express();

app.listen(3000, (req, res)=>{
    console.log("Servidor rodando no endereço http://localhost:3000")
});