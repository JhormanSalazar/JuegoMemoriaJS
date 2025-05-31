const d = document;
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
    url: "images/nanami.jpg",
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
    url: "images/nanami.jpg",
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

let tiempoTranscurrido;
let btnIniciar = d.querySelector(".btn-iniciar");
let tablero = d.querySelector(".tablero");
let nivel = 1;
let mostrarNivel = d.getElementById("nivel");

// arrays para comparar
let nombreImg = [];
let posicionImg = [];

// variables contadores
let aciertos = 0;
let intentos = 0;
let tiempo = 60;

// seleccionar contadores en el dom
let mostrarIntentos = d.getElementById("intentos");
let mostrarAciertos = d.getElementById("aciertos");
let mostrarTiempo = d.getElementById("tiempo");

// agregar evento al boton para iniciar el juego
btnIniciar.addEventListener("click", iniciarJuego);

// funcion de iniciar juego
function iniciarJuego() {
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
    } else if (tiempo === 0) {
      sonidoN3Fondo.pause();
      sonidoFondo.pause();
      sonidoPerder.play();
      alert("Se agoto el tiempo! 😅");
      clearInterval(tiempoTranscurrido);
      setTimeout(() => {
        location.reload(); //el objeto location tiene informacion sobre la pagina en general, su origin, href
      }, 2000);
    }
  }, 1000);
  // agregamos las imagenes cuando inicie el juego
  agregarImagenes();

  mostrarNivel.textContent = nivel;

  btnIniciar.removeEventListener("click", iniciarJuego);
}

// limpiar tablero
function limpiarTablero() {
  tablero.innerHTML = "";
}

// Agregar imagenes al tablero
function agregarImagenes() {
  let imagenesNivelActual =
    nivel === 1
      ? imagenesN1
      : nivel === 2
      ? imagenesN2
      : nivel === 3
      ? imagenesN3
      : [];

  imagenesNivelActual.sort(() => Math.random() - 0.5);
  imagenesNivelActual.forEach((img, index) => {
    crearCartas(index);
  });
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
      avanzarNivel(2, 45);
    }, 300);
  } else if (nivel === 2 && aciertos === 8) {
    alert("Felicitaciones, pasaste al siguiente nivel 😎!");
    avanzarNivel(3, 38);
    sonidoFondo.pause();
    sonidoNivel3Fondo.play();
  } else if (nivel === 3 && aciertos === 10) {
    sonidoNivel3Fondo.pause();
    sonidoGanar.play();
    alert("Felicitaciones, ganaste el juego 🙌😉!");
    setTimeout(() => {
    location.reload();
    }, 5000);
  }
}

function avanzarNivel(siguienteNivel, nuevoTiempo) {
  intentos = 0;
  aciertos = 0;
  clearInterval(tiempoTranscurrido);
  tiempo = nuevoTiempo;
  nivel = siguienteNivel;
  mostrarContadores();
  limpiarTablero();
  btnIniciar.addEventListener("click", iniciarJuego);
}

// funcion para renderizar los contadores
function mostrarContadores() {
  mostrarIntentos.textContent = intentos;
  mostrarAciertos.textContent = aciertos;
  mostrarTiempo.textContent = tiempo;
  mostrarNivel.textContent = nivel;
}
