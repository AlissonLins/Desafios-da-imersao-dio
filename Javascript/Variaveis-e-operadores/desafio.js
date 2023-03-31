/*Crie programa que calcule o valor gasto em uma viagem.

Você terá três variáveis. Sendo elas : 
1- Preço do combustível.
2- Gasto médio de combustível do carro por KM.
3- Distância percorrida em KM da viagem.

Imprimir no console quanto será gasto para realziar a viagem. */

const gasolina = 5.01 ; /* Valor da gasolina */
const gastos = 12 ; /* KM por Litro */
let distancia = 1000 ; /* distância em km total da viagem */

const consumo = distancia / gastos;
const valor = consumo * gasolina;
console.log(valor.toFixed(2));