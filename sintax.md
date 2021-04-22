# A importancia da Sintaxe

# Tipos de Dados
    * Elemntos da linguagem e suas combinações
    * A arte de falar e escrever corretamente

# Vocabulário 
    * Conjunto de termos e epressões
    * Agrupamento de palavras

    * Data types
        * Primitive / Primitive value
        * Structural
        * Structural Primitive

## Primitivos 
    * String
    * Number
    * Boolean
    * undefined
    * Symbol
    * BigInt

## Estruturais
    * Object
        * Array
        * Map
        * Set
        * Date
        * ...
    * Function

## Primitivo Estrutural / Structural Root Primitive

* null

---------------------------------------------------------

# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de códigos
* Identificadores
* 3 palavras reservadas para criar uma variável
    * var
    * let
    * const

# Scope

* EScopo determina a visibilidade de alguma variável no JS

## Block statement
```js
//vamos iniciar um bloco 
{
    //aqui denbtro é um bloco e posso colocar qualquer código 
} // aqui fechamos o bloco 
```

O bloco, também criara um noco escopo. Chamamos 
` block-scoped`

## let const

```js
// const e let são locais e só funcionam no escopo onde foi criada

console.log('> existe y antes do bloco? ', y)

{
    let y = 0
}

console.log('> exisre y depois do bloco? ', y)

```

## Para criar nomes 

* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres Unicode

- Posso:
    * Iniciar com esses caracteres especiais: $ _
    * Iniciar com letras
    * Colocar acentos
    * Letras maiúsculas e minusculas fazem diferença

- Não posso:
    * Iniciar com números
    * Colocar espaços vazios no nome

- Ideal:
    * Criar nomes que fazem sentido
    * que expliquye o que a variável é ou faz
    * camelCase
    * snake_case
    * Escrever em inglês
