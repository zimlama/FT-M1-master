'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");
const parseLinkDestination = require("markdown-it/lib/helpers/parse_link_destination");

// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // 180/1 = 180
  // 180/2 = 90
  // 90/2 = 45
  // 45/3 = 15
  // 15/3 = 5
  // 5/5 = 1
  // var num = 180;
  var lista = [1];
  var dividiendo = 2;
  while(num/dividiendo >= 1 ){
    while(num%dividiendo === 0){
      lista.push(dividiendo);
      num = num/dividiendo;
      //console.log('num es: ', num);
      //console.log('lista es: ', lista);
    }
    dividiendo ++
  }
  return lista;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // var array = [ 5, 6, 4, 9, 2, 1]
  //             [ 1, 2, 4, 5, 6, 9 ]
  // el for con un for anidado recorre una posicion dos n veces la posicion
  var valor1 = 0;
  var valor2 = 0;
  var mayor = 0;
  for(var j = 0; j < array.length; j++){
    for(var i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        valor1 = array[i];
        valor2 = array[i+1];
        array[i] = valor2;
        array[i+1] = valor1;
        mayor = valor1;
      } else {
        if(array.length-1 > i){
          mayor = array[i+1];
        }
      }
      //console.log('valor1 es: ', valor1,'valor2 es: ', valor2, 'mayor es: ', mayor);
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //             [ 2, 6, 8, 1, 9 ]
  // var array = [ 9, 8, 6, 7, 5, 4, 3, 2, 1]
  var temp = 0;
  var j = 0;
  for(var jj = 0; jj < array.length; jj++){  
    for(var i = j; i < array.length; i++){
      if(array[i+1] < array[j]){
        temp = array[j];
        array[j] = array[i+1];
        array[i+1] = temp;
        //console.log('array[0] es: ', array[0],'array[1] es: ', array[1])
      }
    }
    j++
    //console.log('j es: ', j);
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  // var array = [ 9, 8, 6, 7, 1, 4, 5, 2, 3]
  for (var i = 0; i <array.length; i++){
    var min = i      //guarda en variable -- el mas chico esta en el index donde empiezo 
    for (var j= i+ 1; j <array.length; j++){
      if (array[j]< array[min]){
        min=j
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
