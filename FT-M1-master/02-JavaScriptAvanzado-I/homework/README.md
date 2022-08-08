
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
<!-- Al declarar una variable con 'var, esta se define como tal y se ejecuta una vez que se llama a la misma mientras que al asignar un valor sin declararlo como 'var', este se ejecuta directamente. -->

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
// x = 1
// a = 5
// b = 10
// c = function(a, b, c)
c(8,9,10);
   // x = 10; 
   // x -> (10)
   // a -> (8)
   // f = function(a, b, c)
   // f(a,b,c) -> f(8,9,10)
      // b = a = 8
      // b -> (8)
      // b = c = 10
      // x = 5
   // b -> (9)

console.log(b);
// b -> (10)
console.log(x);
// x -> (1)
```

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
// memoria
// function foo()...
// var bar = undefined
// baz = undefined

// exe
// undefined
// undefined
// Hola!
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
// instructor = "Tony"
// if(true)
   // instructor = "Franco"
// instructor -> (Franco)
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
// instructor = "Tony"
// instructor -> (Tony)
// function()
   //if(true)
      // instructor = "Franco"
      // instructor -> (Franco)
// instructor -> (Tony)
```

```javascript
var instructor = "Tony";
let pm = "Franco"; // no tiene hoisting

//block scope
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash"; //respeta Blocks
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
// instructor = "Tony"
// pm = "Franco"
// if(true)
   // instructor = "The Flash"
   // pm = "Reverse Flash" ---> Uso interno por el 'let'
   // instructor -> (The Flash)
   // pm -> (Reverse Flash)
// instructor -> (The Flash)
// pm -> (Franco)
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2 ... Si el primero es verdadero te devuelve el segundo
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true
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
// function test()
   // function foo()

test();
   // a -> (undefined)
   // foo() -> (2)
   // a = 1

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
   // if (false)
   // snack -> (undefined)
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
// fullname = 'Juan Perez'
// obj.prop.getFullname()
   //fullname : 'Natalia Nerea'
      // this.fullname -> (Aurelio De Rosa)
// test = obj.prop.getFullname ---> this pasó a global
// test() -> (undefined)
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
   // (1)
   // setTimeout -> 1000ms ...
   // setTimeout -> 0ms ...
   // (4)
   // (3)
   // (2)
```
