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