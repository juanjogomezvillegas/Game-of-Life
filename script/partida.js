/*Creem les variables següents: */
var alsada;
var amplada;
var tauler;
var files;
var celes;
var celesTauler;
var velocitat;
var generacio;
var numGeneracio;
var hores;
var minuts;
var segons;

/*Funció principal, que s'executara quan la pàgina de la partida estigui totalment carregada*/
window.onload = function() {
    alsada = document.getElementById("alsadaTauler").value
    amplada = document.getElementById("ampladaTauler").value;

    hores = 0;
    minuts = 0;
    segons = 0;
    document.getElementById("temps").innerHTML = "Temps: "+hores+" : "+minuts+" : "+segons;

    generacio = document.getElementById("generacio");
    numGeneracio = 0;
    generacio.innerHTML = "Generació: "+numGeneracio;

    setSelectorVelocitat();

    tauler = document.getElementById("tauler");

    files = tauler.getElementsByTagName("tr");

    celesTauler = new Array(files.length);

    for (var i = 0; i < files.length; i++) {
        celes = files[i].getElementsByTagName("td");
        celesTauler[i] = celes;
    }

    setPintaTauler();

    setComptarCelesVives();

    document.getElementById("bPlay").addEventListener("click", play);
    document.getElementById("bPause").addEventListener("click", pause);
    document.getElementById("inputvelocitat").addEventListener("click", setSelectorVelocitat);
};

function play() {
    jocdelavida = setInterval(setCanvisTauler, velocitat);
    tempsdejoc = setInterval(setTemps, 1000);
};

function pause() {
    clearInterval(jocdelavida);
    clearInterval(tempsdejoc);

    setSortirPartida();
};

function setCanvisTauler() {
    var celesTauler2 = new Array(celesTauler.length);
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            celesTauler2[i] = new Array(celesTauler[i].length);
        }
    }
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            celesTauler2[i][j] = celesTauler[i][j].cloneNode(true);
        }
    }

    var comptadorVeins = 0;
    for (var i = 0; i < celesTauler2.length; i++) {
        for (var j = 0; j < celesTauler2[i].length; j++) {
            try {
                if (celesTauler2[i][j-1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } catch (error) {}
            try {
                if (celesTauler2[i][j+1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } catch (error) {}
            try {
                if (celesTauler2[i-1][j].innerHTML == "1") {
                    comptadorVeins++
                }
            } catch (error) {}
            try {
                if (celesTauler2[i+1][j].innerHTML == "1") {
                    comptadorVeins++;
                }
            } catch (error) {}
            try {
                if (celesTauler2[i-1][j-1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } catch (error) {}
            try {
                if (celesTauler2[i+1][j+1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } catch (error) {}
            try {
                if (celesTauler2[i-1][j+1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } catch (error) {}
            try {
                if (celesTauler2[i+1][j-1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } catch (error) {}

            if ((comptadorVeins < 2 || comptadorVeins > 3) && celesTauler2[i][j].innerHTML == "1") {
                celesTauler[i][j].innerHTML = "0";
            } else if (comptadorVeins == 3 && celesTauler2[i][j].innerHTML == "0") {
                celesTauler[i][j].innerHTML = "1";
            } else {
                celesTauler[i][j].innerHTML;
            }

            comptadorVeins = 0;
        }
    }
    setPintaTauler();
    setComptarCelesVives();
    numGeneracio++;
    generacio.innerHTML = "Generació: "+numGeneracio;
};

function setPintaTauler() {
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

function setComptarCelesVives() {
    document.getElementById("celesVives").innerHTML = "Cel·les Vives: "+getCelesVives();
    document.getElementById("celesMortes").innerHTML = "Cel·les Mortes: "+getCelesMortes();
};

function getCelesVives() {
    var celesVives = 0;
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            if (celesTauler[i][j].innerHTML == "1") {
                celesVives++;
            }
        }
    }
    return celesVives;
};

function getCelesMortes() {
    var celesMortes = 0;
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            if (celesTauler[i][j].innerHTML == "0") {
                celesMortes++;
            }
        }
    }
    return celesMortes;
};

function setSelectorVelocitat() {
    velocitat = parseInt(document.getElementById("inputvelocitat").value);
    document.getElementById("velocitat").innerHTML = "Velocitat: "+velocitat;
};

function setTemps() {
    segons++;
    if (segons == 59) {
        segons = 0;
        minuts++;
        if (minuts == 59) {
            minuts = 0;
            hores++;
        }
    }
    document.getElementById("temps").innerHTML = "Temps: "+hores+" : "+minuts+" : "+segons;
};

function setSortirPartida() {
    var sortir = confirm("Vols Sortir de la Partida? ");

    if (sortir) {
        history.back();
    }
};