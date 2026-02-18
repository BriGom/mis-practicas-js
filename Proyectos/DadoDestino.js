/* 
    =========================================
           EJERCICIOS DE PRÁCTICA JS
    =========================================
*/

// --- EJERCICIO 1: EL DADO DEL DESTINO (Condicionales) ---
/* Crea una función llamada 'evaluarTirada(dadoultado)' que reciba un número (d20).
   1. Si es 20 -> Muestra: "¡Éxito Crítico! Daño doble."
   2. Si es 1  -> Muestra: "¡Pifia! Te golpeas a ti mismo."
   3. Otro    -> Muestra: "Tirada normal: [dadoultado]"
*/

function evaluarTirada() {
  const dado = Math.floor(Math.random() * 20) + 1;
  
  if (dado === 20) {
    console.log(dado +": ¡Éxito crítico!, Daño doble");
  } else if (dado === 1) {
    console.log("¡Pifia! Te golpeas a tí mismo...");
  } else {
    console.log(dado + ": Tirada normal");
  }
}
