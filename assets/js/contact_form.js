const contact = document.getElementById('contact_form');
const btn_contact = document.getElementById('send_btn');

contact.addEventListener('submit', (event)=>{
  event.preventDefault();
  sendForm(event)
})


function sendForm(){
  let tempBody = {
    subject:document.getElementById('asunto').value,
    name: document.getElementById('nombre').value,
    service: document.getElementById('servicio').value,
    message : document.getElementById('mensaje').value,
    from_email : document.getElementById('correo').value
  }

  emailjs.send('service_p8aor5o','template_c7vrlva',tempBody)
    .then(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Correo enviado correctamente',
        icon: 'success',
        confirmButtonText: 'Cool',
        timer: 2000
      });
      setTimeout(()=>location.reload(),2000)
    }, ()=>{
      Swal.fire({
        title: 'Error!',
        text: 'No se pudo enviar el correo',
        icon: 'error',
        confirmButtonText: ':(',
        timer: 2000
      })
    })
}
