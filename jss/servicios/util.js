let cargando = false;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        if (!cargando) {
            cargando = true;
            const patron = id('buscTexto').value != '' ? id('buscTexto').value : null;
            gOffset ++;
            pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, patron, gOffset).then(r => {
                datearRegistros(r);
                dataSpinner.ocultar();
                cargando = false;
            });
        }
    }
});