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

    // Recoge los datos del formulario
    const firstName = document.getElementById('userName').value;
    const lastName = document.getElementById('userLastName').value;
    const email = document.getElementById('userEmail').value;
    const message = document.getElementById('userMessage').value;

    // Enviar el formulario a través de Formspree
    fetch('https://formspree.io/f/mnnayzza', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        })
    })
    .then(response => {
        console.log(response.status);  // Muestra el estado de la respuesta en la consola
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contactForm').reset(); // Limpia el formulario
        } else {
            alert(`Failed to send message. Status: ${response.status}`);
        }
    })
    .catch(error => {
        console.error('There was an error:', error);  // Muestra el error en la consola
        alert('There was a problem sending the message. Check the console for more details.');
    });
});
