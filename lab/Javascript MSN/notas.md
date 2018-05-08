# Notas

## Variables

### Tipos

- **~~var~~:** escopo abrangente, hoisting a elava até o topo do seu contexto, no caso o documento ou função.

- **let:** variáveis com escopo de bloco.

    Declaramos apenas uma vez mas podemos modificar qualquer número de vezes.

    ```javascript
    let x; /*<-- declarar uma variável, sem valores (undefined).*/
    x = 3; /*atribuir o valor a variável.*/
    ```

- **const:** não pode ser redefinida, [Minimize Mutable State](https://youtu.be/sjyJBL5fkp8).

Convenções:

- O nome das variáveis deve ser descritivo.

- cammelCase, ao se utilizar uma variável formada por mais de uma palavra.

### Exemplo

```javascript
var i = 98;
for (let i = 0; i< 10; i++) {
    console.log(i);
};
for (let i = 0; i< 5; i++) {
    console.log(i);
};
console.log(i);
```

## - Data types

- numbers;

- strings;

- booleans.

Exemplos

```javascript
let x = 7;
console.log(typeof x);
/*number*/

let y = true;
console.log(typeof y);
/*boolean*/

let z = 'hello world';
console.log(typeof z);
/*string*/

let a;
console.log(a);
console.log(typeof a);
/*undefined
undefined*/
```

## Declarações

São formadas uma ou mais expressões, formadas por operadores(+, = ...) e operandos(let, var...).

```javascript
/* Types of expressions*/
/* 1. Variable Declaration*/
let a;

/* 2. Assign a value*/
a = 4;

/* Perform an evaluation that returns a single value
b+c*/

let b = 3;
let c =2;
/* Three expressions in here ... can you find them?*/
let a = b + c;

/* Categories of Operators
Assigment =
Aritmetic + - * /
Increment / Decrement ++ --
*/
var a =1;
a++;
console.log(a++);
console.log(a);
/*resultado
2
3
o resultado é 2 primeiro porque o incremente está sendo executado após o valor ser apresentado pelo log. No caso se desejamos incrementar e ver o resultado:*/
console.log(++a);
/* String '' +
Precedence*/
var b = 1 + 2 * 3;
console.log(b);
/*7*/
var b = (1 + 2) * 3;
console.log(b);
/*9
Funcion invocation operators ()
console.log('')

Logical and: && or: ||

Member acessor operator, the dot*/
console.log
/* Code block operators {}
Array element acess operators []*/
```

## Funções

```javascript
function newFunction() {
    let a = 7;
    let b = '6';
    b = parseInt(b, 10);
    c = a + b;
    console.log(c);
};
newFunction ();
```

## - for

```javascript
for (var i = 0; i < 10; i++) {
    console.log(i);
};
```

Resultado:

```terminal
PS C:\Users\Jaceg\Documents\Javascript MSN> node app.js
0
1
2
3
4
5
6
7
8
9
```