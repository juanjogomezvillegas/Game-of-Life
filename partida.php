<?php
    $amplada = $_POST["amplada"];
    $alsada = $_POST["alsada"];

    $tauler = $_POST["tauler"];

    $vives = 0;
    for ($i = 1; $i <= $alsada; $i++) {
        for ($j = 1; $j <= $amplada; $j++) {
            if ($tauler[$i][$j] == "on") {
                $vives++;
            }
        }
    }
?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Joc de la Vida</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <script src="script/tauler.js"></script>
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
                <p>Cel·les Vives: <?=$vives?></p>
                <p>Cel·les Mortes: <?=($alsada * $amplada) - $vives?></p>
                <p>Passos: </p>
                <p>Velocitat: </p>
            </div>
            <table id="tauler">
                <?php for ($i = 1; $i <= $alsada; $i++) { ?>
                    <tr>
                        <?php for ($j = 1; $j <= $amplada; $j++) { ?>
                            <?php if (isset($tauler[$i][$j])) { ?>
                                <td class="celesPartida viva">1</td>
                            <?php } else { ?>
                                <td class="celesPartida morta">0</td>
                            <?php } ?>
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