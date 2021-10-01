window.onload = function(){
    var tauler = document.getElementById("tauler");

    var files = tauler.getElementsByTagName("tr");

    var celes = null;

    for (var i = 0; i < files.length; i++) {
        celes = files[i].getElementsByTagName("td");
    }

    for (var i = 0; i < celes.length; i++) {
        alert(celes[i].innerHTML);
        /*if (celes[i].innerHTML == "1") {
            -
        } else {
            -
        }*/
    }
};