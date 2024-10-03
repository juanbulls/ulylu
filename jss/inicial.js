// simplificador del getElementById
function id(ident){return document.getElementById(ident);}

// Validador de local o servidor
var esLocal = false; if (window.location.protocol == 'file:') { esLocal = true; }

// Cooike
const token = document.cookie.split('; ').find(row => row.startsWith('ulyluToken='))?.split('=')[1] || null;
function galleta(dias, t=token) {
    const d = new Date();
    d.setTime(d.getTime() + ( dias *24*60*60*1000));
    return `ulyluToken=${t}; expires=${d.toUTCString()};`;
}

function ajax(archivo, variables=null){
    return new Promise(function(resolve) {
        var req = new XMLHttpRequest();
        var url = "../phps/" + archivo;
        if (variables) url += "?" + variables;
        if (token && variables) url += "&token=" + token;
        if (token && !variables) url += "?token=" + token;
        req.open("GET", url);
        req.onload = function (){
            if (this.readyState == 4 && this.status == 200) {
                var response = JSON.parse(this.responseText);
                if (response.error) alert(response.error);
                resolve(response);
            }
        };
        req.send();
    });
}

function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function setUrlParam(param, value, withHistory = true) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, value);
    if (withHistory) {
        window.history.pushState({}, '', url);
    }
}