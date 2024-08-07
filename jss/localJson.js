const bdBase = 'bauer';
const bdTabla = 'notas'

const local = {
    data: {
        notas: {
            cols: ["Cliente_r", "Vendedor_r", "Fecha_d", "Tdoc", "Ndoc", "Cuenta", "Cantidad", "Descripcion", "Comentario"],
            data: [{
                idnotas: "1",
                Cliente_r: "John Doe",
                Vendedor_r: "Jane Smith",
                Fecha_d: "2023-05-01",
                Tdoc: "REC 93",
                Ndoc: "00001",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00002",
                Cuenta: "U",
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
                Tdoc: "REC 93",
                Ndoc: "00003",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00004",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00005",
                Cuenta: "U",
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
                Tdoc: "REC 93",
                Ndoc: "00006",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00007",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00008",
                Cuenta: "U",
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
                Tdoc: "REC 93",
                Ndoc: "00009",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00010",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00011",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00012",
                Cuenta: "U",
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
                Tdoc: "REC 93",
                Ndoc: "00013",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00014",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00015",
                Cuenta: "U",
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
                Tdoc: "REC 93",
                Ndoc: "00016",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00017",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00018",
                Cuenta: "U",
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
                Tdoc: "REC 93",
                Ndoc: "00019",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00020",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00021",
                Cuenta: "U",
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
                Tdoc: "REC 93",
                Ndoc: "00022",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00023",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00024",
                Cuenta: "U",
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
                Tdoc: "REC 93",
                Ndoc: "00025",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00026",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00027",
                Cuenta: "U",
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
                Tdoc: "REC 93",
                Ndoc: "00028",
                Cuenta: "A",
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
                Tdoc: "REC 93",
                Ndoc: "00029",
                Cuenta: "Q",
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
                Tdoc: "REC 93",
                Ndoc: "00030",
                Cuenta: "U",
                Cantidad: 2,
                Descripcion: "ARETES - JOYARE 21696",
                Comentario: null,
                modificado: "2024-05-29 19:37:19"
            }]
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
            Tdoc: "REC 93",
            Ndoc: "00001",
            Cuenta: "A",
            Cantidad: 2,
            Descripcion: "ARETES - JOYARE 21696",
            Comentario: "Cualquier cosa para que este quede completo",
            modificado: "2024-05-29 19:37:19"
        }]
    }
}