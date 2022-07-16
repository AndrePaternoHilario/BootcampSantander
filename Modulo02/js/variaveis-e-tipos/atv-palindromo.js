/*
Atividade 1
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/

//solução 1 = ama, ana, ovo
function verificaPalindromo(string) {
    if(!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
}

// console.log(verificaPalindromo("ovo"));

//solução 2 = abba, abccba
function verificaPalindromo2(string) {
    if(!string) return "String inexistente";

    for(let i = 0; i < string.lenght / 2; i++) {
        if(string[i] !== string[string.lenght - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"));