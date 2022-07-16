/*
reduce diferente dos outros 2, ele não retorna um novo array
ele executa uma função e retorna um valor unico, indepentende do que foi enviado

array.reduce(callbackFn, initialValue)

*/

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    }, 0);
}

const arr = [1,2];

console.log(somaNumeros(arr));