// Funciones para tipos especificos Event listeners
const el = {
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
        const celda = event.target.getBoundingClientRect();
        const tabla = event.target.placeholder.toLowerCase();
        const str = event.target.value;
        id('popup').style.top = celda.top + 27 + 'px';
        id('popup').style.left = celda.left + 'px';
        id('popup').style.display = 'block';

        el.popup(tabla, str);
    },
    relChange: function(event) {
        const tabla = event.target.placeholder.toLowerCase();
        const str = event.target.value;
        el.popup(tabla, str);
    },
    relBlur: function(event) {
        id('popup').style.display = 'none';
    },
    popup: function (tabla, str) {
        spinner.ocultar();
        pedirData('subData', 'base=bauer&tabla=' + tabla + 's&patron='+str).then(function(r) {
            spinner.mostrar();
            datearPopup(r);
        });
    }
};