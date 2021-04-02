// for
// while
// do while

// for-in

const pessoa = {
    nome: "Romulo",
    idade: 36
}

for (let chave in pessoa) {
    console.log (chave,pessoa['nome']);
}

const cores = ['vermelho', 'azul', 'verde', 'amarelo'];

for (let indice in cores) {
    console.log(indice,cores [indice]);
}