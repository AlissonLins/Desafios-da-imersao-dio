/* 1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por km rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos
de o valor gasto em reais para realizar este percuso.*/

class carros {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    gastosPercuso(distancia,valorCombustivel) {
        return distancia * this.gastoMedio * valorCombustivel;
    }
}

const meca = new carros('Mercedes', 'Cinza Montanha',1 / 10);

console.log(meca.gastosPercuso(70, 5));
