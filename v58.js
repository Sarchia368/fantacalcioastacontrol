/* V58: exact support for Fantacalcio.it / LegheFC quotation exports. */
function rowsFromSheet(ws) {
  const matrix = XLSX.utils.sheet_to_json(ws, { header: 1, defval: '', raw: false });
  if (!matrix.length) return [];
  let headerIndex = -1;
  for (let i = 0; i < Math.min(matrix.length, 30); i++) {
    const headers = matrix[i].map(normalizeHeader);
    const hasName = headers.some(x => ['nome', 'giocatore', 'player', 'calciatore'].includes(x));
    const hasRole = headers.some(x => ['r', 'ruolo', 'role', 'posizione'].includes(x));
    if (hasName && hasRole) { headerIndex = i; break; }
  }
  if (headerIndex < 0) throw Error('Non trovo le intestazioni del listone. Per il file ufficiale Fantacalcio.it scegli il foglio “Tutti”: devono essere presenti almeno le colonne R e Nome.');
  const headers = matrix[headerIndex].map((x, i) => String(x || '').trim() || `Colonna ${i + 1}`);
  return matrix.slice(headerIndex + 1).map(row => Object.fromEntries(headers.map((h, i) => [h, row[i] ?? ''])));
}

function parseListoneRows(rows) {
  if (!Array.isArray(rows) || !rows.length) throw Error('Il file non contiene righe leggibili.');
  const headers = Object.keys(rows[0]);
  const nameCol = pickCol(headers, ['nome', 'giocatore', 'player', 'nomegiocatore', 'calciatore']);
  const roleCol = pickCol(headers, ['r', 'ruolo', 'role', 'posizione']);
  const teamCol = pickCol(headers, ['squadra', 'team', 'club']);
  const quoteCol = pickCol(headers, ['qta', 'quotazione', 'quot', 'quota', 'prezzo', 'quotazioneiniziale', 'quotazionemedia']);
  const fvmCol = pickCol(headers, ['fvm', 'valore', 'valorefvm', 'stima', 'fantavoremedio', 'fantamediavalore', 'valorefantamedia']);
  if (!nameCol || !roleCol) throw Error('Colonne obbligatorie mancanti: servono Nome e Ruolo. Nel file ufficiale Fantacalcio.it il ruolo è nella colonna “R”.');
  if (!fvmCol) throw Error('Manca la colonna FVM. Nel file ufficiale Fantacalcio.it importa il foglio “Tutti”, che contiene FVM.');
  const out = [], errors = [];
  rows.forEach((row, i) => {
    const n = String(row[nameCol] ?? '').trim();
    const r = String(row[roleCol] ?? '').trim().toUpperCase().charAt(0);
    const team = String(teamCol ? row[teamCol] ?? '' : '').trim() || '—';
    const fvm = parseNumber(row[fvmCol]);
    const quote = quoteCol ? parseNumber(row[quoteCol]) : null;
    if (!n && !r && fvm === null) return;
    if (!n || !['P', 'D', 'C', 'A'].includes(r) || fvm === null || fvm < 0) { errors.push(`Riga ${i + 2}: nome, ruolo o FVM non valido`); return; }
    out.push({ id: hashPlayer(n + '|' + team + '|' + r), r, n, team, quote, fvm, estimate500: fvm / 2, personal500: null, costSource: 'STIMA' });
  });
  if (!out.length) throw Error('Nessun giocatore valido trovato. Assicurati di aver scelto il file ufficiale delle Quotazioni e il foglio “Tutti”.');
  return { players: out, errors };
}

function showListoneTutorial() {
  showModal(`<div class="title">📋 Scarica e importa il listone ufficiale</div><div class="small" style="font-size:12px">
    <div class="plan"><b>1 · Accedi a Fantacalcio.it</b><br>Apri il sito ufficiale <b>Fantacalcio.it</b> ed entra con il tuo account <b>Leghe Fantacalcio / LegheFC</b>.</div>
    <div class="plan"><b>2 · Scarica le Quotazioni</b><br>Nella tua area LegheFC cerca il download del listone quotazioni e scarica il file <b>Excel (.xlsx)</b>. Non modificare colonne, nomi o formule.</div>
    <div class="plan"><b>3 · Torna su Asta Control</b><br>Premi <b>Seleziona file</b>, scegli il file appena scaricato e poi <b>Importa listone</b>.</div>
    <div class="plan"><b>4 · Cosa legge l’app</b><br>Il formato ufficiale contiene una prima riga con il titolo e, subito sotto, le colonne <b>R</b> (ruolo), <b>Nome</b>, <b>Squadra</b>, <b>Qt.A</b> e <b>FVM</b>. Asta Control trova automaticamente questa riga nel foglio <b>Tutti</b>, conserva Qt.A e converte FVM in una <b>Stima proporzionata ai crediti</b> della tua asta.</div>
    <div class="alert blue" style="margin-top:10px"><b>Il file resta sul tuo dispositivo.</b><br>Viene letto nel browser e non è caricato sul server.</div>
    <p class="small">Se scarichi un file diverso o incompleto, il messaggio di errore ti dirà quale colonna manca.</p>
  </div><button class="btn gold" style="width:100%;margin-top:10px" onclick="openListoneManager()">← Torna all’importazione</button>`);
}

const v58RenderAll = renderAll;
renderAll = function () {
  v58RenderAll();
  const home = document.getElementById('home');
  if (!home || state.emailEnabled || home.querySelector('#v58-save-warning')) return;
  const warning = document.createElement('div');
  warning.id = 'v58-save-warning';
  warning.className = 'card';
  warning.style.cssText = 'border:2px solid #ffad5c;background:#39280f;box-shadow:0 0 0 1px #775a1c';
  warning.innerHTML = `<div class="title" style="color:#ffe07a;font-size:15px">⚠️ Salvataggio locale DISATTIVATO</div><div class="small" style="font-size:12px;color:#fff3cf">Senza email le modifiche della tua asta <b>non vengono salvate</b> e non puoi usare i backup. Se chiudi il browser, cambi dispositivo o cancelli i dati del sito potresti perdere tutto. Inserisci un’email per attivare il salvataggio locale su questo dispositivo.</div><button class="btn gold" style="margin-top:10px;width:100%" onclick="emailSettings()">📧 Inserisci email e attiva il salvataggio</button>`;
  home.prepend(warning);
};
