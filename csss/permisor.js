function estilosPermisos() {
    if( !permisos.includes('exportarCSV') ) {
        id('descargador').style.display = 'none';
        id('buscTexto').style.right = '65px';
    }

    // Demas permisos
}