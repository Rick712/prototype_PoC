# Hoe te gebruiken

## Met Git (optioneel)

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