const fs = require('fs');

function validaArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== '0' && array[i] !== '1') {
      console.log("Errorsito : " + array[i]);
      return false;
    }
  }
  return true;
}

const matrix = [];
fs.readFile('matrix.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  var cadena_split = data.split('\n');
  var validar_length = cadena_split[0].length;
  for(let i=0; i < cadena_split.length -1; i++){
    if(validar_length == cadena_split[i].length){
     
      if(validaArray(cadena_split[i])){
        matrix[i] = cadena_split[i];
        console.log(cadena_split[i]);
       // console.log("Contiene otros valores no permitidos");
      }else {console.log("bad char")}
    }else{
      console.log("ERROR no miden lo mismo el renglon " + i);
      break;
    }

  }
console.log(matrix);
});
