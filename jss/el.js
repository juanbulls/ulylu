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
        id('popup').style.top = celda.top + 'px';
        id('popup').style.left = celda.left + 'px';
        
        id('popup').style.display = 'block';
        console.log('x y y del evento', celda.top, celda.left);
    },
    relBlur: function(event) {
        id('popup').style.display = 'none';
    }
};

