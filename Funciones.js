//Crear una función que reciba un string y retorne el string en mayúsculas
function convertirAMayusculas(str) {
  return str.toUpperCase();
}

const textoEnMayusculas = convertirAMayusculas("ingenieria");
console.log(textoEnMayusculas);

//Crear una función que reciba un string y retorne el string en minúsculas
function convertirAMinusculas(str) {
  return str.toLowerCase();
}

const textoEnMinusculas = convertirAMinusculas("ingenieria");
console.log(textoEnMinusculas);

//Crear una función que reciba como parámetro 2 números y los reste
function restar(numero1, numero2) {
  return numero1 - numero2;
}

const resultadoResta = restar(40, 20);
console.log(resultadoResta);

// Crear una función que reciba como parámetro 2 números y los divida
function dividir(numero1, numero2) {
  if (numero2 === 0) {
    return "No se puede dividir entre cero";
  }
  return numero1 / numero2;
}

const resultadoDivision = dividir(10, 20);
console.log(resultadoDivision);

//Crear una función que reciba como parámetro 2 números y los multiplique
function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

const resultadoMultiplicacion = multiplicar(10, 50);
console.log(resultadoMultiplicacion);

//Crear una función que reciba un string y devuelva la longitud del string
function obtenerLongitud(str) {
  return str.length;
}

const longitudTexto = obtenerLongitud("Jorge");
console.log(longitudTexto);

