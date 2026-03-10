# MathQuest — Math Learning App

AI-powered web app belajar matematika dengan mastery system 3 fase.

## Stack
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS
- **Auth**: Supabase Auth (Google OAuth)
- **Database**: Supabase PostgreSQL
- **AI**: Google Gemini 1.5 Flash
- **Charts**: Recharts
- **Math**: KaTeX + react-katex

## Halaman

| Halaman | URL | Keterangan |
|---------|-----|-----------|
| Landing | `/` | Publik |
| Login | `/auth/login` | Google OAuth |
| Diagnostic | `/diagnostic` | CAT onboarding (~15 menit) |
| Dashboard | `/dashboard` | Hub utama |
| Topic Browser | `/learn` | 30+ topik dengan filter |
| Topic Intro | `/learn/[slug]/intro` | Info + prasyarat + fase roadmap |
| Sesi Belajar | `/learn/[slug]` | Sesi aktif 3-fase |
| Spaced Review | `/learn/review` | Review hari ini |
| Progress | `/progress` | Visualisasi lengkap |
| Legends Board | `/legends` | 42 legenda XP |
| Profile | `/profile` | Badge collection + stats |

## Setup

### 1. Environment
```bash
cp .env.example .env.local
# Isi semua nilai di .env.local
```

### 2. Supabase
1. Buat project di https://supabase.com
2. SQL Editor → jalankan berurutan:
   - `supabase/migrations/001_initial_schema.sql`
   - `supabase/migrations/002_seed_topics_badges.sql`
   - `supabase/migrations/003_helper_functions.sql`
   - `supabase/migrations/004_phase2_additions.sql`
   - `supabase/migrations/006_phase3_additions.sql`
   - `supabase/migrations/007_seed_questions.sql`
3. Authentication → Providers → Google → Enable

### 3. Google OAuth
1. Google Cloud Console → Credentials → Create OAuth 2.0 Client
2. Redirect URIs:
   - `https://yourdomain.com/auth/callback`
   - `https://YOUR_PROJECT.supabase.co/auth/v1/callback`

### 4. Gemini API
- https://aistudio.google.com/app/apikey → Create API key

### 5. Run
```bash
npm install
npm run dev
```

## Deploy ke cPanel

```bash
npm run build

# Upload ke server: folder .next/, public/, package.json, next.config.js, server.js
# Di cPanel: Setup Node.js App → startup file: server.js
# Run: npm install --production
```

## Sistem Pembelajaran

```
CAT Diagnostic → 9 topik × 3 soal adaptif → init mastery records

FASE 1 — Pemahaman  : 5 soal, Bloom 1-3, hint tersedia, lulus ≥70%
FASE 2 — Penguasaan : 15 soal, Bloom 2-5, tanpa hint, rolling accuracy ≥85%
FASE 3 — SR Review  : SM-2 algorithm, interval 1→3→7→14→30+ hari

AI Gap Analysis → otomatis tiap 5 sesi, bisa dipicu manual dari /progress
Badge System    → 22+ badge, 4 tier + secret, awarded server-side
Legends Board   → 42 legenda dengan XP threshold 0–99,999
```
