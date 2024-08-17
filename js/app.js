// Inicialización de Owl Carousel
$(document).ready(function () {
    // Owl Carousel para el slider principal
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    });

    // Owl Carousel para el slider de proyectos
    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    });

    // Owl Carousel para el slider de reseñas
    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    });
});

// Inicialización de AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200,  // Duración de la animación en milisegundos
        once: true       // Si se establece en true, la animación se ejecutará solo una vez
    });
});
///EMAILS
document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('T5-C3JyMUKciEdfEK'); // Reemplaza con tu User ID de EmailJS

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const templateParams = {
            to_name: "Better Behavior Services",
            from_name: `${document.getElementById('userName').value} ${document.getElementById('userLastName').value}`,
            message: document.getElementById('userMessage').value
        };

        emailjs.send('service_fj33e96', 'template_7rs255p', templateParams)
            .then(function () {
                alert('Mensaje enviado con éxito!');
            }, function (error) {
                console.error('Ocurrió un problema al enviar el mensaje:', error);
                alert('Ocurrió un problema al enviar el mensaje. Revisa la consola para más detalles.');
            });
    });
});
