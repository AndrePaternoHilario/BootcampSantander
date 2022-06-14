var a = 1;
var b = 2;

if(a === 1) {
    var a = 11;
    let b = 22; // let tem ESCOPO DE BLOCO, só funciona dentro de um bloco.

    console.log(a); // console.log = echo
    console.log(b);
}

console.log(a);
console.log(b);