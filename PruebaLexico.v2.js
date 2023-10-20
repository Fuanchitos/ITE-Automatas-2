const fs = require('fs');
const readline = require('readline');

// Leer el archivo de palabras reservadas de MySQL y cargarlo en un objeto
const reservedWords = {};
const mysqlReservedWordsFile = 'mysql_reserved_words.txt';
const mysqlReservedWordsStream = readline.createInterface({
  input: fs.createReadStream(mysqlReservedWordsFile),
  output: process.stdout,
  terminal: false
});

mysqlReservedWordsStream.on('line', (line) => {
  const [number, word] = line.split(' : ');
  reservedWords[word] = parseInt(number, 10);
});

mysqlReservedWordsStream.on('close', () => {
  // Procesar todas las palabras reservadas
  for (const word in reservedWords) {
    console.log(`${word} (Número: ${reservedWords[word]}) es una palabra reservada de MySQL.`);
  }
});
