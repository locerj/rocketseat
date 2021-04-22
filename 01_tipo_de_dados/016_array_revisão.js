// Array

// const animals = [] // Array criado vazio

const animals = [
    'lion', 
    'Monkey', 
    {
        name: 'Cat',//podemos colocar um array ou um objeto dentro do array
        age: 3
    }
]

// como acesar os valores do array

console.log(animals) // array inteiro

console.log(animals[0]) // para pegar as informações individualmente é necessário usar o índice no atributo[0] 

console.log(animals[2]) // me devolve um objeto
console.log(animals[2].name) 

console.log(animals.length) // mostra a quantidade de itens dentro do array