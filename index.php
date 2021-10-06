<?php
    $fitxa = array();
    if (isset($_COOKIE["fitxa"])) {
        $fitxa = json_decode($_COOKIE["fitxa"], true);
    }

    $alsada = trim($fitxa["alsada"]);
    $amplada = trim($fitxa["amplada"]);

    $visitesPortada = $_COOKIE["visitesPortada"];
    if (isset($visitesPortada)) {
        $visitesPortada = (int) $visitesPortada + 1;
    } else {
        $visitesPortada = 1;
    }
    setcookie("visitesPortada", $visitesPortada, strtotime("+1 month"));

    $errorRequired = $_GET["errorRequired"];
    $errorValue = $_GET["errorValue"];
    $errorMultiple = $_GET["errorMultiple"];

?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Joc de la Vida</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
</head>
<body>
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <div class="containerIndex">
        <?php if (isset($errorRequired)) { ?>
            <div class="error">
                <p>Error!!! Els Camps Alçada i Amplada són obligatoris.</p>
            </div>
        <?php } else if (isset($errorValue)) { ?>
            <div class="error">
                <p>Error!!! L'Alçada i L'Amplada han d'estar entre 3 i 20.</p>
            </div>
        <?php } else if (isset($errorMultiple)) { ?>
            <div class="error">
                <p>Error!!! Els Camps Alçada i Amplada són obligatoris i han d'estar entre 3 i 20.</p>
            </div>
        <?php } ?>
        <form id="formulariInicial" action="llavor.php" method="POST">
            <label for="inputAlsada">Alçada</label><input type="number" name="alsada" value="<?=$alsada?>" id="inputAlsada" class="text">
            <br>
            <label for="inputAmplada">Amplada</label><input type="number" name="amplada" value="<?=$amplada?>" id="inputAmplada" class="text">
            <br>
            <input type="submit" name="seguent" value="Següent" id="botoSeguent" class="boto">
        </form>
    </div>
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