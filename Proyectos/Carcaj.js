/* 
    =========================================
           EJERCICIOS DE PRÁCTICA JS
    =========================================
*/

// --- EJERCICIO 2: LLUVIA DE FLECHAS (Bucles) ---
/* Crea una función llamada 'disparar()'.
   1. Usa un bucle 'for' que cuente del 1 al 5.
   2. En cada vuelta imprime: "¡Flecha número [i] impacta!"
   3. Al terminar el bucle (fuera), imprime: "Carcaj vacío."
*/
function disparar(){
  for (let i = 1; i <= 5; i++) {
    console.log("¡Flecha número " + i + " impacta!");
  }
  console.log("¡El carcaj está vacío!");
}
