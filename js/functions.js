const d = document;
let imagenes = [
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
console.log(mostrarAciertos, mostrarIntentos);
let mostrarTiempo = d.getElementById("tiempo");

let tablero = d.querySelector(".tablero");
agregarImagenes();

// funcion para que la ronda dure 60 segundos

let tiempoTranscurrido = setInterval(() => {
  tiempo--;
  mostrarTiempo.textContent = tiempo;
  if (tiempo === 0) {
    clearInterval(tiempoTranscurrido);
  }
}, 1000);

// Agregar imagenes al tablero
function agregarImagenes() {
  imagenes.forEach((img, index) => {
    let div = d.createElement("div");
    div.className = "col-3";
    let card = d.createElement("div");
    card.className = "card";
    let image = d.createElement("img");
    image.className = "img-fluid alto-img";
    image.src = "images/logo-tapar.jpg";
    image.addEventListener("click", descrubrirIMG);
    image.id = index;
    card.appendChild(image);
    div.appendChild(card);
    tablero.appendChild(div);
  });
}

function descrubrirIMG() {
  let idIMG = this.id; // se obtiene el id del imagen que donde fue llamado el evento
  this.src = imagenes[idIMG].url; // mostramos la imagen

  // validar si ya se hizo clic en la imagen antes
  if (posicionImg.includes(idIMG)) {
    return;
  }

  nombreImg.push(imagenes[idIMG].name); // la guardamos para comparar despues
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
    allImages[posicionImg[0]].src = "images/ok.jpg";
    allImages[posicionImg[1]].src = "images/ok.jpg";

    allImages[posicionImg[0]].removeEventListener("click", descrubrirIMG);
    allImages[posicionImg[1]].removeEventListener("click", descrubrirIMG);
    aciertos++;
    mostrarAciertos.textContent = aciertos;
  } else {
    allImages[posicionImg[0]].src = "images/logo-tapar.jpg";
    allImages[posicionImg[1]].src = "images/logo-tapar.jpg";
    intentos++;
    mostrarIntentos.textContent = intentos;
  }

  nombreImg = [];
  posicionImg = [];

  // comprobar la cantidad de aciertos para ganar

  if (aciertos === 6) {
    setTimeout(() => {
      alert("Felicitaciones, pasaste al siguiente nivel 😎");
      location.reload(); //el objeto location tiene informacion sobre la pagina en general, su origin, href
    }, 300);
  }
}
