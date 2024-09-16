// Crear una función que reciba como parámetro un array de números y retorne la suma de todos los números del array
function sumarNumeros(array) {
  return array.reduce((suma, numero) => suma + numero, 0);
}

const numeros1 = [1, 2, 3, 4, 5];
const sumaTotal = sumarNumeros(numeros1);
console.log(sumaTotal);

//Crear una función que reciba como parámetro un array de números y retorne el promedio de todos los números del array
function promedioNumeros(array) {
  const suma = sumarNumeros(array);
  return array.length > 0 ? suma / array.length : 0;
}

const promedioTotal = promedioNumeros(numeros1);
console.log(promedioTotal);

//Crear una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas
function convertirStringsAMayusculas(array) {
  return array.map(str => str.toUpperCase());
}

const strings = ["soy", "jorge", "martinez"];
const mayusculas = convertirStringsAMayusculas(strings);
console.log(mayusculas);

//Crear una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares
function filtrarNumerosPares(array) {
  return array.filter(numero => numero % 2 === 0);
}

const numeros2 = [1, 2, 3, 4, 5, 6];
const pares = filtrarNumerosPares(numeros2);
console.log(pares);
