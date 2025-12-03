const fs = require('fs');

// LENDO O ARQUIVO
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

// TRANSFORMANDO EM LISTA
const lines = rawInput.split('\n');

// SOMA JOLT TOTAL
let somaJolt = 0;

// LOGICA
for (let i=0; i<lines.length; i++){
    const s = lines[i].toString();
    let maiorJolt = 0;
    for (let j=0; j<s.length-1; j++){
        for (let k=j+1; k<s.length; k++){
            const d1 = lines[i][j];
            const d2 = lines[i][k];
            const resultado = parseInt(d1.toString() + d2.toString());
            if (resultado > maiorJolt){
                maiorJolt = resultado;
            }
        }
    }
    somaJolt += maiorJolt;
}

// SAIDA
console.log(somaJolt);

