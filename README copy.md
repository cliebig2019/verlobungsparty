# Madeleine & Christopher - Verlobungsparty Website

Eine wunderschöne React/Next.js Website für eure Verlobungsfeier mit animiertem Hintergrund und einfach zu verwaltenden Essenlisten.

## Features

- **Animierter Farbverlaufs-Hintergrund** in den Farben eurer Einladung
- **Responsive Design** - funktioniert perfekt auf allen Geräten
- **Einfach zu bearbeiten** - alle Daten direkt in der Datei
- **Zwei Listen**: Essensideen und bestätigte Speisen
- **Elegantes Design** mit den Farben Rosa (#B8697D) und Gold (#C4A962)

## Anleitung zur Bearbeitung

Alle Daten befinden sich am Anfang der Datei `app/page.tsx`:

### Essensideen ändern oder hinzufügen

\`\`\`typescript
const FOOD_IDEAS = [
  "Fingerfood (z.B. Häppchen, Wraps)",
  "Salate (z.B. Nudelsalat, Kartoffelsalat)",
  // Füge hier weitere Ideen hinzu
]
\`\`\`

### Bestätigte Speisen hinzufügen

\`\`\`typescript
const CONFIRMED_FOOD = [
  { name: "Getränke", by: "Madeleine & Christopher" },
  { name: "Pasta-Salat", by: "Anna" },
  // Füge hier weitere bestätigte Speisen hinzu
]
\`\`\`

## Auf GitHub Pages veröffentlichen

### 1. Repository erstellen

Erstelle ein neues Repository auf GitHub (z.B. `verlobungsparty`)

### 2. Next.js für statischen Export konfigurieren

Die `next.config.mjs` ist bereits für statischen Export konfiguriert mit:
- `output: 'export'`
- `images.unoptimized: true`

### 3. Build erstellen

\`\`\`bash
npm install
npm run build
\`\`\`

Dies erstellt einen `out` Ordner mit der statischen Website.

### 4. GitHub Pages aktivieren

#### Option A: Über GitHub Actions (empfohlen)

Erstelle `.github/workflows/deploy.yml`:

\`\`\`yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
\`\`\`

Dann in Repository Settings → Pages → Source: wähle "GitHub Actions"

#### Option B: Manuell

\`\`\`bash
# Build erstellen
npm run build

# In den out Ordner wechseln
cd out

# Git initialisieren und pushen
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M gh-pages
git remote add origin https://github.com/dein-username/verlobungsparty.git
git push -u origin gh-pages
\`\`\`

In Repository Settings → Pages → Source: wähle Branch "gh-pages"

### 5. Website aufrufen

Deine Website ist unter `https://dein-username.github.io/verlobungsparty` erreichbar!

## Lokal testen

\`\`\`bash
npm install
npm run dev
\`\`\`

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Farben verwendet

- Mauve/Rosa: #B8697D
- Hellrosa: #F5E6ED
- Gold: #C4A962
- Dunkelrosa für Text: #6B3E4E

Viel Spaß bei eurer Verlobungsfeier!
