# Fantacalcio Asta Control 26/27 — V47

## Cosa contiene questa build
- Home responsive in HTML/CSS/JS: i 5 giocatori in evidenza sono **5 immagini separate**, non una composizione unica.
- Malen è mostrato come card centrale con maglia Roma; Calhanoglu non è presente nella hero.
- FVM hero convertiti dalla base 1000 alla base 500: Lautaro 183,5; Malen 103,5; Orsolini 96; McTominay 114; Yildiz 75.
- Ricerca Listone e Asta Live aggiornata mentre si digita, senza uscire/rientrare dalla sezione.
- Asta Live: un giocatore può essere preso in qualsiasi momento, indipendentemente dalla fase visualizzata; la fase continua a servire per budget e strategie.
- Email facoltativa: abilita il salvataggio locale e il backup **sul dispositivo corrente**. Non crea una sincronizzazione automatica dell'asta tra dispositivi.
- Per trasferire la stessa asta: **Esporta backup → trasferisci il JSON → Importa backup** sull'altro dispositivo.
- Promemoria ogni 5 minuti se l'email non è stata inserita; chiudibile con X. Le comunicazioni sugli aggiornamenti sono separate e facoltative.
- Service Worker aggiornato a V47 per evitare cache vecchie.
- Worker Cloudflare predisposto per `/api/subscribe` + D1 opzionale.

## Deploy Cloudflare
1. Carica questo contenuto nel repository GitHub.
2. In Cloudflare Workers & Pages collega il repository GitHub.
3. Build command: lascia vuoto.
4. Root/Path: `/`.
5. Deploy command: `npx wrangler deploy`.
6. Il file `wrangler.jsonc` non contiene un ID D1 fittizio: il deploy funziona anche senza D1.

## D1 per archiviare le email
1. Crea un database D1 in Cloudflare.
2. Crea la tabella usando `schema.sql`.
3. Aggiungi nel `wrangler.jsonc` un binding `DB` che punti al database D1 reale, oppure configura il binding dal progetto Cloudflare secondo la procedura disponibile nel dashboard.
4. Ridistribuisci.

Senza D1 il sito continua a funzionare: l'email inserita abilita comunque il salvataggio locale sul dispositivo corrente, mentre l'archivio centrale delle email resta disattivato.

## Google
- `google152e713ce7f6e47a.html` è incluso per la verifica HTML.
- Dopo la verifica, invia `sitemap.xml` in Google Search Console.
- **Prima della pubblicazione definitiva aggiorna l'URL dentro `sitemap.xml` e, se necessario, `robots.txt` con il dominio Cloudflare effettivamente scelto.**

## Privacy / dati
L'email è facoltativa. La casella aggiornamenti è separata dal salvataggio. Prima di attivare analytics, pubblicità o newsletter commerciali, aggiorna privacy/cookie policy e meccanismi di consenso in base al servizio usato.

## Nota sulle immagini e sui dati
La build pubblica non distribuisce il file XLSX sorgente. Verifica sempre i diritti/licenze della fonte del listone prima di usare o monetizzare dati di terze parti.
