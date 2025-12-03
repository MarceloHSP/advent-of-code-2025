const fs = require('fs');

// 1. LENDO O ARQUIVO
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

// 2. TRANSFORMANDO EM LISTA
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
    
    // 2. Aplicar a Rotação
    if (direcao === 'R') {
        // Direita = Soma
        posicaoAtual = (posicaoAtual + valor) % 100;
    } else if (direcao === 'L') {
        // Esquerda = Subtrai
        posicaoAtual = (posicaoAtual - valor) % 100;
        
        // Transformar negativo no positivo equivalente
        if (posicaoAtual < 0) {
            posicaoAtual += 100;
        }
    }

    // 3. Verificar se caiu no zero
    if (posicaoAtual === 0) {
        contadorZeros++;
    }
}

console.log('-------------------');
console.log('RESPOSTA FINAL:', contadorZeros);
