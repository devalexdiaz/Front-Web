// Funciones Javascript para abrir y cerrar el navbar de modo movil

function openNav(){
    document.getElementById("menu-movil").style.width = "100%"; // Establece el ancho del navbar móvil en 100%
}

function closeNav(){
    document.getElementById("menu-movil").style.width = "0%"; // Establece el ancho del navbar móvil en 0%
}

// Función Javascript ...


// Obtén el botón y el modal por su ID
var botonContacto = document.getElementById("contactoBtn");
var linkContacto = document.getElementById("contactoMovil");
var modalContacto = document.getElementById("modalContacto");

// Agrega un evento de clic al botón para mostrar el modal
botonContacto.addEventListener("click", function() {
  modalContacto.style.display = "flex"; // Muestra el modal al hacer clic en el botón
});

// Agrega un evento de clic al link movil para mostrar el modal
linkContacto.addEventListener("click", function() {
  modalContacto.style.display = "flex"; // Muestra el modal al hacer clic en el botón
});

// Agrega un evento de clic al área fuera del modal para cerrarlo
window.addEventListener("click", function(event) {
  if (event.target == modalContacto) {
    modalContacto.style.display = "none"; // Oculta el modal al hacer clic fuera de él
  }
});
