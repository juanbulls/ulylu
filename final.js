document.getElementById("pj").innerHTML = "En contrucción";

// Event listener dinamico para la linea azul abajo de las filas actulmente siendo editadas
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.nuevaData input[type="text"], .nuevaData input[type="date"]');
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            var td = this.parentElement;
            td.style.borderBottom = '2px solid rgb(78, 58, 255)';
        });
        input.addEventListener('blur', function() {
            var td = this.parentElement;
            td.style.borderBottom  = '1px solid rgb(218, 218, 218)';
        });
    });
});


function datearGrilla(jsonData) {
    console.log(jsonData);
}

// Solicitud de Data
async function pedirData(php, variables = null){
    if ( esLocal ) {
        return localJson;
    }else{
        return ajax( php + '.php' , variables);
    }
}
pedirData('data', 'base=bauer&tabla=notas').then(function(r) {
    datearGrilla(r);
});

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
