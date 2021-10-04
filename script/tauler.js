var alsada;
var amplada;
var tauler;
var files;
var celes;
var celesTauler;
var generacio;
var numGeneracio;
var velocitat;

window.onload = function() {
    alsada = document.getElementById("alsadaTauler").value
    amplada = document.getElementById("ampladaTauler").value;

    velocitat = parseInt(document.getElementById("inputvelocitat").value);

    generacio = document.getElementById("generacio");
    numGeneracio = 0;
    generacio.innerHTML = "Generació: "+numGeneracio;

    document.getElementById("velocitat").innerHTML = "Velocitat: "+velocitat;

    tauler = document.getElementById("tauler");

    files = tauler.getElementsByTagName("tr");

    celesTauler = new Array(files.length);

    for (var i = 0; i < files.length; i++) {
        celes = files[i].getElementsByTagName("td");
        celesTauler[i] = celes;
    }

    PintaTauler(celesTauler);

    document.getElementById("bPlay").addEventListener("click", play);
    document.getElementById("bPause").addEventListener("click", pause);
};

function play() {
    jocdevida = setInterval(CanvisTauler(), velocitat);
};

function pause() {
    clearInterval(jocdevida);
};

function CanvisTauler() {
    var celesTauler2 = new Array(amplada);
    var comptadorVeins = 0;
    for (var i = 1; i <= alsada; i++) {
        celesTauler2[i] = celesTauler[i];
    }

    for (var i = 0 ; i < celesTauler2.length; i++) {
        for (var j = 0; j < celesTauler2[i].length; j++) {
            console.log(celesTauler2[i][j]);
        }
    }
    PintaTauler(celesTauler);
    numGeneracio++;
    generacio.innerHTML = "Generació: "+numGeneracio;
};

function PintaTauler(celesTauler) {
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            if (celesTauler[i][j].innerHTML == "1") {
                celesTauler[i][j].setAttribute("class", "celesPartida viva");
            } else {
                celesTauler[i][j].setAttribute("class", "celesPartida morta");
            }
        }
    }
};