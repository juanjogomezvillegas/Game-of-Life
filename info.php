<?php
    /*guarda en variables les dades que es mostraran en el contingut de la pàgina*/
    $nomJoc = "Game of Life";
    $versioJoc = "2.0.1";
    $any = 2021;
    $any2 = 2022;
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
        <p><span>Última Actualització: </span><?=$any2?></p>
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