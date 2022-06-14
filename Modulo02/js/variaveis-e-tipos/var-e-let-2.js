var firstName = 'João';
let lastName = 'Souza';

if(firstName === 'João') {
    let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    lastName = 'Silva'; // reatribuindo a variavel dentro do Escopo
                        // hoje em dia deve em js é melhor declarar variaveis em let

    console.log(lastName);
}

console.log(firstName, lastName);