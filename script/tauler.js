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
    x = setInterval(CanvisTauler(), velocitat);
};

function pause() {
    clearInterval(x);
};

function CanvisTauler() {
    var comptadorVeins = 0;
    for (var i = 0; i < alsada; i++) {
        for (var j = 0; j < amplada; j++) {

            for (var x = 0; x < celesTauler.length; x++) {
                for (var y = 0; y < celesTauler[x].length; y++) {
                    /*var index1;
                    var index2;
                    if (x < 0 && x > amplada-1) {
                        index1 = amplada-1;
                    } else {
                        index1 = x;
                    }
                    if (y < 0 && y > alsada-1) {
                        index2 = alsada-1;
                    } else {
                        index2 = y;
                    }
                    if (!(index1 == amplada && index2 == alsada)) {
                        if (celesTauler[x+index1][y+index2].innerHTML == 1) {
                            comptadorVeins++;
                        }
                    }*/
                    if (celesTauler[x+amplada][y+alsada].innerHTML == "1") {
                        comptadorVeins++;
                    }

                    if (celesTauler[x][y].innerHTML == "1") {
                        if (comptadorVeins < 2) {
                            celesTauler[x][y].innerHTML = "0";
                        } else if (comptadorVeins > 3) {
                            celesTauler[x][y].innerHTML = "0";
                        } else if (comptadorVeins >= 2 && comptadorVeins <= 3) {
                            celesTauler[x][y].innerHTML = "1";
                        }
                    } else {
                        if (comptadorVeins == 3) {
                            celesTauler[x][y].innerHTML = "1";
                        }
                    }
                }
            }
        }
    }
    PintaTauler(celesTauler);
    numGeneracio++;
    generacio.innerHTML = "Generació: "+numGeneracio;
}

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