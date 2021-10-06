<?php
    $fitxa = array();

    $amplada = trim($_POST["amplada"]);
    $alsada = trim($_POST["alsada"]);

    if ($amplada != "" && $alsada != "") {
        $fitxa["alsada"] = $alsada;
        $fitxa["amplada"] = $amplada;
    }

    print_r($fitxa);
    //setcookie("fitxa", json_encode($fitxa), strtotime("+1 month"));
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
    <div class="containerLlavor">
        <h2>Selecciona les Caselles Vives</h2>
        <form id="formulariLlavor" action="partida.php" method="POST">
            <input type="number" name="amplada" value="<?=$amplada?>" id="inputAmplada" class="ocult">
            <input type="number" name="alsada" value="<?=$alsada?>" id="inputAlsada" class="ocult">
            <table id="tauler">
                <?php for ($i = 1; $i <= $alsada; $i++) { ?>
                    <tr>
                        <?php for ($j = 1; $j <= $amplada; $j++) { ?>
                            <td class="celesLlavor"><input type="checkbox" name="tauler[<?=$i?>][<?=$j?>]"></td>
                        <?php } ?>
                    </tr>
                <?php } ?>
            </table>
            <input type="submit" name="jugar" value="Jugar" class="boto">
        </form>
    </div>
</body>
</html>