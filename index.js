const scripts = [
    "csss/estilos.js",
    "jss/header/tablas.js",
    "jss/servicios.js",
    "jss/populador.js",
    "jss/tabla/celdas.js",
    "jss/tabla/resumen.js",
    "jss/nuevaData/popup.js",
    "jss/tabla/buscador.js",
    "jss/tabla/filtros.js",
    "jss/nuevaData/ingresarLimpiar.js",
    "jss/header/loggeo.js", //aqui voy
    "jss/localJson.js",
    "jss/nuevaData/el.js",
    "jss/final.js"
];

scripts.reduce((p, src) =>
    p.then(() => new Promise(res => {
        let s = document.createElement("script");
        s.src = src;
        s.onload = res;
        document.body.appendChild(s);
    }
)), Promise.resolve());