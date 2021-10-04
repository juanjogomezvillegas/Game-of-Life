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
};

function pause() {
    clearInterval(jocdelavida);
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
            celesTauler2[i][j] = celesTauler[i][j];
        }
    }

    var comptadorVeins = 0;
    for (var k = 0; k < celesTauler2.length; k++) {
        for (var l = 0; l < celesTauler2[k].length; l++) {
            if (k == 0 && l == 0) {
                if (celesTauler2[k+1][l].innerHTML == "1" || celesTauler2[k][l+1].innerHTML == "1" || celesTauler2[k+1][l+1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } else if (k == 0 && l == celesTauler2[k].length-1) {
                if (celesTauler2[k+1][l].innerHTML == "1" || celesTauler2[k][l-1].innerHTML == "1" || celesTauler2[k+1][l-1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } else if (k == celesTauler2.length-1 && l == 0) {
                if (celesTauler2[k-1][l].innerHTML == "1" || celesTauler2[k][l+1].innerHTML == "1" || celesTauler2[k-1][l+1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } else if (k == celesTauler2.length-1 && l == celesTauler2[k].length-1) {
                if (celesTauler2[k-1][l].innerHTML == "1" || celesTauler2[k][l-1].innerHTML == "1" || celesTauler2[k-1][l-1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } else if ((k > 0 && k < celesTauler2.length-1) && l == 0) {
                if (celesTauler2[k-1][l].innerHTML == "1" || celesTauler2[k+1][l].innerHTML == "1" || celesTauler2[k][l+1].innerHTML == "1" || 
                celesTauler2[k-1][l+1].innerHTML == "1" || celesTauler2[k+1][l+1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } else if ((k > 0 && k < celesTauler2.length-1) && l == celesTauler2[k].length-1) {
                if (celesTauler2[k-1][l].innerHTML == "1" || celesTauler2[k+1][l].innerHTML == "1" || celesTauler2[k][l-1].innerHTML == "1" || 
                celesTauler2[k-1][l-1].innerHTML == "1" || celesTauler2[k+1][l-1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } else if (k == 0 && (l > 0 && l < celesTauler2[k].length-1)) {
                if (celesTauler2[k+1][l].innerHTML == "1" || celesTauler2[k][l+1].innerHTML == "1" || celesTauler2[k][l-1].innerHTML == "1" || 
                celesTauler2[k+1][l-1].innerHTML == "1" || celesTauler2[k+1][l+1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } else if (k == celesTauler2.length-1 && (l > 0 && l < celesTauler2[k].length-1)) {
                if (celesTauler2[k-1][l].innerHTML == "1" || celesTauler2[k][l+1].innerHTML == "1" || celesTauler2[k][l-1].innerHTML == "1" || 
                celesTauler2[k-1][l-1].innerHTML == "1" || celesTauler2[k-1][l+1].innerHTML == "1") {
                    comptadorVeins++;
                }
            } else {
                if (celesTauler2[k][l-1].innerHTML == "1" || celesTauler2[k][l+1].innerHTML == "1" || celesTauler2[k-1][l].innerHTML == "1" || 
                celesTauler2[k+1][l].innerHTML == "1" || celesTauler2[k-1][l-1].innerHTML == "1" || celesTauler2[k+1][l+1].innerHTML == "1" || 
                celesTauler2[k-1][l+1].innerHTML == "1" || celesTauler2[k+1][l-1].innerHTML) {
                    comptadorVeins++;
                }
            }

            if (celesTauler[k][l].innerHTML == "1") {
                if (comptadorVeins < 2) {
                    celesTauler[k][l].innerHTML = "0";
                } else if (comptadorVeins > 3) {
                    celesTauler[k][l].innerHTML = "0";
                } else if (comptadorVeins >= 2 && comptadorVeins <= 3) {
                    celesTauler[k][l].innerHTML = "1";
                }
            } else {
                if (comptadorVeins == 3) {
                    celesTauler[k][l].innerHTML = "1";
                }
            }
            comptadorVeins = 0;
        }
        setPintaTauler();
        setComptarCelesVives();
    }
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