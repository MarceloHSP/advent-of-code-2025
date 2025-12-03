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
        for (tamanho = 1; tamanho <= s.length/2; tamanho++){
            if (s.length % tamanho === 0){
                const padrao = s.substring(0, tamanho); //oq vai ser repetido
                const repeticoes = s.length/tamanho; //qtd de repeticoes
                if (padrao.repeat(repeticoes) === s){
                    somaInvalidos += n;
                    break;
                }
            }
        }
    }
}
// SAIDA
console.log ("Soma dos Invalidos:",somaInvalidos);
