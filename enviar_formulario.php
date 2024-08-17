<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Configuración del correo
    $destinatario = "juliointriago63@gmail.com"; // Cambia esto por tu dirección de correo
    $asunto = "Nuevo mensaje de $nombre";

    // Crear el cuerpo del mensaje
    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo Electrónico: $email\n";
    $cuerpo .= "Mensaje:\n$mensaje";

    // Encabezados adicionales
    $encabezados = "From: $email";

    // Enviar el correo
    if (mail($destinatario, $asunto, $cuerpo, $encabezados)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>
