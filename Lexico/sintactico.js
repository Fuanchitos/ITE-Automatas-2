const reglas_sintacticas = {
    "SELECT": [200, 10, 10],
    "UPDATE": [201],
    "DELETE": [202],
    "INSERT": [203],
    "CREATE_TABLE": [204]
};

const SELECT_1 = [200, 10, 10];
const FROM = [115, 998];
const DATA_SELECT = [10, 10, 10, 115, 998, 60, 201, 10, 60, 10, 10, 115, 998, 12]; // tokens contenido

const UPDATE = [201];
const SET = [10, 10];
const WHERE = [60, 201, 10];
const DATA_UPDATE = [201, 10, 10, 115, 998, 12];

const INSERT_INTO = [203];
const PRODUCTS = [200, 10];
const OPEN_PARENTHESIS = [60];
const NAME = [200, 10];
const CATEGORY = [200, 10];
const PRICE = [200, 10];
const CLOSE_PARENTHESIS = [61];
const SELECT_KEYWORD = [200, 10];
const FROM_PRODUCTS = [115, 998];
const ORDER_BY_SALES_DESC = [60, 201, 10, 10, 115, 998, 5, 200, 10, 60, 201, 10, 60, 10, 10, 115, 998, 5, 201, 10, 12];
const LIMIT_1 = [10];
const SEMICOLON = [12];

const CREATE_TABLE_CUSTOMERS = [204, 10, 10, 10, 115, 998, 61, 201, 10, 200, 10, 60, 201, 10, 115, 998, 5, 201, 10, 200, 10, 60, 201, 10, 115, 998, 5, 201, 10, 201, 10, 61, 200, 10, 60, 10, 61];
const CREATE_TABLE_ORDERS = [204, 10, 10, 10, 115, 998, 61, 201, 10, 200, 10, 60, 201, 10, 115, 998, 5, 201, 10, 200, 10, 60, 201, 10, 115, 998, 5, 201, 10, 200, 10, 60, 201, 10, 115, 998, 5, 201, 10, 201, 10, 61, 200, 10, 60, 10, 61];

const DELETE_FROM_ORDERS = [202, 115, 998, 60, 201, 10, 60, 115, 998, 5, 201, 10, 12];
const INSERT_INTO_PRODUCTS = [203, 200, 10, 10, 115, 998, 5, 200, 10, 60, 201, 10, 60, 201, 10, 60, 10, 10, 115, 998, 5, 200, 10, 60, 201, 10, 60, 10, 10, 115, 998, 12, 10];
const INSERT_INTO_PRODUCTS_VALUES = [203, 200, 10, 10, 115, 998, 5, 200, 10, 60, 201, 10, 60, 201, 10, 60, 201, 10, 61, 200, 10, 60, 201, 10, 115, 998, 5, 201, 10, 201, 10, 61, 10, 12];
const INSERT_INTO_ORDER_DETAILS = [203, 200, 10, 10, 115, 998, 5, 200, 10, 60, 201, 10, 60, 10, 10, 115, 998, 5, 200, 10, 60, 201, 10, 60, 201, 10, 60, 10, 10, 115, 998, 5, 200, 10, 61, 200, 10, 60, 201, 10, 60, 201, 10, 60, 201, 10, 61, 10, 10, 115, 998, 12];

function print_error(token) {
    console.error("Error sintáctico, en el token " + token);
}

function valida_select(posicion) {
    console.log("Posicion: " + posicion);
    console.log(posicion + " -> SELECT : " + SELECT_1);

    for (let j = 1; j < SELECT_1.length; j++) {
        console.log("Validando : " + SELECT_1[j]);
        if (DATA_SELECT[posicion + j] !== SELECT_1[j]) {
            print_error(DATA_SELECT[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

function valida_update(posicion) {
    console.log(posicion + " -> UPDATE : " + UPDATE);

    for (let j = 1; j < UPDATE.length; j++) {
        console.log("Validando : " + UPDATE[j]);
        if (DATA_UPDATE[posicion + j] !== UPDATE[j]) {
            print_error(DATA_UPDATE[posicion + j]);
        }
    }

    // Aquí puedes agregar la lógica para validar la cláusula SET y WHERE si es necesario

    console.log("j : " + j);
    return posicion + (j - 1);
}

function valida_insert_into(posicion) {
    console.log(posicion + " -> INSERT INTO : " + INSERT_INTO);

    for (let j = 1; j < INSERT_INTO.length; j++) {
        console.log("Validando : " + INSERT_INTO[j]);
        if (DATA_INSERT[posicion + j] !== INSERT_INTO[j]) {
            print_error(DATA_INSERT[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

function valida_avg_age(posicion) {
    console.log(posicion + " -> AVG(age) : " + AVG_AGE);

    for (let j = 0; j < AVG_AGE.length; j++) {
        console.log("Validando : " + AVG_AGE[j]);
        if (DATA[posicion + j] !== AVG_AGE[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

function valida_create_table_customers(posicion) {
    console.log(posicion + " -> CREATE TABLE customers : " + CREATE_TABLE_CUSTOMERS);

    for (let j = 0; j < CREATE_TABLE_CUSTOMERS.length; j++) {
        console.log("Validando : " + CREATE_TABLE_CUSTOMERS[j]);
        if (DATA[posicion + j] !== CREATE_TABLE_CUSTOMERS[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

function valida_create_table_orders(posicion) {
    console.log(posicion + " -> CREATE TABLE orders : " + CREATE_TABLE_ORDERS);

    for (let j = 0; j < CREATE_TABLE_ORDERS.length; j++) {
        console.log("Validando : " + CREATE_TABLE_ORDERS[j]);
        if (DATA[posicion + j] !== CREATE_TABLE_ORDERS[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

function valida_delete_from_orders(posicion) {
    console.log(posicion + " -> DELETE FROM orders : " + DELETE_FROM_ORDERS);

    for (let j = 0; j < DELETE_FROM_ORDERS.length; j++) {
        console.log("Validando : " + DELETE_FROM_ORDERS[j]);
        if (DATA[posicion + j] !== DELETE_FROM_ORDERS[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

function procesar_declaraciones_select() {
    for (let i = 0; i < DATA_SELECT.length; i++) {
        if (DATA_SELECT[i] === 200) {
            let j = valida_select(i); // SELECT
            console.log("i : " + i);
            i = j; // Actualiza la posición actual
        } else if (DATA_SELECT[i] === 115) {
            let j = valida_from(i); // FROM
            console.log("i : " + i);
            i = j; // Actualiza la posición actual
        } else if (DATA_SELECT[i] === 12 || (DATA_SELECT[i] === 13 && DATA_SELECT[i + 1] === 13)) {
            console.log("FIN");
            break;
        } else {
            print_error(DATA_SELECT[i]);
            break;
        }
    }
}

function procesar_declaraciones_update() {
    for (let i = 0; i < DATA_UPDATE.length; i++) {
        if (DATA_UPDATE[i] === 201) {
            i = valida_update(i); // UPDATE
            console.log("i : " + i);
        } else if (DATA_UPDATE[i] === 12 || (DATA_UPDATE[i] === 13 && DATA_UPDATE[i + 1] === 13)) {
            console.log("FIN");
            break;
        } else {
            print_error(DATA_UPDATE[i]);
            break;
        }
    }
}

function procesar_insert_into() {
    for (let i = 0; i < DATA_INSERT.length; i++) {
        if (DATA_INSERT[i] === 203) {
            i = valida_insert_into(i); // INSERT INTO
            console.log("i : " + i);
        } else if (DATA_INSERT[i] === 10) {
            i = valida_order_details(i); // ORDER DETAILS
            console.log("i : " + i);
        } else if (DATA_INSERT[i] === 60) {
            i = valida_from_orders_join_customers(i); // FROM orders INNER JOIN customers
            console.log("i : " + i);
        } else if (DATA_INSERT[i] === 60) {
            i = valida_where_email_like(i); // WHERE customers.email LIKE %@example.com'
            console.log("i : " + i);
        } else if (DATA_INSERT[i] === 12 || (DATA_INSERT[i] === 13 && DATA_INSERT[i + 1] === 13)) {
            console.log("FIN");
            break;
        } else {
            print_error(DATA_INSERT[i]);
            break;
        }
    }
}

function procesar_update_con_subconsulta() {
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i] === 201) {
            i = valida_update(i); // UPDATE
            console.log("i : " + i);
        } else if (DATA[i] === 10) {
            i = valida_set(i); // SET
            console.log("i : " + i);
        } else if (DATA[i] === 60) {
            i = valida_avg_age(i); // AVG(age)
            console.log("i : " + i);
        } else if (DATA[i] === 115) {
            i = valida_from(i); // FROM
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

function procesar_create_table() {
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i] === 204) {
            i = valida_create_table_customers(i); // CREATE TABLE customers
            console.log("i : " + i);
        } else if (DATA[i] === 205) {
            i = valida_create_table_orders(i); // CREATE TABLE orders
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

function procesar_delete() {
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i] === 202) {
            i = valida_delete_from_orders(i); // DELETE FROM orders
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

function valida_insert_into_products(posicion) {
    console.log(posicion + " -> INSERT INTO products : " + INSERT_INTO_PRODUCTS);

    for (let j = 0; j < INSERT_INTO_PRODUCTS.length; j++) {
        console.log("Validando : " + INSERT_INTO_PRODUCTS[j]);
        if (DATA[posicion + j] !== INSERT_INTO_PRODUCTS[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

function procesar_insert_into_products() {
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i] === 203) {
            i = valida_insert_into_products(i); // INSERT INTO products
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

function procesar_insert_into_products_values() {
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i] === 203) {
            i = valida_insert_into_products_values(i); // INSERT INTO products VALUES
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

function valida_insert_into_products_values(posicion) {
    console.log(posicion + " -> INSERT INTO products VALUES : " + INSERT_INTO_PRODUCTS_VALUES);

    for (let j = 0; j < INSERT_INTO_PRODUCTS_VALUES.length; j++) {
        console.log("Validando : " + INSERT_INTO_PRODUCTS_VALUES[j]);
        if (DATA[posicion + j] !== INSERT_INTO_PRODUCTS_VALUES[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

function valida_insert_into_order_details(posicion) {
    console.log(posicion + " -> INSERT INTO order_details : " + INSERT_INTO_ORDER_DETAILS);

    for (let j = 0; j < INSERT_INTO_ORDER_DETAILS.length; j++) {
        console.log("Validando : " + INSERT_INTO_ORDER_DETAILS[j]);
        if (DATA[posicion + j] !== INSERT_INTO_ORDER_DETAILS[j]) {
            print_error(DATA[posicion + j]);
        }
    }

    console.log("j : " + j);
    return posicion + (j - 1);
}

function procesar_insert_into_order_details() {
    for (let i = 0; i < DATA.length; i++) {
        if (DATA[i] === 203) {
            i = valida_insert_into_order_details(i); // INSERT INTO order_details
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

// Llama a las funciones para procesar las declaraciones
procesar_declaraciones_select();
procesar_declaraciones_update();
procesar_insert_into();
procesar_update_con_subconsulta();
procesar_create_table();
procesar_delete();
procesar_insert_into_products();
procesar_insert_into_products_values();
procesar_insert_into_order_details();