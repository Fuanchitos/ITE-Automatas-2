/*El algoritmo debe leer los pasos y aplicarlos a los indices del camino, ejemplo:

- Si al llegar al final del arreglo aun quedan pasos, el algoritmo debera ser de arreglo circular
- Los pasos solo deberan ser positivos.
- Los pasos no pueden ser mayor que el camino
--------------------------------------------
paso[0] => 2
camino =
paso 0 = [1,2,3,4,5]
paso 1 = [2,1,3,4,5]
paso 2 = [2,3,1,4,5]
paso[1] => 4
camino =
paso 0 = [1,2,3,4,5]
paso 1 = [2,1,3,4,5]
paso 2 = [2,3,1,4,5]
--------------------------------------------*/
const pasos = [2, 4, 1, 2];
const camino = [1, 2, 3, 4, 5];

function aplicarPasosAlCamino(pasos, camino) {
  const n = camino.length;

  // Imprimir el estado inicial del camino
  console.log(`paso 0 = [${camino.join(', ')}]`);

  for (let i = 0; i < pasos.length; i++) {
    const paso = pasos[i];

    // Validar que el paso sea positivo y no mayor que el camino
    if (paso <= 0 || paso > n) {
      console.log(`El paso ${i + 1} es inválido.`);
      continue;
    }

    // Realizar la rotación circular
    for (let j = 0; j < paso; j++) {
      const elemento = camino.shift(); // Extraer el primer elemento
      camino.push(elemento); // Agregar el elemento al final
    }

    // Mostrar el estado del camino
    console.log(`paso ${i + 1} = [${camino.join(', ')}]`);
  }
}

aplicarPasosAlCamino(pasos, camino);
