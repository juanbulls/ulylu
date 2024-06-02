// simplificador del getElementById
function id(ident){return document.getElementById(ident);}

// Validador de local o servidor
var esLocal = false; if (window.location.protocol == 'file:') { esLocal = true; }

// Ajax
function ajax(archivo, variables=null){
    return new Promise(function(resolve) {
        var req = new XMLHttpRequest();
        var url = variables != null ? "../phps/" + archivo + "?" + variables : "../phps/" + archivo
        req.open("GET", url);
        req.onload = function (){
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                resolve(response);
            }
        };
        req.send();
    });
}