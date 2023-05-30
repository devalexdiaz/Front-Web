const buscarForm = document.getElementById('buscador');
const buscarModal = document.getElementById('buscar-modal');
const divModal = document.getElementById('buscar-modal-content');

// Agrega un evento de clic al botón para mostrar el modal
buscarForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página
    // Obtener el valor del campo de búsqueda
    const query = buscarForm.query.value;
  
    divModal.innerHTML = `<h2>Resultados de: ${query}</h2>
      <p>Elemento 1</p>
      <p>Elemento 2</p>
      <p>Elemento 3</p>`;
  
    // Agregar el contenido al modal
    buscarModal.appendChild(divModal);
  
    // Mostrar el modal
    buscarModal.style.display = 'flex';
});

// Agrega un evento de clic al área fuera del modal para cerrarlo
window.addEventListener("click", function(event) {
    if (event.target === buscarModal) {
        buscarModal.style.display = "none"; // Oculta el modal al hacer clic fuera de él
        buscarForm.reset(); // Vacía los campos del formulario
        location.reload(); // Recarga la página
    }
});