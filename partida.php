<?php
    $amplada = $_POST["amplada"];
    $alsada = $_POST["alsada"];

    /*$celes[];

    for ($i = 1; $i <= $alsada; $i++) {
        for ($j = 1; $j <= $amplada; $j++) {
            array_push($celes, $_POST["celes[$i][$j]"]);
        }
    }*/
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
                    
                    var arrel = document.getElementById("tauler");

                    for (var i = 1; i <= alsada; i++) {
                        <?=$i?> = i;
                        var fila = document.createElement("tr");
                        for (var j = 1; j <= amplada; j++) {
                            <?=$j?> = j;
                            var columna = document.createElement("td");
                            var text = document.createTextNode("<?=$_POST["celes[$i][$j]"]?>");
                            columna.appendChild(text);
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
                echo $i." ";
                for ($j = 0; $j <= $amplada; $j++) {
                    echo $j." - ";
                    //echo $_POST["celes[$i][$j]"];
                }
                echo "\n";
            }
        ?>
    </div>
</body>
</html>