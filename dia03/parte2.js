const fs = require('fs');

// LENDO O ARQUIVO
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

// TRANSFORMANDO EM LISTA
const lines = rawInput.split('\n');

// SOMA JOLT TOTAL
let somaJolt = 0;

// LOGICA
for (let i=0; i<lines.length; i++){
    const linha = lines[i].trim();
    let maiorJolt = "";
    let indice = -1;
    for (let j=12; j>0; j--){
        let maiorDigito = -1;
        for (let k=indice+1; k<=lines[i].length-j; k++){
            let indice = 0;
            const digito = parseInt(linha[k]);
            if (digito > maiorDigito){
                maiorDigito = digito;
                indiceTemporario = k;
                if (digito === 9){
                    break;
                }
            }
        }
        maiorJolt += maiorDigito;
        indice = indiceTemporario;
    }
    somaJolt += parseInt(maiorJolt);
}

// SAIDA
console.log(somaJolt);
