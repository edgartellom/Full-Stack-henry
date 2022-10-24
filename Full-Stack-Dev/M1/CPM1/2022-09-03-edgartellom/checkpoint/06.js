//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  // Tu código aquí:
  let noEsPrimo = function(num){
    let count = 0;
    let i = 1;
    while (count <= 2 && i <= num){
      if (num % i === 0){
        count++;
      }
      i++;
    }
    return (count > 2)
  }
  let swap = true;
  while (swap){
    swap = false;
    for (let i = 0; i < array.length; i++){
      if (noEsPrimo(array[i]) || noEsPrimo(array[i+1])) return false
      if (array[i] > array[i+1]){
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swap = true;
      }
    }
  }
  return array;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};