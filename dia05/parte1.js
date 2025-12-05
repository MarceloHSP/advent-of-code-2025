// --- ENTRADA

// Lê o conteúdo do arquivo 'input.txt' e armazena na variável 'rawInput'
const fs = require('fs');
const rawInput = fs.readFileSync('./input.txt', 'utf-8').trim();

// Separa a entrada que é intervalo da que é número
const partes = rawInput.split('\n\n');

// Processa os intervalos
const blocoIntervalos = partes[0];
const linhasIntervalos = blocoIntervalos.split('\n');

const listaIntervalos = [];

for (let i = 0; i < linhasIntervalos.length; i++) {
    const linha = linhasIntervalos[i].trim();
    
    const [inicio, fim] = linha.split('-'); 
    
    listaIntervalos.push({
        inicio: parseInt(inicio),
        fim: parseInt(fim)
    });
}

// Processa os números
const blocoNumeros = partes[1];
const linhasNumeros = blocoNumeros.split('\n');

const listaNumeros = [];

for (let i = 0; i < linhasNumeros.length; i++) {
    const linha = linhasNumeros[i].trim();
    listaNumeros.push(parseInt(linha));
}

// --- LÓGICA DO PROGRAMA

// Contador de alimentos frescos
let contadorFrescos = 0;

// Verifica cada número
for (let i = 0; i < listaNumeros.length; i++) {
    const numero = listaNumeros[i];
    let dentroDeUmIntervalo = false;

    for (let j = 0; j < listaIntervalos.length; j++) {
        const intervalo = listaIntervalos[j];

        if (numero >= intervalo.inicio && numero <= intervalo.fim) {
            dentroDeUmIntervalo = true;
            break;
        }
    }
    if (dentroDeUmIntervalo) {
        contadorFrescos++;
    }
}

// --- SAÍDA

console.log("Quantidade de alimentos frescos:", contadorFrescos);