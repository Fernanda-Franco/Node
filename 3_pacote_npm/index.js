const CPF = required("cpf")

console.log(CPF.generate());
console.log(CPF.format("11111111111"));
console.log(CPF.isValid("11111111111"));

/**Exercicio V: Crie um arquivo txt com 1000 cpf aleatorio.
 * Desafio: Leia o arquivo e mostre um por um dos 1000 cpf
 * que estão dentro do arquivo.
 */

const CPF = require("cpf");
const fs = require("fs");

let numeros = [];
for (let i = 0; i < 1000; i++) {
    numeros.push(CPF.generate());
}
fs.writeFileSync("./cpfs.txt", numeros.join("\n"))

const arquivoCpfs = fs.readFileSync("./cpfs.txt").toString().split("\n");
for (let cpf of arquivoCpfs){
    console.log(cpf)
}


/** EXERCÍCIO VI: Crie uma nova pasta (pacote_exercicio) e rode
 * npm init -y. Configure o "start" para "node ./index.js".
 * Instale o pacote colors e utilize este pacote.
 * https://www.npmjs.com/package/colors
 */

const colors = require("colors");

const letraCineAsCores = [
    "Cine - As Cores",
    "",
    "O vento bate a porta e não me engana mais",
    "A decoração branca não me satisfaz",
    "Eu queria estar no seu lugar, mas não estou",
    ""
]
for (let i = 0; i < letraCineAsCores.length; i++) {
    const e = letraCineAsCores[i];
    const rand = Math.floor(Math.random() * 12);

    switch(rand){
        case 0: 
            console.log(colors.black(e));
            break;
        case 1:
            console.log(colors.red(e));
            break;
        case 2:
            console.log(colors.green(e));
            break;
    }}