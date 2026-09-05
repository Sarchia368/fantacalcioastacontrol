# Fantacalcio Asta Control 26/27 — V56

Candidata finale pubblica con importazione del listone a carico dell'utente.

## Cosa cambia in V56
- Nessun listone reale è incorporato nel codice o nel repository.
- Presente solo `listone_demo.csv`, con dati completamente fittizi per mostrare il formato.
- Onboarding con step obbligatorio per il listone: import reale oppure “Esplora con dati di esempio”.
- In modalità demo Asta Live resta bloccata.
- Landing iniziale: indicazione discreta che per Asta Live serve prima importare un listone.
- Import Excel `.xlsx/.xls` e CSV/TSV direttamente nel browser.
- Parsing flessibile delle colonne Nome/Giocatore, Ruolo, Squadra, Quotazione e FVM/Valore/Stima.
- Re-import automatico: aggiunge nuovi giocatori, rimuove quelli non più presenti, aggiorna valori cambiati e mantiene il Costo personale per i giocatori riconosciuti.
- Stima dinamica: valore di riferimento / 1000 × crediti totali scelti.
- Nessun massimale personale, priorità, nota, gruppo guida o strategia personale predefinita.
- Costo personale opzionale per singolo giocatore.
- Asta Live disponibile solo dopo un import reale.
- Privacy, Cookie e Termini aggiornati al nuovo modello di importazione.
- Service Worker V56 con cache separata.

## Importazione
Il file viene letto nel browser. Il normale import del listone non invia il file all'endpoint `/api/subscribe`.

Formato minimo richiesto:
- Nome/Giocatore
- Ruolo: P, D, C oppure A
- FVM/Valore/Stima numerico

Squadra e Quotazione sono riconosciute se presenti.

## Pubblicazione Cloudflare
Caricare il contenuto dello ZIP nella root del progetto Cloudflare Workers/Pages secondo la configurazione presente.

Dominio pubblico: `https://fantacalcioastacontrol.it/`

`sitemap.xml`, `robots.txt`, canonical e anteprime social usano il dominio definitivo.

## Monetizzazione
AdSense non è attivo in V56. Prima dell'attivazione commerciale devono essere completati:
- identità reale del titolare nella Privacy Policy;
- CMP certificata Google e integrazione IAB TCF v2.3 quando richiesta per il traffico EEA/UK/Svizzera;
- testi privacy/cookie coerenti con i fornitori effettivamente attivati;
- Cloudflare Rate Limiting per `/api/subscribe`;
- account AdSense del genitore/tutore maggiorenne e relativa approvazione;
- verifica finale di tutte le policy Google e del sito.

## GitHub / Cloudflare
Se Workers Builds è collegato al repository GitHub corretto e alla branch di produzione, un push sulla branch configurata può attivare automaticamente build e deploy del Worker.
