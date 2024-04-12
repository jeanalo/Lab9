document.addEventListener('DOMContentLoaded', () => {
    const mensajesContainer = document.getElementById('mensajes');
    const usuario1Input = document.getElementById('mensaje-usuario1');
    const usuario2Input = document.getElementById('mensaje-usuario2');
    const enviarButtonUsuario1 = document.querySelector('.enviar-button--usuario1');
    const enviarButtonUsuario2 = document.querySelector('.enviar-button--usuario2');

    enviarButtonUsuario1.addEventListener('click', () => {
        const mensaje = usuario1Input.value.trim();
        if (mensaje !== '') {
            agregarMensaje('usuario-1', mensaje);
            usuario1Input.value = '';
        }
    });

    enviarButtonUsuario2.addEventListener('click', () => {
        const mensaje = usuario2Input.value.trim();
        if (mensaje !== '') {
            agregarMensaje('usuario-2', mensaje);
            usuario2Input.value = '';
        }
    });

    function agregarMensaje(usuario, texto) {
        const nuevoMensaje = document.createElement('div');
        nuevoMensaje.classList.add('mensaje-item');
        nuevoMensaje.classList.add(`mensaje-item--${usuario}`);
        nuevoMensaje.textContent = texto;
        mensajesContainer.appendChild(nuevoMensaje);
        mensajesContainer.scrollTop = mensajesContainer.scrollHeight; 
    }
});
