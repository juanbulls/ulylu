// Funciones para tipos especificos Event listeners
const el = {
    campoActual: undefined,
    blurDisabled: false,
    previousValue: "",
    fechaFocus: function(event) {
        el.blurDisabled = true;
        const input = event.target;
        const newInput = document.createElement('input');
        newInput.type = 'date';
        newInput.id = input.id;
        newInput.name = input.name;
        newInput.className = input.className;
        newInput.value = input.value;
        newInput.placeholder = input.placeholder;

        input.replaceWith(newInput);
        newInput.focus();

        newInput.addEventListener('blur', el.fechaBlur);

        el.blurDisabled = false;
    },
    fechaBlur: function(event) {
        if (el.blurDisabled) {
            return;
        }
        const input = event.target;
        if (input.value === '') {
            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.id = input.id;
            newInput.name = input.name;
            newInput.className = input.className;
            newInput.value = input.value;
            newInput.placeholder = input.placeholder;

            input.replaceWith(newInput);

            newInput.addEventListener('focus', el.fechaFocus);
        }
    },
    relFocus: function(event) {
        el.sel = -1;
        const celda = event.target.getBoundingClientRect();
        const tabla = event.target.placeholder.toLowerCase();
        const str = event.target.value;
        id('popup').style.top = celda.top + 27 + 'px';
        id('popup').style.left = celda.left + 'px';

        el.popup(tabla, str);
        el.campoActual = event.target.id;
        el.previousValue = event.target.value;
    },
    relChange: function(event) {
        const newValue = event.target.value;
        if (newValue !== el.previousValue) {
            const tabla = event.target.placeholder.toLowerCase();
            const str = event.target.value;
            el.popup(tabla, str);
            el.previousValue = event.target.value;
        }
    },
    relBlur: function() {
        setTimeout(() => {
            const aei = document.activeElement.id;
            if (aei == '' || aei.slice(-2) == '_d') {
                document.getElementById('popup').style.display = 'none';
            }
        }, 100);
    },
    popup: function (tabla, str) {
        id('popup').style.display = 'block';
        spinner.ocultar();
        pedirData('subData', 'base=bauer&tabla=' + tabla + 's&patron='+str).then(r => {
            spinner.mostrar();
            datearPopup(r);
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