function print(texto) {
    console.log("Son Iguales " + texto);
    contador = contador + 1;
}

const reglas_sintacticas = {
    "SELECT" : [200, 10, 10],
    "UPDATE" : [201],
    "DELETE" : [202]
}
const SELECT_1 = [200, 10, 10];
const FROM = [115, 998]; 
const DATA = [200, 10, 10, 115, 998, 12, 60, 201,10];// tokens contenido

const WHERE = [60, 201, 10]; // Assuming 60 is the token for WHERE


function print_error(token) {
    console.error("Error sintactico, en el token " + token);
}
function valida_select(posicion) {
    console.log("Posicion: " + posicion);
    console.log(posicion + " -> SELECT : " + SELECT_1);

    for (var j = 1; j <= SELECT_1.length - 1; j++) {
        console.log("Validando : " + SELECT_1[j]);
        if (DATA[posicion + j] != SELECT_1[j]) {
-            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}


function valida_from(posicion) {
    console.log(posicion + " -> FROM : " + FROM);
    posicion = posicion + 1;
    console.info("DATA from : " + DATA[posicion]);
    if (DATA[posicion] != 998) print_error(DATA[posicion]);
    return posicion;
}

function valida_where(posicion) {
    console.log(posicion + " -> WHERE : " + WHERE);
    posicion = posicion + 1;

    for (var j = 1; j <= WHERE.length - 1; j++) {
        console.log("Validando : " + WHERE[j]);
        if (DATA[posicion + j] != WHERE[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    // Add logic to handle conditions within WHERE clause if needed

    return posicion + (j - 1);
}

function valida_distinct(posicion) {
    // Add logic to handle DISTINCT clause if needed
    console.log("DISTINCT clause");
    // Assuming 100 is the token for DISTINCT
    if (DATA[posicion + 1] === 100) {
        console.log("DISTINCT token found");
        // Add logic here for handling DISTINCT
        posicion = posicion + 2; // Move the position past DISTINCT token
    }

    return posicion;
}

console.log("DATA: " + DATA);

for (i = 0; i < DATA.length; i++) {
    if (DATA[i] == 200) {
        i = valida_select(i); // SELECT
        console.log("i : " + i);

        // Check for DISTINCT and WHERE after SELECT
        i = valida_distinct(i);
        i = valida_where(i);
    } else if (DATA[i] == 115) {
        i = valida_from(i); // FROM
    } else if (DATA[i] == 12 || (DATA[i] == 13 && DATA[i + 1] == 13)) {
        console.log("FIN");
        break;
    } else {
        print_error(DATA[i]);
        break;
    }
}