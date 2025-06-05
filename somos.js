document.addEventListener('DOMContentLoaded', () => {
    // Animación de Fade-in para las secciones
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2, // Activar cuando el 20% del elemento es visible
        rootMargin: "0px 0px -50px 0px" // Ajustar para activar antes/después
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Funcionalidad del botón para ver el documento del proyecto
    const viewDocumentBtn = document.getElementById('viewDocumentBtn');
    if (viewDocumentBtn) {
        viewDocumentBtn.addEventListener('click', () => {
            // **IMPORTANTE:** Reemplaza 'ruta/a/tu/documento.pdf' con la ruta real a tu archivo PDF.
            // Si el PDF está en la misma carpeta que somos.html, solo pon el nombre del archivo, ej: 'proyecto.pdf'
            const documentPath = 'hAMBRE CERO.pdf'; // <-- ¡CAMBIA ESTO!
            
            // Abre el documento en una nueva pestaña
            window.open(documentPath, '_blank');
        });
    }

    // Opcional: Efecto hover para items de misión (CSS ya hace mucho, esto es extra)
    document.querySelectorAll('.mission-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            item.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'rgba(var(--pastel-secondary-rgb), 0.7)';
            item.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.05)';
        });
    });
});
