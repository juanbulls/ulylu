// Solicitud de Data
async function pedirData(php, variables = null){
    if ( esLocal ) {
        let valor = variables.split('&').find(parte => parte.startsWith('tabla=')).split('=')[1].toLowerCase();
        await new Promise(resolve => setTimeout(resolve, 1000));
        return local[php][valor];
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

// Populador
const hayUnderscore = /_(.)$/; // Regex to match underscore followed by a letter
function datearGrilla(d) {
    // Nueva Data y Headers registros
    d.cols.forEach((col) => {
        let tipo = 'text';
        const ntd = document.createElement('td');
        const input = document.createElement('input');
        input.type = tipo;
        input.id = 'n' + col;

        // Especificos EL para tipos especificos de columnas
        if (hayUnderscore.test(col)) {
            if (col.slice(-1) == 'd'){
                input.addEventListener('focus', el.fechaFocus);
                input.addEventListener('blur', el.fechaBlur);
            }
            if (col.slice(-1) == 'r') {
                input.addEventListener('focus', el.relFocus);
                input.addEventListener('blur', el.relBlur);
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
            if (hayUnderscore.test(c)) {
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

function datearPopup(d) {
    id('subData').innerHTML = "";
    d.data.forEach((dat) => {
        const par = document.createElement('p');
        const lmax = 35;
        if (dat.length > lmax) {
            dat = dat.slice(0, lmax) + '...';
        }
        par.innerHTML = dat;
        id('subData').appendChild(par);
    });
}

// Ejecuciones
pedirData('data', 'base=bauer&tabla=notas').then(function(r) {
    datearGrilla(r);
});