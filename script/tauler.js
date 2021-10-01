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
    console.log(files);

    for (var i = 0; i < files.length; i++) {
        celes = files[i].getElementsByTagName("td");
        console.log(celes);
    }

    /*for (var i = 0; i < files.length; i++) {◘
        for (var j = 0; j < files[i]; j++)
    }*/

    //PintaTauler(celes);

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
    }
};