function MidaTaula() {
    var formulari = document.getElementById("formulariInicial");
    var inputAmplada = formulari.getElementById("inputAmplada");
    var inputAlsada = formulari.getElementById("inputAlsada");

    console.log(inputAmplada);
    console.log(inputAlsada);
}

document.getElementById("botoSeguent").addEventListener("click", MidaTaula);