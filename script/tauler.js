var tauler = new Array($_POST["alsada"]);

for (var i = 0; i < tauler.length; i++) {
    tauler[i] = new Array ([$_POST["amplada"]]);
}

var comptador = 1;
for (var i = 0; i < tauler.length; i++) {
    for (var j = 0; j < tauler[i].length; j++) {
        var nomCela = "Cela"+comptador;
        tauler[i][j] = $_POST[nomCela];
        comptador++;
    }
}

for (var i = 0; i < tauler.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < tauler[i].length; j++) {
        document.write("<td></td>");
    }
    document.write("</tr>");
}