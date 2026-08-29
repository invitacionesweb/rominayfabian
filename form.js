const scriptUrl = 'https://script.google.com/macros/s/AKfycbxlXXy20P5KMjR8PJa0aMIOG_xuMDurS70gfeTf6qpgo_YDbRMLf03tgEWdDEVbC5nQ/exec';
const form = document.forms['asistenciaform'];

form.addEventListener('submit', e => {
  e.preventDefault();

  Swal.fire({
    title: 'Enviando...',
    text: 'Por favor, esperá un momento',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  fetch(scriptUrl, { method: 'POST', body: new FormData(form) })
    .then(response => {
      Swal.fire({
        title: "¡MUCHAS GRACIAS!",
        text: "Formulario Enviado",
        icon: "success"
      });
    })
    .then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 1500); // da tiempo a leer el mensaje
    })
    .catch(error => {
      Swal.fire("Ups!", "No se pudo enviar el formulario por un error de conexión. Intentá de nuevo.", "error");
      console.error('Error', error.message);
    });
});
