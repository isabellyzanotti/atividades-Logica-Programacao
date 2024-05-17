//(x1 , y1) e (x2 , y2) 

var inX1 = document.getElementById("inX1");
var inY1 = document.getElementById("inY1");
var inX2 = document.getElementById("inX2");
var inY2 = document.getElementById("inY2");
var btnCalcular = document.getElementById("btnCalcular");
var mensagem = document.getElementById("mensagem");

btnCalcular.addEventListener("click", calcularPlanoCartesiano)

function calcularPlanoCartesiano(){


const x1 = Number(inX1.value);
const y1 = Number(inY1.value);
const x2 = Number(inX2.value);
const y2 = Number(inY2.value);

let plano = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));



mensagem.innerHTML = `O resultado é ${plano.toFixed(2)}`;













}



















