var tauler;
var files;
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

    files = tauler.getElementsByTagName("tr");

    for (var i = 0; i < files.length; i++) {
        celes[i] = tauler.getElementsByTagName("td");
    }

    console.table(files);
    console.table(celes);

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