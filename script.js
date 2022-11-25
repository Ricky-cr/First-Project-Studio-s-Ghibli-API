//creiamo una variabile a cui assegniamo un nuovo oggetto XMLHttpRequest

var request = new XMLHttpRequest();

//Apriamo una connessione usando GET per poter accedere all'URL

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function () {
  // Cominciamo l'accesso ai dati del JSON
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      //creiamo un div con la classe card
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      //Creiamo un h1 da posizionare all'interno della card con il titolo del film

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      //creiamo un paragrafo dove inserire la descrizione del film

      const p = document.createElement("p");
      movie.description = movie.description.substring(0, 300);
      p.textContent = movie.description;

      //diamo alla card un elemento container(div)

      container.appendChild(card);

      // ogni carta deve contenere titolo e paragrafo

      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = "Ops";
    app.appendChild(errorMessage);
  }
};

request.send();

const app = document.getElementById("root");
const logo = document.createElement("img");
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);
