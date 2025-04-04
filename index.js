const scripts = [
    "csss/estilos.js",
    "jss/tablas.js",
    "jss/servicios.js",
    "jss/populador.js",
    "jss/celdas.js",
    "jss/resumen.js",
    "jss/popup.js", //aqui voy
    "jss/buscador.js", //aqui voy
    "jss/filtros.js", //aqui voy
    "jss/ingresarLimpiar.js", //aqui voy
    "jss/localJson.js",
    "jss/el.js",
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