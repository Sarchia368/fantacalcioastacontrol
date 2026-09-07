# Release V57 — 7 settembre 2026

## Correzioni principali

- Inseriti Google Analytics e tag AdSense con Google Consent Mode v2: consenso iniziale negato per analytics e pubblicità.
- Eliminata la raccolta remota di email e il database D1: l'email usata dall'app resta locale nel browser.
- Eliminata la scelta newsletter, perché senza un vero provider di invio sarebbe fuorviante raccogliere consenso marketing.
- Aggiornate Privacy, Cookie Policy e Termini in modo coerente con le tecnologie presenti.
- Aggiornati title, description e social metadata per ricerche su asta fantacalcio, gestore asta e Asta Live.
- Service worker aggiornato per forzare il caricamento della V57.

## Blocco esterno rimasto

L'unica operazione non automatizzabile è la pubblicazione del messaggio Google CMP da AdSense > Privacy e messaggi. Senza quella configurazione non attivare annunci per utenti europei.
