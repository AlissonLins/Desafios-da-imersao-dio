/* Elabore um algoritimo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
escolhida e efetue o calculo adequado. 

Código condição de pagamento: 
- Á vista Debíto, recebe 10% de desconto;  1
- Á vista no Dinheiro ou PIX, recebe 15% de desconto; 2
- Em duas vezes, preço normal de etiqueta sem juros; 3
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 4 */ 

function desconto(valor, descontoAplicado){
    return (valor - (valor * descontoAplicado / 100)); 
}

function aplicarJuros(valor, juros){
    return (valor + (valor * juros / 100));
}

const valorEtiqueta = 100;
const pagamento = 4; /* forma de pagamento */

if (pagamento === 1){
    console.log(desconto(valorEtiqueta, 10));
} else if (pagamento === 2){
    console.log(desconto(valorEtiqueta, 15));
} else if (pagamento === 3){
    console.log(valorEtiqueta ); 
} else{pagamento === 4
    console.log(aplicarJuros(valorEtiqueta, 10));
}
console.log(200 * 0.10);
console.log(10 / 100);