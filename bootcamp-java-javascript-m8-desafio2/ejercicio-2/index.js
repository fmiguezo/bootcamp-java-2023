let plan1 = new Plan("Plan 001", 150000, 30, 15);
let plan2 = new Plan("Plan 002", 300000, 180, 10);
let plan3 = new Plan("Plan 003", 485000, 60, 23);

const ofertaDeCreditos = [plan1, plan2, plan3];

calcularInteres();

const tabla = document.getElementById("tablaCreditos");

imprimirTabla();

/* Funciones */
function Plan(nombre, capital, plazo, tasa) {
  this.nombre = nombre;
  this.capital = capital;
  this.plazo = plazo;
  this.tasa = tasa;
  this.interes = 0;
}

function calcularInteres() {
  ofertaDeCreditos.forEach((plan) => {
    plan.interes = (plan.capital * plan.plazo * plan.tasa) / 100;
  });
}

function imprimirTabla() {
  ofertaDeCreditos.forEach((oferta) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
    <td>${oferta.nombre}</td>
    <td>${oferta.capital}</td>
    <td>${oferta.plazo}</td>
    <td>${oferta.tasa}</td>
    <td>${oferta.interes.toFixed(0)}</td>
  `;
    tabla.appendChild(fila);
  });
}
