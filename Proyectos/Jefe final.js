/* 
    =========================================
           EJERCICIOS DE PRÁCTICA JS
    =========================================
*/

// --- EJERCICIO 4: EL DRAGÓN (Objetos) ---
/* Crea una función llamada 'crearEnemigo()'.
   1. Define un objeto 'dragon' con:
      - color: "Rojo"
      - vida: 100
      - rugir: Una función que imprima: "¡El dragón [color] ruge con [vida] de vida!"
   2. Ejecuta la función 'rugir' del dragón.
*/

function crearEnemigo(){
  const dragon = {
    color: "Rojo",
    vida: 100,
    rugir: function() {
      console.log("¡El dragón " + this.color + " ruge con " + this.vida + " de vida!");
    }
  };
  dragon.rugir();
}
