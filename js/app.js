let turnos = [];

class Turno {
    static id = 1;
    constructor(cliente, auto, kilometros, servicio) {
        this.id = Turno.id++;
        this.cliente = cliente;
        this.auto = auto;
        this.kilometros = kilometros;
        this.servicio = servicio;
    }
}

//Funcion pa registrar un turno
const registrarTurno = () => {
    const cliente = document.getElementById("cliente").value;
    const auto = document.getElementById("auto").value;
    const kilometros =document.getElementById("kilometros").value;
    const servicio = document.getElementById("servicio").value;

    const nuevoTurno = new Turno(cliente, auto, kilometros, servicio);
    turnos.push(nuevoTurno);
    mostrarTurnos();
    document.getElementById("formTurno").reset();
    console.log(turnos);
};

//Funcion pa buscar un turno por cliente
function buscarTurnoPorCliente() {
    const nombreCliente = document.getElementById("busquedaCliente").value;
    const resultados = turnos.filter(
        (turno) => turno.cliente.toLowerCase() === nombreCliente.toLowerCase()
    );
    const listaResultados = document.getElementById("resultadosBusqueda");

    listaResultados.innerHTML = "";
    
    if (resultados.length === 0) {
        listaResultados.innerHTML = `No se encontraron turnos para el cliente "${nombreCliente}".`;
        } else {
            resultados.forEach((turno) => {
                const li = document.createElement("li");
                li.textContent = `ID: ${turno.id}, Auto: ${turno.auto}, Kilometros: ${turno.kilometros}, Servicio: ${turno.servicio}`;
                listaResultados.appendChild(li);
            });
        }
}

// Funcion pa mostrar todos los turnos registrados
function mostrarTurnos() {
    const listaTurnos = document.getElementById("listaTurnos");
    listaTurnos.innerHTML = "";

    if (turnos.length === 0) {
        listaTurnos.innerHTML = "No hay turnos registrados.";
    } else {
        turnos.forEach((turno) => {
            const li = document.createElement("li");
            li.textContent = `ID: ${turno.id}, Cliente: ${turno.cliente}, Auto: ${turno.auto}, Kilometros: ${turno.kilometros}, Servicio: ${turno.servicio}`;
            listaTurnos.appendChild(li);
        });
    }
}


// Agregar evento al boton de registrar turno
document.getElementById("registrarBoton").addEventListener("click", (event) => {
    event.preventDefault();
    registrarTurno();
});

// agregar evento al boton de buscar turno por cliente
document.getElementById("btnBuscar").addEventListener("click", (event) => {
    event.preventDefault();
    buscarTurnoPorCliente();
});
