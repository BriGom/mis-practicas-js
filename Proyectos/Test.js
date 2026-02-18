// --- 1. Mensajes de carga (Salen en Blanco) ---
console.log("🔄 Iniciando secuencia de prueba automática...");
console.log("📂 Archivo cargado en memoria.");

// --- 2. Definición de una función (Esto no hace nada todavía) ---
function chequearSistema() {
    let nivelEnergia = Math.floor(Math.random() * 100);
    
    console.log("⚙️ Analizando niveles de energía...");
    
    // Probamos diferentes tipos de mensajes (Colores)
    if (nivelEnergia > 20) {
        console.log("✅ Sistemas estables. Energía: " + nivelEnergia + "%");
    } else {
        // Esto saldrá en ROJO en tu terminal gracias al css
        console.error("⚠️ ALERTA: Energía crítica (" + nivelEnergia + "%)");
    }
}

// --- 3. EJECUCIÓN AUTOMÁTICA (El detonador) ---
// Al poner esto aquí, se ejecuta nada más cargar el archivo
setTimeout(function() {
    chequearSistema();
    console.log("🚀 ¡Prueba finalizada! El terminal funciona.");
}, 1000); // Pequeño retraso de 1 segundo para dar dramatismo
