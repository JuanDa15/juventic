// validaciones
function validar_soloNumeros(e){
    key=e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numero="0123456789";
    especiales="8-37-38-46";//array
    teclado_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
        }
    }

    if(numero.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}
function validar_soloNumeros_2(e){
    key=e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    numero="123456789";
    especiales="8-37-38-46";//array
    teclado_especial=false;

    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
        }
    }

    if(numero.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }
}
function validar_indicaciones(auxiliar){
    if (auxiliar.value=="" || auxiliar.value=== null){
        auxiliar.value = "No agrega indicaciones";
        return auxiliar;
    }
    return auxiliar;
}
/*var nombreRe = document.getElementById('nombreReserva').value;
var telefonoRe = document.getElementById('telefonoReserva').value;
var correoRe = document.getElementById('correoReserva').value;
var servicioRe = document.getElementById('servicioReserva').value;
var personasRe = document.getElementById('numPerReserva').value;
var fechaRe = document.getElementById('fechaRerReserva').value;
var horasRe = document.getElementById('horasReserva').value;
var indicacionesRe = document.getElementById('indicacionesReserva').value;*/
//if (nombreRe.value === null || telefonoRe.value === null || correoRe.value === null || servicioRe.value === null || personasRe.value === null || fechaRe.value === null || horasRe.value === null){
//}


// Envio del Correo electronico
const reserv = document.getElementById('reservas_form');
const reserv_btn = document.getElementById('send_reserva');

reserv.addEventListener('submit', (event) => {
    event.preventDefault();
    sendForm(event)
})


function sendForm() {
    let tempBody = {
        nombreR: document.getElementById('nombreReserva').value,
        telefonoR: document.getElementById('telefonoReserva').value,
        correoR: document.getElementById('correoReserva').value,
        servicioR: document.getElementById('servicioReserva').value,
        personasR: document.getElementById('numPerReserva').value,
        fechaR: document.getElementById('fechaRerReserva').value,
        horasR: document.getElementById('horasReserva').value,
        indicacionesR: document.getElementById('indicacionesReserva').value
    }

    emailjs.send('service_p8aor5o', 'template_83va4yz', tempBody)
        .then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Correo enviado correctamente',
                icon: 'success',
                confirmButtonText: 'Cool',
                timer: 2000
            });
            setTimeout(() => location.reload(), 2000)
        }, () => {
            Swal.fire({
                title: 'Error!',
                text: 'No se pudo enviar el correo',
                icon: 'error',
                confirmButtonText: ':(',
                timer: 2000
            })
        })
}