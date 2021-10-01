var arrel = document.getElementById("tauler");

var files = arrel.getElementsByTagName("tr");

var celes;
for (var i = 0; i < files.length; i++) {
    celes = files[i].getElementsByTagName("td").innerHTML;
    
}

for (var i = 0; i < celes.length; i++) {
    alert(celes[i]);
}
