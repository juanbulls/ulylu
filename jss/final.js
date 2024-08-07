// Solicitud de Data
async function esperarEscritura(elmnt) {
    if (elmnt === null) {
        await new Promise(resolve => setTimeout(resolve, blurDelay));
        return '';
    }
    
    let patronAnterior = '';
    while (patronAnterior != elmnt.value) {
        patronAnterior = elmnt.value;
        await new Promise(resolve => setTimeout(resolve, blurDelay));
    }
    return patronAnterior;
}

async function pedirData(php, variables = null, elmnt = null){
    if ( esLocal ) {
        let accion = variables.split('&').find(parte => parte.startsWith('tabla=')).split('=')[1].toLowerCase();
        await esperarEscritura(elmnt);
        return local[php][accion];
    }else{
        const str = await esperarEscritura(elmnt);
        const patron = str ? '&patron=' + str : '';
        local.data = ajax( php + '.php', variables + patron);
        return local.data;
    }
}

async function mandarData(php, variables = null) {
    if (esLocal) {
        return local[php]
    } else {
        return ajax( php + '.php' , variables);
    }
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
                input.type = 'date';
                input.addEventListener('focus', el.fechaFocus);
                input.addEventListener('blur', el.fechaBlur);
                input.value = hoy;
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
        input.setAttribute('autocomplete', 'off');

        ntd.appendChild(input);
        id('inputsDataNueva').appendChild(ntd); // Nueva Data

        const th = document.createElement('th');
        const span = document.createElement('span');
        span.textContent = col;
        th.appendChild(span);
        
        const botonFiltro = document.createElement('button');
        botonFiltro.innerHTML = " &#9662;";
        botonFiltro.classList.add('filtro');
        th.addEventListener('mouseover', (event) => {
            th.appendChild(botonFiltro);
        });
        th.addEventListener('mouseout', () => {
            botonFiltro.remove();
        });
        
        id('headerDataVieja').appendChild(th); // Encabezado
    });
    
    // Registros historia
    datearRegistros(d);
}

function datearRegistros(d) {
    d.data.forEach((f) => {
        // Llenar Linea, repetido en 2 partes
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
        par.innerHTML = "Sin coincidencias"
        const br = document.createElement('br');
        const subpar = document.createElement('span');
        subpar.innerHTML = "Se creará uno nuevo"

        id('subData').appendChild(par);
        id('subData').appendChild(br);
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
let procesando = false;
function buscarRegistros(elmnt=null) {
    if (procesando) { return }
    procesando = true;
    id('dataVieja').innerHTML = '';

    dataSpinner.mostrar();
    pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, elmnt).then(r => {
        datearRegistros(r);
        dataSpinner.ocultar();
        procesando = false;
    });
}

// Carga inicial de datos
dataSpinner.mostrar();
pedirData('data', `base=${bdBase}&tabla=${bdTabla}`).then(r => {
    datearGrilla(r);
    dataSpinner.ocultar();
});

// Funciones botones
function limpiarNuevaData(){
    var inputs = document.querySelectorAll('.nuevaData input');
    inputs.forEach(input => {
        input.value = '';
        if (input.id.slice(-2) == '_d'){
            input.addEventListener('focus', el.fechaFocus);
            input.value = hoy;
        }
    });
}
function registrar(){
    var inputs = document.querySelectorAll('.nuevaData input');
    var vars = `base=${bdBase}&tabla=${bdTabla}&`;
    inputs.forEach(i => {
        if (i.value != '') {
            vars += i.id.slice(1) + '=' + i.value + '&';
        }
    });
    vars = vars.slice(0, -1);
    mandarData('registrar', vars).then(r => {
        if (!r.error) {
            // Llenar Linea, repetido en 2 partes
            const tr = document.createElement('tr');
            r.data.forEach((f) => {
                r.cols.forEach((c) => {
                    const td = document.createElement('td');
                    td.setAttribute('data-cell', hayUnderscore.test(c) ? c.slice(0, -2) : c);
                    td.innerHTML = f[c];
        
                    tr.appendChild(td);
                    tr.id = f['id'];
                });
            });

            id('dataVieja').insertBefore(tr, id('dataVieja').firstChild);
            limpiarNuevaData()
            tr.classList.add('filaIngresada');
        } else {
            alert (r.error);
        }
    });
    
}