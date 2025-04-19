// Funcion esperar 250ms a que el usuario cambie el search string
async function esperarEscritura(elmnt) {
    if (elmnt === null) {
        await new Promise(resolve => setTimeout(resolve, blurDelay));
        return '';
    }
    
    let patronAnterior = '';
    while (patronAnterior != elmnt.value) {
        patronAnterior = elmnt.value;
        await new Promise(resolve => setTimeout(resolve, blurDelay));
    }
    return patronAnterior;
}

// Pedir Data que usa ajax
let filtrando = false;
/* elmnt puede ser:
    string, el patron de busqueda, por ejemplo 'Juan Ru'... sin terminar de escribir o
    un html element (especificamente event.target en el caso de Event Listener EL

    No dejarlo solo como un string, porque esperar esritura necesita evaluar tanto
        elmnt = event como (objeto {html})
        elmnt.value = event.value (string)
*/
async function pedirData(php, variables = null,  elmnt = null, offset = null){
    if ( esLocal ) {
        let accion = variables.split('&').find(parte => parte.startsWith('tabla=')).split('=')[1].toLowerCase();
        await esperarEscritura(elmnt);
        return local[php][accion];
    }else{
        const str = await esperarEscritura(elmnt);
        let patron = str ? '&patron=' + str : '';
        // cuando se hace un filtro con un patron existente o un scroll con busqueda
        if ((filtrando || scrolleando) && elmnt != null){
            patron = '&patron=' + elmnt
        }else if (filtroActivo != '' && !filtrando){ // cuando se hace una busqueda con un filtro existente
            variables += `&orden=${filtroActivo}`;
        }
        let limtOff = offset !== null ? '&offset=' + offset : '';
        local.data = ajax( php + '.php', variables + patron + limtOff);
        
        filtrando = false;
        return local.data;
    }
}

// Mandar data, tipo post
async function mandarData(php, variables = null) {
    if (esLocal) {
        return local[php]
    } else {
        return ajax( php + '.php' , variables);
    }
}