function getRandom(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let a = getRandom();
let b = getRandom();

if(a>b){
    console.log(`o primeiro valor, ${a} é maior que ${b}`)
} else {
    console.log(`o segundo valor, ${b} é maior que ${a}`)
}