// Manipulando Arrays

// Criar Array com contrutor
/* let array = ['a', 'b', 'c'] // Array 
console.log(array)
let myArray = new Array('a', 'b', 'c') // array com construtor
console.log(myArray)
let myArray2 = new Array(10) // array com 10 espaços vázios
console.log(myArray2) */

// Contar elementos de um array
/* console.log(['a', 'b', 'c'].length)
console.log(['a', {type: "array"}, function() { return 'alo' }][2]()) // usando a função de dentro do array
 */

// Transformar um cadeia de caracteres em elementos de um array 
/* let word = 'Manipulação'
let arrayWord = Array.from(word) // tranforma cada caracter da string em um elemento do array
console.log(arrayWord) */

// manipulação de arrays

let techs = ['html', 'css', 'js']
console.log(techs)
// adicionar um item no fim
techs.push('nodeJs')// push adiciona itens no final da fila
console.log(techs)

// adicionar no começo
techs.unshift('sql') // unshift adiociona item do começo do array
console.log(techs)

// remover do fim
techs.pop() // pop retira item do final do array
console.log(techs)

// remover do começo
techs.shift() // shift remove item do começo da lista
console.log(techs)

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // slice precisa do pimeiro item que vai aparecr e o ultimo

// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2) // splice precisa do primeiro numero que vai se cortado e o numero de itens que depois dele tb seram cortados
console.log(techs)

// encontrar a posição de um elemento no array
let index = techs.indexOf('css') //indexOf restorna o index do item, se não existir ele retorna -1
console.log(index)

