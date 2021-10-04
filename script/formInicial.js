var amplada;
var alsada;
var indexUrl;
var llavorUrl;

window.onload = function() {
    indexUrl = window.location.href;

    llavorUrl = indexUrl.replace("index.html", "llavor.php");

    console.log(llavorUrl);

    document.getElementById("botoSeguent").addEventListener("click", validarFormulari);
};

function validarFormulari() {
    alsada = document.getElementById("inputAlsada");
    amplada = document.getElementById("inputAmplada");

    if ((amplada == "" || amplada == " ") && (alsada == "" || alsada == " ")) {
        window.location.replace(indexUrl);
    } else {
        window.location.replace(llavorUrl);
    }
};