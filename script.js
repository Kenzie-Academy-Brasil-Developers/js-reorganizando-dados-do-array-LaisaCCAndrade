//Desenvolva sua lógica aqui utilizando o método de array sort

// Você deverá criar a sua lógica no arquivo script.js e chegar aos seguintes resultados:

// Exercício 1:

// Resultado: [5, 20, 53, 62, 153, 200, 428, 875]

// Exercício 2:

// Resultado: [875, 428, 200, 153, 62, 53, 20, 5]

// Exercício 3:

// Resultado: [“Amanda”, “Carlos”, “Matheus”, “Patrick”, “Samuel”, “Yan”]

// Exercicio 4:

// Resultado: 0: {nomeProduto: 'Calça', preco: 120}, 1: {nomeProduto: 'Tênis', preco: 180}, 2: {nomeProduto: 'Moletom', preco: 250},


//1) Dado o array [200, 153, 875, 53, 20, 62, 428, 5], ordene os números em ordem crescente.
const numbers = [200, 153, 875, 53, 20, 62, 428, 5];

console.log(numbers.sort((a, b) => (a - b))); 

//2) Utilizando o array do exemplo anterior, ordene os números em ordem decrescente.

console.log(numbers.sort((a, b) => (b - a))); 

//3) Dado o array ['Matheus', 'Samuel', 'Bruna', 'Patrick', 'Yan', 'Amanda', 'Carlos'], ordene os nomes em ordem alfabética
const names = [
  'Matheus',
  'Samuel',
  'Bruna',
  'Patrick',
  'Yan',
  'Amanda',
  'Carlos',
];

console.log(names.sort())

//DESAFIO
//4) Dado um objeto "loja", acesse a propriedade "produtos", filtre apenas os elementos que possuem o preço maior que 100 e ordene em ordem crescente.
const loja = {
  nome: 'Kenzie Store',
  local: 'Brasil',
  produtos: [
    {
      nomeProduto: 'Moletom',
      preco: 250,
    },
    {
      nomeProduto: 'Casaco',
      preco: 100,
    },
    {
      nomeProduto: 'Tênis',
      preco: 180,
    },
    {
      nomeProduto: 'Regata',
      preco: 50,
    },
    {
      nomeProduto: 'Calça',
      preco: 120,
    },
  ],
};

const filtrar = (produto) => {

  const data = produto.produtos
  const filtrando = data.map((element) => element.preco).filter((element) => element > 100).sort((a, b) => a - b)
  return filtrando
  
}
console.log(filtrar(loja));