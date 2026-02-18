import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // 1. Configuración básica
  { 
    files: ["**/*.js", "**/*.mjs"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } }
  },

  // 2. Reglas recomendadas (la base)
  pluginJs.configs.recommended,

  // 3. TUS REGLAS PERSONALIZADAS
  {
    rules: {
      // Reglas que NO se arreglan solas (Lógica)
      "no-unused-vars": "warn",      // Ahora saldrá en AMARILLO, no rojo.
      "no-undef": "error",           // Error si usas variables que no existen.

      // Reglas que SÍ se arreglan solas con --fix (Estilo)
      "semi": ["error", "always"],   // Obliga a poner punto y coma al final.
      "quotes": ["error", "double"], // Obliga a usar comillas dobles " ".
      "prefer-const": "error",         // Si una variable no cambia, que sea const.
      "indent": ["error", 2],          // Indentación de 2 espacios.
      "eol-last": ["error", "always"],  // Archivo debe terminar con una línea vacía.
      "eqeqeq": "error"                 // Obliga a usar === o !== en vez de == o !=. Igualdad/Desigualdad estricta.
    }
  }
];
