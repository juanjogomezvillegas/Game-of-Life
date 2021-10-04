var tauler;
var files;
var celes;
var celesTauler;
var velocitat;
var x;

window.onload = function() {
    velocitat = document.getElementById("inputvelocitat").innerHTML;

    console.log(velocitat);

    var generacio = document.getElementById("generacio");
    var numGeneracio = 0;
    generacio.innerHTML = "Generació: "+numGeneracio;

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
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            console.log(celesTauler[i][j]);
            /*if (j++ >= 0 && j-- >= 0 && j++ < celesTauler[i].length && j-- < celesTauler[i].length) {
                if (celesTauler[i][j--].innerHTML == "1") {
                    comptadorVeins++;
                }
                if (celesTauler[i][j++].innerHTML == "1") {
                    comptadorVeins++;
                }
            }
            if (i++ >= 0 && i-- >= 0 && i++ < celesTauler.length && i-- < celesTauler.length) {
                if (celesTauler[i--][j].innerHTML == "1") {
                    comptadorVeins++;
                }
                if (celesTauler[i++][j].innerHTML == "1") {
                    comptadorVeins++;
                }
            }
            if (i++ >= 0 && i-- >= 0 && j++ >= 0 && j-- >= 0 && i++ < celesTauler.length && i-- < celesTauler.length && j++ < celesTauler[i].length && j-- < celesTauler[i].length) {
                if (celesTauler[i--][j--].innerHTML == "1") {
                    comptadorVeins++;
                }
                if (celesTauler[i--][j++].innerHTML == "1") {
                    comptadorVeins++;
                }
                if (celesTauler[i++][j--].innerHTML == "1") {
                    comptadorVeins++;
                }
                if (celesTauler[i++][j++].innerHTML == "1") {
                    comptadorVeins++;
                }
            }
            console.log(comptadorVeins);
            comptadorVeins = 0;*/
        }
    }
    //PintaTauler(celesTauler);
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