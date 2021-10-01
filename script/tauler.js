var tauler;
var celes;
var generacio;
var numGeneracio;

window.onload = function(){
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
};