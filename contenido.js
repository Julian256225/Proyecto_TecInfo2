document.addEventListener('DOMContentLoaded', () => {
    const botonesDinamicos = document.querySelectorAll('.boton-dinamico');
    const paneles = document.querySelectorAll('.panel');
    const videosContainer = document.getElementById('videos-condiciones');

    // Función para mostrar un panel y ocultar los demás
    const mostrarPanel = (id) => {
        paneles.forEach(panel => {
            panel.classList.remove('activo');
        });
        const panelActivar = document.getElementById(id);
        if (panelActivar) {
            panelActivar.classList.add('activo');
        }
    };

    // Event listeners para los botones dinámicos
    botonesDinamicos.forEach(boton => {
        boton.addEventListener('click', function() {
            const target = this.dataset.target;
            mostrarPanel(target);
        });
    });

    // Mostrar el primer panel al cargar la página
    mostrarPanel('introduccion');

    // Datos de los videos informativos (simulado)
    const videosInfo = [
        {
            titulo: "El Hambre en África",
            url: "https://www.youtube.com/embed/your_video_id_1" // Reemplaza con la URL real del video
        },
        {
            titulo: "Impacto del Desperdicio de Alimentos",
            url: "https://www.youtube.com/embed/your_video_id_2" // Reemplaza con la URL real del video
        },
        {
            titulo: "Soluciones Locales contra el Hambre",
            url: "https://www.youtube.com/embed/your_video_id_3" // Reemplaza con la URL real del video
        }
        // Puedes añadir más videos aquí
    ];

    // Función para crear e insertar los videos en el HTML
    const cargarVideos = () => {
        videosInfo.forEach(video => {
            const videoDiv = document.createElement('div');
            videoDiv.classList.add('video-container');
            videoDiv.innerHTML = `
                <h3>${video.titulo}</h3>
                <iframe width="560" height="315" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            videosContainer.appendChild(videoDiv);
        });
    };

    // Cargar los videos al mostrar la sección de condiciones actuales
    const condicionesPanel = document.getElementById('condiciones-actuales');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cargarVideos();
                observer.unobserve(condicionesPanel); // Deja de observar una vez cargados los videos
            }
        });
    }, { threshold: 0.1 });

    observer.observe(condicionesPanel);
});
