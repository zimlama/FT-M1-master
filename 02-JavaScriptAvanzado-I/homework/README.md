
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

cuando se declara con `var` se crea una variable, si se crea son var puede suceder dos cosas:

1. Que la variable este definida en un contexto que contenga el contexto que estamos trabajando
2. Al no estar definida nos genere un error

```javascript
// JS dependiendo de la situacion el intenta adivinar que estas haciendo

var a = 1; // contexto global

var emi = 10;
var perro = 20;
function contextoA(){    
   var perro = 0;
   if(emi  === 10){
      console.log('hola A')
   }
   function contextoB(){
      if(perro  === 0){
         console.log('hola B')
      }
   }
   contextoB()
}
contextoA()
```
Los contextos los podemos compara como si fueran cajas contenidas en otras caja, cada caja tiene sus propias variables y solo pueden ser usada cuando estan en ellas, si por alguna razon no se encuentra la variable a usar se busca en la caja que la contiene y asu sucesivamente.

```javascript
function probar(){   // contexto A
   console.log(a);   // entro con el valor del contexto global
   a = 3;            // se cambia el valor que esta en el contexto global
   var a = 10;       // Contexto A
   console.log(a); 
}
```

```javascript
x = 1;      //A1. JS genera un error por que no esta definida
var a = 5;  //A1. Parte 1 Lectura&Memoria crea la variable vacia
            //A2. Parte 2 Asigna el valor (cuando etan creadas las variables)
var b = 10; //A1. Parte 1 Lectura&Memoria crea la variable vacia
            //A2. Parte 2 Asigna el valor (cuando etan creadas las variables)
var c = function(a, b, c) {   //Se crea un contexto nuevo con la funcion
  var x = 10;  //B2. Parte 1 Lectura&Memoria crea la variable vacia
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {   // Se crea un contexto nuevo cuando se ejecutan la funcion
    b = a;  //C3. Cambia los valor b
    console.log(b);
    b = c;  //C3. Cambia los valor b
    var x = 5; //C3. Cambia los valor x
  }
  f(a,b,c); //C1. Se ejecuta la funcion crea un nuevo contexto
            //C2. Cambia los valoes de a b y c
            //C2. Crea x como un `undefined`
  console.log(b);
}
c(8,9,10);  //B1. Se ejecuta la funcion crea un nuevo contexto
            //B2. Cambia los valoes de a b y c
console.log(b);
console.log(x);

```
//===========================

```javascript
console.log(bar); 
console.log(baz); 
foo();         //B1. Se ejecuta la funcion crea un nuevo contexto
               //B2. Vizualiza el dato de la funcion
function foo() { console.log('Hola!'); }
var bar = 1;   //A1. Parte 1 Lectura&Memoria crea la variable vacia
               //C1. Cambia los valor `bar`
baz = 2;       //A1. JS genera un error por que no esta definida
```
//===========================if()

```javascript
var instructor = "Tony";   //A1. JS genera un error por que no esta definida
                           //A2. Parte 2 Asigna el valor ya que no hay contexto(funcion)
if(true) {
    var instructor = "Franco";   //A3. JS genera un error por que no esta definida
                                 //A4. Parte 2 Asigna el valor ya que no hay contexto(funcion)
}
console.log(instructor);
```

```javascript
var instructor = "Tony";   //A1. JS genera un error por que no esta definida
                           //A2. Parte 2 Asigna el valor
console.log(instructor);
(function() {  //B1. Ejecuta la funcion(nuevo contexto)
   if(true) {
      var instructor = "Franco"; //C1. Ejecuta la funcion(nuevo contexto)
      console.log(instructor);
   } //D1. Retorna un valor `undefined`
})();
console.log(instructor);
```

```javascript
var instructor = "Tony";   //A1. JS genera un error por que no esta definida
                           //A2. Parte 2 Asigna el valor
let pm = "Franco";         //B1. Crea la variable
if (true) {
    var instructor = "The Flash"; //D1. Parte 2 Asigna el valor
    let pm = "Reverse Flash"; //C1. Crea la variable `undefined` diferente a la otra
                              //D2. Parte 2 Asigna el valor
    console.log(instructor);  
    console.log(pm);
}
console.log(instructor); //E1. Visualiza el contexto del valor externo
console.log(pm);
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"        //JS intepreta piensa que es una division de numeros
"2" * "3"      //JS intepreta piensa que es una multiplicacion de numeros
4 + 5 + "px"   //JS al ver el + concatena los number & string
"$" + 4 + 5    //JS al ver el + concatena los number & string
"4" - 2        //JS intepreta piensa que es una resta de numeros
"4px" - 2      //JS dice que es Not A Number
7 / 0          //JS dice que es Infinity
{}[0]          //no es capaz de leer un array que no existe
parseInt("09") //JS lo convierte en entero
5 && 2         //JS al usar AND da el ultimo valor aproximado a true 
2 && 5         //JS al usar AND da el ultimo valor aproximado a true 
5 || 0         //JS al usar OR da el valor aproximado a true
0 || 5         //JS al usar OR da el valor aproximado a true
[3]+[3]-[10]   //JS contcatena [3]+[3] = [33] y resta [10]
3>2>1          //JS 1ro compara 3>2 = true y 2do compara true>1 = false
[] == ![]      //JS adapta(==) el array ![] para realizar la comparacio 
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
