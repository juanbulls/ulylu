let cargando = false;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        if (!cargando) {
            alert("llego abajo");
        }
    }
});