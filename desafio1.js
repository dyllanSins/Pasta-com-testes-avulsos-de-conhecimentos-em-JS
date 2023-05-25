/*
Desafio de programação em JavaScript
Você precisa implementar uma função que recebe um array de números inteiros e retorna a soma dos números pares desse array.

Requisitos
A função deve se chamar somaNumerosPares.
A função deve receber um array de números inteiros como parâmetro.
A função deve retornar a soma dos números pares do array.
Se o array estiver vazio ou não contiver números pares, a função deve retornar zero.

// Exemplo para Uso.
const numeros = [1, 2, 3, 4, 5, 6];
const resultado = somaNumerosPares(numeros);
console.log(resultado); // deverá exibir 12

*/

const numeros = [1, 2, 3, 4, 5, 6];
const resultado = somaNumerosPares(numeros);

function somaNumerosPares(numeros) {
    let soma = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            soma += numeros[i];
        }
    }
    return soma;
}

console.log(resultado); // deverá exibir 12