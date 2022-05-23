<?php
    /*Llegueix els parametres $_GET "errorRequired" i "errorValue", i guarda els valors en les variables $errorRequired i $errorValue*/
    $errorRequired = $_GET["errorRequired"];
    $errorValue = $_GET["errorValue"];

    /*Creem les variables $alsada i $amplada*/
    $alsada;
    $amplada;

    /*Comprova si les Cookies "alsada" i "amplada" estan definides
    I si estan definides, guardem les cookies en les variables $alsada i $amplada*/
    if (isset($_COOKIE["alsada"]) && isset($_COOKIE["amplada"])) {
        $alsada = json_decode($_COOKIE["alsada"], true);
        $amplada = json_decode($_COOKIE["amplada"], true);
    }

    /*Creem una variable on guardarem cuantes vegades ha visitat l'usuari el joc*/
    $visites = $_COOKIE["visites"];
    /*Si la cookie "visites" està definida, suma 1 a la cookie*/
    if (isset($visites)) {
        $visites = (int) $visites + 1;
    } else {/*Si no està definida, l'assigna el valor 1*/
        $visites = 1;
    }
    /*I guarda la variable $visites en una cookie durant 1 mes*/
    setcookie("visites", $visites, strtotime("+1 month"));

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
    <!-- Capsalera de la portada del joc -->
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <!-- Contingut central de la portada del joc, on estara el formulari inicial -->
    <div class="containerIndex">
        <!-- Comprova si la variable $errorRequired està definida, i si ho està mostra un missatge d'error:
        "Error!!! Els Camps Alçada i Amplada són obligatoris." -->
        <?php if (isset($errorRequired)) { ?>
            <div class="error">
                <p>Error!!! Els Camps Alçada i Amplada són obligatoris.</p>
            </div>
        <!-- I si la variable $errorValue no està definida, comprova si la variable $errorValue està definida, i si ho està mostra un missatge d'error:
        "Error!!! L'Alçada i L'Amplada han d'estar entre 3 i 20." -->
        <?php } else if (isset($errorValue)) { ?>
            <div class="error">
                <p>Error!!! L'Alçada ha d'estar entre 3 i 500 i L'Amplada ha d'estar entre 3 i 20.</p>
            </div>
        <?php } ?>
        <!-- Afagueix el formulari inicial, on l'usuari haura d'entrar l'alsada i l'amplada del tauler -->
        <form id="formulariInicial" action="llavor.php" method="POST">
            <!-- El formulari inicial, tindrà dos inputs de tipus "number", i un boto de tipus "submit" -->
            <label for="inputAlsada">Alçada</label><input type="number" name="alsada" value="<?=$alsada?>" id="inputAlsada" class="text">
            <br>
            <label for="inputAmplada">Amplada</label><input type="number" name="amplada" value="<?=$amplada?>" id="inputAmplada" class="text">
            <br>
            <input type="submit" name="seguent" value="Següent" id="botoSeguent" class="boto">
        </form>
    </div>
    <!-- Peu de pàgina de la portada del joc -->
    <footer>
        <div>
            <a href="info.php">Informació i Autors</a>
        </div>
        <div>
            <p>Juan José Gómez Villegas</p>
            <p>DAW2</p>
        </div>
    </footer>
</body>
</html>