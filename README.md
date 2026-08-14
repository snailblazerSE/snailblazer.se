# Snailblazer — kaffeevent

Statisk webbplats (ren HTML/CSS/JS, ingen byggprocess) för Snailblazers kaffeevent: barista, La Marzocco Linea Mini R (Crème) och bra kaffe.

## Struktur

```
index.html
css/styles.css
js/main.js
assets/favicon.svg
```

## Innan sidan går live

1. **Kontaktformulär (Formspree)**
   - Skapa ett gratiskonto på [formspree.io](https://formspree.io) och skapa ett nytt formulär.
   - Kopiera formulär-ID:t och ersätt `YOUR_FORM_ID` i `index.html` (sök efter `formspree.io/f/YOUR_FORM_ID`).
2. **E-postadress** — sidan använder `hej@snailblazer.se` som platshållare. Byt till er riktiga adress i `index.html` (sök på `hej@snailblazer.se`).
3. **Bilder** — hero, maskin och barista är just nu enkla SVG-illustrationer i Snailblazers färger. Byt gärna ut dem mot riktiga foton när ni har dem (lägg bilder i `assets/` och uppdatera `index.html`).

## Publicera med GitHub + Cloudflare Pages

### 1. Pusha koden till GitHub

```bash
git add -A
git commit -m "Första versionen av snailblazer.se"
git push -u origin main
```

### 2. Koppla repot till Cloudflare Pages

1. Logga in på [Cloudflare-dashboarden](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Välj repot `snailblazerSE/snailblazer.se`.
3. Build-inställningar:
   - **Framework preset:** None
   - **Build command:** (lämna tomt)
   - **Build output directory:** `/`
4. Klicka **Save and Deploy**. Cloudflare bygger och publicerar automatiskt vid varje push till `main`.

### 3. Koppla domänen snailblazer.se

1. I Pages-projektet → **Custom domains** → **Set up a custom domain** → skriv `snailblazer.se` (och ev. `www.snailblazer.se`).
2. Om domänen redan ligger hos Cloudflare (samma konto) läggs DNS-posterna till automatiskt.
3. Om domänen ligger hos en annan registrar: peka namnservrarna till Cloudflare, eller lägg till domänen som en zon i Cloudflare först.

Efter det är sidan live på `https://snailblazer.se`.

## Lokal förhandsvisning

Öppna `index.html` direkt i webbläsaren, eller kör en enkel lokal server:

```bash
python3 -m http.server 8080
```

och besök `http://localhost:8080`.
