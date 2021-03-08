//Crie seu código abaixo dessa linha:
const caixaTexto = document.querySelector('.caixa-texto');
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');
const botao1 = document.querySelector('.botao1');
const botao2 = document.querySelector('.botao2');

botao1.addEventListener('mouseover', mudaCor1)

botao1.addEventListener('click', mudaTexto1)

botao2.addEventListener('mouseover', mudaCor2)

botao2.addEventListener('click', mudaTexto2)

function mudaCor1 () {
  caixaUm.style.backgroundColor = 'green';
}

function mudaCor2 () {
  caixaDois.style.backgroundColor = 'green';
}

function mudaTexto1 () {
  caixaUm.innerText = caixaTexto.value;
}

function mudaTexto2 () {
  caixaDois.innerText = caixaTexto.value;
}

