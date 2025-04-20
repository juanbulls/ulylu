function descargarCSV() {
    pedirData("csv", `base=${bdBase}&tabla=${bdTabla}`)
        .then(r => {
            if (r.data.length <= 1) {
                alert("Error Data: no hay datos que descargar.");
                return;
            }

            let contenido = 'data:text/csv;charset=utf-8,';
            r.data.forEach(row => {
                contenido += row.join(',') + '\n';
            });

            const archivo = encodeURI(contenido);
            const link = document.createElement("a");
            link.setAttribute("href", archivo);
            const fecha = new Date().toISOString().split('T')[0];
            link.setAttribute("download", `${bdTabla}_${fecha}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}