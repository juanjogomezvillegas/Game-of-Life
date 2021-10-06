<?php
    $visitesInfo = $_COOKIE["visitesInfo"];
    if (isset($visitesInfo)) {
        $visitesInfo = (int) $visitesInfo + 1;
    } else {
        $visitesInfo = 1;
    }
    setcookie("visitesInfo", $visitesInfo, strtotime("+1 month"));

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
        <p><span>Nom Real del Joc: </span> Game of Life</p>
        <p><span>Versió del Joc: </span> 1.0</p>
        <p><span>Any: </span> 2021</p>
        <p><span>Curs: </span> DAW2</p>
        <p><span>Autor: </span> Juan José Gómez Villegas</p>
    </div>
    <footer>
        <div>
            <a href="index.html">Portada del Joc</a>
        </div>
        <div>
            <p>Juan José Gómez Villegas</p>
            <p>DAW2</p>
        </div>
    </footer>
</body>
</html>