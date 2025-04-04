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

function ponerPlaceholderData(text, color = "#000") {
    // el Width debe ser aproximadamente el widh the clase colAct +3, actualmente 20+3
    return `<tr>
        <td colspan="9" style="height: 35px; text-align: center; font-style: italic; color: ${color};"> ${text} </td>
        <td style="width: 23px; background: white; border: none;"></td>
    </tr>`;
}

// Ejecuciones
let procesando = false;
function buscarRegistros(elmnt=null) {
    if (procesando) { return }
    procesando = true;

    id('dataVieja').innerHTML = ponerPlaceholderData("Buscando...");

    dataSpinner.mostrar();
    pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, elmnt).then(r => {
        id('dataVieja').innerHTML = '';

        if (r.data.length === 0) {
            id('dataVieja').innerHTML = ponerPlaceholderData("Sin coincidencias", "#888");
        } else {
            datearRegistros(r);
        }
        
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
            alert ('Error registrando data: ' + r.error);
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
                document.cookie = galleta('token', token, 90); // 90 dias, 3 meses +/-
                document.cookie = galleta('user', r.email, 90);
                user = r.email;
                id('usuario').innerHTML = pascalCase(user) + ' <a href="javascript:void(0);" onclick="deslogear()" title="Salir">🏃‍➡️</a> ';

                cargaInicial();
            } else {
                document.cookie = `ulyluToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
                document.cookie = `ulyluUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
                alert('Último acceso hace más de 3 meses.');
                id('loggeo').style.display = 'flex';
                dataSpinner.ocultar();
                id('empresa').style.display = 'none';
                id('tabla').style.display = 'none';
                id('encabezado').style.paddingLeft = '46%';
            }
        });


        // Carga de tasa
        pedirData('tasaRd', `base=${bdBase}&tabla=${bdTabla}`).then(r => {
            if( r.error ) {
                alert ('Error pidiendo data: ' + r.error);
            } else {
                id('tasa').value = r.tasa;
            }
        });
    } else {
        id('loggeo').style.display = 'flex';
        dataSpinner.ocultar();
        id('empresa').style.display = 'none';
        id('tabla').style.display = 'none';
        id('usuario').style.display = 'none';
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
            document.cookie = galleta('token', r.token, 90); // 90 dias, 3 meses +/-
            document.cookie = galleta('user', mail, 90);
            location.reload();
        }
    });
}
function deslogear(){
    document.cookie = `ulyluToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    document.cookie = `ulyluUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
    location.reload();
}

id('pass').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      loggear();
    }
});