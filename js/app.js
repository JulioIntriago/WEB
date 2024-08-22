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

// Evento de envío del formulario utilizando Formspree
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Enviar el formulario a través de Formspree
    fetch('https://formspree.io/f/xwperjer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: document.getElementById('userName').value,
            lastName: document.getElementById('userLastName').value,
            email: document.getElementById('userEmail').value,
            message: document.getElementById('userMessage').value
        })
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Limpia el formulario
        } else {
            alert('There was a problem sending the message.');
        }
    })
    .catch(error => {
        console.error('There was an error:', error);
        alert('There was a problem sending the message. Check the console for more details.');
    });
});
