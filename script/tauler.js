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
        celesTauler2[i] = new Array();
        celesTauler2[i].push(celesTauler[i]);
    }

    var comptadorVeins = 0;
    for (var i = 0 ; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            comptadorVeins = 0;
            for (var k = 0; k < celesTauler2.length; k++) {
                if (k == 0) {
                    for (var l = 1; l < celesTauler2[k].length; l++) {
                        if (celesTauler[i][j] == celesTauler2[k][l-1] || celesTauler[i][j] == celesTauler2[k][l+1] || 
                            celesTauler[i][j] == celesTauler2[k-1][l] || celesTauler[i][j] == celesTauler2[k+1][l] || 
                            celesTauler[i][j] == celesTauler2[k-1][l-1] || celesTauler[i][j] == celesTauler2[k+1][l+1]) {
                                if (celesTauler[i][j].innerHTML == "1") {
                                    comptadorVeins++;
                                }
                            }
                    }
                } else if (k > 0 && k < celesTauler2[k].length-1) {
                    for (var l = 0; l < celesTauler2[k].length; l++) {
                        if (celesTauler[i][j] == celesTauler2[k][l-1] || celesTauler[i][j] == celesTauler2[k][l+1] || 
                            celesTauler[i][j] == celesTauler2[k-1][l] || celesTauler[i][j] == celesTauler2[k+1][l] || 
                            celesTauler[i][j] == celesTauler2[k-1][l-1] || celesTauler[i][j] == celesTauler2[k+1][l+1]) {
                                if (celesTauler[i][j].innerHTML == "1") {
                                    comptadorVeins++;
                                }
                            }
                    }
                } else if (k > celesTauler2[k].length-2) {
                    for (var l = 0; l < celesTauler2[k].length-1; l++) {
                        if (celesTauler[i][j] == celesTauler2[k][l-1] || celesTauler[i][j] == celesTauler2[k][l+1] || 
                            celesTauler[i][j] == celesTauler2[k-1][l] || celesTauler[i][j] == celesTauler2[k+1][l] || 
                            celesTauler[i][j] == celesTauler2[k-1][l-1] || celesTauler[i][j] == celesTauler2[k+1][l+1]) {
                                if (celesTauler[i][j].innerHTML == "1") {
                                    comptadorVeins++;
                                }
                            }
                    }
                }
            }
            if (celesTauler[i][j].innerHTML == "1") {
                if (comptadorVeins < 2) {
                    celesTauler[i][j].innerHTML = "0";
                } else if (comptadorVeins > 3) {
                    celesTauler[i][j].innerHTML = "0";
                } else if (comptadorVeins >= 2 && comptadorVeins <= 3) {
                    celesTauler[i][j].innerHTML = "1";
                }
            } else {
                if (comptadorVeins == 3) {
                    celesTauler[i][j].innerHTML = "1";
                }
            }
            setPintaTauler();
            setComptarCelesVives();
        }
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
    var celesVives = getCelesVives();
    document.getElementById("celesVives").innerHTML = "Cel·les Vives: "+celesVives;
    document.getElementById("celesMortes").innerHTML = "Cel·les Mortes: "+(amplada * alsada) - celesVives;
};

function getCelesVives() {
    var celesVives = 0;
    for (var i = 1; i <= alsada; i++) {
        for (var j = 1; j <= amplada; j++) {
            if (celesTauler[i][j].innerHTML == "1") {
                celesVives++;
            }
        }
    }
    return celesVives;
};

function setSelectorVelocitat() {
    velocitat = parseInt(document.getElementById("inputvelocitat").value);
    document.getElementById("velocitat").innerHTML = "Velocitat: "+velocitat;
};