function pedirEdad() {
  let edad;
  while (isNaN(edad) || edad < 0) {
    edad = parseInt(prompt("Ingrese su edad:"));
  }
  return edad;
}

const edad = pedirEdad();

if (edad >= 18) {
  alert("¡Bienvenido!");
} else {
  alert("Error, tenés que ser mayor de 18 años para ingresar.");
}
