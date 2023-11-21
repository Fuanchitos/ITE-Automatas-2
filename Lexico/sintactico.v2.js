function print(texto) {
    console.log("Son Iguales " + texto);
    contador = contador + 1;
}

const reglas_sintacticas = {
    "SELECT": [200, 10, 10],
    "UPDATE": [201],
    "DELETE": [202],
    "INSERT": [203]
}

const SELECT_1 = [200, 10, 10];
const FROM = [115, 998];
const DATA = [200, 10, 10, 115, 998, 12, 60, 201, 10]; // tokens contenido

function print_error(token) {
    console.error("Error sintáctico, en el token " + token);
}

function valida_select(posicion) {
    console.log("Posicion: " + posicion);
    console.log(posicion + " -> SELECT : " + SELECT_1);

    for (var j = 1; j <= SELECT_1.length - 1; j++) {
        console.log("Validando : " + SELECT_1[j]);
        if (DATA[posicion + j] != SELECT_1[j]) {
            print_error(DATA[posicion + j]);
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

function valida_insert_into(posicion) {
    console.log(posicion + " -> INSERT INTO : " + reglas_sintacticas.INSERT);

    for (var j = 1; j <= reglas_sintacticas.INSERT.length - 1; j++) {
        console.log("Validando : " + reglas_sintacticas.INSERT[j]);
        if (DATA[posicion + j] != reglas_sintacticas.INSERT[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

console.log("DATA: " + DATA);

for (i = 0; i < DATA.length; i++) {
    if (DATA[i] == 200) {
        i = valida_select(i); // SELECT
        console.log("i : " + i);
    } else if (DATA[i] == 115) {
        i = valida_from(i); // FROM
        console.log("i : " + i);
    } else if (DATA[i] == 203) {
        i = valida_insert_into(i); // INSERT INTO
        console.log("i : " + i);
    } else if (DATA[i] == 12 || (DATA[i] == 13 && DATA[i + 1] == 13)) {
        console.log("FIN");
        break;
    } else {
        print_error(DATA[i]);
        break;
    }
}
