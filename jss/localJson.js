const bdBase = 'bauer';
let bdTabla = getUrlParam('tabla');
if(bdTabla == null){
    bdTabla = 'notas';
    setUrlParam('tabla', 'notas', false);
}else{
    id('tabla').value = bdTabla;
}
function titular() {
    document.title = 'ulylu | ' 
        + bdBase.charAt(0).toUpperCase() + bdBase.slice(1) + ' - '
        + bdTabla.charAt(0).toUpperCase() + bdTabla.slice(1);
}

const local = {
    data: {
        notas: {
            cols: ["Cliente_r", "Vendedor_r", "Fecha_d", "Tdoc_e", "Ndoc", "Cuenta_e", "Cantidad", "Descripcion", "Comentario"],
            data: [{
                idnotas: "1",
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
                idnotas: "1",
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
                idnotas: "1",
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
                idnotas: "1",
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
                idnotas: "1",
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
                idnotas: "1",
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
                idnotas: "1",
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
                idnotas: "1",
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
                idnotas: "1",
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
            },
            {
                idnotas: "1",
                Cliente_r: "Quinn Walker",
                Vendedor_r: "Rachel Lewis",
                Fecha_d: "2023-05-10",
                Tdoc_e: "REC 93",
                Ndoc: "00010",
                Cuenta_e: "A",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Sophie Young",
                Vendedor_r: "Thomas Hall",
                Fecha_d: "2023-05-11",
                Tdoc_e: "REC 93",
                Ndoc: "00011",
                Cuenta_e: "Q",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Uma King",
                Vendedor_r: "Victor Wright",
                Fecha_d: "2023-05-12",
                Tdoc_e: "REC 93",
                Ndoc: "00012",
                Cuenta_e: "U",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: "Heeeghhh que canson.",
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Walter Young",
                Vendedor_r: "Xander Hall",
                Fecha_d: "2023-05-13",
                Tdoc_e: "REC 93",
                Ndoc: "00013",
                Cuenta_e: "A",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Yara Diaz",
                Vendedor_r: "Zachary Kim",
                Fecha_d: "2023-05-14",
                Tdoc_e: "REC 93",
                Ndoc: "00014",
                Cuenta_e: "Q",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Aaron Foster",
                Vendedor_r: "Bella Evans",
                Fecha_d: "2023-05-15",
                Tdoc_e: "REC 93",
                Ndoc: "00015",
                Cuenta_e: "U",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Caleb Howard",
                Vendedor_r: "Dana Morgan",
                Fecha_d: "2023-05-16",
                Tdoc_e: "REC 93",
                Ndoc: "00016",
                Cuenta_e: "A",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Eli Carter",
                Vendedor_r: "Fiona Murphy",
                Fecha_d: "2023-05-17",
                Tdoc_e: "REC 93",
                Ndoc: "00017",
                Cuenta_e: "Q",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "George King",
                Vendedor_r: "Holly Wright",
                Fecha_d: "2023-05-18",
                Tdoc_e: "REC 93",
                Ndoc: "00018",
                Cuenta_e: "U",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: "que algo que no se que tratar de que sea largo o algmensooris y vuelte.",
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Ivy Nelson",
                Vendedor_r: "Jack Lee",
                Fecha_d: "2023-05-19",
                Tdoc_e: "REC 93",
                Ndoc: "00019",
                Cuenta_e: "A",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Karen Hill",
                Vendedor_r: "Liam Young",
                Fecha_d: "2023-05-20",
                Tdoc_e: "REC 93",
                Ndoc: "00020",
                Cuenta_e: "Q",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Michael White",
                Vendedor_r: "Nancy Scott",
                Fecha_d: "2023-05-21",
                Tdoc_e: "REC 93",
                Ndoc: "00021",
                Cuenta_e: "U",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Olivia Taylor",
                Vendedor_r: "Paul Martinez",
                Fecha_d: "2023-05-22",
                Tdoc_e: "REC 93",
                Ndoc: "00022",
                Cuenta_e: "A",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Quinn Robinson",
                Vendedor_r: "Rachel Harris",
                Fecha_d: "2023-05-23",
                Tdoc_e: "REC 93",
                Ndoc: "00023",
                Cuenta_e: "Q",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: "Sque algo que no se que tratar de que sea largo o algmensoa.",
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Sophia Clark",
                Vendedor_r: "Thomas Walker",
                Fecha_d: "2023-05-24",
                Tdoc_e: "REC 93",
                Ndoc: "00024",
                Cuenta_e: "U",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Tyler Lewis",
                Vendedor_r: "Uma King",
                Fecha_d: "2023-05-25",
                Tdoc_e: "REC 93",
                Ndoc: "00025",
                Cuenta_e: "A",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Victoria Hernandez",
                Vendedor_r: "Willie Martin",
                Fecha_d: "2023-05-26",
                Tdoc_e: "REC 93",
                Ndoc: "00026",
                Cuenta_e: "Q",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Xavier Brown",
                Vendedor_r: "Yary Young",
                Fecha_d: "2023-05-27",
                Tdoc_e: "REC 93",
                Ndoc: "00027",
                Cuenta_e: "U",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Aaron Foster",
                Vendedor_r: "Bella Evans",
                Fecha_d: "2023-05-28",
                Tdoc_e: "REC 93",
                Ndoc: "00028",
                Cuenta_e: "A",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: "Sque algo que no se que tratar de que sea largo o algmenso.",
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Caleb Howard",
                Vendedor_r: "Dana Morgan",
                Fecha_d: "2023-05-29",
                Tdoc_e: "REC 93",
                Ndoc: "00029",
                Cuenta_e: "Q",
                Cantidad: 1,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: "Siempre que algo que no se que tratar de que sea largo o algmenso que algo que no se que tratar de que sea largo o algmenso.",
                modificado: "2024-05-29 19:37:19"
            },
            {
                idnotas: "1",
                Cliente_r: "Eli Carter",
                Vendedor_r: "Fiona Murphy",
                Fecha_d: "2023-05-30",
                Tdoc_e: "REC 93",
                Ndoc: "00030",
                Cuenta_e: "U",
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
                },
                {
                    "Nombre": "Woods Staton",
                    "A Total_e": "1678",
                    "U Total_e": "2123",
                    "Q Total_e": "3839"
                },
                {
                    "Nombre": "Woods Staton",
                    "A Total_e": "1789",
                    "U Total_e": "2234",
                    "Q Total_e": "4041"
                },
                {
                    "Nombre": "Willie Hollander",
                    "A Total_e": "1901",
                    "U Total_e": "2345",
                    "Q Total_e": "4243"
                },
                {
                    "Nombre": "William Goldberg",
                    "A Total_e": "2012",
                    "U Total_e": "2456",
                    "Q Total_e": "4445"
                },
                {
                    "Nombre": "Walter Kolm",
                    "A Total_e": "2123",
                    "U Total_e": "2567",
                    "Q Total_e": "4647"
                },
                {
                    "Nombre": "Van Reali LLC",
                    "A Total_e": "2234",
                    "U Total_e": "2678",
                    "Q Total_e": "4849"
                },
                {
                    "Nombre": "Trimex Purchasing LLC",
                    "A Total_e": "2345",
                    "U Total_e": "2789",
                    "Q Total_e": "5051"
                },
                {
                    "Nombre": "Todd Haber",
                    "A Total_e": "2456",
                    "U Total_e": "2901",
                    "Q Total_e": "5253"
                },
                {
                    "Nombre": "Tobar y Tobar",
                    "A Total_e": "2567",
                    "U Total_e": "3012",
                    "Q Total_e": "5455"
                },
                {
                    "Nombre": "Thomas Greg and Sons FZCO",
                    "A Total_e": "2678",
                    "U Total_e": "3123",
                    "Q Total_e": "5657"
                },
                {
                    "Nombre": "Teton Mountain Time LLC",
                    "A Total_e": "2789",
                    "U Total_e": "3234",
                    "Q Total_e": "5859"
                },
                {
                    "Nombre": "Test Customer",
                    "A Total_e": "2901",
                    "U Total_e": "3345",
                    "Q Total_e": "6061"
                },
                {
                    "Nombre": "Stanley Rattner",
                    "A Total_e": "3012",
                    "U Total_e": "3456",
                    "Q Total_e": "6263"
                },
                {
                    "Nombre": "Sofia Vergara Enterprises",
                    "A Total_e": "3123",
                    "U Total_e": "3567",
                    "Q Total_e": "6465"
                },
                {
                    "Nombre": "Shannon Karim",
                    "A Total_e": "3234",
                    "U Total_e": "3678",
                    "Q Total_e": "6667"
                },
                {
                    "Nombre": "Serafino Iacano",
                    "A Total_e": "3345",
                    "U Total_e": "3789",
                    "Q Total_e": "6869"
                },
                {
                    "Nombre": "Seneca Medical Group",
                    "A Total_e": "3456",
                    "U Total_e": "3901",
                    "Q Total_e": "7071"
                },
                {
                    "Nombre": "Kaleb King",
                    "A Total_e": "3567",
                    "U Total_e": "4012",
                    "Q Total_e": "7273"
                },
                {
                    "Nombre": "Jake White",
                    "A Total_e": "3678",
                    "U Total_e": "4123",
                    "Q Total_e": "7475"
                },
                {
                    "Nombre": "Chris Brown",
                    "A Total_e": "3789",
                    "U Total_e": "4234",
                    "Q Total_e": "7677"
                },
                {
                    "Nombre": "Adam Smith",
                    "A Total_e": "3901",
                    "U Total_e": "4345",
                    "Q Total_e": "7879"
                },
                {
                    "Nombre": "Michael Johnson",
                    "A Total_e": "4012",
                    "U Total_e": "4456",
                    "Q Total_e": "8081"
                },
                {
                    "Nombre": "James Wilson",
                    "A Total_e": "4123",
                    "U Total_e": "4567",
                    "Q Total_e": "8283"
                },
                {
                    "Nombre": "Daniel Davis",
                    "A Total_e": "4234",
                    "U Total_e": "4678",
                    "Q Total_e": "8485"
                },
                {
                    "Nombre": "Matthew Miller",
                    "A Total_e": "4345",
                    "U Total_e": "4789",
                    "Q Total_e": "8687"
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
            idnotas: "999",
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
    }
}