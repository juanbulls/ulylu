// Funciones para tipos especificos Event listeners
const el = {
    campoActual: undefined,
    transitioning: false,
    fechaFocus: function(event) {
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
    },
    fechaBlur: function(event) {
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
        el.transitioning = true;
        setTimeout(() => el.transitioning = false, 200);
        const celda = event.target.getBoundingClientRect();
        const tabla = event.target.placeholder.toLowerCase();
        const str = event.target.value;
        id('popup').style.top = celda.top + 27 + 'px';
        id('popup').style.left = celda.left + 'px';

        el.popup(tabla, str);
        el.campoActual = event.target.id;
    },
    relChange: function(event) {
        const tabla = event.target.placeholder.toLowerCase();
        const str = event.target.value;
        el.popup(tabla, str);
    },
    relBlur: function(event) {
        setTimeout(function() {
            if (!el.transitioning) {
                document.getElementById('popup').style.display = 'none';
            }
        }, 200);
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
    }
};