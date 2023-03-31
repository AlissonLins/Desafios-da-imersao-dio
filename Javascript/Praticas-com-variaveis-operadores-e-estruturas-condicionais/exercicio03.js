/* Elabore um algoritimo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
escolhida e efetue o calculo adequado. 

Código condição de pagamento: 
- Á vista Debíto, recebe 10% de desconto;  1
- Á vista no Dinheiro ou PIX, recebe 15% de desconto; 2
- Em duas vezes, preço normal de etiqueta sem juros; 3
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; 4 */ 

const valorEtiqueta = 100;
const pagamento = 4; /* forma de pagamento */

if (pagamento === 1){
    console.log(valorEtiqueta - (valorEtiqueta * 0.1 ));
} else if (pagamento === 2){
    console.log(valorEtiqueta - (valorEtiqueta * 0.15));
} else if (pagamento === 3){
    console.log(valorEtiqueta / 2); /* Já mostrando o valor da parcela*/
} else{pagamento === 4
    console.log(valorEtiqueta + (valorEtiqueta * 0.1 ));
}