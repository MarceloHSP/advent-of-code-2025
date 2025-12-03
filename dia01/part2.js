const fs = require('fs');

// LENDO O ARQUIVO
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

// TRANSFORMANDO EM LISTA
const lines = rawInput.split('\n');

// LÓGICA DO PROBLEMA
let posicaoAtual = 50; // O enunciado diz que começa no 50
let contadorZeros = 0; // Quantas vezes parou no 0

// Passando linha por linha
for (let i = 0; i < lines.length; i++) {
    const linha = lines[i];
    
    // 1. Separar a Letra do Número
    const direcao = linha[0]; // Pega a primeira letra ('R' ou 'L')
    const valor = parseInt(linha.substring(1)); // Pega do 2º caractere até o fim e vira número
    
    for (let passo = 0; passo < valor; passo++) {
        
        if (direcao === 'R') {
            posicaoAtual++; // Anda 1 pra direita
            if (posicaoAtual > 99) {
                posicaoAtual = 0; // Deu a volta (99 -> 0)
            }
        } else if (direcao === 'L') {
            posicaoAtual--; // Anda 1 pra esquerda
            if (posicaoAtual < 0) {
                posicaoAtual = 99; // Deu a volta (0 -> 99)
            }
        }

        // Verifica o zero a cada "clique" do cofre
        if (posicaoAtual === 0) {
            contadorZeros++;
        }
    }
}

console.log('-------------------');
console.log('RESPOSTA FINAL:', contadorZeros);
