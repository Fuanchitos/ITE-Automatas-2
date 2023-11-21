const reglas_sintacticas = {
    "SELECT": [200, 10, 10],
    "UPDATE": [201],
    "DELETE": [202]
};

const SELECT_1 = [200, 10, 10];
const FROM = [115, 998];
const DATA = [200, 10, 10, 115, 998, 12, 60, 201, 10, 201, 10, 10, 115, 998, 12, 60, 201, 10, 12]; // tokens contenido

function print_error(token) {
    console.error("Error sintáctico, en el token " + token);
}

function valida_select(posicion) {
    console.log("Posicion: " + posicion);
    console.log(posicion + " -> SELECT : " + SELECT_1);

    for (let j = 1; j < SELECT_1.length; j++) {
        console.log("Validando : " + SELECT_1[j]);
        if (DATA[posicion + j] !== SELECT_1[j]) {
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
    if (DATA[posicion] !== 998) print_error(DATA[posicion]);
    return posicion;
}

const UPDATE = [201];
const SET = [10, 10];
const WHERE = [60, 201, 10];

function valida_update(posicion) {
    console.log(posicion + " -> UPDATE : " + UPDATE);

    for (let j = 1; j < UPDATE.length; j++) {
        console.log("Validando : " + UPDATE[j]);
        if (DATA[posicion + j] !== UPDATE[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    // Aquí puedes agregar la lógica para validar la cláusula SET y WHERE si es necesario

    console.log("j : " + j);
    return posicion + (j - 1);
}

function procesar_declaraciones() {
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i] === 200) {
            i = valida_select(i); // SELECT
            console.log("i : " + i);
        } else if (DATA[i] === 115) {
            i = valida_from(i); // FROM
        } else if (DATA[i] === 201) {
            i = valida_update(i); // UPDATE
            console.log("i : " + i);
        } else if (DATA[i] === 12 || (DATA[i] === 13 && DATA[i + 1] === 13)) {
            console.log("FIN");
            break;
        } else {
            print_error(DATA[i]);
            break;
        }
    }
}

// Llama a la función principal para procesar las declaraciones
procesar_declaraciones();
