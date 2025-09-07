const prompt = require("prompt-sync")({ sigint: true });


//**************Ejercicio DOS 

// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección.
// Pide al usuario que ingrese un número y verifica si está dentro del rango definido por las
// constantes.
// PSEUDOCÓDIGO
// 1. Definir las constantes RANGO_MINIMO y RANGO_MAXIMO.
// 2. Pedir al usuario que ingrese un número y almacenarlo en una variable.
// 3. Verificar si el número está dentro del rango utilizando una estructura if-else.
// 4. Mostrar un mensaje indicando si el número está dentro o fuera del rango.


const rangoMinimo = 3
const rangoMaximo = 9

let numeroUsuario =  prompt("ingrese un numero porfavor");

if ((numeroUsuario >=3) && (numeroUsuario <=9) ){
    alert("Se encuentra dentro del Rango Permitido");
} else {
    alert ("NO ESTA EN EL RANGO PERMITIDO");
}
