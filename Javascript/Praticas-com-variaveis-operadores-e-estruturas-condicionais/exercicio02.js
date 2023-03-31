/* O IMC - Indice de Massa Corporal é um critério da Organização Mundial
de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta

formula do IMC: 
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre
 sua condição de a cordo com a tabela abaixo.
 
 IMC em adultos Condições:
 - Abaixo de 18.5 Abaixo do peso;
 - Entre 18.5 e 25 peso normal;
 - Entre 25 e 30 acima do peso;
 - Entre 30 e 40 Obesidade
 - Acima de 40 Obesidade Grave; */

const peso = 63;
const altura = 1.75;

imc = peso / Math.pow(altura, 2);


console.log(imc.toFixed(2))

if (imc < 18.5) {
    console.log('Você está abaixo do peso ideal.')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você está no peso ideal.')
} else if (imc >= 25 && imc <= 30) {
    console.log('Você está acima do peso ideal.')
} else if (imc >= 30 && imc <= 40) {
    console.log('Você está em caso de obesidade, procure um profissional de saúde.')
} else {
    console.log('Você está em caso de obesidade Grave, procure um profissional de saúde.')
}