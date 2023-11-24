const fs = require('fs');

// Función para separar el texto en palabras y asignar IDs
function separarTexto(data, palabraClave) {
    // Elimina espacios en blanco al principio y al final del texto
    data = data.trim();
    
    // Inicializa arrays para guardar palabras y sus IDs
    let guardarPalabras = [];
    let palabra = '';
    let id = [];

    for (let i = 0; i < data.length; i++) {
        let caracter = data[i];
    
        if (caracter !== ' ') {                
            // Si el caracter no es un espacio en blanco, agrégalo a la palabra actual
            palabra += caracter;
        } else if (palabra !== '') {              
            // Si se encuentra un espacio en blanco y la palabra no está vacía, agrega la palabra al array 'guardarPalabras'
            guardarPalabras.push(palabra);
            // Busca el ID correspondiente en el objeto 'palabraClave' y agrégalo al array 'id'
            id.push(palabraClave[palabra] || null);
            // Restablece la palabra actual
            palabra = '';
        }
    }

    // Verifica si la última palabra no se ha procesado 
    if (palabra !== '') {
        guardarPalabras.push(palabra);
        // Busca el ID correspondiente en el objeto 'palabraClave' y agrégalo al array 'id'
        id.push(palabraClave[palabra] || null);
    }

    // Devuelve un objeto con las palabras y sus IDs
    return { palabras: guardarPalabras, ids: id };
}

// Rutas de los archivos
const rutaTexto = 'C:\\Users\\Salaz\\Desktop\\ITE-Automatas-2\\Lexico\\sql_text.txt';
const rutaKeywords = 'C:\\Users\\Salaz\\Desktop\\ITE-Automatas-2\\Lexico\\sqlkeywords.txt';

// Lectura del archivo sql_text.txt
fs.readFile(rutaTexto, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Lectura del archivo sqlkeywords.txt
    fs.readFile(rutaKeywords, 'utf8', (err, keyData) => {
        if (err) {
            console.error('Error al leer el archivo de palabras clave:', err);
            return;
        }

        // Procesamiento de las palabras clave y asignación de IDs
        const linea = keyData.split('\n');   
        const keywords = {};

        for (let i = 0; i < linea.length; i++) {
            let dividirLinea = linea[i];
            let parts = dividirLinea.split(': ');

            // Verifica que se dividió y guarda las 2 partes
            if (parts.length === 2) {
                // Almacena la palabra clave en el objeto 'keywords' y convierte el ID a un número entero
                keywords[parts[1].trim()] = parseInt(parts[0]);
            }
        }

        // Llama a la función 'separarTexto' para procesar el contenido del archivo 'data' y asignar IDs
        const { palabras, ids } = separarTexto(data, keywords);

        // Imprime las palabras y sus IDs en la consola
        console.log('Palabras:', palabras);
        console.log('IDs:', ids);
    });
});
