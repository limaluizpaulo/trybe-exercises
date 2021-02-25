function getRandom(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let a = getRandom();
let b = getRandom();
let c = getRandom();

console.log(`Valores: a: ${a}, b: ${b}, c: ${c}.`)

if(a > b && a > c){
    console.log(`o primeiro valor ${a} é o maior`)
} else if (b > a && b > c) {
    console.log(`o segundo valor ${b} é o maior`)
} else if (c > a && c > b){
    console.log(`o terceiro valor ${c} é o maior`)
} else { 
    console.log(`dois ou mais valores são iguais!`)
}