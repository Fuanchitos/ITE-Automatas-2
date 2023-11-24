const fs = require('fs');

function readSqlKeywords(filename) {
  const keywords = {};

  const content = fs.readFileSync(filename, 'utf-8');
  const lines = content.split('\n');

  lines.forEach(line => {
    const [word, value] = line.split(':');
    if (word && value) {
      keywords[word.trim()] = parseInt(value.trim());
    }
  });

  return keywords;
}

const sqlKeywordsFile = 'sqlkeywords.txt';
const sqlKeywords = readSqlKeywords(sqlKeywordsFile);

function print(texto) {
  console.log("Son Iguales " + texto);
  contador = contador + 1;
}

function print_error(token) {
  console.error("Error sintactico, en el token " + token);
}

const reglas_sintacticas = {
  "SELECT": [sqlKeywords.SELECT, 10, 10],
  "UPDATE": [sqlKeywords.UPDATE],
  "DELETE": [sqlKeywords.DELETE]
};

const SELECT_1 = [sqlKeywords.SELECT, 10, 10];
const FROM = [sqlKeywords.FROM, sqlKeywords.IDENTIFIER];
const DATA = [sqlKeywords.SELECT, 10, 10, sqlKeywords.FROM, sqlKeywords.IDENTIFIER, 12, 60, sqlKeywords.UPDATE, 10];

function valida_select(posicion) {
  console.log("Posicion: " + posicion);
  console.log(posicion + " -> SELECT : " + SELECT_1);

  for (let j = 1; j < SELECT_1.length; j++) {
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
  if (DATA[posicion] !== sqlKeywords.IDENTIFIER) print_error(DATA[posicion]);
  return posicion;
}

console.log("DATA: " + DATA);

for (let i = 0; i < DATA.length; i++) {
  if (DATA[i] === sqlKeywords.SELECT) {
    i = valida_select(i); // SELECT
    console.log("i : " + i);
  } else if (DATA[i] === sqlKeywords.FROM) {
    i = valida_from(i); // FROM
  } else if (DATA[i] === 12 || (DATA[i] === 13 && DATA[i + 1] === 13)) {
    console.log("FIN");
    break;
  } else {
    print_error(DATA[i]);
    break;
  }
}
