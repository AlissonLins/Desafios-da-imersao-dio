/* Crie programa que calcule o valor gasto em uma viagem.

Você terá cinco variáveis. Sendo elas : 
1- Preço do etanol.
2- Preço do combustível.
3- O tipo de combustível que está no seu carro.
4- Gasto médio de combustível do carro por KM.
5- Distância percorrida em KM da viagem.

Imprimir no console quanto será gasto para realziar a viagem. */

const etanol = 4.41; /* Valor do etanol */
const gasolina = 5.01; /* Valor da gasolina */
const tipo = 'etanol';
const gastos = 12; /* KM por Litro */
let distancia = 100; /* distância em km total da viagem */

const consumo = distancia / gastos;

if (tipo === 'gasolina') {
    const valor = consumo * gasolina;
console.log(valor.toFixed(2));
} else {
    const valor = consumo * etanol;
console.log(valor.toFixed(2));
}

