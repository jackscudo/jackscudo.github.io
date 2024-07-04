var nodoMappaGenerica;
var nodoTeatroFenice;
var nodoTeatroMassimo;
var nodoTeatroScala;
var nodoTeatroCarloFelice;
var nodoTeatroVerdi;
var nodoTeatroSanCarlo;
var nodoContattiTeatro;

var tabellaContattiTeatro = {
    TeatroFenice: {
        titolo: "Teatro La Fenice",
        sottoTitolo: "Campo San Fantin, 1965 - 30124 Venezia (VE)",
        numero: "041 272 2699",
        paragrafo: "Orario: Lun-Dom 09:30 - 18:00",
        imgSrc: "images/teatri/fenice.jpg"
    },
    TeatroMassimo: {
        titolo: "Teatro Massimo",
        sottoTitolo: "Piazza Verdi, 90138 Palermo (PA)",
        numero: "091 605 3580",
        paragrafo: "Orario: Lun-Dom 9:30 - 15:30",
        imgSrc: "images/teatri/massimo.jpg"
    },
    TeatroScala: {
        titolo: "Teatro alla Scala",
        sottoTitolo: "Via Filodrammatici, 2 - 20121 Milano (MI)",
        numero: "02 72 003 744",
        paragrafo: "Orario: Lun-Sab 12:00 - 18:00",
        imgSrc: "images/teatri/lascala.jpg"
    },
    TeatroCarloFelice: {
        titolo: "Teatro Carlo Felice",
        sottoTitolo: "Passo Eugenio Montale, 4 - 16121 Genova (GE)",
        numero: "010 538 1432",
        paragrafo: "Orario: Lun-Sab 09:30 - 19:00",
        imgSrc: "images/teatri/carlofelice.jpg"
    },
    TeatroVerdi: {
        titolo: "Teatro Verdi",
        sottoTitolo: "Via Ghibellina, 99 - 50122 Firenze (FI)",
        numero: "055 212320",
        paragrafo: "Orario: Lun-Ven 10:00 - 13:00",
        imgSrc: "images/teatri/verdi.jpg"
    },
    TeatroSanCarlo: {
        titolo: "Teatro di San Carlo",
        sottoTitolo: "Via San Carlo, 98 - 80132 Napoli (NA)",
        numero: "081 797 2331",
        paragrafo: "Orario: Lun-Dom 10:00 - 18:00",
        imgSrc: "images/teatri/sancarlo.jpg"
    }
};

document.addEventListener('DOMContentLoaded', function () {
    try {
        nodoMappaGenerica = document.getElementById('mappaGenerica');
        nodoTeatroFenice = document.getElementById('TeatroFenice');
        nodoTeatroMassimo = document.getElementById('TeatroMassimo');
        nodoTeatroScala = document.getElementById('TeatroScala');
        nodoTeatroCarloFelice = document.getElementById('TeatroCarloFelice');
        nodoTeatroVerdi = document.getElementById('TeatroVerdi');
        nodoTeatroSanCarlo = document.getElementById('TeatroSanCarlo');
        nodoContattiTeatro = document.getElementById('contatti_teatro');
    } catch (error) {
        console.error("Errore nell'inizializzazione dei nodi:", error);
    }

    try {
        document.querySelectorAll('area').forEach(function (area) {
            area.addEventListener('click', function (event) {
                event.preventDefault();

                try {
                    var idTeatro = area.id;
                    var teatro = tabellaContattiTeatro[idTeatro];

                    var titolo = document.createElement('h1');
                    var sottoTitolo = document.createElement('h2');
                    var numero = document.createElement('h2');
                    var paragrafo = document.createElement('p');
                    var img = document.createElement('img');

                    titolo.textContent = teatro.titolo;
                    sottoTitolo.textContent = teatro.sottoTitolo;
                    numero.textContent = teatro.numero;
                    paragrafo.textContent = teatro.paragrafo;
                    img.src = teatro.imgSrc;
                    img.alt = teatro.titolo;

                    while (nodoContattiTeatro.firstChild) {
                        nodoContattiTeatro.removeChild(nodoContattiTeatro.firstChild);
                    }

                    nodoContattiTeatro.appendChild(titolo);
                    nodoContattiTeatro.appendChild(sottoTitolo);
                    nodoContattiTeatro.appendChild(numero);
                    nodoContattiTeatro.appendChild(paragrafo);
                    nodoContattiTeatro.appendChild(img);
                } catch (error) {
                    console.error("Errore nel gestire il click dell'area:", error);
                }
            });
        });
    } catch (error) {
        console.error("Errore nell'aggiungere i gestori di eventi:", error);
    }
});
