/* 
    =========================================
           EJERCICIOS DE PRÁCTICA JS
    =========================================
*/

// --- EJERCICIO 3: EL LIBRO DE HECHIZOS (Arrays) ---
/* Crea una función llamada 'leerLibro()'.
   1. Crea un Array con 4 hechizos (ej: "Fuego", "Hielo", "Rayo", "Curar").
   2. Muestra en consola el PRIMER hechizo y el TERCER hechizo.
   (Recuerda que la cuenta empieza en 0).
*/

function leerLibro() {
  let libro = ['Fuego', 'Hielo', 'Rayo', 'Curar'];
  console.log(libro[0] + " y " + libro[2]);
}