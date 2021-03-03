let arr = [2, 3, 6, 7, 10, 1]

for (let num = 0; num < arr.length-1; num ++){
    let troca 
    if(arr[num] > arr[num+1]){
       troca = arr[num];
       arr[num] = arr[num+1]
       arr[num+1] = troca;  
    }  
}
console.log(arr[arr.length-1])

