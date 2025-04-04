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
    script.async = false; // 👈 Tells the browser to maintain execution order
    document.body.appendChild(script);
}
