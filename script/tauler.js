var tauler;
var celes;
var amplada;
var generacio;
var numGeneracio;

window.onload = function() {
    amplada = document.getElementById("ampladaTauler").innerHTML;

    generacio = document.getElementById("generacio");
    numGeneracio = 0;
    generacio.innerHTML = "Generació: "+numGeneracio;

    tauler = document.getElementById("tauler");

    celes = tauler.getElementsByTagName("tr");

    for (var i = 0; i < celes.length; i++) {
        celes[i] = tauler.getElementsByTagName("td");
    }

    PintaTauler(celes);

    document.getElementById("bPlay").addEventListener("click", play);
    document.getElementById("bPause").addEventListener("click", pause);
};

function play(celes) {
    alert("Play");
};

function pause() {
    alert("Pause");
};

function PintaTauler(celes) {
    for (var i = 0; i < celes.length; i++) {
        if (celes[i].innerHTML == "1") {
            celes[i].setAttribute("class", "celesPartida viva");
        } else {
            celes[i].setAttribute("class", "celesPartida morta");
        }
        celes[i].innerHTML = i;
    }
};