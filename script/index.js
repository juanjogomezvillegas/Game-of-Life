var amplada = 0;
var alsada = 0;

function MidaTauler() {
    var container = document.getElementById("container");

    amplada = container.formulariInicial.amplada.value;
    alsada = container.formulariInicial.alsada.value;
}

document.getElementById("botoSeguent").addEventListener("click", MidaTauler);

document.getElementById("spanAmplada").value = amplada;
document.getElementById("spanAlsada").value = alsada;
