# Monetizzazione: controlli obbligatori prima di AdSense

## Stato tecnico
- Dominio previsto: https://fantacalcioastacontrol.it/
- Sitemap e robots predisposti per il dominio definitivo.
- Endpoint email: POST /api/subscribe.
- Dati email salvati in D1 solo quando l’archivio è configurato.

## Prima di attivare AdSense
1. Pubblicare un’informativa privacy definitiva coerente con i trattamenti realmente attivi.
2. Pubblicare una cookie policy definitiva quando saranno presenti strumenti pubblicitari/analytics.
3. Configurare una CMP certificata da Google e integrata con IAB TCF per gli annunci personalizzati nel SEE/UK/Svizzera, secondo i requisiti Google vigenti.
4. Configurare una regola Cloudflare Rate Limiting per /api/subscribe, limitata per IP.
5. Verificare i diritti/licenze per qualsiasi quotazione, FVM o altro dato di terzi usato nel servizio commerciale.

## Nota sui dati Fantacalcio
I Termini di Utilizzo di Fantacalcio (versione giugno 2026) vietano, senza autorizzazione scritta, la copia/riproduzione/modifica/vendita/divulgazione dei Contenuti e qualsiasi elaborazione dei dati. La pubblicazione commerciale di dati derivati dalle loro quotazioni/FVM deve quindi essere autorizzata oppure sostituita con dati per i quali si possiedono diritti d’uso adeguati.


## Verifica normativa tecnica — 3 settembre 2026
- Il Garante richiede un'informativa trasparente con titolare, finalità, base giuridica, destinatari, conservazione e diritti; cookie/tracker non tecnici richiedono il relativo consenso quando previsto.
- Google AdSense richiede una CMP certificata Google integrata con IAB TCF per annunci personalizzati verso utenti nel SEE, Regno Unito e Svizzera.
- La configurazione attuale non attiva AdSense né analytics di terze parti.
- Il sito non deve dichiarare di essere “AdSense compliant” finché CMP, testi, fornitori e impostazioni effettive non sono configurati e verificati.
