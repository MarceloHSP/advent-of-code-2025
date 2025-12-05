const fs = require('fs');
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

// Pega só a parte dos intervalos
const blocoIntervalos = rawInput.split('\n\n')[0];
const linhasIntervalos = blocoIntervalos.split('\n');

// Transforma texto em objetos {inicio, fim}
const intervalosBrutos = [];

for (let i = 0; i < linhasIntervalos.length; i++) {
    const linha = linhasIntervalos[i].trim();
    const [strInicio, strFim] = linha.split('-');
    
    intervalosBrutos.push({
        inicio: parseInt(strInicio),
        fim: parseInt(strFim)
    });
}

// Ordenamos pelo 'inicio'. Se empatar, o menor intervalo vem primeiro.
intervalosBrutos.sort((a, b) => a.inicio - b.inicio);

// Fundir os intervalos
const intervalosFundidos = [];
let atual = intervalosBrutos[0]; // Começamos com o primeiro

for (let i = 1; i < intervalosBrutos.length; i++) {
    const proximo = intervalosBrutos[i];

    // VERIFICA SOBREPOSIÇÃO
    // Se o próximo começa ANTES (ou junto) do atual terminar...
    if (proximo.inicio <= atual.fim) {
        // ...nós fundimos! O fim passa a ser o maior entre os dois.
        // Ex: [10-20] e [15-30] vira [10-30]
        atual.fim = Math.max(atual.fim, proximo.fim);
    } else {
        // Se não se tocam, salvamos o 'atual' e pegamos o 'proximo' para ser o novo atual
        intervalosFundidos.push(atual);
        atual = proximo;
    }
}
// Não esquecer de salvar o último que sobrou na mão!
intervalosFundidos.push(atual);

// 4. CALCULAR O TOTAL
let totalIdsFrescos = 0;

console.log("Intervalos após fusão:", intervalosFundidos.length);

for (let i = 0; i < intervalosFundidos.length; i++) {
    const inter = intervalosFundidos[i];
    // Quantidade de números = (fim - inicio) + 1
    // Ex: 10 a 12 (10, 11, 12) = 12 - 10 + 1 = 3
    totalIdsFrescos += (inter.fim - inter.inicio + 1);
}

console.log('Total de IDs frescos:', totalIdsFrescos);