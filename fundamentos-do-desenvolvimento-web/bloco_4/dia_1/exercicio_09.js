function getRandom(min = 0, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let num1 = getRandom()
let num2 = getRandom()
let num3 = getRandom()

console.log(num1,num2,num3)

if(num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1){
    console.log("true")
} else {
    console.log("false")
}