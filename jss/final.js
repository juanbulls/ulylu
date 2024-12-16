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

let filtrando = false; // se activa en el filtro
async function pedirData(php, variables = null, elmnt = null){
    if ( esLocal ) {
        let accion = variables.split('&').find(parte => parte.startsWith('tabla=')).split('=')[1].toLowerCase();
        await esperarEscritura(elmnt);
        return local[php][accion];
    }else{
        const str = await esperarEscritura(elmnt);
        let patron = str ? '&patron=' + str : '';
        if (filtrando && elmnt != null){ // cuando se hace un filtro con un patron existente
            patron = '&patron=' + elmnt
        }else if (filtroActivo != '' && !filtrando){ // cuando se hace una busqueda con un filtro existente
            variables += `&orden=${filtroActivo}`;
        }
        local.data = ajax( php + '.php', variables + patron);
        
        filtrando = false;
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
        // Formulario nueva data
        const ntd = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'n' + col;

        // Especificos EL para tipos especificos de columnas
        if (col.slice(-2) == '_d'){ // Fechas
            input.type = 'date';
            input.setAttribute('lang', idioma);
            input.value = today.toISOString().split('T')[0];
        }
        if (col.slice(-2) == '_r') { // Columnas RELACIONADAS a otras tablas
            input.addEventListener('focus', el.relFocus);
            input.addEventListener('blur', el.relBlur);
            input.addEventListener('keyup', el.relChange);
            input.addEventListener('keydown', el.espicha);
        }

        input.placeholder = col.indexOf('_') != -1 ? col.slice(0, -2): col;
        input.setAttribute('autocomplete', 'off');

        ntd.appendChild(input);
        id('inputsDataNueva').appendChild(ntd); // Nueva Data

        // Encabezados data existente
        const th = document.createElement('th');
        const span = document.createElement('span');
        span.textContent = col.indexOf('_') != -1 ? col.slice(0, -2): col;
        th.appendChild(span);
        
        if (col.slice(-2) == '_e'){
            const iconoCelda = document.createElement('button');
            iconoCelda.innerHTML = '▾';
            iconoCelda.classList.add('icono');
            iconoCelda.addEventListener('click', () => filtrar(col));
            iconoCelda.id = 'filtro_' + col;
            th.appendChild(iconoCelda);
        } else if (col.slice(-2) == '_r') {
            //iconoCelda.innerHTML = '✎';
        }
        
        id('headerDataVieja').appendChild(th); // Encabezado
    });
    
    // Registros historia
    datearRegistros(d);
}

/* Se usa para llenar datos, pero el llenado de datos tambien se ejectua,
    en busquedas filtrados y desflitrados */
let resumen = null;
function datearRegistros(d) {
    // Si hay resumentes se llenan
    id('resumen').innerHTML = '';
    id('tasaWrapper').style.display = 'none';
    id('resumen').removeAttribute('title');

    // Datos
    d.data.forEach((f) => {
        // Llenar Linea, repetido en 2 partes
        const tr = document.createElement('tr');
        d.cols.forEach((c) => {
            const td = document.createElement('td');
            td.setAttribute('data-cell', hayUnderscore.test(c) ? c.slice(0, -2) : c);

            // Valor
            const span = document.createElement('span');
            span.textContent = f[c];
            td.appendChild(span);

            // Icono de edicion
            if (c.slice(-2) != '_r'){
                const iconoCelda = document.createElement('button');
                iconoCelda.innerHTML = '✎';
                iconoCelda.classList.add('icono');
                iconoCelda.classList.add('editar');
                iconoCelda.addEventListener('click', () => editarCelda(span, iconoCelda, c, f['id']));
                td.appendChild(iconoCelda);
            }

            tr.appendChild(td);
            tr.id = f['id'];
        });

        id('dataVieja').appendChild(tr);
    });

    
    if (d.resumen) {
        resumen = d.resumen;
        imprimirResumen();
    }
}

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
        
        pedirData('dataUp', `base=${bdBase}&tab=${bdTabla}&col=${c}&reg=${i}&val=${input.value}`).then( r => {
            if(r.error){
                alert( r.error );
            }
        });
    });
}

function imprimirResumen() {
    let textoResumen = '<b>Totales: </b>';
    const llaves = Object.keys(resumen[0]);
    let hayQ = false;
    resumen.forEach((item) => {
        textoResumen += item[llaves[0]] + " $" + item[llaves[1]].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " <b>|</b> ";
        if (item[llaves[0]] == "Q") hayQ = true;
    });
    textoResumen = textoResumen.slice(0, -6);
    if (hayQ){
        let balance = resumen.reduce((sum, { Cuenta_e, Cantidad }) => 
            sum + (Cuenta_e === 'Q' ? Number(Cantidad) * id('tasa').value : Number(Cantidad)), 0);
        balance = Math.round(balance);
        textoResumen += "<b> Balance: </b> $" + balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let limite = 105;
    if(textoResumen.length > limite) {
        if ( ['<b', '/b', 'b>', '|'].includes(textoResumen.slice(limite-1, limite+1) ) ) limite -= 3;
        id('resumen').setAttribute('title', textoResumen.replace(new RegExp('<b>', 'g'), '').replace(new RegExp('</b>', 'g'), ''));
        textoResumen = textoResumen.slice(0, limite) + '...';
    }
    id('resumen').innerHTML = textoResumen;

    id('tasaWrapper').style.display = 'inline';
}
function cambioTRM(trm){
    pedirData('tasaUp', `base=${bdBase}&tasa=${trm}`).then( r => {
        if(r.error) {
            alert (r.error);
        }
    });
    imprimirResumen();
}

function datearPopup(d) {
    id('subData').innerHTML = '';
    if (d.data.length == 0) {
        const par = document.createElement('span');
        par.innerHTML = 'Sin coincidencias';
        const br = document.createElement('br');
        const subpar = document.createElement('span');
        subpar.innerHTML = 'Se creará uno nuevo';

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

// Filtro
let filtroActivo = '';
function filtrar(columna) {
    filtrando = true;
    if (filtroActivo != '') {
        const elmConFiltro = id('filtro_' + filtroActivo);
        elmConFiltro.classList.remove('filtroActivo');
    }
    if (filtroActivo != columna) {
        // Filtrar
        id('dataVieja').innerHTML = '';
        dataSpinner.mostrar();
        const patron = id('buscTexto').value != '' ? id('buscTexto').value : null;
        pedirData('data', `base=${bdBase}&tabla=${bdTabla}&orden=${columna}`, patron).then(r => {
            datearRegistros(r);
            dataSpinner.ocultar();
            id('filtro_' + columna).classList.add('filtroActivo');
            filtroActivo = columna;
        });
    }
    else {
        // Desfiltrar
        id('dataVieja').innerHTML = '';
        dataSpinner.mostrar();
        const patron = id('buscTexto').value != '' ? id('buscTexto').value : null;
        pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, patron).then(r => {
            datearRegistros(r);
            dataSpinner.ocultar();
        });
        filtroActivo = '';
    }
}

// Funciones botones
function limpiarNuevaData(){
    var inputs = document.querySelectorAll('.nuevaData input');
    inputs.forEach(input => {
        input.value = '';
        if (input.id.slice(-2) == '_d'){
            input.value = today.toISOString().split('T')[0];
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

// Cosas asociadas a la seguirdad

dataSpinner.mostrar();
function cargaInicial() {
    id('loggeo').style.display = 'none';
    id('empresa').style.display = 'block';
    id('tabla').style.display = 'block';
    id('encabezado').style.paddingLeft = '0';
    dataSpinner.mostrar();
    pedirData('data', `base=${bdBase}&tabla=${bdTabla}`).then(r => {
        datearGrilla(r);
        dataSpinner.ocultar();
    });
}
// Token existente
if (!esLocal) {
    if (token){
        pedirData('validacion', `base=${bdBase}`).then(r => {
            if (r.email) {
                document.cookie = galleta(90); // 90 dias, 3 meses +/-
                cargaInicial();
            } else {
                document.cookie = `ulyluToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
                alert('Último acceso hace más de 3 meses.');
                id('loggeo').style.display = 'flex';
                dataSpinner.ocultar();
                id('empresa').style.display = 'none';
                id('tabla').style.display = 'none';
                id('encabezado').style.paddingLeft = '46%';
            }
        });
    } else {
        id('loggeo').style.display = 'flex';
        dataSpinner.ocultar();
        id('empresa').style.display = 'none';
        id('tabla').style.display = 'none';
        id('encabezado').style.paddingLeft = '46%';
    }
} else {
    cargaInicial();
}
titular();
function loggear() {
    // Pedir acceso
    let mail = id('email').value;
    if (mail.indexOf('@bauer.com.co') != -1) mail = mail.replace('@bauer.com.co', '');
    pedirData('acceso', `base=${bdBase}&email=${mail}&pass=${id('pass').value}`).then(r => {
        if (r.error) {
            alert("Combinación correo clave incorrecta")
        } else {
            document.cookie = galleta(90, r.token); // 90 dias, 3 meses +/-
            location.reload();

        }
    });
}
id('pass').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      loggear();
    }
});

// Carga de tasa
pedirData('tasaRd', `base=${bdBase}`).then(r => {
    if(r.error) {
        alert (r.error);
    } else {
        id('tasa').value = r.tasa;
    }
});