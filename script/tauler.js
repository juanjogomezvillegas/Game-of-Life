var tauler = document.body.getElementById("tauler");

var celes = tauler.getElementsByTagName("td");

for (var i in celes) {
    if (i == 1) {
        alert("Hola");
    }
}