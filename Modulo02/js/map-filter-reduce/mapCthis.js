/*
map não renomeia o array
ele Cria um NOVO ARRAY

array.map(callback thisArg)  callback é a função a ser execudade em cada elemento, thisArg é opcional

forEach != map porem tem a mesma sintaxe / map traz um novo, forEach precisa de uma nova CONST

*/

const MACA = {
    value: 2,
}

const LARANJA = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const NUMS = [1, 2];

console.log('this -> maçã', mapComThis(NUMS, MACA));

console.log('this -> laranja', mapComThis(NUMS, LARANJA));