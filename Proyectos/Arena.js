function arena() {
  // 1. DEFINIR LOS LUCHADORES
  let heroe = {
    vida: 100,
    ataque: 20
  };
  
  let monstruo = {
    vida: 100,
    ataque: 15
  };

  console.log("--- COMIENZA LA PELEA ---");

  // 2. EL BUCLE DE COMBATE
  // Mientras AMBOS sigan vivos...
  while (heroe.vida > 0 && monstruo.vida > 0) {
    
    // El Héroe pega
    monstruo.vida = monstruo.vida - heroe.ataque;
    console.log("Héroe ataca. Monstruo baja a: " + monstruo.vida + " PV");

    // El Monstruo pega (si sigue vivo)
    if (monstruo.vida > 0) {
       heroe.vida = heroe.vida - monstruo.ataque;
       console.log("Monstruo ataca. Héroe baja a: " + heroe.vida + " PV");
    }
    
    console.log("------------------------");
  }

  // 3. RESULTADO FINAL
  if (heroe.vida > 0) {
    console.log("¡VICTORIA! El monstruo ha caído.");
  } else {
    console.log("¡GAME OVER! El héroe ha muerto.");
  }
}

// ======= ALEATORIEDAD ========
function rngArena() {
  // Función auxiliar para tirar dado de 20 caras
  function d20() {
    return Math.floor(Math.random() * 20) + 1;
  }

  let heroe = { vida: 100 };
  let monstruo = { vida: 100 };

  console.log("--- INICIA EL COMBATE ALEATORIO ---");

  while (heroe.vida > 0 && monstruo.vida > 0) {
    
    // Héroe ataca con daño variable (1-20)
    let golpeH = d20(); 
    monstruo.vida = monstruo.vida - golpeH;
    console.log("Héroe hace " + golpeH + " de daño. Monstruo: " + monstruo.vida);

    // Si el monstruo sigue vivo, contrataca
    if (monstruo.vida > 0) {
       // Vamos a darle un bonus al monstruo (+5) para que sea peligroso
       let golpeM = d20() + 5; 
       heroe.vida = heroe.vida - golpeM;
       console.log("Monstruo hace " + golpeM + " de daño. Héroe: " + heroe.vida);
    }
  }

  // Resultado final
  if (heroe.vida > 0) {
    console.log("¡VICTORIA ÉPICA!");
  } else {
    console.log("¡HAS MUERTO! El monstruo tuvo suerte.");
  }
  
}

function rngArenaPot() {
  function d20() { return Math.floor(Math.random() * 20) + 1; }

  let heroe = { vida: 100, pociones: 3 }; // Damos 3 pociones
  let monstruo = { vida: 100 };

  console.log("--- PELEA CON POCIONES ---");

  while (heroe.vida > 0 && monstruo.vida > 0) {
    
    // --- TURNO DEL HÉROE (IA) ---
    // Si tiene poca vida y le quedan pociones, se cura
    if (heroe.vida < 40 && heroe.pociones > 0) {
      heroe.vida += 30;
      heroe.pociones--; // Restamos una poción
      console.log("🧴 ¡El héroe bebe una poción! Sube a " + heroe.vida + " PV.");
      
    } else {
      // Si está bien de vida, ataca
      let dano = d20();
      monstruo.vida -= dano;
      console.log("⚔️ Héroe ataca: " + dano + " daño.");
    }

    // --- TURNO DEL MONSTRUO ---
    if (monstruo.vida > 0) {
       let danoM = d20() + 2; // Bajamos un poco el cheat del monstruo
       heroe.vida -= danoM;
       console.log("👹 Monstruo pega: " + danoM + " daño. (Héroe: " + heroe.vida + ")");
    }
    
    console.log("------------------");
  }

  if (heroe.vida > 0) console.log("¡VICTORIA!");
  else console.log("DERROTA...");
}
