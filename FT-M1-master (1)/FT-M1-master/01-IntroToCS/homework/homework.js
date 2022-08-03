'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
//imput "110"
// output 6
// Convertir el string en array
// [1, 1, 0]
// Dar vuelta el array 
// invertir el array usando esa posicion 
// usar la posicion como factor para elevar la base a ese factor
// multiplicar el resltado por el elemento del array us
// sumar el resultado 
var data = num.split("").reverse();
var result = 0;
for(var i = 0; i < data.length; i++){
  result += 2** i * data[i];

}
return result; 
}

function DecimalABinario(num) {
  // tu codigo aca
// dividir num entre 2 hasta que llegue a 0
// quedarme con el rsultado entero (sin el valor decimal) y el resto 
// recordar los restos
var result= "";

while(num > 0){
var result =  (num % 2) + result;
var r = Math.floor(num/2) 
}
return result;


}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}