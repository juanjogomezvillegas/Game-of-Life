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

    velocitat = parseInt(document.getElementById("inputvelocitat").value);
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
    document.getElementById("inputvelocitat").addEventListener("click", SelectorVelocitat);
};

function play() {
    jocdevida = setInterval(CanvisTauler, velocitat);
};

function pause() {
    clearInterval(jocdevida);
};

function CanvisTauler() {
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
            PintaTauler(celesTauler);
        }
    }
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

function SelectorVelocitat() {
    velocitat = parseInt(document.getElementById("inputvelocitat").value);
    document.getElementById("velocitat").innerHTML = "Velocitat: "+velocitat;
};