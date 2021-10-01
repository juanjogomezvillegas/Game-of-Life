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

    document.getElementById("bPlay").addEventListener("click", play);
    document.getElementById("bPause").addEventListener("click", pause);
    
    alert(amplada);
    /*for (var i = 0; i < celes.length; i++) {
        if (i == 0) {
            //
        } else if (i == celes.length-1) {
            //
        } else {
            //
        }
    }*/
};

function play() {
    alert("Play");
}

function pause() {
    alert("Pause");
}