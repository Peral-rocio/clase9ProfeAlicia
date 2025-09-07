//const prompt = require("prompt-sync")({ sigint: true });

//***************Ejercicio CUATRO

// Ejercicio 4:
// Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si el nombre
// ingresado es igual a tu nombre.
// PSEUDOCÓDIGO
// 1. Solicitar al usuario que ingrese su nombre y almacenarlo en una variable.
// 2. Comparar el nombre ingresado con tu nombre y mostrar un mensaje adecuado.
// EJEMPLO - Si es exactamente igual --> "¡Hola, TuNombre! Bienvenido de nuevo."
// Caso contrario --> "Hola, [nombre]. No estás en mi lista."


// *********SOLUCION 

let nombreUsuario = prompt ("ingrese su nombre, porfavor");

let miNombre = "Rocio"


if ( nombreUsuario == miNombre){
    alert("Hola" + " " + nombreUsuario + " " + "Bienvenido de nuevo");
} else {
    alert ("Hola" + " " + nombreUsuario + " " + "LO SIENTO, NO ESTAS EN MI LISTA");   
}