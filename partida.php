<?php
    /*Llegueix els parametres $_POST "alsada" i "amplada", i guarda els valors en les variables $alsada i $amplada*/
    $amplada = trim($_POST["amplada"]);
    $alsada = trim($_POST["alsada"]);

    /*Llegueix el parametre $_POST "tauler", i guarda el tauler en l'array $tauler*/
    $tauler = $_POST["tauler"];

    /*Creem l'array $partides*/
    $partides = array();
    /*I comprova si l'array $tauler esta definit*/
    if (isset($tauler)) {
        /*Obté la data d'avui i la guarda en la variable $dataActual*/
        $data = getdate();
        $dataActual = $data["mday"]."/".$data["mon"]."/".$data["year"];

        /*El nom de la Partida el guarda en la variable $nomPartida, el nom de cada partida tindra la següent estructura:
        Partida_"hora"-"minut"-"segon"_"dia"-"mes"-"any"*/
        $nomPartida = "Partida_".$data["hours"]."-".$data["minutes"]."-".$data["seconds"]."_".$data["mday"]."-".$data["mon"]."-".$data["year"];

        /*I el nom de la partida, la data i el tauler els guarda en l'array $partides*/
        $partides["nomPartida"] = $nomPartida;
        $partides["dataPartida"] = $dataActual;
        $partides["tauler"] = $tauler;

        /*I guarda l'array $partides en una cookie durant 20 dies*/
        setcookie("partides", json_encode($partides), strtotime("+20 days"));
    }

    /*Creem una variable on guardarem cuantes vegades ha visitat l'usuari la pagina de la partida*/
    $visitesPartida = $_COOKIE["visitesPartida"];
    /*Si la cookie "visitesPartida" està definida, suma 1 a la cookie*/
    if (isset($visitesPartida)) {
        $visitesPartida = (int) $visitesPartida + 1;
    } else {/*Si no està definida, l'assigna el valor 1*/
        $visitesPartida = 1;
    }
    /*I guarda la variable $visitesPartida en una cookie durant 1 mes*/
    setcookie("visitesPartida", $visitesPartida, strtotime("+1 month"));

?>

<!DOCTYPE html>
<html lang="ca">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>El Joc de la Vida</title>
    <script src="script/sweetalert2@11"></script>
    <!-- Afegim el full d'estils "style.css" -->
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <!-- Afegim el script "partida.js" -->
    <script src="script/partida.js"></script>
</head>
<body>
    <!-- Capsalera de la partida -->
    <header>
        <h1 class="titol">El Joc de la Vida</h1>
        <h2 id="nomPartida"><?=$partides["nomPartida"]?></h2>
    </header>
    <!-- Contingut central de la partida -->
    <div class="containerPartida">
        <!-- Afagueix el formulari on es produira la partida, 
        l'usuari només fara clic al Play per començar la partida o fara clic a Pause per pausar la partida -->
        <form id="formulariPartida" action="" method="POST">
            <!-- Mostra les estadistiques que indiquen com va la partida, per exemple:
                - mostra el temps que porta en execució el joc, 
                - la generació per la que va el joc, 
                - les cel·les vives i mortes que hi han al tauler, 
                - i la velocitat que porta el tauler -->
            <div id="estadistiques">
                <p id="temps"></p>
                <p id="generacio"></p>
                <p id="celesVives"></p>
                <p id="celesMortes"></p>
                <p id="velocitat"></p>
            </div>
            <!-- Afagueix la taula que sera el tauler on es produira la partida -->
            <table id="tauler">
                <!-- I per fer apareixer el tauler (amb totes les caselles mortes), 
                un for recorrera des de 1 fins al valor de $alsada i per cada valor de $i un altre for recorrera des de 1 fins al valor de $amplada-->
                <?php for ($i = 1; $i <= $alsada; $i++) { ?>
                    <tr>
                        <?php for ($j = 1; $j <= $amplada; $j++) { ?>
                            <!-- i si el valor [$i][$j] del array $tauler esta definit -->
                            <?php if (isset($tauler[$i][$j])) { ?>
                                <!-- escriura a dins del <td> un "1" (que significa que esta aquesta cel·la esta viva) -->
                                <td>1</td>
                            <?php } else { ?>
                                <!-- si no, escriura a dins del <td> un "0" (que significa que esta aquesta cel·la esta morta) -->
                                <td>0</td>
                            <?php } ?>
                        <?php } ?>
                    </tr>
                <?php } ?>
            </table>
            <!-- I al final del formulari hi han tres inputs:
                - dos butons de tipus "button" que seran el Play i el Pause
                - i un input de tipus "range" que sera un selector de velocitat, el valor minim es 100 (mil·lisegons) i el maxim 1000 (mil·lisegons), 
                    i el valor per defecte es 500 (mil·lisegons) -->
            <div id="inputs">
                <button type="button" name="play" value="Play" class="boto" id="bPlay">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 4v16l13 -8z"></path>
                    </svg>
                </button>
                <button type="button" name="pause" value="Pause" class="boto" id="bPause">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-stop" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="5" y="5" width="14" height="14" rx="2"></rect>
                    </svg>
                </button>
                <button type="button" name="sortir" value="Sortir" class="boto" id="bSortir">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                        <path d="M10 10l4 4m0 -4l-4 4"></path>
                    </svg>
                </button>
                <label for="inputvelocitat" id="labelvelocitat">Velocitat<br><input type="range" name="velocitat" min="1" max="3000" default="1000" id="inputvelocitat"></label>
            </div>
        </form>
    </div>
    <!-- Al final de la pagina hi han dos paragraf que estaran ocults a la vista de l'usuari -->
    <p id="ampladaTauler" class="ocult"><?=$amplada?></p>
    <p id="alsadaTauler" class="ocult"><?=$alsada?></p>
</body>
</html>