//Borrar matrix.txt al ejecutar

const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const movimientos = 9
let turno = 'X'

// GANA X si en turno = es 'X', GANA 0 si en turno = es 'O'
const movimiento_X = [[0, 0], [0, 1], [1, 0], [2, 1], [2, 0]];
const movimiento_O = [[0, 0], [0, 1], [1, 0], [2, 1], [2, 0]];

//EMPATE si modificamos el array de los movimientos por los de abajo
//const movimiento_X = [[0,0],[0,0],[1,1],[0,0],[2,1],[0,0],[0,2],[0,0],[1,2]];
//const movimiento_O = [[0,0],[0,1],[0,0],[1,0],[0,0],[2,0],[0,0],[2,2],[1,2]];

function imprimirTablero(tablero) {
  for (let fila of tablero) {
    const filaImpresa = fila.map(valor => (valor === '-' ? '0' : valor)).join(' | ');
    console.log(filaImpresa);
  }
}

function cargarTablero(callback) {
  fs.readFile('matrix.txt', 'utf8', (err, data) => {
    if (err) {
      console.log("El archivo 'matrix.txt' no se encontró. Creando un nuevo tablero.");
      const tablero = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
      callback(tablero);
    } else {
      const lineas = data.split('\n');
      const tablero = lineas.map(linea => linea.split(' | '));
      callback(tablero);
    }
  });
}

function guardarTablero(tablero) {
  const data = tablero.map(fila => fila.join(' | ')).join('\n');
  fs.writeFile('matrix.txt', data, (err) => {
    if (err) {
      console.error('Error al guardar el tablero en el archivo matrix.txt', err);
    }
  });
}

function jugar() {
  cargarTablero((tablero) => {
    for (let i = 0; i < movimientos; i++) {
      const movimiento = turno === 'X' ? movimiento_X[i] : movimiento_O[i];
      const fila = movimiento[0];
      const columna = movimiento[1];

      if (tablero[fila][columna] === '-') {
        tablero[fila][columna] = turno;
      } else {
        console.log('Movimiento inválido. Inténtalo de nuevo.');
        return;
      }

      guardarTablero(tablero);

      if (verificarGanador(tablero, turno)) {
        imprimirTablero(tablero);
        console.log(`¡El jugador ${turno} ha ganado!`);
        return;
      } else if (tableroLleno(tablero)) {
        imprimirTablero(tablero);
        console.log('¡Empate!');
        return;
      }

      turno = turno === 'X' ? 'O' : 'X';
    }

    imprimirTablero(tablero);
  });
}

function verificarGanador(tablero, jugador) {
  // Verificar filas
  for (let fila = 0; fila < 3; fila++) {
    if (tablero[fila][0] === jugador && tablero[fila][1] === jugador && tablero[fila][2] === jugador) {
      return true;
    }
  }

  // Verificar columnas
  for (let columna = 0; columna < 3; columna++) {
    if (tablero[0][columna] === jugador && tablero[1][columna] === jugador && tablero[2][columna] === jugador) {
      return true;
    }
  }

  // Verificar diagonales
  if (tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2] === jugador) {
    return true;
  }
  if (tablero[0][2] === jugador && tablero[1][1] === jugador && tablero[2][0] === jugador) {
    return true;
  }
  return false;
}

function tableroLleno(tablero) {
  for (let fila of tablero) {
    if (fila.includes('-')) {
      return false;
    }
  }
  return true;
}

jugar();