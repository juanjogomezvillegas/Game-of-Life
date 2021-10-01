window.onload = function(){
    /*var tauler = document.getElementById("tauler");

    var files = tauler.getElementsByTagName("tr");

    var celes = null;

    for (var i = 0; i < files.length; i++) {
        celes = files[i].getElementsByTagName("td");
    }*/

    var tauler = document.getElementById("tauler");

    var celes = tauler.getElementsByTagName("td");

    for (var i = 0; i < celes.length; i++) {
        if (celes[i].innerHTML == "1") {
            celes[i].setAttribute("class", "celesPartida viva");
        } else {
            celes[i].setAttribute("class", "celesPartida morta");
        }
    }
};