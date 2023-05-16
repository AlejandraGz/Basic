let age = prompt("Ingrese su edad");
let country = prompt("Ingresa tu pais");

if (age >= 18 && country != "china") {
  alert("Se ha desbloquado el catalogo de pelis violentas");
} else {
  alert("No tienes permisos para ver este catalogo");
}