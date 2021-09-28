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
    <?php
        $amplada = $_POST["amplada"];
        $alsada = $_POST["alsada"];
    ?>
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

                    var paragraf = document.createElement("p");
                    var contingut = document.createTextNode(amplada + " " + alsada);
                    paragraf.appendChild(contingut);
                    arrel.appendChild(paragraf);
                </script>
            </table>
            <div id="inputs">
                <input type="button" name="play" value="Play" class="boto">
                <input type="button" name="pause" value="Pause" class="boto">
                <label for="inputvelocitat" id="labelvelocitat">Velocitat<br><input type="range" name="velocitat" min="1" max="100" id="inputvelocitat"></label>
            </div>
        </form>
    </div>
    <footer>
        <div>
            <p>Versio: 1.0</p>
        </div>
        <div>
            <p>Juan José Gómez Villegas</p>
            <p>DAW2</p>
        </div>
    </footer>
</body>
</html>