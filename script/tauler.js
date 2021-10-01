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

    celes = tauler.getElementsByTagName("td");

    for (var i = 0; i < celes.length; i++) {
        if (celes[i].innerHTML == "1") {
            celes[i].setAttribute("class", "celesPartida viva");
        } else {
            celes[i].setAttribute("class", "celesPartida morta");
        }
    }

    document.getElementById("bPlay").addEventListener("click", play(celes));
    document.getElementById("bPause").addEventListener("click", pause);
};

function play(celes) {
    for (var i = 0; i < celes.length; i++) {
        if (i == 0) {
            if (celes[i++].innerHTML == "1" && celes[i += amplada].innerHTML == "1" && celes[i += amplada + 1].innerHTML == "1") {
                celes[i] = "1";
                celes[i].setAttribute("class", "celesPartida viva");
            } else {
                celes[i] = "0";
                celes[i].setAttribute("class", "celesPartida morta");
            }
        } else if (i == celes.length-1) {
            if (celes[i--].innerHTML == "1" && celes[i += amplada].innerHTML == "1" && celes[i += amplada - 1].innerHTML == "1") {
                celes[i] = "1";
                celes[i].setAttribute("class", "celesPartida viva");
            } else {
                celes[i] = "0";
                celes[i].setAttribute("class", "celesPartida morta");
            }
        }
    }
}

function pause() {
    alert("Pause");
}