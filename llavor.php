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
    <?php 
        $amplada = $_POST["amplada"];
        $alsada = $_POST["alsada"];

    ?>
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
    </header>
    <div class="container">
        <h2>Selecciona les Caselles Vives</h2>
        <form action="" method="POST">
            <table id="tauler">
                <script>
                    var amplada = <?=$amplada?>;
                    var alsada = <?=$alsada?>;

                    var tr = document.createElement("tr");

                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");

                    tr.appendChild(td1);
                    tr.appendChild(td2);

                    document.body.div.form.table.appendChild(tr);
                </script>
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