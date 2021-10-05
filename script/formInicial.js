var amplada;
var alsada;
var indexUrl;
var llavorUrl;

window.onload = function() {
    document.getElementById("botoSeguent").addEventListener("click", validarFormulari);
};

function validarFormulari() {
    alsada = document.getElementById("inputAlsada");
    amplada = document.getElementById("inputAmplada");

    if ((amplada == "" || amplada == " ") && (alsada == "" || alsada == " ")) {
        document.getElementById("formulariInicial").setAttribute("action", "index.html");
    } else {
        document.getElementById("formulariInicial").setAttribute("action", "llavor.php");
    }
};