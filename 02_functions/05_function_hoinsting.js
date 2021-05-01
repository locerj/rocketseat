//function hoinsting

sayMyname();

/* function sayMyName() {
    console.log('Loce') //assim, acontece um hointing na função, e mesmo sendo chamada antes da criação, a função consegue exibir o nome
} */

/* const sayMyName = function() {
    console.log('Loce') //usando const, não acontece o hoinsting, sendo assim dá erro,pois a função não foi definida antes da chamada
} */

 var sayMyName = function() {
    console.log('Loce')//usando var, só a variavel sayMyName é içada, sendo assim dá erro pois a function sem nome não é içada junto.
 }