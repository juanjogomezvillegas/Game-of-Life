<?php
    /*Llegueix els parametres $_POST "alsada" i "amplada", i guarda els valors en les variables $alsada i $amplada*/
    $alsada = trim($_POST["alsada"]);
    $amplada = trim($_POST["amplada"]);

    /*Si les variables $alsada i $amplada estan definides*/
    if (isset($amplada) && isset($alsada)) {
        /*Comprova si son igual a "" o " ", si es compleix redirecciona al fitxer "index.php" enviant per $_GET el parametre "errorRequired"*/
        if (($amplada == "" || $amplada == " ") || ($alsada == "" || $alsada == " ")) {
            header("Location: index.php?errorRequired=1");
            die();
        } else {
            /*Si no es compleix la condicio anterior, comprova si les variables $amplada i $alsada estan entre 3 i 500
            Si es compleix guardem l'alsada i l'amplada en les cookies "alsada" i "amplada" durant 4 hores*/
            if (($amplada >= 3 && $amplada <= 20) && ($alsada >= 3 && $alsada <= 500)) {
                setcookie("alsada", json_encode($alsada), strtotime("+4 hours"));
                setcookie("amplada", json_encode($amplada), strtotime("+4 hours"));
            } else {
                /*Si la condicio anterior no es compleix, redirecciona al fitxer "index.php" enviant per $_GET el parametre "errorValue"*/
                header("Location: index.php?errorValue=1");
                die();
            }
        }
    }

    /*Creem els arrays $partides i $celesVives*/
    $partides = array();
    $celesVives = array();
    /*Si la cookie "partides" esta definida*/
    if (isset($_COOKIE["partides"])) {
        /*guarda la cookie "partides" en l'array $partides*/
        $partides = json_decode($_COOKIE["partides"], true);

        /*I el tauler el guarda en l'array $celesVives*/
        $celesVives = $partides["tauler"];
    }

?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/icon.png">
    <title>El Joc de la Vida</title>
    <!-- Afegim el full d'estils "style.css" -->
    <link rel="stylesheet" type="text/css" href="style/style.css">
</head>
<body>
    <!-- Capsalera de la llavor -->
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <!-- Contingut central de la llavor, on estara el formulari on configurarem el tauler -->
    <div class="containerLlavor">
        <h2>Selecciona les Caselles Vives</h2>
        <!-- Afagueix el formulari on configurarem el tauler, on l'usuari haura de marcar les caselles del tauler que estaran vives -->
        <form id="formulariLlavor" action="partida.php" method="POST">
            <!-- El formulari, tindrà dos inputs de tipus "number" que estaran ocults a la vista de l'usuari -->
            <input type="number" name="amplada" value="<?=$amplada?>" id="inputAmplada" class="ocult">
            <input type="number" name="alsada" value="<?=$alsada?>" id="inputAlsada" class="ocult">
            <!-- Una taula, que sera la configuració de les caselles del tauler -->
            <table id="tauler">
                <!-- I per afegir els checkbox, un for recorrera des de 1 fins al valor de $alsada
                i per cada valor de $i un altre for recorrera des de 1 fins al valor de $amplada -->
                <?php for ($i = 1; $i <= $alsada; $i++) { ?>
                    <tr>
                        <?php for ($j = 1; $j <= $amplada; $j++) { ?>
                            <!-- i si el valor [$i][$j] del array $celesVives esta definit -->
                            <?php if (isset($celesVives[$i][$j])) { ?>
                                <!-- afegeix un checkbox activat (checked) -->
                                <td class="celesLlavor"><input type="checkbox" name="tauler[<?=$i?>][<?=$j?>]" checked></td>
                            <?php } else { ?>
                                <!-- si no esta definit, afegeix un checkbox desactivat -->
                                <td class="celesLlavor"><input type="checkbox" name="tauler[<?=$i?>][<?=$j?>]"></td>
                            <?php } ?>
                        <?php } ?>
                    </tr>
                <?php } ?>
            </table>
            <!-- I un boto de tipus "submit" -->
            <input type="submit" name="jugar" value="Jugar" class="boto">
        </form>
    </div>
</body>
</html>