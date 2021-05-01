// function scope

let subject

function createThink(/*study*/){ //se não for coloado o objeto na chamada, a função vai sobre escrever o calor da variavel já criada, fora do escopo da função
    subject = 'study'
    return subject
}

console.log(subject) //undefined, antes da função ser executada
console.log(createThink(subject)) //study
console.log(subject) //study