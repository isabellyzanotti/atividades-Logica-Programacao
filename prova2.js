const inNumero1 = document.getElementById("inNumero1");
const inNumero2 = document.getElementById("inNumero2");
const inNumero3 = document.getElementById("inNumero3");
const btCalcular = document.getElementById("btCalcular");
const OutMensagem = document.getElementById("OutMensagem");

btCalcular.addEventListener("click", CalcularMDC);
function CalcularMDC() {

    var numero1 = Number(inNumero1.value);
    var numero2 = Number(inNumero2.value);
    var numero3 = Number(inNumero3.value);
    var menor;

    OutMensagem.innerHTML = "";

    if (numero1 == "" || numero1 < 0) {
        alert("Por favor, preencha o campo 1 corretamente!");
        inNumero1.focus();

    } else if (numero2 == "" || numero2 < 0) {
        alert("Por favor, preencha o campo 2 corretamente!");
        inNumero2.focus();

    } else if (numero3 == "" || numero3 < 0) {
        alert("Por favor, preencha o campo 3 corretamente!");
        inNumero3.focus();

    } else {

        if (numero1 < numero2 && numero1 < numero3) {
            menor = numero1;
        } else if (numero2 < numero3) {
            menor = numero2;

        } else {
            menor = numero3;
        }
        for (let i = menor; (numero1 % menor !== 0) || (numero2 % menor !== 0) || (numero3 % menor !== 0); menor--) {
        }

        OutMensagem.innerHTML = `MDC (${numero1},${numero2},${numero3}) = ${menor} `;

        if (menor == 1) {
            OutMensagem.innerHTML = `MDC (${numero1},${numero2},${numero3}) = ${menor}. São primos entre si`;
        }


    }

}
