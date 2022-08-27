"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.insert = function(value){
  if(value > this.value){
    if(this.right === null){
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value); //uso el insert de forma recursiva
    }
  } else if(value < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
}
BinarySearchTree.prototype.contains = function(value){
  if(value === this.value) return true; //
  if(value > this.value){
    if(this.right === null) return false;
    else return this.right.contains(value);
  } else if(value < this.value){
    if(this.left === null) return false;
    else return this.left.contains(value);
  }
}
BinarySearchTree.prototype.size = function(value){
  if(this.right === null && this.left === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.right !== null && this.left === null) return 1 + this.right.size();
  if(this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size();
}
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  // order = in-order
  // order = pre-order
  // order = post-order
  if(order === 'pre-order'){
    // root - izq - der
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  } else if(order === 'post-order'){
    // izq - der - root
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    cb(this.value);
  } else {
    // in-order
    // izq - root - der
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){
  if(this.left !== null){
    array.push(this.left);
  }

  if(this.right !== null){
    array.push(this.right);
  }

  cb(this.value);

  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array);
  }
}



// Cada valor a la izquierda del nodo raíz (ocho) tiene un valor menor que ocho
// leftMinus
// cada valor a la derecha es mayor o igual que el nodo raíz.
// rigthPlus
// valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
// 15 
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
