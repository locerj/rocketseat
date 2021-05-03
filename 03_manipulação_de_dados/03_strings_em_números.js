// Manipulação String e Números

// Transformar String em Número e Número em String
/* let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number)) */

// Contar quantos caracteres tem a palavra e quantos dígitos tem um número
/* let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length) */

// Transformar um número quebrado com 2 casas decimais e trocar ponto e vírgula
/* let number = 345.33452345
console.log(number.toFixed(2).replace(".", ",")) // retorno é uma string */

// Tranformar letras minúsculas em maiúsculas. Faça o contrário disso também 
/* let word = "Programar"
console.log(word.toUpperCase())
let word2 = "PROGRESSO"
console.log(word2.toLowerCase().length) */

// Separe um texto que contem espaçoes, em um novo array onde cada texto é uma posição do array. Depois disso, transformeo array em um texto e onde eram espações coloque _
/* let phrase = "Eu quero viver de amor"
let myArray =  phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase()) */

// Verificar se o texto contém a palavra Amor
/* let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor")) // includes é case sensitive */