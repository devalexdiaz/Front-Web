const form = document.getElementById('formulario');
const modal = document.getElementById('modal-form');

// Agrega un evento de clic al botón para mostrar el modal
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página
  // Mostrar el modal
  modal.style.display = 'flex';
});

// Agrega un evento de clic al área fuera del modal para cerrarlo
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Oculta el modal al hacer clic fuera de él
    form.reset(); // Vacía los campos del formulario
    location.reload(); // Recarga la página
  }
});