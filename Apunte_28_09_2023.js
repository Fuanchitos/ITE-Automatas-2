const fs = require('fs');

function validarArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== '0' && array[i] !== '1') {
            console.log("Errorsito: " + array[i]);
            return false;
        }
    }
    return true; // Debe ser true si el array pasa la validación
}

const matrix = [];
fs.readFile('matrix.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    var cadena_split = data.split('\n');
    var validar_length = cadena_split[0].length;
    for (let i = 0; i < cadena_split.length - 1; i++) { 
        if (validar_length == cadena_split[i].length) {
            if (validarArray(cadena_split[i])) {
                matrix[i] = cadena_split[i];
                console.log(cadena_split[i]);
            } else {
                console.log("Error en el renglón " + i);
            }
        } else {
            console.log("Error: Las longitudes de las filas no coinciden en el renglón " + i);
        }
    }
});
