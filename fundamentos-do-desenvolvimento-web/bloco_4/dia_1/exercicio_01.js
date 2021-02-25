function getRandom(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let a = getRandom();
let b = getRandom()

;


console.log(`Os numeros selecionados aleatórimente foram:${a} e ${b}`)
// Adição
console.log("Adição: ", a + b);

// Subtração
console.log("Subtração: ",a - b);

// Divisão
console.log("Divisão: ",a / b);

// Multiplicação
console.log("Multiplicaçõ: ",a * b);

// Modulo
console.log("Módulo: ",a % b);
