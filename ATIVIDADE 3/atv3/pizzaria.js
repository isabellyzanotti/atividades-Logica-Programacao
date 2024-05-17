/*2) Implemente um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cada cliente.

Exemplo:

Valor da Conta R$: 90,00

Número de Clientes: 3

Valor por cliente R$: 30.00*/

var inConta = document.getElementById("inConta");
var inQtdPessoas = document.getElementById("inQtdPessoas");
var btCalcular = document.getElementById("btCalcular");
var mensagem = document.getElementById("mensagem");

btCalcular.addEventListener("click", valorPizzaria)

function valorPizzaria(){

const conta = Number(inConta.value);
const qtdPessoas = Number(inQtdPessoas.value);
const dividir = conta / qtdPessoas;


mensagem.innerHTML = `O valor a cada um pagar é de R$: ${dividir} `;



}




