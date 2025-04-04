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

for (let src of scripts) {
    const script = document.createElement("script");
    script.src = src;
    script.async = false; // Le dice al explorador que mantenga el orden de ejecucion
    document.body.appendChild(script);
}
