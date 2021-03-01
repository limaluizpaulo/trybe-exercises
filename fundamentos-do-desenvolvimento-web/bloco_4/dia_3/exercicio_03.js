let n = 5
let asterisco = []
let espaco = []

for (let j = 0; j < n; j++){
    espaco.push(" ")
}

for( let i = 0; i < n; i++){
espaco.pop()
asterisco.push("*")
console.log(espaco.join(""),asterisco.join(""))
}