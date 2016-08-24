# bierturven

De opdracht:
Regelmatig heb ik met mijn vrienden het probleem dat er soms iemand meer bier betaalt als een ander. We houden nu ook een lijst bij met wie wanneer een krat heeft gekocht. Ik kreeg gelijk het idee dit te veranderen in een soort app, waar je per user aan kan geven hoeveel hij koopt en drinkt.

De models:
-User: hierin staat een naam en een "biersaldo"
-Beer: een class waarin verschillende beer types gedefinieerd kunnen worden, overerving was in dit geval overbodig.
-Record: een model dat wordt gebruikt om transacties in op te slaan en te weergeven, mogelijk in een grafiek

Collecties:
-Users: hiermee worden alle user models gefetched
-Beers: hiermee worden alle beer models gefetched
-History: hiermee worden alle record models gefetched, met een limiet van de 50 laatste records.

De views:
-UsersView: hierin wordt de user collectie getoond, met knopjes om aan te geven dat de user heeft gedronken of gekocht, luistert naar een event genaamd "getUsers" om te refreshen.
-BeerView: hierin wordt de beers collectie getoond, waarin er een bier type standaard geselecteerd is, maar een andere gekozen kan worden, luistert naar een event genaamd "getUsers" om te refreshen, maar alleen als de lock niet geactiveerd is.
-BeerLockView: met deze View kan de keuze van bier type "gelocked" worden.
-HistoryView: in deze View wordt de history collectie getoond
-AddUserView: een form om een user toe te voegen, triggered "getUsers"
-DeleteUserView: een form om een user te verwijderen, triggered "getUsers"

Ik heb uiteindelijk niet voor een routing gekozen, hoewel dit misschien toepasbaar was op de BeerView.
