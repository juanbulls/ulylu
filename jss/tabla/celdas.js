function editarCelda(t, b, c, i) { // texto, boton editar, columna, id del reg
    b.classList.add('iconoEscondido');
    t.style.display = 'none';
    const input = document.createElement('input');
    input.value = t.innerHTML;
    input.classList.add('celdaEnEdicion');
    t.parentNode.appendChild(input);
    input.focus();

    input.addEventListener('blur', () => {
        t.textContent = input.value;
        input.remove();
        b.classList.remove('iconoEscondido');
        t.style.display = 'inline';
        
        mandarData('dataUp', `base=${bdBase}&tabla=${bdTabla}&col=${c}&reg=${i}&val=${input.value}`).then( r => {
            if( r.error ){
                alert( 'Error editando celda: ' + r.error );
                t.style.color = 'red';
            }
        });
    });
}
function borrarFila(reg){
    if ( confirm("Seguro que quiere eliminar este registro?") ) {
        pedirData('borrarFila', `base=${bdBase}&tabla=${bdTabla}&reg=${reg}`).then( r => {
            if( r.error ){
                alert( 'Error borrando fila: ' + r.error );
            } else {
                id(reg).remove();
            }
        });
    }
}