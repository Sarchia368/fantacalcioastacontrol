/* V59: feedback is available only after the user enables local saving. */
function setFeedbackVisibility() {
  document.querySelectorAll('[onclick*="openFeedback"]').forEach(link => {
    link.style.display = state.emailEnabled ? '' : 'none';
  });
}

function openFeedback() {
  if (!state.emailEnabled) {
    showModal(`<div class="title">🔒 Feedback disponibile dopo l’attivazione del salvataggio</div><div class="small" style="font-size:12px">Inserisci prima la tua email per attivare il salvataggio locale. Dopo potrai inviare un feedback dal tuo client email al team di Fantacalcio Asta Control.</div><div class="two" style="margin-top:10px"><button class="btn gold" onclick="closeModal();emailSettings()">Inserisci email</button><button class="btn" onclick="closeModal()">Non ora</button></div>`);
    return;
  }
  showModal(`<div class="feedback-box"><div class="title">💬 Invia un feedback</div><div class="small">Il messaggio verrà aperto nel client email predefinito del tuo dispositivo. Se necessario potrai scegliere o accedere al tuo account email, poi invierai il messaggio a <b>info@fantacalcioastacontrol.it</b>.</div><label style="display:block;margin-top:10px;font-size:10px;color:var(--muted)">Tipo</label><select id="fbType"><option>Segnalazione bug</option><option>Suggerimento</option><option>Idea per una funzione</option><option>Altro</option></select><label style="display:block;margin-top:10px;font-size:10px;color:var(--muted)">Messaggio</label><textarea id="fbText" placeholder="Descrivi cosa è successo o cosa vorresti migliorare..."></textarea><div class="two" style="margin-top:10px"><button class="btn gold" onclick="sendFeedback()">✉️ Apri email</button><button class="btn" onclick="closeModal()">Annulla</button></div></div>`);
}

function sendFeedback() {
  if (!state.emailEnabled) return openFeedback();
  const type = document.getElementById('fbType')?.value || 'Feedback';
  const message = (document.getElementById('fbText')?.value || '').trim();
  if (message.length < 5) return alert('Scrivi almeno qualche dettaglio nel feedback.');
  const subject = encodeURIComponent('[Fantacalcio Asta Control] ' + type);
  const body = encodeURIComponent(message + '\n\n---\nVersione app: V59\nPagina: ' + location.href);
  window.location.href = 'mailto:info@fantacalcioastacontrol.it?subject=' + subject + '&body=' + body;
  closeModal();
}

const v59SaveEmailSettings = saveEmailSettings;
saveEmailSettings = function () { v59SaveEmailSettings(); setFeedbackVisibility(); };
setFeedbackVisibility();
