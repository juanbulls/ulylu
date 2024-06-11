// Funciones para tipos especificos Event listeners
const el = {
    fechaFocus: function(event) {
        event.target.type = 'date';
    },
    fechaBlur: function(event) {
        if (event.target.value === '') {
            event.target.type = 'text';
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

