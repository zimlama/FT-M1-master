'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var sumatoria = 0;
  var len = num.toString().length;
  var count = len;
  for ( var i = 0; i < len; i++){
    count--;
    var elevado = Math.pow(2,count);
    var sumar = parseInt(num.toString()[i], 10)
    sumatoria =  sumatoria + (elevado * sumar);
  }
  return sumatoria
}

//	10  10/2	5		  10%2 	0
//	5	  5/2		2.5		5%2		1
//	2	  2/2 	1		  2%2		0
//	1 	1/2		0.5		1%2		1

//  2   2/2   1     2%2   0
//  1   1/2   0.5   1%2   1

function DecimalABinario(num) {
  // tu codigo aca
  var binarioINV = [];
  var entero = 0;
  for(var i = num; i > 0; i--){
    if(parseInt(num)%2 === 0){
      binarioINV.push(0);
    } else{
      binarioINV.push(1);
    }
    var entero = num/2;
    num = entero;
    if (entero <= 0.5) { break; }
  }
  var binario = binarioINV.reverse();
  if(binario[0] === 0){
    binario.shift();
  }
  return binario.join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}