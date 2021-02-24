let a = 3;
let b = 9;
let c = 9;

if(a > b && a > c){
    console.log(`o primeiro valor ${a} é o maior`)
} else if (b > a && b > c) {
    console.log(`o segundo valor ${b} é o maior`)
} else if (c > a && c > b){
    console.log(`o terceiro valor ${c} é o maior`)
} else { 
    console.log(`dois ou mais valores são iguais!`)
}