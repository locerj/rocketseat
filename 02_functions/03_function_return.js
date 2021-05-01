//podemos declarar funcções dentro de variáveis
//function anônima - function expression

// parâmetros
const sum = function(number1, number2) {
    let total = number1 + number2
    return total // com o return, apenas sera mostrado o resultado, e passado pelo return
}



let number1 = 24
let number2 = 35
//sum(number1, number2) // executando passando argumentos

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`) // mostra a soma certa, mas o retorno da função vai ser undefined pq a função não tem retorno. return

