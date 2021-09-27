<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Joc de la Vida</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel="stylesheet" type="text/css" href="style/llavor.css">
    <script type="text/javascript" src="script/llavor.js"></script>
</head>
<body>
    <?php 
        $amplada = $_POST["amplada"];
        $alsada = $_POST["alsada"];

    ?>
    <a id="varAmplada"><?=$amplada?></a>
    <a id="varAlsada"><?=$alsada?></a>
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <div class="container">
        <h2>Selecciona les Caselles Vives</h2>
        <form action="partida.php" method="POST" id="formulari">
            <table id="tauler">
            </table>
            <input type="submit" name="jugar" value="Jugar" class="boto">
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