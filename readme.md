# Webshop Bit Muscle Cars

## Plan van aanpak
Om te beginnen met het maken van mijn website zal ik eerst moeten voorbereiden doormiddel van een plan van aanpak.
### Pagina's
Deze pagina's zullen op de website komen:
- Homepage
- Product page
- Admin page
### Ontwerp
Het ontwerp zal ik maken in Adobe XD. Het thema wordt zwart, wit, donkergrijs/lichtgrijs. Dit past bij de mood van mijn webshop.
### Welke producten
De producten zal ik aanmaken in een JSON bestand. De JSON objecten zouden de volgende properties moeten hebben:
- Product ids
- Product merk
- Product type
- Product bouwjaar
- Product PK's
- Product image
- Product prijs
### Weergave producten
Dit wordt gedaan doormiddel van de ids. Er wordt een standaard product pagina aangemaakt waar de JSON data wordt ingeladen gebaseerd op de id. Zodra de gebruiker op een product klikt zal de id van de geklikte product worden meegestuurd en zal deze worden vergeleken in de JSON en de passende data worden weergegeven op de products pagina.
### Homepagina
De homepagina zal het volgende bevatten:
- Header/Hero
- Productenlijst of Carousel
- About us
- Footer/Contact
### Admin pagina
Op de admin pagina krijg ik een lijst met alle orders en producten te zien.
Bij de productenlijst moet een edit of remove knop zijn om een product aan te passen of te verwijderen.
Ook moet er een + knop zijn om een product toe te voegen. 
Vervolgens zal hier dan in de JSON localstorage de data worden gewijzigd. 
Natuurlijk is het niet mogelijk om dit permanent te maken aangezien je de localstorage kan legen. Dit zal de webshop naar zijn originele staat brengen. 
Productenlijst laat alle gegevens (properties) zien van elk product en zal dus de 2 edit/remove knoppen bevatten.
Ik ga geen validate maken voor admin aangezien ik werk met localstorage en dit dus alleen client-sided voor iemand zal gewijzigd worden en geen effect heeft op de website zelf.
### Admin functionaliteit
Om de functionaliteiten te laten werken ga ik het volgende moeten doen:
1. De JSON opslaan in een localstorage als string.
2. De JSON string parsen (string omzetten in JSON)
3. Bij elke wijziging de relevante data aanpassen, verwijderen of toevoegen.
4. De JSON weer omzetten als string en dit in de localstorage zetten.
5. De JSON string weer parsen om te tonen.
### Orders
Het hele order systeem zal gebruik maken van localstorage. Ik moet nog denken of dit kan via JSON API of niet.
De volgende stappen zullen ondernomen worden:
1. Zodra er op toevoegen aan winkelwagen wordt gedrukt zal de localstorage een 'cart' item aanmaken en de productgegevens hieron opslaan.
2. Alle productgegevens waar 'toevoegen' is op gedrukt staan nu in cart. Als ik op mijn cart kijk kan ik drukken op 'afrekenen'
3. Zodra ik op afrekenen druk worden alle cart-object prijzen bij elkaar opgeteld en wordt de huidige datum/tijd gezet in de 'orders' item localstorage met een uniek ID.
4. Deze worden vervolgens toonbaar in de Admin orders lijst.