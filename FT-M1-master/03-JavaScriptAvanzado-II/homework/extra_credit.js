//Repeatify

// Crear un método `repeatify` que este disponible para _todos_ los objetos `Strings`. Esta función debe aceptar un `entero` que indica cuantas veces el string tiene que repetirse. La función retorna el string repetido el número de veces que indicamos. Controlar que el número no sea menor que cero, y si es cero que devuelva `''` (String vacío).

String.prototype.repeatify = function(integer){

    if (integer >= 0){
        var result = ''
        for (let index = 0; index < integer; index++) {
            result = result + this 
        }
        return result
    }
    else if (integer < 0){
        throw "El argumento no puede ser un entero negativo."
    }
    else{
        throw "El argumento debe ser 0 o un número entero positivo."
    }
}

try{
    console.log('hola'.repeatify(3));
}

catch (error) {
    console.log("Hubo un problema:", error)
}

// Shapes

// * Crea un objeto llamado `shape` que tenga una propiedad `type` y un método `getType`.
// * Ahora defini una función `Triangle` cuyo prototipo sea `shape`. Los objetos creados con `Triangle` deberían tener tres propiedades: `a`, `b` y `c`. Que representan cada lado del triángulo. `type` debe ser `Triangle`.
// * Agregá un nuevo método al prototipo llamado `getPerimeter`.

// Probá tu solución con el siguiente código:

// > var t = new Triangle(1, 2, 3);
// > t instanceof Triangle
// // true
// > Shape.prototype.isPrototypeOf(t);
// // true
// > t.getPerimeter();
// // 6
// > t.getType();
// // "Triangle"

// * Ahora creá un nuevo constructor que herede de `shape`, llamado `Circle`. Implementalo de tal modo que puedas calcular su perímetro en la función `getPerimeter`.

// Probá tu solución con el siguiente código:

// > var c = new Circle(2);
// > c instanceof Circle
// // true
// > Shape.prototype.isPrototypeOf(c);
// // true
// > c.getPerimeter();
// // 12.566370614359172
// > c.getType();
// // "Circle"

// * Creá una última `shape` llamada `Square`.
// * Agregá el método `getArea` de todas las `shape`s.

class Shape{
    constructor(){
        this.type = "Default";
    }
    getType(){return this.type}
}

class Triangle extends Shape{
    constructor(a,b,c) {
        super()
        this.a = a;
        this.b = b;
        this.c = c;
        this.type = "Triangle"
    }
}
Triangle.prototype.getPerimeter = function(){return this.a + this.b + this.c}

class Circle extends Shape{
    constructor(r){
        super()
        this.r = r;
        this.type = "Circle"
    }
    
}
Circle.prototype.getPerimeter = function(){return 2 * Math.PI * this.r}

class Square extends Shape{
    constructor(x){
        super()
        this.x = x;
        this.type = "Square"
    }
}
Square.prototype.getPerimeter = function(){return this.x * 4}

// Área = √sp(sp – a)(sp – b)(sp – c)
Triangle.prototype.getArea = function(){return Math.sqrt((this.getPerimeter())/2 * ((this.getPerimeter())/2 - this.a) * ((this.getPerimeter())/2 - this.b) * ((this.getPerimeter())/2 - this.c))}
Circle.prototype.getArea = function(){return Math.PI * Math.pow(this.r,2)}
Square.prototype.getArea = function(){return Math.pow(this.x,2)}


// *** TEST ***
var t = new Triangle(3, 4, 5);
console.log(t instanceof Triangle);
console.log(Shape.prototype.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());

var c = new Circle(3);
console.log(c instanceof Circle)
console.log(Shape.prototype.isPrototypeOf(c));
console.log(c.getPerimeter());
console.log(c.getType());

var s = new Square(5);
console.log(s instanceof Square)
console.log(Shape.prototype.isPrototypeOf(s));
console.log(s.getPerimeter());
console.log(s.getType());

console.log(t.getArea());
console.log(c.getArea());
console.log(s.getArea());
