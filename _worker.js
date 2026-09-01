/**
 * Cloudflare Worker wrapper for Fantacalcio Asta Control.
 * Static assets are served by Cloudflare's ASSETS binding.
 * The optional D1 database stores only email subscriptions/backup-enabled emails.
 */
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" }
  });
}
function validEmail(email) {
  return typeof email === "string" && email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (["/schema.sql","/wrangler.jsonc","/README_CLOUDFLARE_FINALE.md","/README_PUBBLICA_V25.txt"].includes(url.pathname)) return new Response("Not Found", { status: 404 });

    if (url.pathname === "/api/subscribe" && request.method === "POST") {
      let body;
      try { body = await request.json(); } catch { return json({ ok: false, error: "JSON non valido" }, 400); }
      const email = String(body?.email || "").trim().toLowerCase();
      const updates = body?.updates === true;
      if (!validEmail(email)) return json({ ok: false, error: "Email non valida" }, 400);

      if (!env.DB) {
        return json({ ok: false, configured: false, error: "Archivio email non ancora configurato" }, 503);
      }

      const now = new Date().toISOString();
      try {
        await env.DB.prepare(`
          INSERT INTO leads (email, updates_consent, purpose, created_at, updated_at)
          VALUES (?, ?, 'backup_locale', ?, ?)
          ON CONFLICT(email) DO UPDATE SET
            updates_consent=excluded.updates_consent,
            updated_at=excluded.updated_at
        `).bind(email, updates ? 1 : 0, now, now).run();
        return json({ ok: true, saved: true });
      } catch (err) {
        return json({ ok: false, error: "Impossibile salvare l'email" }, 500);
      }
    }

    return env.ASSETS.fetch(request);
  }
};
