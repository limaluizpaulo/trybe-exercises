const caixaTexto = document.querySelector('.caixa-texto');
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');
const flexy = document.querySelector('.flexy-s');

function trocaTextoA () {
  caixaUm.innerText = caixaTexto.value;
}
function trocaTextoB () {
  caixaDois.innerText = caixaTexto.value;
}
//Crie seu event listener abaixo:
caixaTexto.addEventListener('input', trocaTextoA)

flexy.addEventListener('click', trocaTextoB)