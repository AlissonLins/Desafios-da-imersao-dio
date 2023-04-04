// IMC com funções

function calculoImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classImc(imc){
   if (imc < 18.5) {
    return 'Você está abaixo do peso ideal.'
} else if (imc >= 18.5 && imc < 25) {
    return 'Você está no peso ideal.'
} else if (imc >= 25 && imc <= 30) {
    return 'Você está acima do peso ideal.'
} else if (imc >= 30 && imc <= 40) {
    return 'Você está em caso de obesidade, procure um profissional de saúde.'
} else {
    return 'Você está em caso de obesidade Grave, procure um profissional de saúde.'
} 
}

//Main
(function (){
    const peso = 65;
    const altura = 1.77;

    const imc = calculoImc(peso, altura);
    console.log(classImc(imc));
})
