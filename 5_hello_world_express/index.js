//GET = leitura de dados
//POST = escrita de dados
//PUT = atualização de dados
//DELETE = remoção de dados

const express = require("express");
const fs = require("fs");

//Define uma aplicação backend em Express
//Recursos pré configurados
const app = express();

//Define um roteamento
//Manipulador de rota
app.get("/", (requisicao, resposta) => {
    resposta.send("Batata!");
});

//req = requisição do cliente
//res = resposta do servidor
app.get("/teste", (req, res) => {
    //manipulador de rota
    //req = objeto com dados do cliente/solicitante
    //res = objeto com dados p/ resposta do servidor 
    res.send("<p>O que deseja amigo?</p>");
});

/** Exercício I: Crie dois arquivos html: inicio.html e
 * ajuda.html. Defina uma rota GET /inicio que lê o arquivo
 * inicio.html e responde com seu conteúdo. Defina outra
 * rota /ajuda que lê o arquivo ajuda.html e responde com
 * seu conteúdo. Dentro do arquivo inicio.html, deve haver
 * um link para a página de ajuda.**/

app.get("/inicio", (req, res) => {
    const arquivo = fs.readFileSync("./inicio.html");
    res.send(arquivo.toString());
});

app.get("/ajuda", (req, res) => {
    const arquivo = fs.readFileSync("./ajuda.html");
    res.send(arquivo.toString());
})

//Parametro de caminho/rota
app.get("/funcionarios/:cpf", (req, res) => {
    console.log(req.params);
    res.send("Servidor rodando em http://localhost:3000/");
})

//Inicializa a escuta de requisição do servidor
app.listen(3000);