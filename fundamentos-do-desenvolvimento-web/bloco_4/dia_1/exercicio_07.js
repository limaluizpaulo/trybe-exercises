function getRandom(min = -10, max = 110) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let nota = getRandom()

console.log(nota)

if (nota >= 90 && nota <= 100){
    console.log("A")
} else if (nota >= 80 && nota < 90){
    console.log("B")
} else if (nota >= 70 && nota < 80){
    console.log("C")
} else if (nota >= 60 && nota < 70){
    console.log("D")
} else if (nota >= 50 && nota < 60){
    console.log("E")
} else if (nota < 50 && nota >= 0){
    console.log("F")
} else {
    console.log("Nota Inválida, informe um valor entre 0 e 100")
}