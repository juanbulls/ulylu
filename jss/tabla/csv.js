function descargarCSV() {
    pedirData("csv", `base=${bdBase}&tabla=${bdTabla}`)
        .then(r => {
            if(r.error) {
                alert("Error:", r.error);
                return;
            }
            if (r.data.length <= 1) {
                alert("Error Data: no hay datos que descargar.");
                return;
            }

            // Create CSV content without data URL prefix
            let contenido = r.data.map(row => row.join(',')).join('\n');
            
            // Create blob with BOM for Excel
            const blob = new Blob(['\uFEFF' + contenido], { type: 'text/csv;charset=utf-8;' });
            const url = window.URL.createObjectURL(blob);
            
            const link = document.createElement("a");
            link.setAttribute("href", url);
            const fecha = new Date().toISOString().split('T')[0];
            link.setAttribute("download", `${bdTabla}_${fecha}.csv`);
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Clean up the URL object
            window.URL.revokeObjectURL(url);
        });
}