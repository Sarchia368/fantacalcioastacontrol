# Fantacalcio Asta Control — V56 Monetization Ready

## Stato
La V56 prepara il progetto alla monetizzazione ma **non attiva ancora AdSense né altri tracker pubblicitari**.

## Completato tecnicamente
- Dominio/canonical/SEO predisposti sul dominio definitivo.
- Privacy, Cookie e Termini presenti e descrivono i trattamenti tecnici attuali.
- Email opzionale; consenso aggiornamenti separato.
- Feedback tramite `info@fantacalcioastacontrol.it`.
- Endpoint email con validazione, limite di dimensione richiesta e difesa anti-flood lato Worker.
- D1 predisposto per le email.
- Nessun codice AdSense attivo.

## Prima degli annunci
1. Completare l'identità del titolare del trattamento nella Privacy Policy con dati reali forniti dal gestore.
2. Configurare una CMP certificata Google compatibile con IAB TCF per il traffico SEE/Regno Unito/Svizzera quando si pubblicano annunci personalizzati.
3. Aggiornare Privacy/Cookie con i fornitori pubblicitari effettivamente utilizzati.
4. Configurare la regola Cloudflare Rate Limiting per `/api/subscribe`.
5. Verificare che il file scelto dall’utente possa essere utilizzato nel modo previsto; il progetto non distribuisce un listone reale di terzi.
6. Creare/collegare l'account AdSense di un genitore/tutore maggiorenne, perché il creatore del progetto è minorenne.

## Dati del genitore
Non inserire nel sito dati bancari, documenti, codice fiscale o altri dati non necessari del genitore. L'account AdSense e i relativi dati di pagamento restano nel rapporto con Google; il sito pubblica solo i dati identificativi che la normativa richiede al titolare effettivo del trattamento/servizio.

## Nota
Questo file è una checklist tecnica e non sostituisce una verifica legale professionale.
