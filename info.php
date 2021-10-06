<?php
    $visitesInfo = $_COOKIE["visitesInfo"];
    if (isset($visitesInfo)) {
        $visitesInfo = (int) $visitesInfo + 1;
    } else {
        $visitesInfo = 1;
    }
    setcookie("visitesInfo", $visitesInfo, strtotime("+1 month"));

    $nomJoc = "Game of Life";
    $versioJoc = "1.0";
    $any = 2021;
    $curs = "DAW2";
    $autor = "Juan José Gómez Villegas";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Joc de la Vida</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
</head>
<body>
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
        <h2>Informació i Autors</h2>
    </header>
    <div class="containerIndex">
        <p><span>Nom del Joc: </span><?=$nomJoc?></p>
        <p><span>Versió del Joc: </span><?=$versioJoc?></p>
        <p><span>Any de Creació: </span><?=$any?></p>
        <p><span>Curs: </span><?=$curs?></p>
        <p><span>Autor: </span><?=$autor?></p>
    </div>
    <footer>
        <div>
            <a href="index.php">Portada del Joc</a>
        </div>
        <div>
            <p>Juan José Gómez Villegas</p>
            <p>DAW2</p>
        </div>
    </footer>
</body>
</html>