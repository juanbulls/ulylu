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

// Funciones para tipos especificos
function fechaFocus(event){
    event.target.type = 'date';
    event.target.focus();
}
function fechaBlur(event) {
    if (event.target.value === '') {
        event.target.type = 'text';
    }
}

// Populador
let jsonData = [];
const rgxTipo = /_(.)$/; // Regex to match underscore followed by a letter
function datearGrilla(d) {
    jsonData = d; // Necesario para debugeo, ELIMINAR LUEGO
    // Nueva Data y Headers registros
    d.cols.forEach((col) => {
        let tipo = 'text';
        const ntd = document.createElement('td');
        const input = document.createElement('input');
        input.type = tipo;
        input.id = 'n' + col;

        // Especificos para tipo fecha
        if (rgxTipo.test(col)) {
            if (col.slice(-1) == 'd'){
                input.addEventListener('focus', fechaFocus);
                input.addEventListener('blur', fechaBlur);
            }
            col = col.slice(0, -2);
        }

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
            if (rgxTipo.test(c)) {
                c = c.slice(0, -2);
            }
            const td = document.createElement('td');
            td.setAttribute('data-cell', c);
            td.innerHTML = f[c];

            tr.appendChild(td);
            tr.id = f['id'];
        });

        id('dataVieja').appendChild(tr);
    });
}

// Ejecuciones
pedirData('data', 'base=bauer&tabla=notas').then(function(r) {
    datearGrilla(r);
});