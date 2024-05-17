var inNumero1 = document.getElementById("inNumero1");
var inNumero2 = document.getElementById("inNumero2");
var inNumero3 = document.getElementById("inNumero3");
var inPeso1 = document.getElementById("inPeso1");
var inPeso2 = document.getElementById("inPeso2");
var inPeso3 = document.getElementById("inPeso3");
var btCalcular = document.getElementById("btCalcular");
var mensagem = document.getElementById("mensagem");

btCalcular.addEventListener("click", calcularMedia)

function calcularMedia(){

var numero1 = Number(inNumero1.value);
var numero2 = Number(inNumero2.value);
var numero3 = Number(inNumero3.value);

var peso1 = Number(inPeso1.value);
var peso2 = Number(inPeso2.value);
var peso3 = Number(inPeso3.value);

var soma = peso1+peso2+peso3;


var mediaPonderada = ((numero1*peso1) + (numero2*peso2) + (numero3*peso3))/ soma;

mensagem.innerHTML = `O resultado da média ponderada é: ${mediaPonderada.toFixed(2)}`


console.log(mediaPonderada)
}





