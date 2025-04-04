const scripts = [
    "csss/estilos.js",
    "jss/tablas.js",
    "jss/servicios.js",
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