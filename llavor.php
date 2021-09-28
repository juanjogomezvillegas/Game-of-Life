<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Joc de la Vida</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <link rel="stylesheet" type="text/css" href="style/llavor.css">
</head>
<body>
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <div class="container">
        <h2>Selecciona les Caselles Vives</h2>
        <form action="partida.php" method="POST" id="formulari">
            <?php
                $amplada = $_POST["amplada"];
                $alsada = $_POST["alsada"];
            ?>
            <input type="number" name="amplada" id="inputAmplada" value="<?=$amplada?>" class="ocult">
            <input type="number" name="alsada" id="inputAlsada" value="<?=$alsada?>" class="ocult">
            <table id="tauler">
                <?php $comptador = 1; ?>
                <?php for ($i = 1; $i <= $alsada; $i++) { ?>
                    <tr>
                        <?php for ($j = 1; $j < $amplada; $j++) { ?>
                            <?php $nomCela = "Cela" . $comptador; ?>
                            <td><input type="checkbox" name="Celes[]" id="<?=$nomCela?>" value="<?=$comptador?>"></td>
                            <?php $comptador++; ?>
                        <?php } ?>
                    </tr>
                <?php } ?>
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