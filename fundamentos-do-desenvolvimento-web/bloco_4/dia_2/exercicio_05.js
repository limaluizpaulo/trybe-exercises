let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var maior = 0;

for(let i = 0; i < numbers.length; i++){

    for(let j = 0; j < numbers.length; j++){

        if(numbers[i] > numbers[j] && numbers[i] > maior){
            maior = numbers[i]
        }

    }
    
}

console.log(maior)