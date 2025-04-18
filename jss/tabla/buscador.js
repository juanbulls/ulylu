let procesando = false;
function buscarRegistros(elmnt=null) {
    if (procesando) { return }
    procesando = true;

    id('dataVieja').innerHTML = ponerPlaceholderData("Buscando...");

    gOffset = 0;
    dataSpinner.mostrar();
    pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, elmnt, gOffset).then(r => {
        id('dataVieja').innerHTML = '';

        if (r.data.length === 0) {
            id('dataVieja').innerHTML = ponerPlaceholderData("Sin coincidencias", "#888");
        } else {
            datearRegistros(r);
        }
        
        dataSpinner.ocultar();
        procesando = false;
    });
}