'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = []
  let factor = 2
  
  if (num > 0) arr.push(1);
  
  while (num > 1){
    if (num % factor === 0){
        arr.push(factor);
        num = num/factor;
      }
    else{
      factor++
    }
  }
  return arr
}

console.log(factorear(180))

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var swap = true
  while (swap) {
    swap = false
    for (let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swap = true
      }
    }
  }
  return array
}
let arr = [4,6,1,7,9,8,2,3,5]
// console.log(bubbleSort(arr))


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++){
    let toInsert = array[i]
    for (let j = i-1; j >= 0; j--){
      if (toInsert < array[j]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp
      }
    }
  }
  return array
}

// console.log(insertionSort(arr))

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  
  for (let i = 0; i < array.length; i++){
    let min = array[i]
    for (let j = i + 1; j < array.length; j++){
      if (array[j] < min){
        min = array[j];
        array[j] = array[i];
        array[i] = min;
      }
    }
  }  
  return array
}

console.log(selectionSort(arr))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
