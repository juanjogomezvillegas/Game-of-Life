var tauler = document.getElementById("tauler");

var files = tauler.getElementsByTagName("tr");

var celes = null;

for (var i = 0; i < files.length; i++) {
    celes = files[i].getElementsByTagName("td");
    for (var j = 0; j < files.length; j++) {
        celes[i].onclick = function() {alert(this.id)}
    }
}