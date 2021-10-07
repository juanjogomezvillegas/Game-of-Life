<?php
    $amplada = trim($_POST["amplada"]);
    $alsada = trim($_POST["alsada"]);

    $tauler = $_POST["tauler"];

    $partides = array();
    if (isset($tauler)) {
        $data = getdate();
        $dataActual = $data["mday"]."/".$data["mon"]."/".$data["year"];

        $nomPartida = "Partida_".$data["mday"]."-".$data["mon"]."-".$data["year"];

        $partides["nomPartida"] = $nomPartida;
        $partides["dataPartida"] = $dataActual;
        $partides["tauler"] = $tauler;

        setcookie("partides", json_encode($partides), strtotime("+20 days"));
    }

    $visitesPartida = $_COOKIE["visitesPartida"];
    if (isset($visitesPartida)) {
        $visitesPartida = (int) $visitesPartida + 1;
    } else {
        $visitesPartida = 1;
    }
    setcookie("visitesPartida", $visitesPartida, strtotime("+1 month"));

?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Joc de la Vida</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <script src="script/partida.js"></script>
</head>
<body>
    <header>
        
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <div class="containerPartida">
        <form id="formulariPartida" action="" method="POST">
            <div id="estadistiques">
                <p id="nomPartida">Nom de la Partida: <?=$partides["nomPartida"]?></p>
                <p id="temps"></p>
                <p id="generacio"></p>
                <p id="celesVives"></p>
                <p id="celesMortes"></p>
                <p id="velocitat"></p>
                <p id="comptadorPlay"></p>
                <p id="comptadorPausa"></p>
            </div>
            <table id="tauler">
                <?php for ($i = 1; $i <= $alsada; $i++) { ?>
                    <tr>
                        <?php for ($j = 1; $j <= $amplada; $j++) { ?>
                            <?php if (isset($tauler[$i][$j])) { ?>
                                <td>1</td>
                            <?php } else { ?>
                                <td>0</td>
                            <?php } ?>
                        <?php } ?>
                    </tr>
                <?php } ?>
            </table>
            <div id="inputs">
                <input type="button" name="play" value="Play" class="boto" id="bPlay">
                <input type="button" name="pause" value="Pause" class="boto" id="bPause">
                <label for="inputvelocitat" id="labelvelocitat">Velocitat<br><input type="range" name="velocitat" min="100" max="1000" default="500" id="inputvelocitat"></label>
            </div>
        </form>
    </div>
    <p id="ampladaTauler" class="ocult"><?=$amplada?></p>
    <p id="alsadaTauler" class="ocult"><?=$alsada?></p>
</body>
</html>