# Fantacalcio Asta Control — pacchetto finale

## Pubblicazione consigliata
Questo pacchetto è pensato per Cloudflare Pages/Workers.

### 1) Pubblica il sito
Puoi usare Cloudflare Pages Direct Upload per i file statici. Il progetto contiene anche `_worker.js`, supportato da Direct Upload.

### 2) Salvataggio delle email
Le email inserite dagli utenti sono facoltative. Servono per attivare il salvataggio locale e gli strumenti di backup tra dispositivi. Non viene promesso un sincronismo automatico dell'intera asta.

Per rendere le email utili al proprietario del sito:
1. Cloudflare Dashboard → Workers & Pages → crea un database D1 chiamato `fanta-asta-leads`.
2. Esegui `schema.sql` sul database.
3. Nel progetto Pages aggiungi un binding D1 con variabile `DB` e seleziona quel database.
4. Ridistribuisci il progetto.

L'endpoint `/api/subscribe` salverà:
- email;
- consenso agli aggiornamenti (`1/0`);
- finalità `backup_locale`;
- data di creazione e ultimo aggiornamento.

Le email non vengono mostrate pubblicamente.

### 3) Importante
La casella "ricevere aggiornamenti dell'app" è separata dall'email necessaria per il salvataggio. Un utente può usare il backup senza acconsentire alle comunicazioni future.

### 4) Privacy
Se raccogli email reali, prima della pubblicazione definitiva aggiorna Privacy/Cookie con il titolare, finalità, base giuridica, conservazione e diritti degli interessati. Non usare l'elenco email per newsletter/marketing finché non hai una base giuridica e un consenso dove necessario.
