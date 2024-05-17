var inPreco = document.getElementById("inPreco");
var inMedicamento = document.getElementById("inMedicamento");
var btMostrar = document.getElementById("btMostrar");
var outMsg = document.getElementById("outMsg");


window.onload = inMedicamento.focus();

btMostrar.addEventListener("click", mostrar)

function mostrar(){

let preco = Math.trunc(inPreco.value);
let remedio = inMedicamento.value;

let promocao = preco*2;

outMsg.innerHTML = ` <br> <br> Promoção de ${remedio} <br> leve 2 por apenas ${promocao},00`;


}






















