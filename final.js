document.getElementById("pj").innerHTML = "En contrucción";

function limpiarNuevaData(){
    var inputs = document.querySelectorAll('.nuevaData input');
    inputs.forEach(function(input) {
        input.value = '';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('.nuevaData input[type="text"]');
    inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            var td = this.parentElement;
            td.style.borderBottom = '2px solid rgb(78, 58, 255)';
        });
        input.addEventListener('blur', function() {
            var td = this.parentElement;
            td.style.borderBottomColor  = ''; // Reset border color
        });
    });
});