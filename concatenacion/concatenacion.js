saludo = "Hola, bienbiendido ";
let nombre = "Pablitus";
let edad = 35;
let numero = 8;

// Resultado:  Hola, bienvenido Pablitus
let frase = saludo + nombre;

// Resultado: Pablitus35
frase = nombre + edad;

// Resultado: 43
frase = edad + numero;

// Resultado: Pablitus 358
frase = nombre + edad + numero;



// Templates Literarios Backticks `` ( Alt + 96 )
// Resultado: Hola Pablitus de 43 años de edad
frase = `Hola, ${ nombre } de ${ edad + numero } años de edad`;
