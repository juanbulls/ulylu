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

function esFecha(cadena) {
    // Check if the format is YYYY-MM-DD using a regular expression
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(cadena);
}

// Populador
let jsonData = [];
function datearGrilla(d) {
    jsonData = d; // Necesario para debugeo, ELIMINAR LUEGO
    // Nueva Data y Headers registros
    d.cols.forEach((col) => {
        let tipo = 'text';
        if (esFecha(d.data[0][col])) {
            tipo = 'date';
        }

        const ntd = document.createElement('td');
        const input = document.createElement('input');
        input.type = tipo;
        input.placeholder = col;

        ntd.appendChild(input);
        id('inputsDataNueva').appendChild(ntd); // Nueva Data

        const th = document.createElement('th');
        th.innerHTML = col;
        id('headerDataVieja').appendChild(th); // Encabezado
    });
    
    // Registros historia
    d.data.forEach((f) => {
        const tr = document.createElement('tr');
        d.cols.forEach((c) => {
            const td = document.createElement('td');
            td.setAttribute('data-cell', c);
            td.innerHTML = f[c];

            tr.appendChild(td);
        });

        id('dataVieja').appendChild(tr);
    });
}

// Ejecuciones
pedirData('data', 'base=bauer&tabla=notas').then(function(r) {
    datearGrilla(r);
});