function permisosHTML() {
    if( !permisos.includes('exportarCSV') ) {
        id('descargador').style.display = 'none';
        id('buscTexto').classList.add('buscSinDescarg');
    }

    if ( !permisos.includes('crearNotas') ) {
        id('tituloNuevo').style.display = 'none';
        id('inputsDataNueva').style.display = 'none';
        id('botonesNuevos').style.display = 'none';
    }
}