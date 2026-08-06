# 📋 DOKUMENTASI SPESIFIKASI TEKNIKAL & SERAH TERIMA (HANDOFF IT/BACKEND)
## Project: Cinemags Awards 2026 Landing Page & Interactive Voting System

Dokumen ini disusun sebagai panduan teknis komprehensif bagi **Tim IT & Backend Developer** yang akan mengintegrasikan API, Database, Sistem Keamanan, dan Infrastruktur Backend dengan antarmuka Frontend **Cinemags Awards 2026**.

---

## 1. 🎯 RINGKASAN ARSITEKTUR FRONTEND

Aplikasi ini dibangun sebagai **Responsive Single Page Application (SPA)** berkinerja tinggi dengan visual sinematik modern, animasi WebGL Shader, animasi scroll GSAP, serta generator tiket digital **Voter Pass (Rasio 9:16)** yang siap dibagikan ke media sosial.

- **Stack Utama**: HTML5, Vanilla JavaScript (ES6+ Native DOM API), CSS3 (Tailwind CSS v4 & DaisyUI v5).
- **Engine Visual & Animasi**:
  - **Auralis WebGL Shader**: Shader WebGL custom (Noise & Light blooming sinematik) untuk latar belakang Hero Section.
  - **Lenis Smooth Scroll Engine**: Momentum smooth scrolling presisi tinggi (`v1.1.18`).
  - **GSAP 3.12.5 & ScrollTrigger**: Seeding animasi entrance hero dan sekuesi reveal seksi bertahap (*top-to-bottom*).
- **Desain & Tipografi**:
  - Display Font: `Federo` (Google Fonts - Serif Sinematik untuk Judul & Header Tiket).
  - Body Font: `DM Sans` (Google Fonts - UI Body, Tombol, dan Form).
  - Skema Warna Sistem:
    - **Primary Canvas (Dark Background)**: `#000000` / `#0d0d0d`
    - **Primary Red (Merah Sinematik)**: `#bf2121` (`rgb(191, 33, 33)`) & Bright Crimson `#dc2626`
    - **Accent Gold (Emas Penghargaan)**: `#d29e2f` (`rgb(210, 158, 47)`) & Dark Gold `#7d5912`
    - **Elevated Card Glassmorphism**: `rgba(33, 33, 33, 0.85)` / `bg-neutral-950/90`

---

## 2. 🗂 STRUKTUR FILE PROJECT

```text
Cinemags-Awards-LP/
├── index.html                   # Entry point utama landing page & seluruh logika UI JS
├── cinemags_awards_2026.html    # Template terikat untuk environment staging/mirrored
├── TECH_STACK_HANDOFF.md        # Dokumen spesifikasi teknis serah terima ini
└── assets/                      # Asset gambar lokal teroptimasi (.webp)
    ├── Logo.webp                # Vektor/Logo Resmi Cinemags Awards 2026
    └── Trophy.webp              # Asset 3D/HD Piala Penghargaan Cinemags
```

---

## 3. 💾 DATA CONTRACT & REKAYASA STATE FRONTEND

Saat ini seluruh data nominasi dan kalkulasi vote berjalan secara **Client-Side In-Memory State**. Tim Backend perlu mengganti variabel JS berikut dengan panggilan **REST API / GraphQL**:

### A. Data Kategori (`categoriesData`)
Lokasi JS: `index.html` → `const categoriesData`

```json
[
  { "id": "cat-1", "title": "Film Terfavorit", "icon": "movie" },
  { "id": "cat-2", "title": "Sutradara Terfavorit", "icon": "person" },
  { "id": "cat-3", "title": "Aktor Utama Terfavorit", "icon": "badge" },
  { "id": "cat-4", "title": "Aktris Utama Terfavorit", "icon": "woman" },
  { "id": "cat-5", "title": "Aktor Pendukung Terfavorit", "icon": "group" },
  { "id": "cat-6", "title": "Aktris Pendukung Terfavorit", "icon": "groups" },
  { "id": "cat-7", "title": "Penulis Skenario Terfavorit", "icon": "edit_note" },
  { "id": "cat-8", "title": "Cinematography Terfavorit", "icon": "videocam" },
  { "id": "cat-9", "title": "Original Soundtrack Terfavorit", "icon": "music_note" },
  { "id": "cat-10", "title": "Visual Effects Terfavorit", "icon": "auto_awesome" }
]
```

### B. Data Nominasi (`nomineesData`)
Lokasi JS: `index.html` → `const nomineesData`

```json
[
  {
    "id": "nom-1",
    "catId": "cat-1",
    "name": "Jatuh Cinta Seperti di Film-Film",
    "film": "Jatuh Cinta Seperti di Film-Film",
    "studio": "Imajinari",
    "image": "assets/poster-1.webp",
    "count": 12450
  }
]
```

### C. State Pilihan Pemilih (`userVotes`)
Struktur Object JavaScript Key-Value yang menyimpan pilihan aktif pengguna:

```javascript
// Contoh State userVotes ketika pengguna telah memilih di beberapa kategori:
userVotes = {
  "cat-1": "nom-1",
  "cat-2": "nom-5",
  "cat-3": "nom-7",
  // ...
};
```

---

## 4. 🔌 SPESIFIKASI KEBUTUHAN ENDPOINT API (BACKEND CONTRACT)

Tim IT/Backend direkomendasikan untuk menyediakan Endpoint berikut:

### 1. `GET /api/v1/categories`
Mengambil daftar kategori voting yang aktif.
- **Response `200 OK`**:
  ```json
  {
    "status": "success",
    "data": [
      { "id": "cat-1", "title": "Film Terfavorit", "icon": "movie", "order": 1 }
    ]
  }
  ```

### 2. `GET /api/v1/nominees`
Mengambil daftar seluruh nominasi beserta jumlah perolehan suara terkini (*live vote count*).
- **Response `200 OK`**:
  ```json
  {
    "status": "success",
    "data": [
      {
        "id": "nom-1",
        "cat_id": "cat-1",
        "name": "Jatuh Cinta Seperti di Film-Film",
        "studio": "Imajinari",
        "image_url": "https://cdn.cinemags.org/posters/nom-1.jpg",
        "vote_count": 12450
      }
    ]
  }
  ```

### 3. `POST /api/v1/votes/submit` (Submit Voting Utama)
Mengirimkan seluruh pilihan suara pemilih beserta identitas/perangkat.
- **Request Payload**:
  ```json
  {
    "voter_name": "Budi Santoso",
    "voter_email": "budi@example.com",
    "votes": {
      "cat-1": "nom-1",
      "cat-2": "nom-5",
      "cat-3": "nom-7"
    },
    "recaptcha_token": "03AFcWeA7..."
  }
  ```
- **Response `201 Created`**:
  ```json
  {
    "status": "success",
    "message": "Suara berhasil dicatat",
    "ticket_id": "PASS-8492",
    "created_at": "2026-08-02T11:56:30Z"
  }
  ```

---

## 5. 🛢 REKOMENDASI SKEMA DATABASE (RELATIONAL DB - PostgreSQL/MySQL)

```sql
-- TABLE: categories
CREATE TABLE categories (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    icon VARCHAR(50) NOT NULL,
    display_order INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLE: nominees
CREATE TABLE nominees (
    id VARCHAR(50) PRIMARY KEY,
    category_id VARCHAR(50) REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(200) NOT NULL,
    film_title VARCHAR(200),
    studio VARCHAR(150),
    image_url TEXT NOT NULL,
    vote_count BIGINT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLE: votes (Header Transaksi Voting)
CREATE TABLE votes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_id VARCHAR(20) UNIQUE NOT NULL,
    voter_name VARCHAR(150) NOT NULL,
    voter_email VARCHAR(150) NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABLE: vote_items (Rincian Pilihan Per Kategori)
CREATE TABLE vote_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vote_id UUID REFERENCES votes(id) ON DELETE CASCADE,
    category_id VARCHAR(50) REFERENCES categories(id),
    nominee_id VARCHAR(50) REFERENCES nominees(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_vote_per_category UNIQUE(vote_id, category_id)
);
```

---

## 6. 🛡 REKOMENDASI INTEGRASI KEAMANAN & ANTI-BOT

Untuk menjaga integritas dan keabsahan pemungutan suara Cinemags Awards 2026:

1. **Anti-Duplicate Voting / Rate Limiting**:
   - Terapkan Pembatasan IP / Fingerprint Browser (misal: Maksimal 3 kali voting per IP / Alamat Email per 24 jam).
   - Validasi Email (OTP atau magic link jika dibutuhkan otentikasi ketat).
2. **CAPTCHA Protection**:
   - Integrasikan **Cloudflare Turnstile** atau **Google reCAPTCHA v3** pada tombol `Kirim Suara` (`handleVoteSubmit`).
3. **Atomic Transaction & Counter Lock**:
   - Gunakan `UPDATE nominees SET vote_count = vote_count + 1 WHERE id = ...` dalam DB transaction atomic untuk mencegah *race condition* saat ribuan pemilih mengakses bersamaan.
4. **CORS & Security Headers**:
   - Batasi origin API hanya untuk domain resmi (`https://awards.cinemags.org` & domain Vercel terdaftar).

---

## 7. 🎟 FITUR GENERATOR TIKET DIGITAL VOTER PASS (RASIO 9:16)

Frontend telah dilengkapi container tiket **Voter Pass 9:16** (`#wrapped-ticket`):
- **Dimensi**: Rasio 9:16 (`max-width: 320px`, padding inset `22px`).
- **Elemen Header**: Logo Cinemags (`assets/Logo.webp`), tanpa teks tambahan untuk area bersih.
- **Daftar Nominasi (1 Kolom Teks)**:
  - Judul Kategori: Emas (`#d29e2f`), Font `Federo`, Capitalize Case.
  - Nama Nominasi: Putih (`#ffffff`), Font `DM Sans`.
  - Garis Pemisah Tipis (`border-b border-white/5`).
- **Footer**: Tagar Kembar `#RayakanFilmIndonesia #CinemagsAwards2026`.
- **Modul Canvas Export**: Rekomendasi penggunaan library `html2canvas` / `dom-to-image` di method `downloadPassImage()` jika ingin langsung menghasilkan file gambar PNG 1080x1920px di browser pemilih.

---

## 8. 🚀 ALUR FLOW INTEGRASI DENGAN FRONTEND EXISTING

```text
Pemilih (Browser) ──> [ GET /api/v1/nominees ] ──> Backend API ──> Database
       │                                                                │
       ▼                                                                ▼
Pilih Nominasi ──> [ POST /api/v1/votes/submit ] ──> Validasi & DB Vote Count +1
       │                                                                │
       ▼                                                                ▼
Tampilkan Voter Pass 9:16 (#wrapped-ticket) <── [ Return Ticket ID ] ───┘
       │
       ▼
Reset State (userVotes = {}, Progress = 0%)
```

---

## 9. 📞 KONTAK & DUKUNGAN TEKNIS FRONTEND

Jika Tim IT / Backend membutuhkan klarifikasi elemen DOM, penyesuaian fungsi JavaScript, atau hooking ID elemen tambahan, seluruh struktur kode pada `index.html` telah terdokumentasi dan bersih dari dependency eksternal yang kompleks.

- **Status Build Frontend**: Ready for Backend API Hooking (`100% Valid Syntax & Clean Production Ready`).
- **Deploy Host Preview**: Connected to GitHub Repo `ifanj-work/Cinemags-Awards-Website` with auto-deploy on Vercel.
