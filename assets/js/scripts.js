function asignarEventos(){
    let elBoton = document.getElementById('btnEnviar');
    elBoton.addEventListener('click', enviarMensaje);

    let contenedorHoraActual = document.getElementById('horaActual');
    let laHoraActual = mostrarHoraActual();

    let hora = laHoraActual.getHours();
    let minutos = laHoraActual.getMinutes();
    let segundos = laHoraActual.getSeconds();
    let horaCompleta = `${hora}:${minutos}:${segundos}`;

    contenedorHoraActual.innerHTML = horaCompleta;

}

function mostrarHoraActual(){
    var currentTime = new Date();
    return currentTime;

}

function enviarMensaje(){
    // identificar y mostrar el contenedor
    let elContenedor = document.getElementById('contenedorMensajeEnviado');
    elContenedor.style.display = 'block';

    // extraer mensaje digitado en caja de texto
    let laCajaTexto = document.getElementById('txtMensaje');

    // enviar mensaje al parrafo adecuado
    let elParrafo = document.getElementById('parrafoMensajeEnviado');
    elParrafo.innerHTML = laCajaTexto.value;
}