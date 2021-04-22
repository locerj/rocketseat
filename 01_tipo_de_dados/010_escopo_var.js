/*js
//vamos iniciar um bloco 
{
    //aqui denbtro é um bloco e posso colocar qualquer código 
} // aqui fechamos o bloco 
*/


//var é uma variável global e local
//hoisting, ele é içada ao topo do código 
console.log('> existe x antes do bloco ', x)

{
    var x = 0
}

console.log('> existe c depois do bloco ' , x)
