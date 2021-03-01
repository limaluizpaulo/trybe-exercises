let n = 5
let asterisco = ["*"]
let espaco = []

for(let j = 0; j < n; j++){
    espaco.push(" ")
}

for(let j = 0; j < n/2; j++){
    console.log(espaco.join("")+asterisco.join(""))
    asterisco.push("**")
    espaco.pop()  
}