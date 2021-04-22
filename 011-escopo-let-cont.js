/*
    *const e let

    //const e let são locais e só funcionam no escopo onde foi criada
*/


//console.log('> existe y antes do bloco ', y) // ero: Uncaught ReferenceError: y is not defined

let y = 1
let x = 2
{
    let y = 0
    console.log('> existe y ', y)

    x = 3
}

console.log('> existe y depois do bloco ', y) 
console.log('> quanto vale x depois do bloco ', x) // erro: Uncaught ReferenceError: y is not defined


console.log('**************************************************************************')

const z = 1


{
    z = 0 // erro, não pode mudar valor, podemos criar outra const z nesse escopo
    
}