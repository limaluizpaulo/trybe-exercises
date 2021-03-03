let numbers = [2, 3, 2, 5, 8, 2, 3]
let replay = []
let countBase = 1

for (num in numbers){
    let count = 1;

   for (index in numbers){
    
    

        if( numbers[num] == numbers[index]) {
        count++
        numbers.splice(index,1)
    }
    if(count > countBase){
        maior = numbers[num]
    }
}


}

console.log(maior)