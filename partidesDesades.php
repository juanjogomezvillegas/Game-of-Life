<?php
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
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <div class="containerEscenaris">
        <h2>Selecciona una Partida</h2>
        <form id="formulariEscenaris" action="llavor.php" method="POST">
            <input type="submit" name="seguent" value="Següent" id="botoSeguent" class="boto">
        </form>
    </div>
</body>
</html>