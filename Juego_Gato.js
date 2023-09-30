const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const movimientos = 5;
let turno = 'X';
const movimiento_X = [[0, 0], [1, 1], [2, 2], [0, 1], [1, 0]];
const movimiento_O = [[0, 2], [2, 0], [2, 1], [1, 2], [0, 2]];
