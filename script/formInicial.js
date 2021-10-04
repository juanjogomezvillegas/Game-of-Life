var amplada;
var alsada;
var indexUrl;

window.onload = function() {
    indexUrl = window.location.href;

    document.getElementById("botoSeguent").addEventListener("click", validarFormulari);
};

function validarFormulari() {
    alsada = document.getElementById("inputAlsada");
    amplada = document.getElementById("inputAmplada");

    if (amplada == "" || amplada == " ") {
        location.assign(indexUrl);
    }

    if (alsada == "" || alsada == " ") {
        location.assign(indexUrl);
    }
};