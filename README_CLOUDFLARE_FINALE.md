# Fantacalcio Asta Control 26/27 — V50

Versione pubblica aggiornata dopo la chiusura del calciomercato estivo 2026.

## Cosa cambia in V50
- Home riprogettata senza le immagini dei giocatori: niente ritagli o composizioni che rendono male su mobile.
- Listone ufficiale aggiornato usando il file `Quotazioni_Fantacalcio_Stagione_2026_27(2).xlsx` fornito per questa versione.
- 531 giocatori attivi nel foglio `Tutti`, con ruoli, squadre, quotazioni e FVM aggiornati.
- FVM mantenuto sulla base 1000 del listone e convertito alla base dell'asta: per il default 500, FVM / 2; il valore viene poi riscalato automaticamente se l'utente sceglie un budget diverso.
- Asta Live: corretto il passaggio dell'ID del giocatore ai pulsanti di acquisto.
- “Acquistato da me” aggiorna rosa, spesa, disponibilità e registro.
- “Acquistato da un altro” rimuove il giocatore dalle disponibilità e lo registra.
- Un giocatore già acquistato non può essere registrato una seconda volta.
- Il registro salva anche il nome del giocatore, così resta leggibile anche se in futuro il listone cambia.
- Il refresh ufficiale del listone non cancella più obiettivi, costi personali, priorità e note salvati per ID giocatore.
- Service worker V50 con cache separata e bypass della cache per HTML/SW.

## Criterio FVM
Il listone fornito contiene il FVM su base 1000. L'app usa quel FVM come riferimento della `Stima` e lo converte al budget dell'asta. Esempio: FVM 200 → 100 su budget 500 → 200 su budget 1000.

## Calciomercato
La sessione estiva di Serie A 2026 è terminata il 1 settembre 2026 alle 20:00. Il listone di questa versione viene dal file aggiornato fornito dall'utente; non vengono inventati valori per giocatori assenti dal file.

## Pubblicazione Cloudflare
Caricare il contenuto di questo ZIP nella root del progetto Cloudflare Pages/Workers come previsto dalla configurazione. `wrangler.jsonc` include già il binding D1 `DB` per `fanta-asta-leads`.

Prima della pubblicazione finale, aggiornare `sitemap.xml`, `robots.txt` e `og:image` se il dominio pubblico non è più quello indicato nei file.

## Nota
Il pacchetto pubblico non distribuisce il file XLSX sorgente. Verificare sempre i diritti di utilizzo delle quotazioni/dati prima di una monetizzazione pubblica.


Nota V50: il vecchio sitemap Netlify è stato rimosso perché il dominio finale Cloudflare non è noto in questa build. Dopo aver scelto il dominio pubblico definitivo, ricreare sitemap.xml e aggiungere la relativa riga in robots.txt con quel dominio.
