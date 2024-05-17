/*1) Elabore um programa que leia um número. Calcule e informe os seus vizinhos, ou seja, o número anterior e o posterior.

Exemplo:

Para a entrada do número 15

Mostrar seus vizinhos: 14 e 16*/


var inNumero = document.getElementById("inNumero");
var btnMostrar = document.getElementById("btnMostrar");
var mensagem = document.getElementById("mensagem");

btnMostrar.addEventListener("click", calcular)

function calcular(){

var numero = Number(inNumero.value);
const sucessor = numero+1;
const antecessor = numero-1;


mensagem.innerHTML = `O sucessor é ${sucessor} e o antecessor é ${antecessor} `




}





















