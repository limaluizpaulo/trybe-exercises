let n = 9
let asterisco = ["*"]
let espaco = []
let interno =[]
let ultima = [""]
for (let j = 0; j < n/2-1; j++){
    espaco.push(" ")
}
//primeira linha
console.log(espaco.join("")+asterisco.join(""))
for(let i = 0; i < n/2-2; i++){
    espaco.pop()
    interno.push(" ")
    console.log(espaco.join("")+asterisco.join("")+interno.join("")+asterisco.join(""))
    interno.push(" ")
}
//ultima linha
for(let u = 0; u < n; u++){
    ultima.push("*")
}
console.log(ultima.join(""))