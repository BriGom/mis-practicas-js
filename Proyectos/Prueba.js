console.log("🎲 Lanzando el dado del destino...");

// Esperamos 1 segundo para dar emoción
setTimeout(() => {
    const resultado = Math.floor(Math.random() * 20) + 1;

    console.log(`\n>> ¡Has sacado un ${resultado}! <<`);

    if (resultado === 20) {
        console.log("¡CRÍTICO! ¡Daño masivo! 💥⚔️");
    } else if (resultado === 1) {
        console.log("¡PIFIA! Te has tropezado... 💀");
    } else {
        console.log("Un tiro normal.");
    }
}, 1000);
