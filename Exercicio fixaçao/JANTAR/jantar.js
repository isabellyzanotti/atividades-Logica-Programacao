var inJantar = document.getElementById("inJantar");
var btCalcular = document.getElementById("btCalcular");
var mensagem = document.getElementById("mensagem");

btCalcular.addEventListener("click", calcularJantar)

function calcularJantar(){

const valor = Number(inJantar.value);
const taxaGarcon = valor * 0.10;
const total = valor + taxaGarcon;



mensagem.innerHTML = `O valor do seu jantar é ${total.toFixed(2)} e a taxa do Garçom é o valor de: ${taxaGarcon.toFixed(2)}`;



}
