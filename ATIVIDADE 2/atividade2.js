var inDespesa = document.getElementById("inDespesa");
var inLazer = document.getElementById("inLazer");
var inNegociacao = document.getElementById("inNegociacao");
var btCalcular = document.getElementById("btCalcular");
var mensagem = document.getElementById("mensagem");


btCalcular.addEventListener("click" , calcularDespesa)

function calcularDespesa(){

const despesa = Number(inDespesa.value);
const lazer = Number(inLazer.value);
const negociacao = Number(inNegociacao.value);
const despesaTotal = despesa+lazer+negociacao;


mensagem.innerHTML = `O valor total de suas despesas é: ${despesaTotal} e o salário necessário para quitar as díidas e sobrar é de 2000`


/*valores fictícios para testar: 
input 1: 300
input 2: 300
input 3: 210


*/










}












