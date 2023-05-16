// Control de mayusculas y minusculas  (toLowerCase) (toUpperCase)
// Conversión de tipos de datos

// tipos de datos diferentes
// Mayusculas y minusculas
// un espacio o cun caracter (mas adelante)
// valores vacios
// tildes

let age = parseInt(prompt("Ingrese su edad"));
let country = prompt("Ingresa tu pais").toLowerCase();

console.log(age, country);

if (age == 0 || country == "") {
  alert("No ingresaste uno de los valores");
} else {
  if (age >= 18 && country != "china") {
    alert("Se ha desbloquado el catalogo de pelis violentas");
  } else {
    alert("No tienes permisos para ver este catalogo");
  }
}
