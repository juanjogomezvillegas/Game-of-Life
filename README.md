# Game-of-Life
L’any 1970, John Conway va crear el joc de 0 jugadors més famós de la història. 
L'univers del joc de la vida és una matriu bidimensional de cel·les individuals, cadascuna de les quals té dos estats possibles: viu o mort. Cada cel·la interacciona amb els seus vuit veïns, que són les cel·les a què està connectada horitzontalment, verticalment o diagonalment. A cada unitat de temps, es donen les següents transicions:
    - Tota cel·la viva amb menys de dos veïns vius mort (de solitud).
    - Tota cel·la viva amb més de tres veïns vius mort (de sobreconcentració).
    - Tota cel·la viva amb dos o tres veïns vius, segueix viva per a la següent generació.
    - Tota cel·la morta amb exactament tres veïns vius torna a la vida.
Aquest patró inicial constitueix la llavor del sistema. La primera generació és creada aplicant aquestes regles simultàniament a totes les cel·les de la malla. Les regles es continuen aplicant repetidament per crear futures generacions.

https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
