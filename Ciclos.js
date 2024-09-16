// Imprimir en consola los números del 1 al 10
console.log("Números del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Imprimir en consola los números del 10 al 1
console.log("Números del 10 al 1:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Imprimir en consola los números del 1 al 10 pero solo los pares
console.log("Números pares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Imprimir en consola los números del 1 al 10 pero solo los impares
console.log("Números impares del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3
console.log("Múltiplos de 3 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5
console.log("Múltiplos de 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5
console.log("Múltiplos de 3 y 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5
console.log("Múltiplos de 3 o 5 del 1 al 10:");
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}
