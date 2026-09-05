# Fantacalcio Asta Control — V56 final candidate checklist
Data: 4 settembre 2026

## 1. Dataset e diritti
- [x] Nessun array PLAYERS reale incorporato nel codice.
- [x] Nessun nome, quotazione o FVM reale di terzi incorporato nel codice.
- [x] Nessuna strategia, priorità, nota, massimale o prezzo personale dell'utente incorporato.
- [x] Presente solo un listone demo con nomi di calciatori e squadre reali usati solo come esempi, con quotazioni/valori/stime inventati.
- [x] Importazione a carico dell'utente.
- [ ] Eventuali diritti/licenze del file scelto dall'utente restano a carico dell'utente e devono essere compatibili con il suo uso.

## 2. Onboarding
- [x] Configurazione crediti iniziali.
- [x] Partecipanti e nomi squadre.
- [x] P/D/C/A con controllo totale = 25.
- [x] Step dedicato “Importa il tuo listone”.
- [x] “Importa il mio listone” apre il flusso di importazione.
- [x] “Esplora con dati di esempio” attiva la modalità DEMO.
- [x] In DEMO Asta Live è bloccata.
- [x] La landing iniziale informa in modo discreto che per Asta Live serve prima un listone.

## 3. Importazione listone
- [x] Supporto Excel .xlsx/.xls tramite parser client-side.
- [x] Supporto CSV/TSV.
- [x] Riconoscimento intestazioni equivalenti per Nome/Giocatore, Ruolo, Squadra, Quotazione e FVM/Valore/Stima.
- [x] Ricerca della riga intestazioni nei primi 20 record del foglio.
- [x] Messaggi specifici per colonne obbligatorie mancanti.
- [x] Messaggio specifico se manca il valore necessario per la Stima.
- [x] Righe non valide ignorate con conteggio.
- [x] Limite file 8 MB.
- [x] Importazione elaborata nel browser; il file non viene inviato all'endpoint email.
- [x] Re-import: aggiunge nuovi giocatori, rimuove quelli assenti e aggiorna i valori cambiati.
- [x] Re-import mantiene il Costo personale per i giocatori riconosciuti.
- [x] Stima dinamica: valore di riferimento / 1000 × crediti totali scelti.

## 4. Funzioni pubbliche
- [x] Listone filtrabile per nome/squadra, ruolo e stato.
- [x] Ricerca aggiornata mentre si digita.
- [x] Solo Stima e Costo personale come riferimenti del giocatore.
- [x] Nessun Massimo personale.
- [x] Nessun gruppo/nota/priorità personale predefinito.
- [x] Partecipanti e acquisti avversari funzionanti.
- [x] Budget dinamico e slot residui.
- [x] Asta Live accessibile solo con listone reale importato.
- [x] Asta Live consente di analizzare qualsiasi giocatore disponibile, indipendentemente dalla fase.
- [x] “Cosa faccio?” chiede giocatore e prezzo senza precompilare un vecchio giocatore.
- [x] Registro acquisti.
- [x] Backup/import backup coerenti con il listone importato.

## 5. Privacy / Cookie / Termini
- [x] Privacy aggiornata al flusso di importazione locale.
- [x] Cookie Policy aggiornata: AdSense/analytics non attivi nella versione corrente.
- [x] Termini aggiornati: nessun listone reale di terzi precaricato.
- [x] Informazioni sul fatto che l’utente è responsabile dei diritti sul file importato.
- [x] Contatto feedback/privacy: info@fantacalcioastacontrol.it.
- [ ] Prima del lancio commerciale va completata l’identità reale del titolare nella Privacy Policy.

## 6. AdSense — ultimo blocco di monetizzazione
- [ ] Account AdSense del genitore/tutore maggiorenne creato e approvato.
- [ ] Dominio/sito aggiunto e verificato in AdSense.
- [ ] Configurazione CMP certificata Google per il traffico EEA/UK/Svizzera, se si servono annunci personalizzati.
- [ ] CMP compatibile con IAB TCF v2.3.
- [ ] Privacy e Cookie aggiornate con i fornitori pubblicitari effettivamente attivati.
- [ ] Codice AdSense inserito solo dopo la configurazione del consenso.
- [ ] Test di annunci e consenso su desktop/mobile.
- [ ] Verifica che non vengano usati dati personali per personalizzare annunci in violazione delle policy Google.

## 7. Cloudflare / produzione
- [x] Canonical, robots e sitemap sul dominio definitivo.
- [x] Google Search Console verification file presente.
- [x] Endpoint /api/subscribe protetto da validazione e anti-flood leggero.
- [ ] Configurare anche una vera regola Cloudflare Rate Limiting per /api/subscribe.
- [x] Service Worker aggiornato a V56.
- [x] Nessun vecchio script di patch/test interno nel pacchetto di produzione.
- [ ] Verificare che Workers Builds deployi la branch di produzione corretta.
- [ ] Test finale del custom domain dopo il deploy.

## 8. QA finale obbligatoria prima di pubblicare V56
- [ ] Primo accesso: landing → onboarding.
- [ ] Onboarding con DEMO.
- [ ] DEMO: Asta Live bloccata in ogni punto.
- [ ] Import CSV valido.
- [ ] Import XLSX valido.
- [ ] Import con intestazioni spostate.
- [ ] Import con colonne mancanti.
- [ ] Import con valori non numerici.
- [ ] Re-import con giocatore aggiunto/rimosso/modificato.
- [ ] Cambio budget 500 → 1000 e verifica formula Stima.
- [ ] Costo personale e cambio fonte.
- [ ] Acquisto proprio.
- [ ] Acquisto avversario.
- [ ] Rilancio oltre soglia.
- [ ] Slot esauriti.
- [ ] Reset asta.
- [ ] Backup → import backup su un secondo browser/dispositivo.
- [ ] Mobile reale.
- [ ] Desktop reale.
- [ ] Refresh dopo import con email attiva.
- [ ] Verifica console browser senza errori runtime.

## Stato complessivo
**V56 è tecnicamente pronta come candidata finale dopo questa modifica, ma NON va dichiarata definitivamente pronta per la monetizzazione finché non sono completati identità del titolare, CMP/consenso, configurazione AdSense e gli ultimi test QA/Cloudflare indicati sopra.**
