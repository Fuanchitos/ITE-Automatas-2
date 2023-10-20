// Función para que el codigo que entra regrese como una lista de tokens.
function analizadorLexico(codigo) {
  
    // Definimos una expresión regular `regex` para identificar los componentes léxicos.
    const regex = /(\w+|[\+\-\*/<>=,\'()\n])/g;
  
    // Match en el código con la expresión regular para obtener una lista de coincidencias.
    const tokens = codigo.match(regex);
  
    // Eliminamos los espacios en blanco vacíos.
    const tokensLimpio = tokens.filter((token) => token.trim() !== '');
  
    // Devolvemos la lista de tokens.
    return tokensLimpio;
  }
  
  const ejemploUno = `
  SELECT nombre, puesto
  FROM Personal
  WHERE nombre='Daniel'
  `;
  
  const ejemploDos = `
  CREATE DEFINER = 'admin'@'localhost' PROCEDURE account_count()
  BEGIN
  SELECT 'Number of accounts:', COUNT(*) FROM mysql.user;
  END;
  `;

  const tokensSQL = analizadorLexico(ejemploUno);
  const tokensProcedimiento = analizadorLexico(ejemploDos);
  
  // Imprimir tokens.
  console.log(tokensSQL);
  console.log(tokensProcedimiento);
  