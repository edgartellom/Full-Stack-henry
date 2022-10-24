const { Stack } = require("../DS");
// ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️
//
//
//
//
// 5️⃣ ***** EJERCICIO 5 ***** - tipologiasSeparadas() 5️⃣
// En este ejercicio debemos implementar la funcion tipologiasSeparadas() la cual va a recibir por parametro un array con el numeros de tipologias en el orden que se van a construir.
// Supongamos que tenemos un barrio en donde la construccion de casas pueden ser de distintos tipos de tipologias en una misma manzana.
// Pero hay una limitacion, que no puede haber 2 tipologias iguales una al lado de la otra.
// Nuestro objetivo es utilizar el STACK para poder detectar si cuando nos pasan el array de como se van a construir las casas necesitamos separar las tipologias que se repiten.
//
// EJEMPLOS:
// let arr = [1, 2, 2, 3, 3, 6, 4, 5]
// tipologiasSeparadas(arr) => [1, 2, 3, 6, 4, 5, 2, 3]
//
// REQUISITOS:
// 🟢 La función debe crear y retornar el Stack creado con las casas de forma correcta sin tipologias repetidas.
// 🟢 El Stack que retorna debe ser una instancia de la clase Stack.
// 🟢 En caso de que no hayan tipologias repetidas o que ya las recibamos separadas correctamente, debe retornar "No hay tipologias repetidas".
// 🟢 En caso de recibir un array vacio debe retornar "Tipologias inexistentes".

function tipologiasSeparadas(arr) {
  // Tu código aquí:
  let stack = new Stack();
  let save = []
  if (arr.length === 0) return "Tipologias inexistentes";
  stack.push(arr[0])
  for (let i = 0; i < arr.length-1; i++){
    if (arr[i] !== arr[i+1]){
      stack.push(arr[i+1]);
    } else {
      save.push(arr[i+1])
    }
  }
  if (save.length){
    for (let i = 0; i < save.length; i++){
      stack.push(save[i])
    }
  } else {
    return "No hay tipologias repetidas"
  }
  return stack;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  tipologiasSeparadas,
};
