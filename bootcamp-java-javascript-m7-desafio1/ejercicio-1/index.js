function pedirNumero(mensaje) {
  let valor;
  while (isNaN(valor)) {
    valor = parseFloat(prompt(mensaje));
  }
  return valor;
}

const costosFijos = pedirNumero("Ingrese los costos fijos:");
const precioVenta = pedirNumero("Ingrese el precio de venta:");
const costosVariables = pedirNumero("Ingrese los costos variables:");

if (precioVenta - costosVariables === 0) {
  alert("Error: Divisor cero.");
} else {
  const puntoEquilibrio = costosFijos / (precioVenta - costosVariables);
  alert("El punto de equilibrio es: " + puntoEquilibrio.toFixed(2));
}
