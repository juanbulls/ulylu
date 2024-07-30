// Event listener dinamico para la linea azul abajo de las filas actulmente siendo editadas
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.nuevaData input[type="text"], .nuevaData input[type="date"]');
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            var td = this.parentElement;
            td.style.borderBottom = '2px solid rgb(78, 58, 255)';
        });
        input.addEventListener('blur', function() {
            var td = this.parentElement;
            td.style.borderBottom  = '1px solid rgb(218, 218, 218)';
        });
    });
});

const spinner = {
    mostrar: function () {
        id('loader').style.display = 'none';
        id('subData').style.display = 'block';
    },
    ocultar: function () {
        id('loader').style.display = 'block';
        id('subData').style.display = 'none';
    },
}

const dataSpinner = {
    mostrar: function () {
        id('dataSpinner').style.display = 'none';
    },
    ocultar: function () {
        id('dataSpinner').style.display = 'none';
    },
}

// Icono Buscador
const rect = id('buscRect');
const line = id('buscLine');
const lx1 = id('cancLin1');
const lx2 = id('cancLin2');
const desplazoX = buscador.clientWidth - 30;
const ajusteX = -3;

rect.setAttribute("x", desplazoX + 3);
rect.setAttribute('width', 23);
line.setAttribute("x1", desplazoX + 30);
line.setAttribute("x2", desplazoX + 23);

id('cancRect').setAttribute("x", desplazoX + 4);
lx1.setAttribute("x1", desplazoX + 25 + ajusteX);
lx1.setAttribute("x2", desplazoX + 10 + ajusteX);
lx2.setAttribute("x1", desplazoX + 10 + ajusteX);
lx2.setAttribute("x2", desplazoX + 25 + ajusteX);

id('buscador').addEventListener('click', buscExpandir);

let expandido = false;
function buscExpandir() {
    if (expandido) { return }
    rect.setAttribute("x", 3);
    rect.setAttribute('width', desplazoX + 23);
    rect.setAttribute("rx", 2);
    rect.setAttribute("ry", 2);
    rect.setAttribute("stroke-width", 2);
    line.style.display = 'none';
    id('lupa').classList.remove('buscClickeable');
    id('buscador').removeEventListener('click', buscExpandir);
    id('buscCancelar').style.display = 'block';
    setTimeout(() => { expandido = true }, 100);
    id('buscTexto').style.display = 'block';
    id('buscTexto').style.width = (desplazoX - 10) + 'px';
    id('buscTexto').focus();
}
function buscColapsar(){
    rect.setAttribute("x", desplazoX + 3);
    rect.setAttribute('width', 23);
    rect.setAttribute("rx", 23);
    rect.setAttribute("ry", 23);
    rect.setAttribute("stroke-width", 3);
    line.style.display = 'block';
    id('lupa').classList.add('buscClickeable');
    id('buscador').addEventListener('click', buscExpandir);
    id('buscCancelar').style.display = 'none';
    setTimeout(() => { expandido = false }, 100);
    id('buscTexto').style.display = 'none';
}