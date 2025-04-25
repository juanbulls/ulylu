function estilosPermisos() {
    if( !permisos.includes('exportarCSV') ) {
        id('descargador').style.display = 'none';
        id('buscTexto').classList.add('buscSinDescarg');
    }

}