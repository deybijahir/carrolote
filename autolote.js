document.addEventListener("DOMContentLoaded", function() {
    const filtrarBtn = document.getElementById("filtrar-btn");
    const autos = document.querySelectorAll(".auto");
    const contactForm = document.getElementById("contact-form");
    const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");

    // Evento de clic para el botón de filtro
    filtrarBtn.addEventListener("click", function() {
        const maxPrecio = prompt("Ingrese el precio máximo para filtrar los autos:");
        if (maxPrecio !== null) {
            autos.forEach(auto => {
                const precio = parseInt(auto.getAttribute("data-precio"), 10);
                auto.style.display = precio <= maxPrecio ? "block" : "none";
            });
        }
    });

    // Evento de envío de formulario
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el recargado de la página
        // Mostrar mensaje de confirmación
        mensajeConfirmacion.style.display = "block";
        // Puedes añadir código para manejar el envío del formulario aquí (como un fetch a un servidor)
        contactForm.reset(); // Limpiar el formulario
    });
}); 