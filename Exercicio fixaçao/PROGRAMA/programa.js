var inNome = document.getElementById("inNome");
var btMostrar = document.getElementById("btMostrar");
var btLimpar = document.getElementById("btLimpar");
var mensagem = document.getElementById("mensagem");

btMostrar.addEventListener("click", mostrar)

function mostrar() {

    const nome = inNome.value
    mensagem.innerHTML = `${nome}`

}


btLimpar.addEventListener("click", limpar)

function limpar() {

    const nome = "";
    mensagem.innerHTML = `${nome}`;

}
