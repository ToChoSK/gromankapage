# O.Z. Gromanka – Webová stránka

Moderná, mobilná webová stránka občianskeho združenia Gromanka (obec Hrabkov) postavená na Next.js a nasadená na Cloudflare Workers pomocou `@opennextjs/cloudflare`.

![Gromanka hero screenshot](https://github.com/user-attachments/assets/867455a3-6725-4236-869c-a9c6d6b5a23a)

## Tech stack

- **Framework**: Next.js 15 (App Router)
- **Štýlovanie**: Tailwind CSS 4 (mobile-first)
- **Nasadenie**: Cloudflare Workers (`@opennextjs/cloudflare`)
- **Správca balíčkov**: pnpm
- **Domain**: gromanka.eu

---

## Lokálny vývoj

```bash
# Nainštalovať závislosti
pnpm install

# Spustiť vývojový server
pnpm dev
# → http://localhost:3000

# Zostaviť projekt
pnpm build

# Spustiť produkčný build lokálne
pnpm start
```

---

## 🚀 Nasadenie na Cloudflare Workers (krok za krokom)

### Predpoklady

- Účet na [Cloudflare](https://cloudflare.com) s doménou `gromanka.eu`
- Nainštalované: Node.js 18+, pnpm (`npm install -g pnpm`)

---

### Krok 1 – Klonuj repozitár a nainštaluj závislosti

```bash
git clone https://github.com/ToChoSK/gromankapage.git
cd gromankapage
pnpm install
```

---

### Krok 2 – Prihlás sa do Cloudflare

```bash
npx wrangler login
```

Otvorí sa prehliadač – prihlás sa do svojho Cloudflare účtu a potvrď prístup.

---

### Krok 3 – Vytvor Cloudflare Worker

Skontroluj a prípadne uprav `wrangler.jsonc`:

```jsonc
{
  "name": "gromanka",          // názov Worker-a (musí byť unikátny)
  "compatibility_date": "2025-01-01",
  ...
}
```

---

### Krok 4 – Zostav a nasaď na Cloudflare

```bash
# Zostav pre Cloudflare (generuje .open-next/ adresár)
pnpm run build:cloudflare

# Nasaď na Cloudflare Workers
pnpm run deploy
```

> Príkaz `deploy` spustí `build:cloudflare` + `wrangler deploy` automaticky.

Po nasadení dostaneš URL vo formáte `https://gromanka.<tvoj-subdomain>.workers.dev`.

---

### Krok 5 – Pridaj vlastnú doménu gromanka.eu

#### Možnosť A: Cloudflare Pages/Workers route (odporúčané)

1. Prihlás sa do [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Vyber doménu `gromanka.eu` → **Workers & Pages** → tvoj Worker (`gromanka`)
3. Klikni na **Settings** → **Triggers** → **Add Custom Domain**
4. Zadaj `gromanka.eu` a `www.gromanka.eu`
5. Cloudflare automaticky nastaví DNS záznamy

#### Možnosť B: Cez DNS záznamy

Ak chceš nastaviť manuálne:
1. DNS → Pridaj `CNAME` záznam:
   - **Meno**: `@` (alebo `gromanka.eu`)
   - **Hodnota**: `gromanka.<subdomain>.workers.dev`
   - **Proxy**: ✅ Zapnuté (oranžový mrak)
2. Rovnako pre `www`:
   - **Meno**: `www`
   - **Hodnota**: `gromanka.<subdomain>.workers.dev`

---

### Krok 6 – Overenie nasadenia

Po nastavení domény otvor `https://gromanka.eu` v prehliadači.

---

## Aktualizácia stránky

Keď chceš nahrať zmeny:

```bash
git add .
git commit -m "popis zmien"
git push

# Nasaď znova na Cloudflare
pnpm run deploy
```

---

## Automatické nasadenie (voliteľné – GitHub Actions)

Môžeš nastaviť automatické nasadenie pri každom `push` na `main`:

1. V Cloudflare Dashboard vygeneruj **API token** s oprávneniami `Workers Scripts:Edit`
2. Pridaj do GitHub repozitára (Settings → Secrets):
   - `CLOUDFLARE_API_TOKEN` = tvoj API token
   - `CLOUDFLARE_ACCOUNT_ID` = ID tvojho Cloudflare účtu
3. Vytvor `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with:
          version: 10
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
      - run: pnpm install
      - run: pnpm run build:cloudflare
        env:
          NODE_ENV: production
      - run: pnpm wrangler deploy
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

---

## Štruktúra projektu

```
gromankapage/
├── app/
│   ├── ClientLayout.tsx    # Layout s Navbar
│   ├── globals.css         # Globálne štýly (Tailwind + animácie)
│   ├── layout.tsx          # Root layout + metadata
│   └── page.tsx            # Hlavná stránka (single-page)
├── components/
│   └── navbar.tsx          # Responzívna navigácia
├── public/
│   └── images/             # Fotografie obce Hrabkov
├── next.config.mjs
├── open-next.config.ts     # Konfigurácia pre Cloudflare
├── wrangler.jsonc          # Wrangler konfigurácia
└── package.json
```

---

## Kontakt

**O.Z. Gromanka**  
Email: chovancak@gromanka.eu  
Telefón: 0917 917 384  
Adresa: Napájadlá 5, 2277/5, 040 22, Košice  
Web: [gromanka.eu](https://gromanka.eu)
