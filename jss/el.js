// Funciones para tipos especificos Event listeners
const el = {
    campoActual: undefined,
    transitioning: false,
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
        if (el.blurDisabled || el.transitioning) {
            console.log('escape');
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
        console.log('focus');
        el.transitioning = true;
        setTimeout(() => el.transitioning = false, 100);
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
        console.log('change');
        el.transitioning = true;
        const newValue = event.target.value;
        if (newValue !== el.previousValue) {
            const tabla = event.target.placeholder.toLowerCase();
            const str = event.target.value;
            el.popup(tabla, str);
            el.previousValue = event.target.value;
        }
    },
    relBlur: function() {
        console.log('blur fuera tran fuera', el.transitioning);
        setTimeout(function() {
            console.log('tran dentro', el.transitioning);
            const aei = document.activeElement.id;
            if (aei == '' || aei.slice(-2) == '_d') {
                console.log('blur dentro');
                document.getElementById('popup').style.display = 'none';
            }
        }, 100);
    },
    popup: function (tabla, str) {
        id('popup').style.display = 'block';
        spinner.ocultar();
        pedirData('subData', 'base=bauer&tabla=' + tabla + 's&patron='+str).then(function(r) {
            spinner.mostrar();
            datearPopup(r);
        });
    },
    puItemClick: function(event) {
        const valor = event.target.value;
        id(el.campoActual).value = valor;
        id(el.campoActual).focus();
    },
    espicha: function(event) {
        switch (event.key) {
            case 'ArrowUp':
                console.log('Espicho Arriba');
                break;
            case 'ArrowDown':
                console.log('Espicho Abajo');
                break;
            case 'Tab':
                console.log('Espicho Tab');
                break;
            case 'Enter':
                console.log('Espicho Enter');
                break;
        }
    }
};