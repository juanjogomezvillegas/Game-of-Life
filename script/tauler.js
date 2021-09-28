var tauler = new Array(10);

for (var i = 0; i < tauler.length; i++) {
    tauler[i] = new Array (10);
}

for (var i = 0; i < tauler.length; i++) {
    for (var j = 0; j < tauler[i].length; j++) {
        tauler[i][j] = 5;
    }
}

for (var i = 0; i < tauler.length; i++) {
    document.write("<tr>");
    for (var j = 0; j < tauler[i].length; j++) {
        document.write("<td></td>");
    }
    document.write("</tr>");
}