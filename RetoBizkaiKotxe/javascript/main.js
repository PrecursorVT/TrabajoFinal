// Esperamos a que todo el HTML cargue antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // 1. Manejar el buscador de la página principal
    const searchForm = document.getElementById('search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Evita que la página se recargue
            alert('¡Buscando disponibilidad de coches en Bizkaia para esas fechas!');
        });
    }

    // 2. Manejar los botones de "Reservar Ahora" de cada coche
    const reserveButtons = document.querySelectorAll('.btn-reserve');
    
    reserveButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtenemos el nombre del coche desde el atributo data-car del HTML
            const carName = this.getAttribute('data-car');
            alert(`Has iniciado el proceso de reserva para: ${carName}. ¡Buena elección!`);
        });
    });

});