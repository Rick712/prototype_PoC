# AKO Boekenkiezer

Dit is de repository van de AKO boekenkiezer.

[Link tijdens presentatie:](http://e6658b22.ngrok.io)

- **[Over](#over)**
- **[Hoe te gebruiken](#hoe-te-gebruiken)**

## Over

De AKO boekenkiezer is een project van 5 Communication & Multimedia Design aan de Hogeschool van Amsterdam. Het prototype is een interactieve installatie waarmee bezoekers van een trein station met een AKO een boek kunnen kiezen door middel van beweging.

![Begin scherm](https://i.imgur.com/afBDYwC.png)

![Scherm voor genre kiezen](https://i.imgur.com/TW3dpTI.png)

![Uitleg over het kiezen voor steekwoorden](https://i.imgur.com/NWFEE02.png)

![Uitleg over de resultaten](https://i.imgur.com/Is7uFco.png)

![De resultaten](https://i.imgur.com/fXwnAVM.png)


## Hoe te gebruiken

Hier staat beschreven hoe je de app kan installeren, en gebruiken.

### Met Git (optioneel)

Zorg dat je git en github geīnstalleerd hebt [via deze](https://git-scm.com/) en [deze tekst](https://desktop.github.com/)

### Downloaden

Op de overzichtspagina van de repo zie je een groene knop 'Clown or download'. Klik vervolgens op 'Open in desktop'. Zorg er voor dat wanneer je een mapje uitkiest, deze makkelijk terug te vinden is.

### Terminal

Open je terminal. typ hier als eerst 'cd'. Druk nog niet op enter. Zoek het mapje op waar je het de repo heb opgeslagen. klik & drag het mapje in de terminal. De complete regel die er dan (ongeveer) zou moeten staan is 'cd Document/Github/Prototype_PoC'. Het MOET eindigen op 'Prototype_PoC'. Druk op enter.

### Node modules

Door op enter te drukken navigeer je in de terminal naar het mapje. Typ nu 'npm i' in de terminal. De terminal installeerd nu allemaal scripts die nodig zijn om de app te draaien.

### nodemon & ngrok

Als hij klaar is met downloaden moet je 'nodemon' in de terminal typen. De server zal nu opstarten, en draaien op 'localhost:3000'. Door dat in de browser te bezoeken zal je de app te zien krijgen. De admin kant draait op 'localhost:3000/admin'

Als je de app wilt verbinden met je telefoon moet de app 'geforward' worden. Open een nieuw tablad in de terminal. Als het goed is, zit je nog steeds in het goede mapje. Typ hier 'ngrok http 3000'. In het venster krijg je nu 2 links te zien: een http en een https versie van de app. Kies er een uit, en op en hem op je laptop. Bezoek de link op je mobiel met /admin erachter en hooppppaaa.