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
const WHERE = [60, 201, 10]; 
const ORDER_BY = [203]; 
const LIMIT = [204]; 
const GROUP_BY = [205]; 
const HAVING = [206]; 
const JOIN = [207]; 
const INNER_JOIN = [208]; 
const LEFT_JOIN = [209]; 
const RIGHT_JOIN = [210]; 
const COUNT = [211]; 
const SUM = [212]; 
const AVG = [213];
const MAX = [214]; 
const MIN = [215]; 
const AS = [216]; 
const LIKE = [217]; 
const IN = [218]; 
const BETWEEN = [219]; 
const IS_NULL = [220]; 
const IS_NOT_NULL = [221]; 
const ASC = [222]; 
const DESC = [223]; 


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
    return posicion + (j - 1);
}

function valida_distinct(posicion) {
    console.log("DISTINCT clause");
    if (DATA[posicion + 1] === 100) {
        console.log("DISTINCT token found");
        posicion = posicion + 2; // Move the position past DISTINCT token
    }

    return posicion;
}

function valida_order_by(posicion) {
    console.log(posicion + " -> ORDER BY : " + ORDER_BY);
    return posicion + 1;
}

function valida_limit(posicion) {
    console.log(posicion + " -> LIMIT : " + LIMIT);
    return posicion + 1;
}

function valida_group_by(posicion) {
    console.log(posicion + " -> GROUP BY : " + GROUP_BY);
    return posicion + 1;
}

function valida_having(posicion) {
    console.log(posicion + " -> HAVING : " + HAVING);
    return posicion + 1;
}

function valida_join(posicion) {
    console.log(posicion + " -> JOIN : " + JOIN);
    return posicion + 1;
}

function valida_agregacion(posicion) {
    console.log("Agregación encontrada");
    return posicion + 1;
}

function valida_as(posicion) {
    console.log(posicion + " -> AS : " + AS);
    return posicion + 1;
}

function valida_like(posicion) {
    console.log(posicion + " -> LIKE : " + LIKE);
    return posicion + 1;
}

function valida_in(posicion) {
    console.log(posicion + " -> IN : " + IN);
    return posicion + 1;
}

function valida_between(posicion) {
    console.log(posicion + " -> BETWEEN : " + BETWEEN);
    return posicion + 1;
}

function valida_null(posicion, is_null) {
    console.log(posicion + " -> " + (is_null ? "IS NULL" : "IS NOT NULL"));
    return posicion + 1;
}

function valida_asc_desc(posicion) {
    console.log(posicion + " -> ASC/DESC : " + (DATA[posicion] === ASC ? "ASC" : "DESC"));
    return posicion + 1;
}

console.log("DATA: " + DATA);

for (i = 0; i < DATA.length; i++) {
    if (DATA[i] == 200) {
        i = valida_select(i); // SELECT
        console.log("i : " + i);
        i = valida_distinct(i);
        i = valida_where(i);

        while (DATA[i] === ORDER_BY || DATA[i] === LIMIT || DATA[i] === GROUP_BY || DATA[i] === HAVING || DATA[i] === JOIN) {
            if (DATA[i] === ORDER_BY) {
                i = valida_order_by(i);
            } else if (DATA[i] === LIMIT) {
                i = valida_limit(i);
            } else if (DATA[i] === GROUP_BY) {
                i = valida_group_by(i);
            } else if (DATA[i] === HAVING) {
                i = valida_having(i);
            } else if (DATA[i] === JOIN) {
                i = valida_join(i);
            }
        }

        while (DATA[i] === COUNT || DATA[i] === SUM || DATA[i] === AVG || DATA[i] === MAX || DATA[i] === MIN) {
            i = valida_agregacion(i);
        }
        while (
            DATA[i] === AS || DATA[i] === LIKE || DATA[i] === IN || DATA[i] === BETWEEN ||
            DATA[i] === IS_NULL || DATA[i] === IS_NOT_NULL || DATA[i] === ASC || DATA[i] === DESC
        ) {
            if (DATA[i] === AS) {
                i = valida_as(i);
            } else if (DATA[i] === LIKE) {
                i = valida_like(i);
            } else if (DATA[i] === IN) {
                i = valida_in(i);
            } else if (DATA[i] === BETWEEN) {
                i = valida_between(i);
            } else if (DATA[i] === IS_NULL || DATA[i] === IS_NOT_NULL) {
                i = valida_null(i, DATA[i] === IS_NULL);
            } else if (DATA[i] === ASC || DATA[i] === DESC) {
                i = valida_asc_desc(i);
            }
        }
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