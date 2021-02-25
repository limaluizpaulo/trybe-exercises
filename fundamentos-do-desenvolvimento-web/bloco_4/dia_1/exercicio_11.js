let bruto = 3000;
let aliquotaINSS, valorAliquota, deduzido;
let parcelaDeduzir, valorIR, aliquotaIR, liquido;

// Calculo do INSS
if (bruto <= 1556.94) {
    aliquotaINSS = 0.08;
    valorAliquota = bruto * aliquotaINSS;
} else if (bruto > 1556.94 && bruto <= 2594.92) {
    aliquotaINSS = 0.09;
    valorAliquota = bruto * aliquotaINSS;
} else if (bruto > 2594.92 && bruto <= 5189.82) {
    aliquotaINSS = 0.11;
    valorAliquota = bruto * aliquotaINSS;
} else {
    aliquotaINSS = 0.11;
    valorAliquota = 570.88;
}

deduzido = bruto -valorAliquota;

// Calculo do Imposto de Renda
if (deduzido <= 1903.98) {
    aliquotaIR = 0;
    parcelaDeduzir = 0;
    valorIR = 0;
} else if (deduzido > 1903.98 && deduzido <= 2826.65) {
    aliquotaIR = 0.075;
    parcelaDeduzir = 142.80;
    valorIR = (deduzido * aliquotaIR) - parcelaDeduzir;
} else if (deduzido > 2826.65 && deduzido <= 3751.05) {
    aliquotaIR = 0.15;
    parcelaDeduzir = 354.80;
    valorIR = (deduzido * aliquotaIR) - parcelaDeduzir;
} else if (deduzido > 3751.05 && deduzido <= 4664.68) {
    aliquotaIR = 0.225;
    parcelaDeduzir = 636.13;
    valorIR = (deduzido * aliquotaIR) - parcelaDeduzir;
} else {
    aliquotaIR = 0.275;
    parcelaDeduzir = 869.36;
    valorIR = (deduzido * aliquotaIR) - parcelaDeduzir;
}

liquido = deduzido - valorIR;

console.log('Com o salario bruto R$' + bruto + ', o salário líquido é de R$' + liquido + '.');