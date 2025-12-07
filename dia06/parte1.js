// --- ENTRADA

// Lê o conteúdo do arquivo 'input.txt' e armazena na variável 'rawInput'
const fs = require('fs');
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

// Divide o conteúdo em linhas
const linhas = rawInput.split('\n');

// Remove linhas vazias finais se houver
if (linhas[linhas.length-1].trim() === '') linhas.pop();

// Lê a entrada como se fosse matriz
const grid = rawInput.split('\n').map(line => line.split(''));
const altura = grid.length;     // Quantas linhas tem (Y)
const largura = grid[0].length; // Quantas colunas tem (X)

// --- LÓGICA DO PROBLEMA
let somaTotal = 0;

// Pegar o último elemento da coluna
for (let x = 0; x < largura; x++) {
    const operacao = grid[altura - 1][x];
    // Se for soma, soma toda a coluna
    if (operacao === '+') {
        let somaColuna = 0;
        for (let y = 0; y < altura - 1; y++) {
            somaColuna += parseInt(grid[y][x], 10);
        }
        somaTotal += somaColuna;
    }
    // Se for multiplicação, multiplica toda a coluna
    if (operacao === '*') {
        let produtoColuna = 1;    
        for (let y = 0; y < altura - 1; y++) {
            produtoColuna *= parseInt(grid[y][x], 10);
        }
        somaTotal += produtoColuna;
    }
}

// --- SAÍDA
console.log(somaTotal);