/*
Você precisa implementar uma função que recebe um array de objetos representando produtos de um e-commerce e retorna o preço total dos produtos desse array.

Requisitos
A função deve se chamar calculaPrecoTotal.
A função deve receber um array de objetos como parâmetro. Cada objeto representa um produto, e possui as propriedades nome, preco e quantidade.
A função deve retornar o preço total dos produtos desse array. O preço total é calculado multiplicando o preço de cada produto pela sua quantidade e somando os resultados.
Se o array estiver vazio, a função deve retornar zero.

//Exemplo para uso 
const produtos = [
  { nome: "Camiseta", preco: 29.90, quantidade: 2 },
  { nome: "Calça", preco: 99.90, quantidade: 1 },
  { nome: "Tênis", preco: 199.90, quantidade: 1 },
];
const resultado = calculaPrecoTotal(produtos);
console.log(resultado); // deverá exibir 359.70
*/

const produtos = [
    { nome: "Camiseta", preco: 29.90, quantidade: 2 },
    { nome: "Calça", preco: 99.90, quantidade: 1 },
    { nome: "Tênis", preco: 199.90, quantidade: 1 },
  ];
const resultado = calculaPrecoTotal(produtos);

function calculaPrecoTotal(produtos) {
    let precoTotal = 0;

    for(let i = 0; i < produtos.length; i++) {
        const {preco, quantidade} = produtos[i]; //sintaxe de desestrutuação para acessar as propriedades de "preço" e "quantidade"
        precoTotal += preco * quantidade; // tendo resgatados os valores, multiplico um pelo outro
    }

    return precoTotal;
}

console.log(resultado); // deverá exibir 359.70