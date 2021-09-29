<?php
    $amplada = $_POST["amplada"];
    $alsada = $_POST["alsada"];

    $celes = $_POST["celes"];
?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Joc de la Vida</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel="stylesheet" type="text/css" href="style/partida.css">
</head>
<body>
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <div class="container">
        <form action="" method="POST" id="formulariPartida">
            <div id="estadistiques">
                <p>Cel·les Vives: </p>
                <p>Cel·les Mortes: </p>
                <p>Passos: </p>
                <p>Velocitat: </p>
            </div>
            <table id="tauler">
                <script>
                    var amplada = <?=$amplada?>;
                    var alsada = <?=$alsada?>;
                    
                    var celestauler = new Array(alsada);
                    for (var i = 0; i < celestauler.length; i++) {
                        celestauler[i] = new Array(amplada);
                    }

                    var comptador = 1;
                    for (var i = 0; i < celestauler.length; i++) {
                        for (var j = 0; j < celestauler[i].length; j++) {
                            for (var k = 0; k < <?=count($celes)?>; k++) {
                                for (var l = 0; l < <?=count($celes[?>l<?=])?>; l++) {
                                    if (<?=$celes[?>k<?=][?>l<?=]?> == comptador) {
                                        celestauler[i][j] = 1;
                                    } else {
                                        celestauler[i][j] = 0;
                                    }
                                }
                            }
                            comptador++;
                        }
                    }

                    var arrel = document.getElementById("tauler");

                    for (var i = 0; i < celestauler.length; i++) {
                        for (var j = 0; j < celestauler[i].length; j++) {
                            document.write(celestauler[i][j]);
                        }
                    }

                    for (var i = 1; i <= alsada; i++) {
                        var fila = document.createElement("tr");
                        for (var j = 1; j <= amplada; j++) {
                            var columna = document.createElement("td");
                            fila.appendChild(columna);
                        }
                        arrel.appendChild(fila);
                    }
                </script>
            </table>
            <div id="inputs">
                <input type="button" name="play" value="Play" class="boto">
                <input type="button" name="pause" value="Pause" class="boto">
                <label for="inputvelocitat" id="labelvelocitat">Velocitat<br><input type="range" name="velocitat" min="1" max="100" id="inputvelocitat"></label>
            </div>
        </form>
        <?php
            for ($i = 0; $i <= $alsada; $i++) {
                for ($j = 0; $j <= $amplada; $j++) {
                    echo $celes[$i][$j]." ";
                }
            }
        ?>
    </div>
</body>
</html>