// Carga spinner inicial
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
