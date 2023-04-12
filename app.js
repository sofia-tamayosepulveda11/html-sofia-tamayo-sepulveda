document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "inglaterra",
      img: "img/inglaterra box.jpg"
    },
    {
      name: "canada",
      img: "img/canada box.jpg"
    },
    {
      name: "dubai",
      img: "img/dubai box.jpg"
    },
    {
      name: "madrid",
      img: "img/madrid box.jpg"
    },
    {
      name: "new york",
      img: "img/new york box.jpg"
    },
    {
      name: "paris",
      img: "img/paris box.jpg"
    },
    {
      name: "inglaterra",
      img: "img/inglaterra box.jpg"
    },
    {
      name: "canada",
      img: "img/canada box.jpg"
    },
    {
      name: "dubai",
      img: "img/dubai box.jpg"
    },
    {
      name: "madrid",
      img: "img/madrid box.jpg"
    },
    {
      name: "new york",
      img: "img/new york box.jpg"
    },
    {
      name: "paris",
      img: "img/paris box.jpg"
    }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];
  //----------------- lectura03 ---------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "img/reversobox.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }

  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "images/reverso.png");
      cards[opcionDosId].setAttribute("src", "images/reverso.png");
      alert("¡Diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "images/blank-png");
      cards[opcionDosId].setAttribute("src", "images/bLank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "images/reverso.png");
      cards[opcionDosId].setAttribute("src", "images/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "!Felicidades, encontraste todos los pares!";
    }
  }
  crearTablero();
});
