/* 
    Function() constructor
    
    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) { //primera letra do nome da função maiúscula
    this.name = name
    this.walk = () => {
        return this.name + ' está andando'
    }
}

const loce = new Person('Loce')
const joao = new Person('João')
console.log(loce.walk())
console.log(joao)

//O js já tem umas expressões contrutoras

let date = new Date("2020-12-01")
console.log(date)