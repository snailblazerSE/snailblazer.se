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

1. **Kontaktformulär (Formspree)** — formuläret är kopplat till ett Formspree-formulär (`formspree.io/f/xwleqjvp`). Byt formulär-ID i `index.html` om ni vill koppla till ett annat konto.
2. **Telefonnummer** — numret visas som en bild (`assets/tel-number.png`) istället för vanlig text, så det inte går att kopiera rakt av. Om numret ändras: generera en ny bild (se `assets/photos/` för källfiler) och ersätt filen.
3. **Bilder** — hero, maskin och barista använder riktiga foton i `assets/photos/`. Byt ut dem vid behov och uppdatera `index.html`.

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
