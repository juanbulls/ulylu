function cambiarTabla(tabla){
    const url = new URL(window.location.href);
    url.search = '';
    url.searchParams.set('tabla', tabla);
    window.location.href = url.toString();
}

if(id('tabla').value == 'notas'){
    id('buscador').style.visibility = 'visible';
} else {
    id('buscador').style.visibility = 'hidden';
}