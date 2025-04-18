const bdBase = 'bauer';
let user = 'Usuario';
let bdTabla = getUrlParam('tabla');
let offset = 0;
if(bdTabla == null){
    bdTabla = 'notas';
    setUrlParam('tabla', 'notas', false);
}else{
    id('tabla').value = bdTabla;
}
function titular() {
    document.title = 'ulylu | ' 
        + pascalCase(bdBase) + ' - '
        + pascalCase(bdTabla);
}

const local = {
    data: {
        notas: {
            cols: ["Cliente_r", "Vendedor_r", "Fecha_d", "Tdoc_e", "Ndoc", "Cuenta_e", "Cantidad", "Descripcion", "Comentario"],
            data: [{
                id: "1",
                Cliente_r: "John Doe",
                Vendedor_r: "Jane Smith",
                Fecha_d: "2023-05-01",
                Tdoc_e: "REC 93",
                Ndoc: "00001",
                Cuenta_e: "A",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                id: "2",
                Cliente_r: "Alice Johnson",
                Vendedor_r: "Bob Brown",
                Fecha_d: "2023-05-02",
                Tdoc_e: "REC 93",
                Ndoc: "00002",
                Cuenta_e: "U",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: "Vuelve y juega que no es nada.",
                modificado: "2024-05-29 19:37:19"
            },
            {
                id: "3",
                Cliente_r: "Charlie Williams",
                Vendedor_r: "David Miller",
                Fecha_d: "2023-05-03",
                Tdoc_e: "NCRED",
                Ndoc: "00003",
                Cuenta_e: "Q",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                id: "4",
                Cliente_r: "Eve Wilson",
                Vendedor_r: "Frank Moore",
                Fecha_d: "2023-05-04",
                Tdoc_e: "REC 93",
                Ndoc: "00004",
                Cuenta_e: "A",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                id: "5",
                Cliente_r: "Grace Taylor",
                Vendedor_r: "Henry Anderson",
                Fecha_d: "2023-05-05",
                Tdoc_e: "REC 93",
                Ndoc: "00005",
                Cuenta_e: "U",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: "Comentario peque.",
                modificado: "2024-05-29 19:37:19"
            },
            {
                id: "6",
                Cliente_r: "Ivy Thomas",
                Vendedor_r: "Jack Martin",
                Fecha_d: "2023-05-06",
                Tdoc_e: "REC 93",
                Ndoc: "00006",
                Cuenta_e: "Q",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                id: "7",
                Cliente_r: "Kate Martinez",
                Vendedor_r: "Leo Hernandez",
                Fecha_d: "2023-05-07",
                Tdoc_e: "REC 93",
                Ndoc: "00007",
                Cuenta_e: "A",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                id: "8",
                Cliente_r: "Mia Garcia",
                Vendedor_r: "Nick Lopez",
                Fecha_d: "2023-05-08",
                Tdoc_e: "NCRED",
                Ndoc: "00008",
                Cuenta_e: "U",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                id: "9",
                Cliente_r: "Oscar Lee",
                Vendedor_r: "Paul Clark",
                Fecha_d: "2023-05-09",
                Tdoc_e: "REC 93",
                Ndoc: "00009",
                Cuenta_e: "Q",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            }],
            resumen: [
                {
                  "Cuenta_e": "A",
                  "Cantidad": "1000"
                },
                {
                  "Cuenta_e": "U",
                  "Cantidad": "-4993400"
                },
                {
                  "Cuenta_e": "Q",
                  "Cantidad": "230"
                }
              ]
        },
        clientes_v: {
            cols: [
                "Nombre",
                "A Total_e",
                "U Total_e",
                "Q Total_e"
            ],
            data: [
                {
                    "Nombre": "Ruiz Juan",
                    "A Total_e": "1234",
                    "U Total_e": "5678",
                    "Q Total_e": "9101"
                },
                {
                    "Nombre": "Alfonzo Lopez",
                    "A Total_e": "2345",
                    "U Total_e": "6789",
                    "Q Total_e": "1011"
                },
                {
                    "Nombre": "Javier Casalles",
                    "A Total_e": "3456",
                    "U Total_e": "7890",
                    "Q Total_e": "1213"
                },
                {
                    "Nombre": "Manuel Quistal",
                    "A Total_e": "4567",
                    "U Total_e": "8901",
                    "Q Total_e": "1415"
                },
                {
                    "Nombre": "Javier Ortiz",
                    "A Total_e": "5678",
                    "U Total_e": "9012",
                    "Q Total_e": "1617"
                },
                {
                    "Nombre": "David Mendoza",
                    "A Total_e": "6789",
                    "U Total_e": "1012",
                    "Q Total_e": "1819"
                },
                {
                    "Nombre": "Kaleb Fernandez",
                    "A Total_e": "7890",
                    "U Total_e": "1123",
                    "Q Total_e": "2021"
                },
                {
                    "Nombre": "Fernando Bautista",
                    "A Total_e": "8901",
                    "U Total_e": "1234",
                    "Q Total_e": "2223"
                },
                {
                    "Nombre": "Sergei Zhamoitin",
                    "A Total_e": "9012",
                    "U Total_e": "1345",
                    "Q Total_e": "2425"
                },
                {
                    "Nombre": "Maximiliano Alvarez",
                    "A Total_e": "1012",
                    "U Total_e": "1456",
                    "Q Total_e": "2627"
                },
                {
                    "Nombre": "Gabriel Cure",
                    "A Total_e": "1123",
                    "U Total_e": "1567",
                    "Q Total_e": "2829"
                },
                {
                    "Nombre": "Santiago Suarez",
                    "A Total_e": "1234",
                    "U Total_e": "1678",
                    "Q Total_e": "3031"
                },
                {
                    "Nombre": "Nicholas Pickthall",
                    "A Total_e": "1345",
                    "U Total_e": "1789",
                    "Q Total_e": "3233"
                },
                {
                    "Nombre": "Renzo Piza",
                    "A Total_e": "1456",
                    "U Total_e": "1901",
                    "Q Total_e": "3435"
                },
                {
                    "Nombre": "Jorge Umaña",
                    "A Total_e": "1567",
                    "U Total_e": "2012",
                    "Q Total_e": "3637"
                }
            ]
        }
    },
    subData: {
        vendedors: {
            data: [
                "Sebastian Rodriguez",
                "Victoria Blagh",
                "Daniel Salas"
            ]
        },
        clientes: {
            data: [
                "John Doe",
                "Alice Johnson De La Pava Y Amigos Del Norte De Colombia",
                "David Miller",
                "Frank Moore",
                "Grace Taylor"
            ]
        }
    },
    registrar: {
        cols: ["Cliente_r", "Vendedor_r", "Fecha_d", "Tdoc", "Ndoc", "Cuenta", "Cantidad", "Descripcion", "Comentario"],
        data: [{
            id: "999",
            Cliente_r: "Mocking Mock",
            Vendedor_r: "Jane Smith",
            Fecha_d: "2023-05-01",
            Tdoc_e: "REC 93",
            Ndoc: "00001",
            Cuenta_e: "A",
            Cantidad: 2,
            Descripcion: "ARETES - JOYARE 21696",
            Comentario: "Cualquier cosa para que este quede completo",
            modificado: "2024-05-29 19:37:19"
        }]
    },
    tasaRd: {
        notas: {
            tasa: "4000"
        }
    },
    borrarFila: {
        notas: {
            res: "Borrado Existoso."
        }
    }
}