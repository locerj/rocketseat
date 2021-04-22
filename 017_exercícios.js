// 1. Declare uma variável de nome weight
let weight // undefined
 
// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

weight = 85.6

/*

    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean

*/

let name = 'Loce'
let age = 37
let stars= 4.8
let isSubscribe= true

/* 
    4. A variável stundent abaixo é de que tipo de dados?

    4.1 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {} // Object

console.log(typeof student)

student = {
    name: name,
    age: age,
    weight: weight
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg! // Object`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

console.log(typeof students)

/* 
    6. Reatribua valor para a variável acima, colocanco dentro dela o objeto student da questão 4. (não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/

students = [student]

/* 
    7. Colque no console o valor da posição zero do Array acima
*/

console.log('Array', students[0])

/* 
    8. Crie um novo student e coloque na posição 1 do Array students
*/

let student2 = {
    name: 'Jony',
    age: '12',
    weight: 36.5
}

/*students = [
    student,
    student2
] podemos subscrever o array ou atribuir o novo student na posição 1 logo*/

students[1] = student2

console.log(students)

/* 
9. Sem rodar o código responda qual a sua resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

console.log(a)
var a = 1

resultado: undefinded

por causa do hosting, o uso de var permite que a variável seja içada 
para o topo do código, que seria interpretado dessa forma:

var a
console.log(a)
a =1

*/
console.log(a)
var a = 1