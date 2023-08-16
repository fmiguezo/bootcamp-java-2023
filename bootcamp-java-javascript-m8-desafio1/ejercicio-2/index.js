const ofertaDeCreditos = [
  { nombre: "Plan 001", capital: 150000, plazo: 30, tasa: 15, interes: 0 },
  { nombre: "Plan 002", capital: 300000, plazo: 180, tasa: 10, interes: 0 },
  { nombre: "Plan 003", capital: 485000, plazo: 60, tasa: 23, interes: 0 },
];

calcularInteres();

const tabla = document.getElementById("tablaCreditos");

imprimirTabla();

/* Funciones */
function calcularInteres() {
  ofertaDeCreditos.forEach((oferta) => {
    oferta.interes = (oferta.capital * oferta.plazo * oferta.tasa) / 100;
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
