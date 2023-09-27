const arreglo1 = [1,2,3,4,5]
const arreglo2 = [0,2,2,4,7]
const arreglo3 = [19,2,3,42,1]

/*
1 - arreglo3 -> 4
2 - arreglo2 -> 1,2
2 - arreglo3 -> 1
*/

//var arreglo = 1

var numeroBuscar = 2;

function buscarNumeroEnArreglos(numero) {
    const arreglos = [
      [1, 2, 3, 4, 5],
      [0, 2, 2, 4, 7],
      [19, 2, 3, 42, 1]
    ];
  
    const resultados = [];
  
    for (let i = 0; i < arreglos.length; i++) {
      const arreglo = arreglos[i];
      if (arreglo.includes(numero)) {
        const posicion = arreglo.indexOf(numero);
        const mensaje = `Se encuentra en ${i + 1} en la posición ${posicion}`;
        resultados.push(mensaje);
      }
    }
  
    if (resultados.length === 0) {
      return "Error";
    } else if (resultados.length === 1) {
      return resultados[0];
    } else {
      return resultados.join('\n') + "\n";
    }
  }
  
  
  console.log(buscarNumeroEnArreglos(numeroBuscar));
  