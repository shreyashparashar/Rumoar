/* ============================================================
   RUMOAR — Supabase configuration
   ------------------------------------------------------------
   1. Go to https://supabase.com , create a free project.
   2. In the project: Settings (gear) -> API.
   3. Copy the "Project URL" and the "anon public" key.
   4. Paste them below, replacing the YOUR_... placeholders.
   5. Upload this file to GitHub next to index.html. Done.

   The "anon public" key is SAFE to expose in the browser — it is
   designed for that. Never paste the "service_role" key here.
   If you leave the placeholders as-is, the app runs in demo mode
   (browse everything, no login, no messaging).
   ============================================================ */
window.RUMOAR_CONFIG = {
  url:     "YOUR_SUPABASE_PROJECT_URL",   // e.g. https://abcdxyz.supabase.co
  anonKey: "YOUR_SUPABASE_ANON_PUBLIC_KEY"
};
