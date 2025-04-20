const scripts = [
    "csss/estilos.js",
    "jss/header/tablas.js",
    "jss/servicios/util.js",
    "jss/servicios/data.js",
    "jss/populador.js",
    "jss/tabla/celdas.js",
    "jss/tabla/resumen.js",
    "jss/nuevaData/popup.js",
    "jss/tabla/buscador.js",
    "jss/tabla/csv.js",
    "jss/tabla/filtros.js",
    "jss/nuevaData/ingresarLimpiar.js",
    "jss/header/loggeo.js",
    "jss/localJson.js", // idealmente de ultimo
    "jss/nuevaData/el.js", // idealmente de ultimo
    "jss/final.js" // idealmente de ultimo
];

for (let src of scripts) {
    const script = document.createElement("script");
    script.src = src;
    script.async = false; // Le dice al explorador que mantenga el orden de ejecucion
    document.body.appendChild(script);
}
