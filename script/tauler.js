var tauler = document.getElementById("tauler");

var files = tauler.getElementsByTagName("tr");

var celes;
for (var i in files) {
    celes = i.getElementsByTagName("td");
}

for (var i in celes) {
    if (i.innerHTML == 1) {
        alert("Hola");
    }
}