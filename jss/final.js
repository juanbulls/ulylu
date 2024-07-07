// Solicitud de Data
async function pedirData(php, variables = null){
    if ( esLocal ) {
        let valor = variables.split('&').find(parte => parte.startsWith('tabla=')).split('=')[1].toLowerCase();
        await new Promise(resolve => setTimeout(resolve, blurDelay));
        return local[php][valor];
    }else{
        await new Promise(resolve => setTimeout(resolve, blurDelay));
        local.data = ajax( php + '.php' , variables)
        return local.data;
    }
}

async function mandarData(php, variables = null) {
    if (esLocal) {
        return local[php]
    } else {

    }
}

// Populador
const hayUnderscore = /_(.)$/; // Regex to match underscore followed by a letter
function datearGrilla(d) {
    id('inputsDataNueva').innerHTML = "";
    id('headerDataVieja').innerHTML = "";

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
                input.addEventListener('keyup', el.relChange);
                input.addEventListener('keydown', el.espicha);
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
            const td = document.createElement('td');
            td.setAttribute('data-cell', hayUnderscore.test(c) ? c.slice(0, -2) : c);
            td.innerHTML = f[c];

            tr.appendChild(td);
            tr.id = f['id'];
        });

        id('dataVieja').appendChild(tr);
    });
}

function datearPopup(d) {
    id('subData').innerHTML = "";
    if (d.data.length == 0) {
        const par = document.createElement('span');
        par.innerHTML = "Sin coincidencias "
        const subpar = document.createElement('span');
        subpar.innerHTML = "Se creará uno nuevo"

        id('subData').appendChild(par);
        id('subData').appendChild(subpar);
        par.style.color = '#c5c5c5';
        subpar.style.color = 'rgb(255 161 0)';
        return
    }

    d.data.forEach((dat) => {
        const par = document.createElement('p');
        const lmax = 35;
        par.value = dat;
        if (dat.length > lmax) {
            dat = dat.slice(0, lmax) + '...';
        }
        par.innerHTML = dat;
        par.addEventListener('click', el.puItemClick);
        id('subData').appendChild(par);
    });
}

// Ejecuciones
pedirData('data', 'base=bauer&tabla=notas').then(r => {
    datearGrilla(r);
});

// Funciones botones
function limpiarNuevaData(){
    var inputs = document.querySelectorAll('.nuevaData input');
    inputs.forEach(input => {
        input.value = '';
        if (input.id.slice(-2) == '_d'){
            input.type = 'text';
        }
    });
}
function registrar(){
    var inputs = document.querySelectorAll('.nuevaData input');
    var vars = "";
    inputs.forEach(i => {
        if (i.value != '') {
            const llave = hayUnderscore.test(i.id) ? i.id.slice(1) : i.id;
            vars += llave + '=' + i.value + '&';
        }
    });
    vars = vars.slice(0, -1);
    mandarData('registrar', vars).then(r => {
        if (!r.error) {
            r.data.forEach((f) => {
                const tr = document.createElement('tr');
                r.cols.forEach((c) => {
                    const td = document.createElement('td');
                    td.setAttribute('data-cell', hayUnderscore.test(c) ? c.slice(0, -2) : c);
                    td.innerHTML = f[c];
        
                    tr.appendChild(td);
                    tr.id = f['id'];
                });
            });
            // datearGrilla(r);
        }
    });
    
}