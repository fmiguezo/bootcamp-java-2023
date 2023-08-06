function pedirNumero(mensaje) {
  let valor;
  while (isNaN(valor)) {
    valor = parseFloat(prompt(mensaje));
  }
  return valor;
}

const ingresoTotal = pedirNumero("Ingrese su ingreso total:");
const gastosNecesarios = ingresoTotal * 0.5;
const gastosOpcionales = ingresoTotal * 0.3;
const ahorroEInversion = ingresoTotal * 0.2;

alert(
  "Monto para gastos necesarios: $" +
    gastosNecesarios.toFixed(2) +
    "\nMonto para gastos opcionales: $" +
    gastosOpcionales.toFixed(2) +
    "\nMonto para ahorro e inversión: $" +
    ahorroEInversion.toFixed(2)
);
