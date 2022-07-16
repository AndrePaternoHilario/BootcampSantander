/*
O QUE É O 'this.'

        contexto      ->      referencia

em um objeto (método) -> Próprio objeto dono do método
              sozinha -> Objeto global (em navegadores, window)
               função -> Objeto global
               evento -> elemento que recebeu o evento


*/

// Fora da função
console.log(this); 


// Dentro da função
// Função auto-invocavel
(function () {
        console.log(this);
})();

// Dentro de um Objeto (Método)
const PESSOA = {
        firstName: 'André',
        lastName: 'Hilário',
        getFullName: function() {
                console.log(`${this.firstName} ${this.lastName}`);
        },
};

// Em um evento no HTML

<!DOCTYPE html>
<html lang="pt-BR">
        <head>
                <title>Document</title>
        </head>
        <body>
                <buton id="my-bnt" onclick="console.log(this)"> Click me! </buton>
        </body>
</html>
