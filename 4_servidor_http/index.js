const http = require("http");
const os = require("os");
const CPF = require("cpf");

const host = "localhost";
const porta = 3000;

const servidor = http.createServer((requisicao, resposta) => {
    console.log("Requisição ocorreu!");
    // O que eu quero responder para quem fez a solicitação
    resposta.write("<h1>Informações do sistema</h1>");
    resposta.write("</hr>");
    resposta.write(`<p>${os.hostname()} | ${os.plataform()} | ${os.types()}</p>`)
    resposta.write(`<p><b>Total de cpus:</b> ${os.cpus().length}</p>`);
    
    
    //Encerra a comunicação
    resposta.end();
});

//Servidor fica esperando requisições
servidor.listen(porta, host);

/** Exercicio VI: Escreva na resposta do servidor informações sobre
 * o sistema usando o módulo os.
 */

// SERVIDOR HTTP
// - Rotas
// - Codificação UTF-8
// - Estrutura mais clean/mais minimalista
// - Mais braçal

// Express.js = Framework para backend