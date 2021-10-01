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

    PintaTauler(celesTauler);

    var comptadorVius = 0;
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            comptadorVius = 0;
            if ((i == 0 || i == celesTauler.length-1) && (j == 0 || j == celesTauler.length-1)) {
                console.log(celesTauler[i][j]);
            } else {
                if (celesTauler[i][j--].innerHTML == "1") {
                    comptadorVius++;
                }
                if (celesTauler[i][j++].innerHTML == "1") {
                    comptadorVius++;
                }
                if (celesTauler[i--][j].innerHTML == "1") {
                    comptadorVius++;
                }
                if (celesTauler[i++][j].innerHTML == "1") {
                    comptadorVius++;
                }
            }
            if (comptadorVius == 3) {
                celesTauler[i][j].setAttribute("class", "celesPartida viva");
            } else {
                celesTauler[i][j].setAttribute("class", "celesPartida morta");
            }
        }
    }

    document.getElementById("bPlay").addEventListener("click", play);
    document.getElementById("bPause").addEventListener("click", pause);
};

function play(celes) {
    alert("Play");
};

function pause() {
    alert("Pause");
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