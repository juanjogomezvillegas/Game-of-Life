/*Creem les variables següents: */
var alsada;
var amplada;
var tauler;
var files;
var celes;
var celesTauler;
var velocitat;
var generacio;
var numGeneracio;
var hores;
var minuts;
var segons;

/*Funció principal, que s'executara quan la pàgina de la partida estigui totalment carregada*/
window.onload = function() {
    /*Assigna a les variables "alsada" i "amplada" el valors dels elements amb id "alsadaTauler" i "ampladaTauler"*/
    alsada = document.getElementById("alsadaTauler").value
    amplada = document.getElementById("ampladaTauler").value;

    /*Mostra a l'element amb l'id "temps", el valor de les variables "hores", "minuts" i "segons"*/
    hores = 0;
    minuts = 0;
    segons = 0;
    document.getElementById("temps").innerHTML = "Temps: "+hores+" : "+minuts+" : "+segons;

    /*Mostra la Generació actual per la que va el joc*/
    generacio = document.getElementById("generacio");
    numGeneracio = 0;
    generacio.innerHTML = "Generació: "+numGeneracio;

    /*Executa la funció "setSelectorVelocitat"*/
    setSelectorVelocitat();

    /*Guarda el tauler (element <table>) en la variable "tauler"*/
    tauler = document.getElementById("tauler");

    /*Guarda tots els <tr> que hi al tauler a la variable "files"*/
    files = tauler.getElementsByTagName("tr");

    /*Instancia un array "celesTauler" amb la longitud del array "files"*/
    celesTauler = new Array(files.length);

    /*Recorrent l'array "files"*/
    for (var i = 0; i < files.length; i++) {
        /*Llegueix tots els <td> de cada fila, i els guardara a "celesTauler"*/
        celes = files[i].getElementsByTagName("td");
        celesTauler[i] = celes;
    }

    /*Executa per primera vegada la funció "setPintaTauler"*/
    setPintaTauler();

    /*Executa per primera vegada la funció "setComptarCelesVives"*/
    setComptarCelesVives();

    /*Defineix les accions que passaran si es fa clic als inputs "bPlay", "bPause" o "inputvelocitat"*/
    document.getElementById("bPlay").addEventListener("click", play);
    document.getElementById("bPause").addEventListener("click", pause);
    document.getElementById("inputvelocitat").addEventListener("click", setSelectorVelocitat);
};

/*Funció play, que executara la funció "setCanvisTauler" fins que no s'executi la funció "pause", 
i la variable "velocitat" serà la velocitat en que s'executa la funció "setCanvisTauler".
I també, cada 1 segon s'executara la funció "setTemps"*/
function play() {
    jocdelavida = setInterval(setCanvisTauler, velocitat);
    tempsdejoc = setInterval(setTemps, 1000);
};

/*Funció pause, que deixara de executar les funcions "setCanvisTauler" i "setTemps"*/
function pause() {
    clearInterval(jocdelavida);
    clearInterval(tempsdejoc);

    /*També executara la funció "setSortirPartida"*/
    setSortirPartida();
};

/*Funció setCanvisTauler, es la funció que executara el funcionament del joc*/
function setCanvisTauler() {
    /*Crea un array amb la mateixa longitud que "celesTauler", amb el nom de "celesTauler2"*/
    var celesTauler2 = new Array(celesTauler.length);
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            celesTauler2[i] = new Array(celesTauler[i].length);
        }
    }
    /*A l'array "celesTauler2" li assigna els mateixos valors que al array "celesTauler"*/
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            celesTauler2[i][j] = celesTauler[i][j].cloneNode(true);
        }
    }
    /*
    L'array celesTauler, es el tauler principal
    I l'array celesTauler2, es on consultarem si una cel·la ha de viure o no
    */

    var comptadorVeins = 0;
    /*Recorrera l'array "celesTauler2" i per cada cel·la:*/
    for (var i = 0; i < celesTauler2.length; i++) {
        for (var j = 0; j < celesTauler2[i].length; j++) {
            try {/*Si no hi ha cap error, comprovara si la cel·la [i][j-1] (costat esquerra de la cel·la actual), està viva*/
                if (celesTauler2[i][j-1].innerHTML == "1") {
                    comptadorVeins++;/*Si està viva, li suma 1 al "comptadorVeins"*/
                }
            } catch (error) {}
            try {/*Si no hi ha cap error, comprovara si la cel·la [i][j+1] (costat dret de la cel·la actual), està viva*/
                if (celesTauler2[i][j+1].innerHTML == "1") {
                    comptadorVeins++;/*Si està viva, li suma 1 al "comptadorVeins"*/
                }
            } catch (error) {}
            try {/*Si no hi ha cap error, comprovara si la cel·la [i-1][j] (a sobre de la cel·la actual), està viva*/
                if (celesTauler2[i-1][j].innerHTML == "1") {
                    comptadorVeins++/*Si està viva, li suma 1 al "comptadorVeins"*/
                }
            } catch (error) {}
            try {/*Si no hi ha cap error, comprovara si la cel·la [i+1][j] (a sota de la cel·la actual), està viva*/
                if (celesTauler2[i+1][j].innerHTML == "1") {
                    comptadorVeins++;/*Si està viva, li suma 1 al "comptadorVeins"*/
                }
            } catch (error) {}
            try {/*Si no hi ha cap error, comprovara si la cel·la [i-1][j-1] (al costat esquerra de la cel·la que esta a sobre de la cel·la actual), està viva*/
                if (celesTauler2[i-1][j-1].innerHTML == "1") {
                    comptadorVeins++;/*Si està viva, li suma 1 al "comptadorVeins"*/
                }
            } catch (error) {}
            try {/*Si no hi ha cap error, comprovara si la cel·la [i+1][j+1] (al costat dret de la cel·la que esta a sota de la cel·la actual), està viva*/
                if (celesTauler2[i+1][j+1].innerHTML == "1") {
                    comptadorVeins++;/*Si està viva, li suma 1 al "comptadorVeins"*/
                }
            } catch (error) {}
            try {/*Si no hi ha cap error, comprovara si la cel·la [i-1][j+1] (al costat dret de la cel·la que esta a sobre de la cel·la actual), està viva*/
                if (celesTauler2[i-1][j+1].innerHTML == "1") {
                    comptadorVeins++;/*Si està viva, li suma 1 al "comptadorVeins"*/
                }
            } catch (error) {}
            try {/*Si no hi ha cap error, comprovara si la cel·la [i+1][j-1] (al costat esquerra de la cel·la que esta a sota de la cel·la actual), està viva*/
                if (celesTauler2[i+1][j-1].innerHTML == "1") {
                    comptadorVeins++;/*Si està viva, li suma 1 al "comptadorVeins"*/
                }
            } catch (error) {}

            /*I després, comprovara si el "comptadorVeins" es menor que 2 o menor 3, i la cel·la actual està viva*/
            if ((comptadorVeins < 2 || comptadorVeins > 3) && celesTauler2[i][j].innerHTML == "1") {
                /*I està viva, mort perque si te menys de 2 veins (mort de solitud), i si te més de 3 veins (mort de sobreconcentració)*/
                celesTauler[i][j].innerHTML = "0";

                /*Si no, comprova si "comptadorVeins" es igual a 3, i la cel·la actual està morta*/
            } else if (comptadorVeins == 3 && celesTauler2[i][j].innerHTML == "0") {
                /*I si està morta, reviu perque te tres veins exactes*/
                celesTauler[i][j].innerHTML = "1";

                /*Si no es compleix cap de les condicions anteriors, la cel·la actual es queda com estava a la generació anterior (viva o morta)*/
            } else {
                celesTauler[i][j].innerHTML;
            }

            /*Reinicia el "comptadorVeins" per la següent cel·la*/
            comptadorVeins = 0;
        }
    }
    /*I Finalment, executa les funcions "setPintaTauler" i "setComptarCelesVives"*/
    setPintaTauler();
    setComptarCelesVives();
    /*I actualitza el valor de "numGeneracio", incrementant-lo en 1*/
    numGeneracio++;
    generacio.innerHTML = "Generació: "+numGeneracio;
};

/*Funció setPintaTauler, es la funció que s'encarregara de pintar en el tauler les cel·les vives*/
function setPintaTauler() {
    /*Recorrera l'array "celesTauler" i per cada cel·la:*/
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            /*Comprovara si està viva, i si es compleix li afegueix l'atribut "class" i li assigna les classes "celesPartida" i "viva"*/
            if (celesTauler[i][j].innerHTML == "1") {
                celesTauler[i][j].setAttribute("class", "celesPartida viva");

                /*I si no es compleix, li afegueix l'atribut "class" i li assigna les classes "celesPartida" i "morta"*/
            } else {
                celesTauler[i][j].setAttribute("class", "celesPartida morta");
            }
        }
    }
};

/*Funció setComptarCelesVives, es la funció que executara els metodes getter "getCelesVives" i "getCelesMortes", 
i mostrara els valors que retornin als elements html que tinguin els id "celesVives" i "celesMortes"*/
function setComptarCelesVives() {
    document.getElementById("celesVives").innerHTML = "Cel·les Vives: "+getCelesVives();
    document.getElementById("celesMortes").innerHTML = "Cel·les Mortes: "+getCelesMortes();
};

/*Funció getCelesVives, es la funció que s'encarregara de comptar les cel·les vives que hi han al tauler*/
function getCelesVives() {
    var celesVives = 0;
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            if (celesTauler[i][j].innerHTML == "1") {
                celesVives++;
            }
        }
    }
    /*I finalment, retornar el valor de la variable "celesVives"*/
    return celesVives;
};

/*Funció getCelesMortes, es la funció que s'encarregara de comptar les cel·les mortes que hi han al tauler*/
function getCelesMortes() {
    var celesMortes = 0;
    for (var i = 0; i < celesTauler.length; i++) {
        for (var j = 0; j < celesTauler[i].length; j++) {
            if (celesTauler[i][j].innerHTML == "0") {
                celesMortes++;
            }
        }
    }
    /*I finalment, retornar el valor de la variable "celesMortes"*/
    return celesMortes;
};

/*Funció setSelectorVelocitat, es la funció que s'encarregara de agafar el valor del input que te l'id "inputvelocitat", 
i convertir-lo a integer per fer-lo servir en el setInterval de la funció "play"*/
function setSelectorVelocitat() {
    velocitat = parseInt(document.getElementById("inputvelocitat").value);
    /*I també mostra el valor de la variable "velocitat" a l'element html amb l'id "velocitat"*/
    document.getElementById("velocitat").innerHTML = "Velocitat: "+(velocitat / 1000)+" segons";
};

/*Funció setTemps, es la funció que s'encarregara de actualitzar cada 1 segon el valor de l'element html amb l'id "temps"*/
function setTemps() {
    /*Incremetara la variable "segons" fins que sigui igual a 59*/
    segons++;
    if (segons == 59) {
        /*Quan "segons" sigui igual a 59, reiniciara la variable "segons" a 0, i incrementara en 1 la variable "minuts"*/
        segons = 0;
        minuts++;
        if (minuts == 59) {
            /*I quan "minuts" sigui igual a 59, reiniciara la variable "minuts" a 0, i incrementara en 1 la variable "hores"*/
            minuts = 0;
            hores++;
        }
    }
    /*El temps el mostrara a l'element html que tingui l'id "temps"*/
    document.getElementById("temps").innerHTML = "Temps: "+hores+" : "+minuts+" : "+segons;
};

/*Funció setSortirPartida, es la funció que s'executara quan l'usuari faci clic al boto "pause"*/
function setSortirPartida() {
    /*I preguntara a l'usuari si vol sortir de la partida*/
    var sortir = confirm("Vols Sortir de la Partida? ");

    /*Si l'usuari fa clic a "d'acord", torna a la pàgina anterior que hi ha a l'historial (llavor.php)*/
    if (sortir) {
        history.back();
    }
};