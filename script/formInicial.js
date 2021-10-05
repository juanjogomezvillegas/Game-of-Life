var form;
var amplada;
var alsada;
var indexUrl;
var llavorUrl;

window.onload = function() {
    form = document.getElementById("formulariInicial");

    document.getElementById("botoSeguent").addEventListener("click", validarFormulari);
};

function validarFormulari() {
    alsada = document.getElementById("inputAlsada");
    amplada = document.getElementById("inputAmplada");


    console.log(form);
    if ((amplada == "" || amplada == " ") && (alsada == "" || alsada == " ")) {
        form.setAttribute("action", "index.html");
    } else {
        form.setAttribute("action", "llavor.php");
    }
};