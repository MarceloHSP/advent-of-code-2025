const fs = require('fs');

// LENDO O ARQUIVO
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

// TRANSFORMANDO EM LISTA
const ranges = rawInput.split(',');

// SOMA DOS INVALIDOS
let somaInvalidos = 0;

// LOGICA DO PROGRAMA
for (let i = 0; i < ranges.length; i++) {
    const intervaloString = ranges[i];
    const partes = intervaloString.split('-');
    const inicio = parseInt(partes[0]);
    const fim = parseInt(partes[1]);
    for (let n = inicio; n < fim; n++) {
        const s = n.toString();
        const metade = s.length/2;
        const s1 = s.substring(0,metade);
        const s2 = s.substring(metade);
        if (s1 === s2) {
            somaInvalidos += n;
        }
    }
}

// SAIDA
console.log ("Soma dos Invalidos:",somaInvalidos);
