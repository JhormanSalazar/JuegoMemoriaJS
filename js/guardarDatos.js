let nombreJugador = d.querySelector("#jugador");
let listaJugadores = "jugadores";
let tablaRecords = d.querySelector(".records tbody");

// funcion para obtener los datos
function obtenerDatos() {
  // se crea el objeto de jugador
  let datosJugador = {
    nombre: nombreJugador.textContent,
    intentos: totalIntentos,
    tiempoTotal: totalTiempo,
    tiempoSobrante: tiempoSobrante,
  };

  console.log(datosJugador);
  // pasar los datos del jugador
  guardarDatos(datosJugador);
}

// funcion para guardar datos en localStorage

function guardarDatos(datos) {
  // array para jugadores antiguos y nuevos
  let jugadores = [];

  //tomar los datos guardados previamente en localStorage
  let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
  if (datosPrevios) {
    jugadores = datosPrevios;
  }

  // se añade el nuevo jugador
  jugadores.push(datos);
  // se guarda el array con el nuevo jugador en el localstorage
  localStorage.setItem(listaJugadores, JSON.stringify(jugadores));
}

function mostrarDatos() {
  let jugadores = [];

  //tomar los datos guardados previamente en localStorage
  let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores));
  if (datosPrevios) {
    jugadores = datosPrevios;
  }
  
  // organizar datos del array por puntuacion.
  jugadores.sort((a, b)=>{
    if(a.tiempoTotal < b.tiempoTotal){
        return -1;
    }
    if(a.intentos < b.intentos){
        return 1;
    }
  });
  
  // mostrar datos en la tabla
  jugadores.forEach((jugador, i) => {
    let fila = d.createElement("tr");
    fila.innerHTML = `
    <td>${i + 1}</td>
    <td>${jugador.nombre}</td>
    <td>${jugador.tiempoTotal}</td>
    <td>${jugador.intentos}</td>
    <td>${jugador.tiempoSobrante}</td>
    `;
    tablaRecords.appendChild(fila)
  });
}
