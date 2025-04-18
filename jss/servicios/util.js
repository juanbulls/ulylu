let cargando = false;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        if (!cargando) {
            cargando = true;
            gOffset ++;
            pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, null, gOffset).then(r => {
                datearRegistros(r);
                dataSpinner.ocultar();
                cargando = false;
            });
        }
    }
});