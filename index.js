// Estudo de Logica da Programacao
// Bootcamp Logica da Programacao na Dio
// Autor do desafio: Felipe Aguiar
// Projeto desenvolvido por: Antonio Azevedo (aluno)
// Criado em 02/10/2023

// Variaveis
let name = "Antonio"
let nivelXp = 1500
let nivel;

// Laço de repeticao com estrutura condicional
for (let i = 0; i < 7; i++) {
    // Condicao para determinar o nivel com base na XP
    if (nivelXp < 1000) {
        nivel = "Ferro"
    } else if (nivelXp > 1000 && nivelXp < 2001) {
        nivel = "Bronze"
    } else if (nivelXp > 2000 && nivelXp < 5001) {
        nivel = "Prata"
    } else if (nivelXp > 6000 && nivelXp < 7001) {
        nivel = "Ouro"
    } else if (nivelXp > 7000 && nivelXp < 8001) {
        nivel = "Platina"
    } else if (nivelXp > 8000 && nivelXp < 9001) {
        nivel = "Ascendente"
    } else if (nivelXp > 9000 && nivelXp < 10001) {
        nivel = "Imortal"
    } else if (nivelXp >= 10001) {
        nivel = "Radiante"
    }
}

// Apresentacao do resultado em tela
console.log("O herói de nome " + name + " está no nível de " + nivel + ", ele já acumulou " + nivelXp + " de XP, parabéns por ter alcançado esse nível herói " + name + ", continue evoluindo.")