/*
filter é como se fosse literalmente um FILTRO, criando um novo array com os itens que foram filtrados

array.filter(callback, thisArg)

ex.
const frutas = ['maçã fuji', 'maçã verde', 'laranja', 'abacaxi'];
frutas.filter((fruta) => fruta.includes('maçã'))
// retorno: ['maçã fuji', 'maçã verde'];

*/

function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
    // return item % 2 !== 0; retorna numeros impares
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));