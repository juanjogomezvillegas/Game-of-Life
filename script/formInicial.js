var form;
var amplada;
var alsada;
var indexUrl;
var llavorUrl;

window.onload = function() {
    form = document.getElementById("formulariInicial");

    console.log(form);

    document.getElementById("botoSeguent").addEventListener("click", validarFormulari);
};

function validarFormulari() {
    alsada = document.getElementById("inputAlsada");
    amplada = document.getElementById("inputAmplada");

    if ((amplada == "" || amplada == " ") && (alsada == "" || alsada == " ")) {
        form.setAttribute("action", "index.html");
    } else {
        form.setAttribute("action", "llavor.php");
    }
};