/* V57: privacy-safe local email flow. No email is sent to this website. */
async function submitEmailSignup() { return false; }

function emailSettings() {
  showModal(`<div class="title">📧 Email e salvataggio locale</div>
    <div class="small">L’email è facoltativa e resta salvata solo nel browser di questo dispositivo. Serve esclusivamente a sbloccare il salvataggio locale e gli strumenti di backup; non crea un account, non sincronizza i dispositivi e non viene inviata al sito.</div>
    <label style="display:block;margin-top:10px;font-size:10px;color:var(--muted)">Email</label>
    <input id="emailEdit" type="email" value="${esc(state.email||'')}" placeholder="nome@email.it" style="width:100%;margin-top:4px;background:#0a111e;color:white;border:1px solid var(--line);border-radius:9px;padding:9px">
    <div class="alert blue" style="margin-top:10px">Per ricevere aggiornamenti via email sarà pubblicata una scelta separata solo quando esisterà un servizio newsletter reale e la relativa informativa. In questa versione non viene raccolto alcun consenso marketing.</div>
    <div class="two" style="margin-top:10px"><button class="btn green" onclick="saveEmailSettings()">Salva</button><button class="btn" onclick="closeModal()">Annulla</button></div>`);
}

function saveEmailSettings() {
  const email = (document.getElementById('emailEdit')?.value || '').trim();
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return alert('Inserisci un indirizzo email valido.');
  state.email = email;
  state.emailEnabled = !!email;
  state.emailUpdates = false;
  save(); closeModal(); renderAll();
  if (email) alert('Email salvata solo su questo dispositivo. Salvataggio locale e backup sono attivi.');
}

function showOnboarding() {
  showModal(`<div class="title">⚽ Configura la tua asta</div><div class="small">Imposta la lega e poi scegli come caricare il listone.</div>
    <div class="editgrid" style="margin-top:10px">
      <div><label>💰 Crediti iniziali</label><input id="obCredits" type="number" min="1" value="${state.credits||500}"></div>
      <div><label>👥 Partecipanti</label><input id="obTeams" type="number" min="2" max="30" value="${state.teams||10}"></div>
      <div class="full"><label>🏟️ Nomi squadre</label><input id="obParticipantNames" type="text" placeholder="Es. Gabriele, Emanuele, Marco, Luca"><div class="small">Facoltativo: separa i nomi con virgole. Il primo è la tua squadra.</div></div>
      <div><label>Portieri</label><input id="obP" type="number" min="0" value="${state.slots?.P??3}"></div><div><label>Difensori</label><input id="obD" type="number" min="0" value="${state.slots?.D??8}"></div><div><label>Centrocampisti</label><input id="obC" type="number" min="0" value="${state.slots?.C??8}"></div><div><label>Attaccanti</label><input id="obA" type="number" min="0" value="${state.slots?.A??6}"></div>
      <div class="full"><label>📧 Email <span class="muted">(facoltativa)</span></label><input id="obEmail" type="email" placeholder="nome@email.it" value="${esc(state.email||'')}"><div class="small">Resta solo su questo browser e abilita il salvataggio locale e i backup. Non crea un account né invia l’indirizzo al sito.</div></div>
    </div>
    <div class="alert orange" style="margin-top:10px"><b>ℹ️ Modalità demo:</b> usa dati illustrativi, non quotazioni ufficiali.</div><div class="alert blue" style="margin-top:10px"><b>📋 Listone obbligatorio per l’asta reale.</b> Puoi importarlo subito oppure esplorare con dati di esempio.</div>
    <div class="two" style="margin-top:8px"><button class="btn gold" onclick="finishOnboarding('import')">📋 Importa il mio listone</button><button class="btn blue" onclick="finishOnboarding('demo')">👀 Esplora con dati di esempio</button></div>`);
}

function finishOnboarding(mode) {
  const credits = Math.max(1, +obCredits.value || 500), teams = Math.max(2, Math.min(30, +obTeams.value || 10));
  const slots = {P:+obP.value||0, D:+obD.value||0, C:+obC.value||0, A:+obA.value||0};
  if (Object.values(slots).reduce((a,b)=>a+b,0) !== 25) return alert('I posti P/D/C/A devono sommare a 25.');
  state.credits=credits; state.teams=teams; state.slots=slots;
  state.participants=Array.from({length:teams},(_,i)=>({id:i===0?'me':'p'+(i+1),name:defaultParticipantName(i)}));
  (document.getElementById('obParticipantNames')?.value||'').split(',').map(x=>x.trim()).filter(Boolean).slice(0,teams).forEach((name,i)=>state.participants[i].name=name.slice(0,40));
  state.spent={P:0,D:0,C:0,A:0}; state.taken=[]; state.otherTaken=[]; state.lost=[]; state.log=[]; state.phaseOrder=['P','D','C','A']; state.phaseIndex=0;
  state.onboarded=true; state.email=(obEmail.value||'').trim(); state.emailEnabled=!!state.email; state.emailUpdates=false; state.listoneImported=false; state.demoMode=false;
  if(mode==='demo') return chooseDemo();
  save(); closeModal(); renderAll(); openListoneManager();
}

function emailReminder() {
  if(state.emailEnabled)return;
  const modal=document.getElementById('modal'); if(!modal||modal.innerHTML.trim())return;
  modal.innerHTML=`<div class="modal email-reminder"><div class="modalbox"><button class="reminder-close" aria-label="Chiudi" onclick="closeModal()">✕</button><div class="title">🔒 Non perdere la tua asta</div><div class="small" style="font-size:12px">Senza email il sito continua a funzionare, ma <b>salvataggio locale e backup restano disattivati</b>.</div><div class="alert orange">L’email è facoltativa, resta solo su questo browser e non viene inviata al sito.</div><div class="two" style="margin-top:10px"><button class="btn gold" onclick="closeModal();emailSettings()">Inserisci email</button><button class="btn" onclick="closeModal()">Non ora</button></div></div></div>`;
}

/* Existing V56 values remain compatible; remove a former marketing flag. */
if (state && state.emailUpdates) { state.emailUpdates=false; save(); }
