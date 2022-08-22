"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree (value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.insert = function(value){
  // evaluar value
  // mayores a la derecha
  if (value > this.value){
    // si el nodo right está libre...
    if (!this.right) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  }
  // menores a la izquierda
  if (value < this.value){
    // si el nodo left está libre...
    if (!this.left) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  }
}

BinarySearchTree.prototype.contains = function(value){
  if (value === this.value) return true;
  // mayores a la derecha
  if (value > this.value){
    if (!this.right) return false;
    return this.right.contains(value)
  }
  // menores a la izquierda
  if (value < this.value){
    if (!this.left) return false;
    return this.left.contains(value)
  }
}

BinarySearchTree.prototype.size = function(){
  if (!this.value) return 0;
  if (!this.left && !this.right) return 1;
  if (!this.left && this.right) return 1 + this.right.size();
  if (this.left && !this.right) return 1 + this.left.size();
  return 1 + this.right.size() + this.left.size()
}
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if (order === 'post-order'){
    // izq -> der -> root
    if (this.left) this.left.depthFirstForEach(cb, order);

    if (this.right) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  }
      
  if (order === 'pre-order'){
    // root -> izq -> der
    cb(this.value)
    if (this.left) this.left.depthFirstForEach(cb, order);
    
    if (this.right) this.right.depthFirstForEach(cb, order)
  }
      

  if (order === 'in-order'|| order === undefined){
    // izq -> root -> der
    if (this.left) this.left.depthFirstForEach(cb, order)
    
    cb(this.value)
    if (this.right) this.right.depthFirstForEach(cb, order)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
  cb(this.value)
  if (this.left) queue.push(this.left)
  
  if (this.right) queue.push(this.right)
  
  if (queue.length > 0) queue.shift().breadthFirstForEach(cb,queue)
}


// let bst = new BinarySearchTree(20);
// let arr = []
// function saver(v){return arr.push(v)}
// var valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34]
// for (let i = 0; i < valuesToInsert.length; i++){
//   bst.insert(valuesToInsert[i])
// }

// console.log(bst)
// console.log(bst.size())
// console.log(bst.contains(21))
// // bst.depthFirstForEach(saver, 'pre-order')
// // bst.depthFirstForEach(saver, 'post-order')
// // bst.depthFirstForEach(saver,'in-order')
// bst.breadthFirstForEach(saver)
// console.log(arr)
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
