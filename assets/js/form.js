// Código para enviar el formulario al correo "SoftDut@gmail.com"
$(document).ready(function() {
    $('#comentarios').on('submit', function(event) {
      event.preventDefault();

      // Obtenemos el valor del input
      var comentario = $('#comentarios').val();

      // Enviamos el formulario por correo electrónico
      $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: {
          comentario: comentario
        },
        success: function(response) {
          alert('El comentario ha sido enviado correctamente.');
        }
      });
    });
  });