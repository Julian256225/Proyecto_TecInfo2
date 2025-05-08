document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.querySelectorAll('.imagen-contenedor img');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function() {
            alert('Imagen: ' + this.alt);
        });
    });
});