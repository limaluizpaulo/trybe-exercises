let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
let maior = "A"

for( key in nomes){
    if(nomes[key].length > maior.length){
        maior = nomes[key]
    }
}

console.log(maior)

