const hayUnderscore = /_(.)$/; // Regex to match underscore followed by a letter
function datearGrilla(d) {
    // Ajustar los colspans
    id('supraHeaderBoticones').colSpan = d.cols.length -1;

    // Nueva Data y Headers registros
    d.cols.forEach((col) => {
        // Formulario nueva data
        const ntd = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.id = 'n' + col;

        // Especificos EL para tipos especificos de columnas
        if (col.slice(-2) == '_d'){ // Fechas
            input.type = 'date';
            input.setAttribute('lang', idioma);
            input.value = today.toISOString().split('T')[0];
        }
        if (col.slice(-2) == '_r') { // Columnas RELACIONADAS a otras tablas
            input.addEventListener('focus', el.relFocus);
            input.addEventListener('blur', el.relBlur);
            input.addEventListener('keyup', el.relChange);
            input.addEventListener('keydown', el.espicha);
        }

        input.placeholder = col.indexOf('_') != -1 ? col.slice(0, -2): col;
        input.setAttribute('autocomplete', 'off');

        ntd.appendChild(input);
        id('inputsDataNueva').appendChild(ntd); // Nueva Data

        // Encabezados data existente
        const th = document.createElement('th');
        const span = document.createElement('span');
        span.textContent = col.indexOf('_') != -1 ? col.slice(0, -2): col;
        th.appendChild(span);
        
        if (col.slice(-2) == '_e'){
            const iconoCelda = document.createElement('button');
            iconoCelda.innerHTML = '▾';
            iconoCelda.classList.add('icono');
            iconoCelda.classList.add('editar');
            iconoCelda.addEventListener('click', () => filtrar(col));
            iconoCelda.id = 'filtro_' + col;
            th.appendChild(iconoCelda);
        }
        
        id('headerDataVieja').appendChild(th); // Encabezado
    });
    
    // Registros historia
    datearRegistros(d);
}

/* Se usa para llenar datos, pero el llenado de datos tambien se ejectua,
    en busquedas filtrados y desflitrados */
let resumen = null;
function datearRegistros(d) {
    // Si hay resumentes se llenan
    id('resumen').innerHTML = '';
    id('tasaWrapper').style.display = 'none';
    id('resumen').removeAttribute('title');

    // Datos
    d.data.forEach((f) => {
        // Llenar Linea, repetido en 2 partes
        const tr = document.createElement('tr');
        d.cols.forEach((c) => {
            const td = document.createElement('td');
            td.setAttribute('data-cell', hayUnderscore.test(c) ? c.slice(0, -2) : c);

            // Valor
            const span = document.createElement('span');
            span.textContent = f[c];
            td.appendChild(span);

            // Icono de edicion
            if ( permisos.includes('editarNotas') ) { // Permiso editarNotas
                if (
                    (!bdTabla.includes('_') && c.slice(-2) !== '_r') ||
                    (bdTabla.includes('_') && c.slice(-2) !== '_e')
                ){
                    const iconoCelda = document.createElement('button');
                    iconoCelda.innerHTML = '✎';
                    iconoCelda.classList.add('icono');
                    iconoCelda.classList.add('editar');
                    iconoCelda.addEventListener('click', () => editarCelda(span, iconoCelda, c, f['id']));
                    td.appendChild(iconoCelda);
                }
            }

            tr.appendChild(td);
            tr.id = f['id'];
        });

        // Ultima columna de acciones
        const colAct = document.createElement('td');
        colAct.classList.add('colAct');
        tr.appendChild(colAct);

        if ( permisos.includes('eliminarNotas') ) {  // Permiso eliminarNotas
            const borrarBoton = document.createElement('button');
            borrarBoton.innerHTML = '⨯';
            borrarBoton.classList.add('icono');
            borrarBoton.classList.add('botAct');
            borrarBoton.addEventListener('click', () => borrarFila(f['id']));

            colAct.append(borrarBoton);
        }

        id('dataVieja').appendChild(tr);
    });

    
    if (d.resumen) {
        resumen = d.resumen;
        imprimirResumen();
    }
}