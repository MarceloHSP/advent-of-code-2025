const fs = require('fs');
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

const grid = rawInput.split('\n').map(linha => linha.split('')); // grid[y][x]

const altura = grid.length;       // Número de linhas (Y)
const largura = grid[0].length;   // Número de colunas (X)

// Lista de coordenadas relativas (dy, dx) para os 8 vizinhos
const direcoes = [
    [-1, -1], [-1, 0], [-1, 1], // Linha de cima (Esquerda, Meio, Direita)
    [ 0, -1],          [ 0, 1], // Mesma linha (Esquerda, Direita)
    [ 1, -1], [ 1, 0], [ 1, 1]  // Linha de baixo (Esquerda, Meio, Direita)
];

// Contador de rolos que são pegues pela empilhadeira
let contadorRolos = 0;

// Booleana para indicar se ainda tem os rolos possiveis de pegar
let temRolos = true;

// Loop principal que percorre cada célula do grid

while (temRolos) {
    temRolos = false;
    // Lista para guardar as coordenadas de quem vai ser removido NESTA rodada
    const candidatosRemocao = [];
    for (let y = 0; y < altura; y++){
        for (let x = 0; x < largura; x++){
            if (grid[y][x] == '@') {
                // Contador de vizinhos '@'
                let vizinhosArroba = 0;

                // Loop pequeno que roda 8 vezes (uma pra cada direção)
                for (let i = 0; i < direcoes.length; i++) {
                    const dy = direcoes[i][0];
                    const dx = direcoes[i][1];

                    // Calcula a posição do vizinho
                    const vizinhoY = y + dy;
                    const vizinhoX = x + dx;

                    // Verifica se o vizinho não caiu fora do mapa (Segfault prevention)
                    if (vizinhoY >= 0 && vizinhoY < altura && 
                        vizinhoX >= 0 && vizinhoX < largura) {
                        
                        // Se está dentro do mapa, podemos olhar
                        if (grid[vizinhoY][vizinhoX] === '@') {
                            vizinhosArroba++;
                        }
                    }
                }
                if (vizinhosArroba < 4){
                    contadorRolos++;
                    temRolos = true;
                    candidatosRemocao.push({ y, x });
                }
            }
        }
    }
    // Remover os rolos que foram pegos nesta rodada
    if (candidatosRemocao.length > 0) { 
        for (const coord of candidatosRemocao) {
            grid[coord.y][coord.x] = '.'; // Marca como vazio
        }
    }
}
// SAIDA
console.log(contadorRolos);