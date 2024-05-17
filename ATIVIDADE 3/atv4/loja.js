/*4) Desenvolva uma aplicação para uma loja, a qual leia o preço de um produto e informe as opções de pagamento da loja (à vista ou parcelado em 3 vezes no cartão de crédito). Calcule e informe ao usuário o valor para pagamento à vista com 10% de desconto e o valor das parcelas para pagamento em 3 vezes no cartão.

Exemplo:

Preço do produto: R$60.00

Pagamento À Vista: R$54.00

Pagamento no Cartão em 3 Parcelas de: R$20.00*/

var inProduto = document.getElementById("inProduto");
var btnCalcular = document.getElementById("btnCalcular");
var mensagem = document.getElementById("mensagem");

btnCalcular.addEventListener("click", pagamentoLoja)

function pagamentoLoja(){

const produto = Number(inProduto.value);
const pgAvista = produto - (produto*0.10);
const pgCartao = produto/3;



mensagem.innerHTML = `O preço do produto é R$: ${produto} ;---- O pagamento a vista é de R$: ${pgAvista};------
O pagamento no cartão dividido em 3x é de R$: ${pgCartao.toFixed(2)}`;





}







