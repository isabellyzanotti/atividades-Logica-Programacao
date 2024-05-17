var inMinuto = document.getElementById("inMinuto");
var inTempo = document.getElementById("inTempo");
var btValor = document.getElementById("btValor");
var outMsg = document.getElementById("outMsg");



btValor.addEventListener("click", calcular)


function calcular() {

    let minuto = parseFloat(inMinuto.value);
    let tempo = Number(inTempo.value);

    let total = Math.ceil(tempo/15) * minuto;

    outMsg.innerHTML = `Valor a pagar R$: ${total.toFixed(2)}`;

}


