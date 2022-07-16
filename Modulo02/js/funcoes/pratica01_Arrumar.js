const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Maria',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Anderson',
        nota: 6,
        turma: '2C',
    },
    {
        nome: 'Anderson',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.lenght; i++) {
        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 2));