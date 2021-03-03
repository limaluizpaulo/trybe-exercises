let verificaPalindrome = (palavra) => {
    let palindromo = true
    let z = palavra.length-1;
    for( let a = 0; a <= palavra.length-1; a++){

            if(palavra[a] != palavra[z]){
                console.log(palavra[a],palavra[z])
                palindromo = false
            }
            z = z -1
    }
    console.log(palindromo)
} 

verificaPalindrome("subi no on ibus")