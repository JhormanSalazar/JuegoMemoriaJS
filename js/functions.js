const d = document;
const body = d.body;
body.classList.add("fondo-nivel-1");

// imagenes
let imagenesN1 = [
  {
    name: "Itadori",
    url: "images/itadori.jpg",
  },
  {
    name: "Nobara",
    url: "images/nobara.jpg",
  },
  {
    name: "Gojo",
    url: "images/gojo.jpg",
  },
  {
    name: "Geto",
    url: "images/geto.jpg",
  },
  {
    name: "Yuta",
    url: "images/yuta.jpg",
  },
  {
    name: "Nanami",
    url: "images/nanami.jpg",
  },
  {
    name: "Itadori",
    url: "images/itadori.jpg",
  },
  {
    name: "Nobara",
    url: "images/nobara.jpg",
  },
  {
    name: "Gojo",
    url: "images/gojo.jpg",
  },
  {
    name: "Geto",
    url: "images/geto.jpg",
  },
  {
    name: "Yuta",
    url: "images/yuta.jpg",
  },
  {
    name: "Nanami",
    url: "images/nanami.jpg",
  },
];

let imagenesN2 = [
  {
    name: "Sukuna",
    url: "images/sukuna.jpg",
  },
  {
    name: "Villano",
    url: "images/villano1.jpg",
  },
  {
    name: "Maki",
    url: "images/Maki.jpg",
  },
  {
    name: "Mahito",
    url: "images/mahito.jpg",
  },
  {
    name: "Inumaki",
    url: "images/Inumaki.jpg",
  },
  {
    name: "Choso",
    url: "images/choso.jpg",
  },
  {
    name: "Mahoraga",
    url: "images/mahoraga.jpg",
  },
  {
    name: "Megumi",
    url: "images/megumi.jpg",
  },
  {
    name: "Sukuna",
    url: "images/sukuna.jpg",
  },
  {
    name: "Villano",
    url: "images/villano1.jpg",
  },
  {
    name: "Maki",
    url: "images/Maki.jpg",
  },
  {
    name: "Mahito",
    url: "images/mahito.jpg",
  },
  {
    name: "Inumaki",
    url: "images/Inumaki.jpg",
  },
  {
    name: "Choso",
    url: "images/choso.jpg",
  },
  {
    name: "Mahoraga",
    url: "images/mahoraga.jpg",
  },
  {
    name: "Megumi",
    url: "images/megumi.jpg",
  },
];

let imagenesN3 = [
  {
    name: "Meimei",
    url: "images/meimei.jpg",
  },
  {
    name: "Hakari",
    url: "images/Hakari.jpg",
  },

  {
    name: "Higuruma",
    url: "images/higuruma.jpg",
  },
  {
    name: "Kenjaku",
    url: "images/kenjaku.jpg",
  },

  {
    name: "Meimei",
    url: "images/meimei.jpg",
  },
  {
    name: "Miwa",
    url: "images/miwa.jpg",
  },
  {
    name: "Rika",
    url: "images/rika.jpg",
  },
  {
    name: "Todou",
    url: "images/todou.jpg",
  },
  {
    name: "Toji",
    url: "images/toji.jpg",
  },
  {
    name: "Yuki",
    url: "images/yuki.jpg",
  },
  {
    name: "Meimei",
    url: "images/meimei.jpg",
  },
  {
    name: "Hakari",
    url: "images/Hakari.jpg",
  },

  {
    name: "Higuruma",
    url: "images/higuruma.jpg",
  },
  {
    name: "Kenjaku",
    url: "images/kenjaku.jpg",
  },

  {
    name: "Meimei",
    url: "images/meimei.jpg",
  },
  {
    name: "Miwa",
    url: "images/miwa.jpg",
  },
  {
    name: "Rika",
    url: "images/rika.jpg",
  },
  {
    name: "Todou",
    url: "images/todou.jpg",
  },
  {
    name: "Toji",
    url: "images/toji.jpg",
  },
  {
    name: "Yuki",
    url: "images/yuki.jpg",
  },
];

// sonidos
const sonidoFondo = new Audio("../sounds/musica-de-fondo.mp3");
const sonidoN3Fondo = new Audio("../sounds/nivel3-fondo.mp3");
const sonidoPerder = new Audio("../sounds/perder-nivel.mp3");
const sonidoNivel3Fondo = new Audio("../sounds/nivel3-fondo.mp3");
const sonidoGanar = new Audio("../sounds/ganar.mp3");

// campos del header de la pagina
let tiempoTranscurrido;
let btnIniciar = d.querySelector(".btn-iniciar");
let tablero = d.querySelector(".tablero");
let nivel = 1;
let mostrarNivel = d.getElementById("nivel");
mostrarNivel.textContent = nivel;
let mostrarJugador = d.querySelector("#jugador");

// arrays para comparar
let nombreImg = [];
let posicionImg = [];

// variables contadores
let aciertos = 0;
let intentos = 0;
let totalIntentos = 0;
let tiempo = 50;
let totalTiempo = 0;
let tiempoSobrante = 0;

// seleccionar contadores en el dom
let mostrarIntentos = d.getElementById("intentos");
let mostrarAciertos = d.getElementById("aciertos");
let mostrarTiempo = d.getElementById("tiempo");

d.addEventListener("DOMContentLoaded", () => {
  mostrarDatos();
});

// agregar evento al boton para iniciar el juego
btnIniciar.addEventListener("click", iniciarJuego);

// funcion de iniciar juego
function iniciarJuego() {
  // Verifica si ya se registró un nombre
  if (!mostrarJugador.textContent) {
    ventanaModal(); // muestra la ventana si aún no se registró
    return;
  }

  if (tiempoTranscurrido) return;

  if (nivel != 3) {
    sonidoFondo.loop = true;
    sonidoFondo.play().catch((error) => {
      console.warn("No se pudo reproducir el sonido de fondo:", error);
    });
  } else {
    sonidoN3Fondo.play();
  }

  tiempoTranscurrido = setInterval(() => {
    tiempo--;
    mostrarTiempo.textContent = tiempo;

    if (tiempo < 20) {
      mostrarTiempo.style.color = "red";
      mostrarTiempo.style.fontSize = "20px";
    }

    if (tiempo <= 0) {
      clearInterval(tiempoTranscurrido);
      tiempoTranscurrido = null; // importante: limpiar la referencia

      sonidoN3Fondo.pause();
      sonidoFondo.pause();
      sonidoPerder.play();
      alert("¡Se agotó el tiempo! 😅");
      setTimeout(() => {
        location.reload();
      }, 5000);
    }
  }, 1000);

  agregarImagenes();
  mostrarNivel.textContent = nivel;
  btnIniciar.removeEventListener("click", iniciarJuego);
}

// funcion para crear cartas
function crearCartas(index) {
  let div = d.createElement("div");
  div.className = "col-3";
  let card = d.createElement("div");
  card.className = "card";
  card.style.cursor = "pointer"; // 👈 Añade esto
  let image = d.createElement("img");
  image.className = "img-fluid alto-img";
  image.src = "images/logo-tapar.jpg";
  image.addEventListener("click", descrubrirIMG);
  image.id = index;
  card.appendChild(image);
  div.appendChild(card);
  tablero.appendChild(div);
}

function descrubrirIMG() {
  let imagenesNivel =
    nivel == 1
      ? imagenesN1
      : nivel == 2
      ? imagenesN2
      : nivel == 3
      ? imagenesN3
      : [];
  let idIMG = this.id; // se obtiene el id del imagen que donde fue llamado el evento
  this.src = imagenesNivel[idIMG].url; // mostramos la imagen
  new Audio("../sounds/seleccionar.mp3").play();

  // validar si ya se hizo clic en la imagen antes
  if (posicionImg.includes(idIMG)) {
    return;
  }

  nombreImg.push(imagenesNivel[idIMG].name); // la guardamos para comparar despues
  posicionImg.push(idIMG); // guardamos la posicion de la img

  // verificamos si hay 2 imagenes "descubiertas" y compara
  if (nombreImg.length == 2) {
    setTimeout(() => {
      comparar();
    }, 350);
  }
}

// funcion para comparar imagenes
function comparar() {
  let allImages = d.querySelectorAll(".tablero .card img");
  // comparar si coinciden las imagenes
  if (nombreImg[0] == nombreImg[1]) {
    new Audio("../sounds/coincide.mp3").play();
    allImages[posicionImg[0]].src = "images/ok.jpg";
    allImages[posicionImg[1]].src = "images/ok.jpg";

    allImages[posicionImg[0]].removeEventListener("click", descrubrirIMG);
    allImages[posicionImg[1]].removeEventListener("click", descrubrirIMG);
    aciertos++;
    mostrarContadores();
  } else {
    new Audio("../sounds/equivocarse.mp3").play();
    allImages[posicionImg[0]].src = "images/logo-tapar.jpg";
    allImages[posicionImg[1]].src = "images/logo-tapar.jpg";
    intentos++;
    mostrarContadores();
  }

  pasarNivel();
  nombreImg = [];
  posicionImg = [];
}

// pasar nivel
// comprobar la cantidad de aciertos para ganar
function pasarNivel() {
  if (nivel === 1 && aciertos === 6) {
    setTimeout(() => {
      alert("Felicitaciones, pasaste al siguiente nivel 😁!");
      totalIntentos += intentos;
      totalTiempo += tiempo;
      tiempoSobrante += 50 - tiempo;
      avanzarNivel(2, 45);
    }, 300);
  } else if (nivel === 2 && aciertos === 8) {
    setTimeout(() => {
      alert("Felicitaciones, pasaste al siguiente nivel 😎!");
      totalIntentos += intentos;
      totalTiempo += tiempo;
      tiempoSobrante += 50 - tiempo;
      avanzarNivel(3, 38);
    }, 300);
    sonidoFondo.pause();
  } else if (nivel === 3 && aciertos === 10) {
    setTimeout(() => {
      totalIntentos += intentos;
      totalTiempo += tiempo;
      tiempoSobrante += 50 - tiempo;
      obtenerDatos();
      sonidoNivel3Fondo.pause();
      sonidoGanar.play();
      alert("Felicitaciones, ganaste el juego 🙌😉!");
    }, 300);
    clearInterval(tiempoTranscurrido);
    tiempoTranscurrido = null;
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
}

function avanzarNivel(siguienteNivel, nuevoTiempo) {
  intentos = 0;
  aciertos = 0;
  clearInterval(tiempoTranscurrido);
  tiempoTranscurrido = null;
  tiempo = nuevoTiempo;
  nivel = siguienteNivel;
  mostrarContadores();
  btnIniciar.addEventListener("click", iniciarJuego);
}

function agregarImagenes() {
  // Selecciona el arreglo correcto según el nivel
  let imagenesNivel =
    nivel === 1
      ? [...imagenesN1]
      : nivel === 2
      ? [...imagenesN2]
      : nivel === 3
      ? [...imagenesN3]
      : [];

  // Mezclar el arreglo aleatoriamente
  imagenesNivel.sort(() => Math.random() - 0.5);

  // Limpiar el tablero
  tablero.innerHTML = "";

  // Crear las cartas
  for (let i = 0; i < imagenesNivel.length; i++) {
    crearCartas(i);
  }

  // Guardar temporalmente las imágenes mezcladas para que descrubrirIMG funcione
  if (nivel === 1) imagenesN1 = imagenesNivel;
  if (nivel === 2) imagenesN2 = imagenesNivel;
  if (nivel === 3) imagenesN3 = imagenesNivel;
}

// funcion para renderizar los contadores
function mostrarContadores() {
  mostrarIntentos.textContent = intentos;
  mostrarAciertos.textContent = aciertos;
  mostrarTiempo.textContent = tiempo;
  mostrarNivel.textContent = nivel;

  // CAMBIAR FONDO SEGÚN NIVEL
  body.classList.remove("fondo-nivel-2", "fondo-nivel-3");

  if (nivel === 2) {
    body.classList.add("fondo-nivel-2");
  } else if (nivel === 3) {
    body.classList.add("fondo-nivel-3");
  }
}

// mostrar ventana modal
function ventanaModal() {
  let mostrarModal = d.querySelector("#modal");
  let cerrarModal = d.querySelectorAll(".cerrar");
  let inputJugador = d.querySelector(".nombre-jugador");
  let btnGuardar = d.querySelector(".registrar-jugador");

  // añadir evento para cerrar modal
  cerrarModal.forEach((btn) => {
    btn.addEventListener("click", () => {
      mostrarModal.classList.remove("show");
      mostrarModal.style.display = "none";
    });
  });

  mostrarModal.classList.add("show");
  mostrarModal.style.display = "block";

  btnGuardar.addEventListener("click", () => {
    mostrarJugador.textContent = inputJugador.value;
    mostrarModal.classList.remove("show");
    mostrarModal.style.display = "none";
    iniciarJuego();
  });
}
