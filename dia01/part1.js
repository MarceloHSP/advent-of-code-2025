const fs = require('fs');

// 1. LENDO O ARQUIVO
// O 'utf-8' é para ele entender acentos e texto normal
// O 'trim()' remove aquele espaço em branco vazio que sobra na última linha
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

// 2. TRANSFORMANDO EM LISTA
// O split('\n') "corta" o texto toda vez que acha uma quebra de linha
const lines = rawInput.split('\n');

// Só para você conferir se leu certo:
console.log('Total de linhas lidas:', lines.length);
console.log('Primeira linha:', lines[0]);
console.log('-------------------');

// --- SUA LÓGICA COMEÇA AQUI ---

