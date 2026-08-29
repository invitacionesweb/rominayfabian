// Establecer la fecha de destino
const fechaDestino = new Date("2026-12-19T23:59:59");

// Variable para almacenar el ID del intervalo
let intervalo;

function actualizarContador() {
  const ahora = new Date();
  const diferencia = fechaDestino - ahora;

  if (diferencia <= 0) {
    // Detener el intervalo
    clearInterval(intervalo);

    // Asegurarse de que el contador se quede en cero
    document.getElementById("dias").textContent = 0;
    document.getElementById("horas").textContent = 0;
    document.getElementById("minutos").textContent = 0;
    document.getElementById("segundos").textContent = 0;

    // Mostrar el mensaje "LLEGÓ EL DÍA"
    document.getElementById("mensaje").style.display = "block"; // Muestra el mensaje

    return;
  }

  // Calcular días, horas, minutos y segundos restantes
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Actualizar los elementos HTML
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

// Actualizar cada segundo y guardar el ID del intervalo
intervalo = setInterval(actualizarContador, 1000);

// Actualizar al cargar la página
actualizarContador();
