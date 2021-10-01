var arrel = document.getElementById("tauler");

var celes = arrel.getElementsByTagName("td").innerHTML;

for (var i = 0; i < celes.length; i++) {
    alert(celes[i]);
}
