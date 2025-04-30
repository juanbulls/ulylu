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
    mandarData('tasaUp', `base=${bdBase}&tasa=${trm.value}`).then( r => {
        if(r.error) {
            alert ('Error en TRM: ' + r.error);
            trm.value = trm.dataset.previousValue || trm.dataset.defaultValue;
        }
    });
    imprimirResumen();
}