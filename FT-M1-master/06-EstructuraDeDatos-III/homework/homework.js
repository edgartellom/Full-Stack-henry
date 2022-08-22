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

class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.rigth = null;
    this._size = 1
  }
  insert(v){
    if (v < this.value){
      if (!this.left){
        this.left = new BinarySearchTree(v)
        this._size++
      } else{
        this.left.insert(v)
      }
    }
    if (v >= this.value){
      if (!this.rigth){
        this.rigth = new BinarySearchTree(v)
        this._size++
      }
      else{
        this.rigth.insert(v)
      }
    }
  }

  contains(v){
    if (v === this.value) return true

    else if (v < this.value && this.left) return this.left.contains(v)
      
    else if (v > this.value && this.rigth) return this.rigth.contains(v)

    else if (v !== this.value) return false
  }

  size(){
    var treeSize = 0
    treeSize += this._size
    if (this.left){
      this.left.size()
    }
    else {
      if (this.rigth){
        this.rigth.size()
      }
    }
    return treeSize
  }
  depthFirstForEach(saver, rout){
    switch (rout){
      case ('post-order'):
        if (this.left) {
          this.left.depthFirstForEach(saver, rout)
        }
        if (this.rigth){
          this.rigth.depthFirstForEach(saver, rout)
        }
        saver(this.value)
        break
        
      case ('pre-order'):
        saver(this.value)
        if (this.left) {
          this.left.depthFirstForEach(saver, rout)
        }
        if (this.rigth){
          this.rigth.depthFirstForEach(saver, rout)
        }
        break

      case ('in-order'):
        if (this.left) {
          this.left.depthFirstForEach(saver, rout)
        }
        saver(this.value)
        if (this.rigth){
          this.rigth.depthFirstForEach(saver, rout)
        }
        break

      case (undefined):
        if (this.left) {
          this.left.depthFirstForEach(saver, rout)
        }
        saver(this.value)
        if (this.rigth){
          this.rigth.depthFirstForEach(saver, rout)
        }
        break
    }
  }
  breadthFirstForEach(saver, arr = []){
    saver(this.value)
    if (this.left){
      arr.push(this.left)
    } 
    if (this.rigth){
      arr.push(this.rigth)
    }
    if (arr.length){
      arr.shift().breadthFirstForEach(saver,arr)
    }
    return arr
  }
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
