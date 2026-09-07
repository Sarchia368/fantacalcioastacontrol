# Release V58 — 7 settembre 2026

## Correzioni principali

- Inseriti Google Analytics e tag AdSense con Google Consent Mode v2: consenso iniziale negato per analytics e pubblicità.
- Eliminata la raccolta remota di email e il database D1: l'email usata dall'app resta locale nel browser.
- Eliminata la scelta newsletter, perché senza un vero provider di invio sarebbe fuorviante raccogliere consenso marketing.
- Aggiornate Privacy, Cookie Policy e Termini in modo coerente con le tecnologie presenti.
- Aggiornati title, description e social metadata per ricerche su asta fantacalcio, gestore asta e Asta Live.
- Service worker aggiornato per forzare il caricamento della V57.
- Importazione calibrata sul file ufficiale di Fantacalcio.it / LegheFC: riconosce la riga intestazioni successiva al titolo e le colonne R, Nome, Squadra, Qt.A e FVM.
- Sostituito il CSV demo con quello fornito dall'utente e riscritto il tutorial di download/importazione.
- Avviso persistente e molto visibile quando salvataggio locale e backup sono disattivati per mancata email.

## Configurazione consenso

La Google CMP è collegata e attiva sul dominio dal pannello AdSense. Il codice conserva il consenso iniziale negato finché il messaggio CMP non registra la preferenza dell'utente.
