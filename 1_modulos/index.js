const moduloImc = require("./moduloImc");
console.log(moduloImc.calcularImc(87, 1.88));
console.log(moduloImc.statusImc(21));

// const calculadora = require("./moduloCalculadora");

// console.log(calculadora.soma(1, 1));
// console.log(calculadora.div(50, 3));
// console.log(calculadora.mult(5, 10));
// console.log(calculadora.mult(calculadora.pi, 2));

// const resultado = funcaoImc(87.5, 1.88);
// console.log(resultado);

/** EXERCÍCIO II: Crie um novo módulo chamado moduloConversores.js e exporte funções que convertem, utilize elas no index usando o require:
 * - celsius para fahrenheit;
 * - fahrenheit para celsius;
 */

/** EXERCÍCIO III: Crie um novo módulo chamado usuarios.js e exporte um array de objetos
 * usuário (nome, email e senha). Crie um novo módulo login com uma função autenticar,
 * ela deve receber email e senha e verificar se estes dados são válidos de acordo com o * array do módulo de usuários (utilize find, filter o etc). Mostrar uma mensagem se são * válidos ou não.
 */