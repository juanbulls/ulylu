let scrolleando = false;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        if (!scrolleando) {
            scrolleando = true;
            const patron = id('buscTexto').value != '' ? id('buscTexto').value : null;
            gOffset ++;
            pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, patron, gOffset).then(r => {
                datearRegistros(r);
                dataSpinner.ocultar();
                scrolleando = false;
            });
        }
    }
});

// que funcione con busquedas, filtros 

// añadir un mensaje que diga cargando siguiente bloque de datos