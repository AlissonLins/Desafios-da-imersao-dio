// Crie um programa que dado umn número imprima a sua tabuada.

// Criando um array vazio para armazenar a tabuada.
let tabuada = [];

// Loop para preencher o array com os resultados da tabuada de 1 a 10
for (let i = 1; i<= 10; i++) {
    // Cria um array vazio para armazenar os resultados da tabuada do número atual (i)
    let resultado = [];
    
    // Loop para calcular os resultados da tabuada do número atual (i)
    for (let j = 1;  j <= 10; j++) {
        resultado.push(i * j); // Adiciona o resultado da multiplicação no array de resultados
    }

    // Adiciona o array de resultados no array da tabuada
    tabuada.push(resultado);
}

// Loop para imprimir a tabuada
for (let i = 0; i < tabuada.length; i++) {
    // Imprime o número atual seguido dos resultados da tabuada correspondente
    console.log(`${i+1}: ${tabuada[i].join(', ')}`);
}