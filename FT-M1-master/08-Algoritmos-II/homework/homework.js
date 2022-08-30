'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  // [6,3,5,2,4]
  //      [3,2,4]  <--              [5]          -->   [6]
  // [] <-- [2] -->   [3,4]
  //              [3] <-- [4] --> []

  
  if (array.length <= 1){
    return array
  }
  let pivot = array[0];
  let left = [];
  let right = [];
  
  for (let i = 1; i < array.length; i++){
    if (array[i] < pivot){
      left.push(array[i]);
    }
    else {
      right.push(array[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right))
  // return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([5, 1, 4, 2, 8]))

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  function merge(left, right) {
    let resultArr = [];
    while (left.length > 0 && right.length > 0) {

      if (left[0] < right[0]) {
        resultArr.push(left[0]);
        left.shift();
      } 
      else {
        resultArr.push(right[0]);
        right.shift();
      }
    }
    return [...resultArr, ...left, ...right]
  }
  return merge(mergeSort(left), mergeSort(right));

}
console.log(mergeSort([5, 1, 4 ,3, 2, 8]))
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
