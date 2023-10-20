/*--------------------------LEXICO 1/3--------------------------------------*/
const fs = require('fs');

//sql_text.txt
fs.readFile('C:\\Users\\Salaz\\Desktop\\ITE-Automatas-2\\Lexico\\sql_text.txt', 'utf8', (err, data) => {
    // Maneja cualquier error que ocurra durante la lectura del archivo e imprímelo en la consola
    if (err) {
        console.error(err);
        return;
    }
    
// Define una función llamada 'separarTexto' para dividir el texto en palabras y asignar IDs
function separarTexto(data, palabraClave) {
    // Elimina espacios en blanco al principio y al final del texto
    data = data.trim()
    // Inicializa arrays para guardar palabras y sus IDs
    let guardarPalabras = []
    let palabra = ''
    let id = []

    for (let i = 0; i < data.length; i++) {
        let caracter = data[i]
    
        if (caracter !== ' ') {                // Si el caracter no es un espacio en blanco, agrégalo a la palabra actual
            palabra += caracter
        } else if (palabra !== '') {              // Si se encuentra un espacio en blanco y la palabra no está vacía, agrega la palabra al array 'guardarPalabras'
            guardarPalabras.push(palabra)
            if (palabraClave[palabra]) {                    // Busca el ID correspondiente en el objeto 'palabraClave' y agrégalo al array 'id'
                id.push(palabraClave[palabra])
            } else {
                id.push(null)
            }
            // Restablece la palabra actual
            palabra = ''
        }
    }
    // Verifica si la última palabra no se ha procesado 
    if (palabra !== '') {
        guardarPalabras.push(palabra)
        // Busca el ID correspondiente en el objeto 'palabraClave' y agrégalo al array 'id'
        if (palabraClave[palabra]) {
            id.push(palabraClave[palabra])
        } else {
            id.push(null)
        }
    }
    // Devuelve un objeto con las palabras y sus IDs
    return { palabras: guardarPalabras, ids: id }
}

/*--------------------------LEXICO 2/3--------------------------------------*/

// leer archivo sqlkeywords
//sqlkeywords.txt
fs.readFile('C:\\Users\\Salaz\\Desktop\\ITE-Automatas-2\\Lexico\\sqlkeywords.txt', 'utf8', (err, keyData) => {
    if (err) {
        // Maneja cualquier error que ocurra durante la lectura del archivo e imprímelo en la consola
        console.error(err);
        return;
    }

const linea = keyData.split('\n')   // Divide el contenido del archivo en líneas
const keywords = []     // Inicializa arrays para almacenar palabras clave y sus IDs
const num = []

    // Divide el contenido del archivo en líneas
for (let i = 0; i < linea.length; i++) {
    let dividirLinea = linea[i]
    let parts = dividirLinea.split(': ')

    //verifica que se dividio y guarda las 2 partes
    if (parts.length === 2) {
        // Almacena la palabra clave en el array 'keywords' y convierte el ID a un número entero
        keywords[parts[1].trim()] = parseInt(parts[0])
    }
}   
        // Llama a la función 'separarTexto' para procesar el contenido del archivo 'data' y asignar IDs
        const { palabras, ids } = separarTexto(data, keywords)
        // Imprime las palabras y sus IDs en la consola
        console.log(palabras)
        console.log(ids)
    })
})
