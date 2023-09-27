const arreglo = [0,1,3,4]
const data = ["Saludo", "mundo",5,"asdadas"]
//generar un diccionario de datos tomando como keys=arreglo y como data el arreglo data
// 0 -> "saludo"
// Ejemplo al presionar el 0 imprimir "Saludo"

const diccionario = {};

/*for (let i = 0; i < arreglo.length; i++) {
  const key = arreglo[i];
  const value = data[i];
  diccionario[key] = value;
}
console.log(diccionario);
*/

for(let i=0; i<arreglo.length;i++){
  if (data[i] == undefined) {return}
    diccionario[arreglo[i]] = data[i]
    
}
console.log("arreglo_diccionario : " + diccionario[2])
