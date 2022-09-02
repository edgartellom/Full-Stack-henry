'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
  /*  
  pos 6 5 4 3 2 1 0
  num 1 1 0 1 0 1 0

  2^0 * 0 = 0
  2^1 * 1 = 2
  2^2 * 0 = 0
  2^3 * 1 = 8
  2^4 * 0 = 0
  2^5 * 1 = 32
  2^6 * 1 = 64
  suma    = 106

  dec = Sumatoria de (2 ^ posición * digito)
  */

  let invert = num.split('').reverse();
  let dec = 0;
  for (let i = 0; i < invert.length; i++) {
    dec += (Math.pow(2, i) * parseInt(invert[i]))
  }
  return dec
}

// console.log(BinarioADecimal('111'))

function DecimalABinario(num) {
  // tu codigo aca

  /* 
  num    coc  rest
  37/2 = 18   (1)
  18/2 = 9    (0)
  9/2  = 4    (1)
  4/2  = 2    (0)
  2/2  = 1    (0)
  1/2  = 0    (1)
  
  Los restos de abajo para arriba:
  
  bin = 1 0 0 1 0 1
  
  Se divide entre 2 sucesivamente al numero hasta que el cociente sea 0
  Se añaden los restos de cada división al inicio de un array
  Se unen los elementos del array en un string y se devuelve
  */

  var array = [];
  while (num > 0) {
    var mod = num % 2;
    array.push(mod);
    num = Math.floor(num / 2)
  }
  var bin = array.reverse().join('');
  return bin;
}

// console.log(DecimalABinario(4))


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}