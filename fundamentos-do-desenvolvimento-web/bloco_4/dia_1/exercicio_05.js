function getRandom(min = 0, max = 120) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let a = getRandom()
let b = getRandom()
let c = getRandom()
let soma = a + b + c
let triangulo = soma <= 180

console.log(`
  primeiro ângulo: ${a}
  segundo ângulo: ${b}
  terceiro ângulo: ${c}

  soma dos três angulos: ${soma}

é um triângulo? ${triangulo}

`)
