<?php
    $amplada = $_POST["amplada"];
    $alsada = $_POST["alsada"];

    $tauler = $_POST["tauler"];

    print_r($tauler);
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
    <p id="pAmplada" class="ocult"><?=$amplada?></p>
    <p id="pAlsada" class="ocult"><?=$alsada?></p>
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <div class="containerPartida">
        <form name="formulariPartida" action="" method="POST">
            <div id="estadistiques">
                <p>Cel·les Vives: </p>
                <p>Cel·les Mortes: </p>
                <p>Passos: </p>
                <p>Velocitat: </p>
            </div>
            <table id="tauler">
                <?php for ($i = 0; $i < $alsada; $i++) { ?>
                    <tr>
                        <?php for ($j = 0; $j < $amplada; $j++) { ?>
                            <td class="celes">1</td>
                        <?php } ?>
                    </tr>
                <?php } ?>
            </table>
            <div id="inputs">
                <input type="button" name="play" value="Play" class="boto">
                <input type="button" name="pause" value="Pause" class="boto">
                <label for="inputvelocitat" id="labelvelocitat">Velocitat<br><input type="range" name="velocitat" min="1" max="100" id="inputvelocitat"></label>
            </div>
        </form>
    </div>
</body>
</html>