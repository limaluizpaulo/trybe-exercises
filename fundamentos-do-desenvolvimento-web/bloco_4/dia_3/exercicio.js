function getRandom(min = 1, max = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

let n = getRandom();

let row = '*' * n

for(n;n>1;n--){
    console.log(row)
}