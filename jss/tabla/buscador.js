let procesando = false;
let offset = 0;
const limit = 15; // Removed from dynamic query and hardcoded in PHP

function buscarRegistros(elmnt=null) {
    if (procesando) { return }
    procesando = true;

    id('dataVieja').innerHTML = ponerPlaceholderData("Buscando...");

    dataSpinner.mostrar();
    pedirData('data', `base=${bdBase}&tabla=${bdTabla}`, elmnt).then(r => {
        id('dataVieja').innerHTML = '';

        if (r.data.length === 0) {
            id('dataVieja').innerHTML = ponerPlaceholderData("Sin coincidencias", "#888");
        } else {
            datearRegistros(r);
        }
        
        dataSpinner.ocultar();
        procesando = false;
    });
}

function setupInfiniteScroll() {
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !procesando) {
            procesando = true;
            dataSpinner.mostrar();

            // Adjusted the infinite scroll logic to only pass offset
            pedirData('data', `base=${bdBase}&tabla=${bdTabla}&offset=${offset}`).then(r => {
                if (r.data.length > 0) {
                    datearRegistros(r);
                    offset += limit;
                }

                dataSpinner.ocultar();
                procesando = false;
            });
        }
    });
}

setupInfiniteScroll();