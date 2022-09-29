//console.log("Ola Projeto-X")

const http = require('http');

http.createServer((req, res) => {
    //console.log("Servidor esta rodando")

    res.writeHead(200, {"Content-Type": "text/plain"})
    
    switch(req.url){
        case "/":
            res.end("Voce esta na HOME PAGE")
            break;
        case "/contato":
            res.end("Página de Contatos")
            break;

        default:
            res.end("Voce esta no nosso servidor")
    }
    
    //res.end("Meu primeio servidor")



}).listen(3000);



// A INTENSÃO É TESTAR AS ATUALIZAÇÕES E VERSIONAMENTO CRIADOS PELO GIT