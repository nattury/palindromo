
function verificarPalabra(){
const palabraIngresada = document.getElementById("palabraIngresada").value;
// Convierte la palabra en minuscula
const palabraTrans = palabraIngresada.toLowerCase();
console.log(palabraTrans);
let palabraReves = "";
// Recorrido de la palabra
for (let i= palabraTrans.length-1; i>=0; i--) {
    palabraReves += palabraTrans[i];
 }
 // Se verifica si es un palíndromo

  if (palabraReves == palabraTrans) {
    resultado.innerHTML = "La palabra que ingresaste es un palíndromo";
  } else {
    resultado.innerHTML = "La palabra que ingresaste no es un palíndromo";
  }
}