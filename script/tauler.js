var tauler = document.getElementById("tauler");
var files = tauler.getElementsByTagName("tr");
var celes = null;

for (var i = 0; i < files.length; i++) {
    celes = files[i].getElementsByTagName("td");

    alert(celes[i].innerHTML);
}