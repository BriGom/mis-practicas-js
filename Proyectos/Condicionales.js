// --- 1. CONDICIONALES (Toma de decisiones) ---
function evaluarNumero(n) { // 'n' es el parámetro (el dato que recibe)
  if (n > 0) {
    // Si la condición es verdadera, entra aquí
    console.log(n + ' es mayor a 0');
  } else if (n < 0) {
    // Si la anterior no fue verdad, pregunta esto
    console.log(n + ' es menor a 0.');
  } else{
    // Si ninguna anterior se cumplió (es 0), cae aquí
    console.log('Es cero: ' + n);
  }
};

// --- 2. BUCLES (Repetición) ---
function bucle() {
  // Estructura for: (Inicio; Condición para seguir; Qué hacer al final de cada vuelta)
  // i-- significa que restamos 1 en cada paso (cuenta atrás)
  for (let i = 5; i > 0; i--) {
    console.log("Número: " + i);
  }
  // Esto se ejecuta solo cuando el bucle termina
  console.log('Despegue!');
};

// --- 3. ARRAYS (Listas) ---
function verInventario(){
  // Usamos corchetes [] para listas
  let frutas = ['Manzana','Pera','Platano'];
  
  // IMPORTANTE: En programación empezamos a contar desde 0
  // [0]=Manzana, [1]=Pera, [2]=Plátano
  console.log(frutas[1]); 
};

// --- 4. OBJETOS (Datos complejos y Acciones) ---
function personaje(){
  // Usamos llaves {} para objetos
  let heroe = {
    // Propiedad: Valor (separados por comas)
    nombre : "Baruuk",
    clase1 : "Monje",
    clase2 : "Guerrero",
    raza : "Semielfo",
    nivelP : 6,
    nivelS : 1, // ¡No olvides la coma si hay más cosas abajo!
    
    // MÉTODO: Una función dentro de un objeto (una habilidad)
    atacar : function () {
      // 'this' sirve para usar datos DE ESTE mismo objeto
      console.log(this.nombre + " lanza un...¡Puñetazo!");
    }
  }

  // Accedemos a los datos usando el PUNTO (.)
  let nivelT = heroe.nivelP + heroe.nivelS;
  
  console.log("Soy "+heroe.nombre+", un "+heroe.raza+" "+heroe.clase1+" "+ heroe.clase2+", nivel "+nivelT);
  
  // Ejecutamos la acción (método) del objeto
  heroe.atacar();
};
