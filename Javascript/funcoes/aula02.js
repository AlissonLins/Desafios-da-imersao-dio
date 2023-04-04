function myName(nome){
    return ('Meu nome é ' + nome);
}

function verifyYears(idade) {
    if (idade >= 18) {
        console.log(myName('Alisson') + ' voce já é maior de idade');
    }
    else{
        console.log('Você ainda é menor de idade');
    }
}

verifyYears(18);