let scrolleando = false;

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 100) {
        if (!scrolleando) {
            scrolleando = true;
            id("final").innerHTML = "Buscando más data...";

            const patron = id('buscTexto').value != '' ? id('buscTexto').value : null;
            gOffset ++;

            pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, patron, gOffset).then(r => {
                if (r.data.length === 0) {
                    id("final").innerHTML = "No hay más data.";
                } else {
                    datearRegistros(r);
                    id("final").innerHTML = "";
                }
                dataSpinner.ocultar();
                scrolleando = false;
            });
        }
    }
});

// añadir un mensaje que diga cargando siguiente bloque de datos