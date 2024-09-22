// Funciones para tipos especificos Event listeners
const blurDelay = 250;
/* Deleay en sus 3 usos debe ser igual para que funcione en ambos:
   - en ambos blur se ejecuta primero que puItemClick, pero el delay
    ayuda a que pase al reves, en pedirData debe ser el mismo valor para que esos dos se 
    ejecuten en orden
   - en local, el delay ayuda a ver el spinner aunque sea por muy poco tiempo
   - en remoto, el delay ayuda a que cuando se escribe muy rapido no se produzca un error, 
    ya que cada vez que se teclea una tecla, corre el onchange que usa el popup, y este usa 
    pedir data, el delay asegura que el llamado asyncrono acabe antes si el usuario escribe
    muy rapido, para internet lento no importa, lo que importa es que el delay sea mas rapido
    que el tiempo que toma el async
*/

const today = new Date();
const hoy = today.toLocaleDateString(idioma, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).split('/').reverse().join('-');

const el = {
    campoActual: undefined,
    previousValue: "",
    procesando: false,
    relFocus: function(event) {
        el.sel = -1;
        const celda = event.target.getBoundingClientRect();
        const tabla = event.target.placeholder.toLowerCase();
        id('popup').style.top = celda.top + 27 + 'px';
        id('popup').style.left = celda.left + 'px';

        el.popup(tabla, event.target); // usa pedir data, usa ajax, tiene delay
        el.campoActual = event.target.id;
        el.previousValue = event.target.value;
    },
    relChange: function(event) {
        const newValue = event.target.value;
        if (newValue !== el.previousValue) { // evita correr al espichar flechas
            const tabla = event.target.placeholder.toLowerCase();
            el.popup(tabla, event.target); // usa pedir data, usa ajax, tiene delay
            el.previousValue = event.target.value;
        }
    },
    relBlur: function() {
        setTimeout(() => {
            const aei = document.activeElement.id;
            if (aei.slice(-2, -1) !== '_') {
                id('popup').style.display = 'none';
            }
        }, blurDelay);
    },
    popup: function (tabla, elmnt) {
        if (el.procesando) { return }
        el.procesando = true;
        id('popup').style.display = 'block';
        spinner.ocultar();
        pedirData('subData', `base=${bdBase}&tabla=` + tabla + 's', elmnt).then(r => {
            spinner.mostrar();
            datearPopup(r);
            el.procesando = false;
        });
    },
    puItemClick: function(event) {
        const valor = typeof event === 'string' ? event : event.target.value;
        id(el.campoActual).value = valor;
        id(el.campoActual).focus();
    },
    sel: -1,
    espicha: function(event) {
        switch (event.key) {
            case 'Tab':
            case 'Enter':
                const val = id('subData').children[el.sel].value;
                el.puItemClick(val);
            break;
            case 'ArrowUp':
                el.actSeleccion(-1);
            break;
            case 'ArrowDown':
                el.actSeleccion(1);
            break;
        }
    },
    actSeleccion: function(dir) {
        const sdItems = id('subData').children;

        el.sel += dir;
        el.sel<0 && (el.sel = sdItems.length-1);
        el.sel>sdItems.length-1 && (el.sel = 0);

        for (let i=0; i<sdItems.length; i++) {
            sdItems[i].style.border = 'none';
        };
        sdItems[el.sel].style.border = '1px solid white';
    },
};