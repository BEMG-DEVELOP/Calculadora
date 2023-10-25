let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 20, 10];
let numeroMaximo = 0;
let tamano = numeros.length;

for (i = 0; i < tamano; i++) {
  if (numeroMaximo < numeros[i]) {
    numeroMaximo = numeros[i];
  }
}
console.log(numeroMaximo);

let maxima = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 20, 10);
console.log(maxima);