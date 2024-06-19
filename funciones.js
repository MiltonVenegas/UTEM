// Obtén el elemento del icono y el menú desplegable
const dropdownIcon = document.getElementById('dropdownIcon');
const menuItems = document.getElementById('menuItems');

// Agrega un evento de clic al icono
dropdownIcon.addEventListener('click', function() {
    // Alternar la visibilidad del menú desplegable
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'block';
    }
});

// Agrega un listener para cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    const isClickInsideDropdown = dropdownIcon.contains(event.target) || menuItems.contains(event.target);
    if (!isClickInsideDropdown) {
        menuItems.style.display = 'none';
    }
});