function MidaTaula() {
    var formulari = document.getElementById("formulariInicial");
    var inputAmplada = formulari.getElementById("inputAmplada");
    var inputAlsada = formulari.getElementById("inputAlsada");

    alert(inputAmplada);
    alert(inputAlsada);
}

document.getElementById("botoSeguent").addEventListener("click", MidaTaula);