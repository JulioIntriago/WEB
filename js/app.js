

$(document).ready(function () {
    //Owl
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
    })

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
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1200,  // Duración de la animación en milisegundos
        once: true       // Si se establece en true, la animación se ejecutará solo una vez
    });
});
// Asegúrate de incluir el script de EmailJS antes de este código
// <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>

document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('YOUR_USER_ID'); // Reemplaza 'YOUR_USER_ID' con tu User ID de EmailJS

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Recoge los datos del formulario
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const templateParams = {
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            message: message
        };

        // Enviar el correo electrónico
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function (response) {
                alert('Mensaje enviado con éxito!', response.status, response.text);
            }, function (error) {
                alert('Ocurrió un problema al enviar el mensaje:', error);
            });
    });
});
