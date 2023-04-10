/* 2- Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome. peso e altura
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso /(altura * altura));
Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça ao José para dizer o valor 
do seu IMC;
 */

class pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura
    }

    calculoImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calculoImc();
        
        if (imc < 18.5) {
            return('Você está abaixo do peso ideal.')
        } else if (imc >= 18.5 && imc < 25) {
            return('Você está no peso ideal.')
        } else if (imc >= 25 && imc <= 30) {
            return('Você está acima do peso ideal.')
        } else if (imc >= 30 && imc <= 40) {
            return('Você está em caso de obesidade, procure um profissional de saúde.')
        } else {
            return('Você está em caso de obesidade Grave, procure um profissional de saúde.')
        }
    }
}

const jose = new pessoa('José', 70, 1.75);
console.log(jose.classificarImc());
const alisson = new pessoa('Alisson', 63, 1.77)
console.log(alisson.classificarImc());