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

    // Permisos de editarNotas y eliminarNotas estan en populador

    // verClientes
    if ( !permisos.includes('verClientes') ) {
        id('opcionClientes').style.display = 'none';
    }
    // editarClientes
}