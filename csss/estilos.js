document.getElementById("pj").innerHTML = "En contrucción";

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

// Icono Buscador
const rect = id('buscRect');
const line = id('buscLine');
const desplazoX = buscador.clientWidth - 30;

rect.setAttribute("x", desplazoX + 3);
rect.setAttribute('width', 23);

line.setAttribute("x1", desplazoX + 30);
line.setAttribute("x2", desplazoX + 23);

id('buscador').addEventListener('click', toggleBuscador);

let valToggle = false;
function toggleBuscador() {
    if (valToggle) { // Colapsado
        rect.setAttribute("x", desplazoX + 3);
        rect.setAttribute('width', 23);
        rect.setAttribute("rx", 23);
        rect.setAttribute("ry", 23);
        rect.setAttribute("stroke-width", 3);
        
        line.setAttribute("x1", desplazoX + 30);
        line.setAttribute("x2", desplazoX + 23);
    } else { // Expandido
        rect.setAttribute("x", 3);
        rect.setAttribute('width', desplazoX + 23);
        rect.setAttribute("rx", 2);
        rect.setAttribute("ry", 2);
        rect.setAttribute("stroke-width", 1);
        
        line.setAttribute("x1", 30);
        line.setAttribute("x2", 23);
    }
    valToggle = !valToggle
}