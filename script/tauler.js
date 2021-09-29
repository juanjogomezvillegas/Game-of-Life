var amplada;
var alsada;
var arrel = document.getElementById("tauler");

function tauler(amplada,alsada) {
    this.amplada = amplada;
    this.alsada = alsada;

    for (var i = 1; i <= alsada; i++) {
        var fila = document.createElement("tr");
        for (var j = 1; j <= amplada; j++) {
            var columna = document.createElement("td");
            fila.appendChild(columna);
        }
        arrel.appendChild(fila);
    }
}