document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation (if you add nav links later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in animation for sections on scroll
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Adjust for earlier/later trigger
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

    // Dynamic button actions
    const exploreVideosBtn = document.getElementById('exploreVideosBtn');
    if (exploreVideosBtn) {
        exploreVideosBtn.addEventListener('click', () => {
            const featuredVideosSection = document.getElementById('featured-videos');
            if (featuredVideosSection) {
                featuredVideosSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const contactUsBtn = document.getElementById('contactUsBtn');
    if (contactUsBtn) {
        contactUsBtn.addEventListener('click', () => {
            alert('¡Gracias por tu interés! Puedes contactarnos en info@cerohambre.org');
            // In a real application, you might redirect to a contact form page.
        });
    }

    const donateBtn = document.getElementById('donateBtn');
    if (donateBtn) {
        donateBtn.addEventListener('click', () => {
            alert('¡Tu donación es vital! Redirigiendo a la página de donaciones...');
            // In a real application, you would redirect to a donation platform.
            window.open('https://www.example.com/donate', '_blank'); // Replace with actual donation link
        });
    }

    // Video Modal functionality
    const videoModal = document.getElementById('videoModal');
    const closeButton = document.querySelector('.modal .close-button');
    const watchVideoButtons = document.querySelectorAll('.watch-video-btn');
    const videoContainer = document.querySelector('.video-container');

    const youtubeVideoIds = {
        video1: 'ID_REAL_VIDEO_1', // ¡REEMPLAZA ESTO CON EL ID REAL DE YOUTUBE! Ejemplo: 'dQw4w9WgXcQ'
        video2: 'ID_REAL_VIDEO_2', // ¡REEMPLAZA ESTO CON EL ID REAL DE YOUTUBE!
        video3: 'ID_REAL_VIDEO_3'  // ¡REEMPLAZA ESTO CON EL ID REAL DE YOUTUBE!
    };

    watchVideoButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const videoId = event.target.dataset.videoId;
            const youtubeId = youtubeVideoIds[videoId];

            if (youtubeId) {
                // *** ESTA ES LA LÍNEA CRÍTICA CORREGIDA ***
                videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                videoModal.classList.add('show');
            } else {
                alert('Video no disponible. Por favor, intente de nuevo más tarde.');
            }
        });
    });

    closeButton.addEventListener('click', () => {
        videoModal.classList.remove('show');
        videoContainer.innerHTML = ''; // Stop the video by removing the iframe
    });

    // Close modal if clicked outside of modal content
    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            videoModal.classList.remove('show');
            videoContainer.innerHTML = ''; // Stop the video
        }
    });

    // Add a simple hover effect for icon grid items on JS (optional, as CSS handles most)
    document.querySelectorAll('.icon-item').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
            item.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
        });
        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
            item.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
        });
    });
});
