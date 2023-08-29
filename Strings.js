// this is a js file
// Gustavo Gonçalves da Rosa

/*let array
console.log('a. ', array) // foi criado um array sem nenhum elemento, ou seja, está vazio

array = null
console.log('b. ', array) // o array está definido como nulo

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // um array criou uma lista que consta do número 3 até o 13, e utiliza o comando length

let i = 0
console.log('d. ', array[i]) // i é considerado um elemento na posição zero

array[i+1] = 19
console.log('e. ', array) // o i passa a ser o primeiro elemento, fazendo com que o primeiro elemento vire 19

const valor = array[i+6]
console.log('f. ', valor) // o i passar para a posição 6

//---------------------------------------------------------------------------------- 

/*const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // o resultado será determinado como 27 pelo length, e o A, será substituido por I

"Subi num ônibus em Marrocos"*/

//---------------------------------------------------------------------------------- Exercícios de escrita

/*let nome = prompt("Qual seu nome?");
let email = prompt("Qual seu email?");

console.log("O e-mail", email, "Foi cadastrado com sucesso. Seja bem-vinda(o)", nome);



let comidas = ["Hamburguer", "Batata Frita", "Miojo", "Massa", "Arroz e Feijão"];
console.log("Essas são as minhas comidas favoritas", comidas);

comidas[1] = prompt("Qual a sua comida preferidaa?");
console.log(comidas);

let array = [];

let listaDeTarfeas = array;
let tarefa1 = prompt("Me diga sua primeira tarefa");
let tarefa2 = prompt("Me diga sua segunda tarefa");
let tarefa3 = prompt("Me diga sua terceira tarefa");
listaDeTarfeas.push(tarefa1);
listaDeTarfeas.push(tarefa2);
listaDeTarfeas.push(tarefa3);
console.log(listaDeTarfeas);

listaDeTarfeas.splice(Number(prompt("Me diga a tarefa que você já realizou")), 1);

console.log(listaDeTarfeas); */

//----------------------------------------------------------------------------------- Desafios
// 1
const frase = prompt("fale uma frase");

const sim = frase.split(" ");
console.log(sim);

// 2
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

console.log(frutas.indexOf(prompt("fale a fruta que procura").toString()));
console.log(frutas.length, frutas[2].length);
