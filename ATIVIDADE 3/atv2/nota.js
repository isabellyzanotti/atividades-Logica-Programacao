/*3) Desenvolva um programa que leia 2 notas de um aluno em uma disciplina. Calcule e informe a média das notas do aluno na disciplina.

Exemplo:

1ª Nota: 7.0

2ª Nota: 8.0

Média da Notas: 7.5*/

var inNota1 = document.getElementById("inNota1");
var inNota2 = document.getElementById("inNota2");
var btnCalcular = document.getElementById("btnCalcular");
var mensagem = document.getElementById("mensagem");

btnCalcular.addEventListener("click", calcularMedia)

function calcularMedia(){

let numero1 = Number(inNota1.value);
let numero2 = Number(inNota2.value);
let media = (numero1+numero2)/2


mensagem.innerHTML = `A média das suas notas é: ${media} `;




}







