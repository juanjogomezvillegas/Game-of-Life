var amplada;
var alsada;

function MidaTaula() {
    amplada = document.getElementById("inputAmplada").innerText;
    alsada = document.getElementById("inputAlsada").innerText;
}

document.getElementById("1").innerText(amplada);
document.getElementById("2").innerText(alsada);

document.getElementById("botoSeguent").addEventListener("click", MidaTaula);