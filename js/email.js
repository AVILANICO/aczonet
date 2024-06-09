const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_5su4iex';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';
        const Toast = Swal.mixin({
          toast: true,
          position: "center",
          showConfirmButton: false,
          timer: 1500
        });
        Toast.fire({
          icon: "success",
          title: "¡Enviado con Exito!"
        });
        form.reset();
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  });
