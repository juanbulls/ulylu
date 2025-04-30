function permisosHTML() {
    if( !permisos.includes('exportarCSV') ) {
        id('descargador').style.display = 'none';
        id('buscTexto').classList.add('buscSinDescarg');
    }

    // tasaUp solo se restringe en el back

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

    // editarClientes no se pueden front si no cargan ver, en el back
    // en back se restringio por extra seguridad

    // verNotas, buscador y filtros so basicas de todos los usuarios
}