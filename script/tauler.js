window.onload = function() {
    var amplada = document.getElementById("ampladaTauler").innerHTML;
    var alsada = document.getElementById("alsadaTauler").innerHTML;

    var generacio = document.getElementById("generacio");
    var numGeneracio = 0;
    generacio.innerHTML = "Generació: "+numGeneracio;

    var tauler = document.getElementById("tauler");

    var files = tauler.getElementsByTagName("tr");

    var celes;

    var celesTauler = new Array(files.length);

    for (var i = 0; i < files.length; i++) {
        celes = files[i].getElementsByTagName("td");
        celesTauler[i] = celes;
    }
    console.table(celesTauler);

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