function solicitarCredenciales() {
  const usuario = prompt("Ingrese su usuario:");
  const clave = prompt("Ingrese su clave:");
  return { usuario, clave };
}

const credenciales = solicitarCredenciales();

if (credenciales.usuario === "admin" && credenciales.clave === "1234") {
  alert("¡Bienvenido!");
} else {
  alert("Error. Usuario o contraseña incorrectos.");
}
