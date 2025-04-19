let filtroActivo = '';
function filtrar(columna) {
    filtrando = true;
    gOffset = 0;
    
    if (filtroActivo != '') {
        const elmConFiltro = id('filtro_' + filtroActivo);
        elmConFiltro.classList.remove('filtroActivo');
    }
    if (filtroActivo != columna) {
        // Filtrar
        id('dataVieja').innerHTML = ponerPlaceholderData("filtrando...");
        dataSpinner.mostrar();

        const patron = id('buscTexto').value != '' ? id('buscTexto').value : null;
        pedirData('data', `base=${bdBase}&tabla=${bdTabla}&orden=${columna}`, patron, gOffset).then(r => {
            id('dataVieja').innerHTML = '';
            datearRegistros(r);
            dataSpinner.ocultar();
            id('filtro_' + columna).classList.add('filtroActivo');
            filtroActivo = columna;
        });
    }
    else {
        // Desfiltrar
        id('dataVieja').innerHTML = ponerPlaceholderData("Eliminando filtro...");
        dataSpinner.mostrar();
        
        const patron = id('buscTexto').value != '' ? id('buscTexto').value : null;
        pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, patron).then(r => {
            id('dataVieja').innerHTML = '';
            datearRegistros(r);
            dataSpinner.ocultar();
        });
        filtroActivo = '';
    }
}