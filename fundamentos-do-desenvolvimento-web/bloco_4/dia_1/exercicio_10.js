let custo = 500;
let venda = 650;
let unidadesVendidas = 1000;

let imposto = custo * 0.2;

let total = custo + imposto;

let lucroPorUnidade = venda - total;
let lucroTotal = lucroPorUnidade * unidadesVendidas;

console.log(lucroTotal);