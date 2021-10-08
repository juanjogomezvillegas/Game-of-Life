<?php
    /*Creem una variable on guardarem cuantes vegades ha visitat l'usuari la pagina d'informació*/
    $visitesInfo = $_COOKIE["visitesInfo"];
    /*Si la cookie "visitesInfo" està definida, suma 1 a la cookie*/
    if (isset($visitesInfo)) {
        $visitesInfo = (int) $visitesInfo + 1;
    } else {/*Si no està definida, l'assigna el valor 1*/
        $visitesInfo = 1;
    }
    /*I guarda la variable $visitesInfo en una cookie durant 1 mes*/
    setcookie("visitesInfo", $visitesInfo, strtotime("+1 month"));

    /*guarda en variables les dades que es mostraran en el contingut de la pàgina*/
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
    <!-- Afegim el full d'estils "style.css" -->
    <link rel="stylesheet" type="text/css" href="style/style.css">
</head>
<body>
    <!-- Capsalera de la pagina d'informació -->
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
        <h2>Informació i Autors</h2>
    </header>
    <!-- Contingut central de la pagina d'informació -->
    <div class="containerIndex">
        <!-- Mostra el nom del joc, la vesió, l'any de creació, el curs, i l'autor -->
        <p><span>Nom del Joc: </span><?=$nomJoc?></p>
        <p><span>Versió del Joc: </span><?=$versioJoc?></p>
        <p><span>Any de Creació: </span><?=$any?></p>
        <p><span>Curs: </span><?=$curs?></p>
        <p><span>Autor: </span><?=$autor?></p>
    </div>
    <!-- Peu de pàgina de la pagina d'informació -->
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