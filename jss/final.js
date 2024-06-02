// Solicitud de Data
async function pedirData(php, variables = null){
    if ( esLocal ) {
        return localJson;
    }else{
        return ajax( php + '.php' , variables);
    }
}

// Funciones botones
function limpiarNuevaData(){
    var inputs = document.querySelectorAll('.nuevaData input');
    inputs.forEach(function(input) {
        input.value = '';
    });
}
// TODO:
// inputsDataNueva <td><input type="[]" placeholder="columna"...
// headerDataVieja <th...
// dataVieja <tr><td data-cell="[columna]">[valor]...

// Populador
function datearGrilla(jsonData) {
    console.log(jsonData);
}

// Ejecuciones
pedirData('data', 'base=bauer&tabla=notas').then(function(r) {
    datearGrilla(r);
});