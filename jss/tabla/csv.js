function descargarCSV() {
    pedirData("csv", `base=${bdBase}&tabla=${bdTabla}`)
        .then(r => {
            if (r.data.length === 0) {
                alert("Error Data: no hay datos que descargar.");
                return;
            }

            let contenido = 'data:text/csv;charset=utf-8,' + r.cols.join(',') + '\n';
            r.data.forEach(function(row) {
                let preRow = Object.values(row);
                // Only take the second half of the values (visible columns)
                preRow = preRow.slice(preRow.length/2);
                contenido += preRow.join(',') + '\n';
            });

            const archivo = encodeURI(contenido);
            const link = document.createElement("a");
            link.setAttribute("href", archivo);
            // Use table name and date for filename
            const fecha = new Date().toISOString().split('T')[0];
            link.setAttribute("download", `${bdTabla}_${fecha}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}