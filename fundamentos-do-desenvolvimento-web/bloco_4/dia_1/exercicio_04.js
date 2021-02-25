function getRandom(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let numero = getRandom();

console.log("numero: ",numero)

if(Math.sign(numero) == 1){
    console.log('positive')
} else if (Math.sign(numero) == -1){
    console.log('negative')
} else {
    console.log('zero')
}