const fs = require('fs');

const logoB64 = fs.readFileSync('logo_b64.txt', 'utf8').trim();
const trophyB64 = fs.readFileSync('trophy_b64.txt', 'utf8').trim();

const html = `<!DOCTYPE html>
<html lang="id" data-theme="dark" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cinemags Awards 2026 - Rayakan Film Indonesia</title>
  
  <!-- SEO & Social Meta Tags -->
  <meta name="description" content="Situs resmi pemungutan suara Cinemags Awards 2026. #RayakanFilmIndonesia - Suaramu menentukan pemenang!">
  <meta property="og:title" content="Cinemags Awards 2026 - Voting Resmi Perfilman Indonesia">
  <meta property="og:description" content="Vote sekarang dan jadilah bagian dari perayaan Film Indonesia di Cinemags Awards 2026. Tanpa registrasi rumit!">
  
  <!-- Fonts: Federo (Display Serif) & DM Sans (UI Body) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Federo&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">
  
  <!-- Google Material Symbols Icons -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

  <!-- Tailwind CSS v4 & DaisyUI v5 CDN -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@5/daisyui.css" rel="stylesheet" type="text/css" />

  <!-- GSAP Animation Platform -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>

  <style>
    :root {
      --font-federo: 'Federo', Georgia, serif;
      --font-dmsans: 'DM Sans', sans-serif;
      --color-canvas: #0d0d0d;
      --color-elevated: #212121;
      --color-gold: #d29e2f;
      --color-gold-dark: #7d5912;
      --color-crimson: #bf2121;
      --color-crimson-hover: #dc3737;
      --color-on-gold: #08090c;
    }

    body {
      font-family: var(--font-dmsans);
      background-color: var(--color-canvas);
      color: #ededed;
      overflow-x: hidden;
    }

    .font-federo { font-family: var(--font-federo); }

    .text-gold-gradient {
      background: linear-gradient(135deg, #7d5912 0%, #d29e2f 50%, #7d5912 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .btn-gold {
      background: linear-gradient(135deg, #7d5912 0%, #d29e2f 50%, #7d5912 100%);
      color: #08090c; /* 9.1:1 WCAG AAA Contrast */
      font-weight: 700;
      border-radius: 5px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .btn-gold-pill {
      background: linear-gradient(135deg, #7d5912 0%, #d29e2f 50%, #7d5912 100%);
      color: #08090c;
      font-weight: 700;
      border-radius: 9999px !important;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .btn-gold-pill:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(210, 158, 47, 0.45);
    }

    .btn-gold:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(210, 158, 47, 0.45);
    }

    .btn-crimson {
      background-color: #bf2121;
      color: #ffffff;
      font-weight: 700;
      border-radius: 5px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .btn-crimson:hover {
      background-color: #dc3737;
      transform: translateY(-2px);
      box-shadow: 0 4px 14px rgba(191, 33, 33, 0.45);
    }

    .glass-card {
      background: rgba(33, 33, 33, 0.85);
      backdrop-filter: blur(14px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    .glass-card-selected {
      background: rgba(210, 158, 47, 0.12);
      backdrop-filter: blur(14px);
      border: 1px solid #d29e2f;
      box-shadow: 0 0 20px rgba(210, 158, 47, 0.35);
      border-radius: 10px;
    }

    .glass-modal {
      background: rgba(24, 24, 24, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(210, 158, 47, 0.4);
      border-radius: 16px;
    }

    .wrapped-card-9-16 {
      aspect-ratio: 9 / 16;
      width: 100%;
      max-width: 320px;
      background:
        linear-gradient(rgba(5, 5, 5, 0.18), rgba(5, 5, 5, 0.28)),
        url("assets/ticket-bg.webp") center / cover no-repeat;
      border: 1px solid rgba(210, 158, 47, 0.4);
      border-radius: 16px;
    }

    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

    :focus-visible {
      outline: 2px solid #d29e2f;
      outline-offset: 3px;
    }
  </style>
</head>
<body class="relative min-h-screen pb-20">

  <!-- HEADER NAVIGATION -->
  <header class="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur-md bg-neutral-950/90">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3">
        <img src="${logoB64}" alt="Cinemags Awards Logo" class="h-10 sm:h-12 w-auto object-contain">
      </a>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-8 font-federo text-base text-amber-400">
        <a href="#about" class="hover:text-amber-200 transition-colors">Tentang Event</a>
        <a href="#how-to-vote" class="hover:text-amber-200 transition-colors">Cara Vote</a>
        <a href="#categories" class="hover:text-amber-200 transition-colors">Kategori Vote</a>
        <a href="#terms" class="hover:text-amber-200 transition-colors">Syarat & Ketentuan</a>
      </nav>

      <!-- Right Header Controls -->
      <div class="flex items-center gap-3">
        <a href="#categories" class="btn-gold px-5 py-2 text-xs sm:text-sm flex items-center gap-2">
          Vote Sekarang
        </a>

        <!-- Mobile Hamburger Button -->
        <button onclick="document.getElementById('mobile-drawer').classList.toggle('hidden')" class="md:hidden p-2 rounded-lg text-amber-400 hover:bg-white/10">
          <span class="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <div id="mobile-drawer" class="hidden md:hidden bg-neutral-950/95 border-b border-white/10 px-6 py-4 space-y-3 font-federo text-lg text-amber-400">
      <a href="#about" onclick="document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-1">Tentang Event</a>
      <a href="#how-to-vote" onclick="document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-1">Cara Vote</a>
      <a href="#categories" onclick="document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-1">Kategori Vote</a>
      <a href="#terms" onclick="document.getElementById('mobile-drawer').classList.add('hidden')" class="block py-1">Syarat & Ketentuan</a>
    </div>
  </header>

  <!-- HERO SECTION WITH GOLD FEDERO HEADING -->
  <section class="relative min-h-[85vh] flex items-center justify-center px-4 py-12 overflow-hidden">
    <canvas id="hero-cloth-canvas" class="absolute inset-0 w-full h-full pointer-events-none opacity-75"></canvas>
    
    <div class="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
          <span class="material-symbols-outlined text-sm">movie</span>
          <span>#RayakanFilmIndonesia</span>
        </div>

        <h1 class="text-5xl sm:text-7xl lg:text-8xl font-federo text-gold-gradient tracking-tight leading-none drop-shadow-[0_4px_20px_rgba(210,158,47,0.3)]">
          CINEMAGS AWARDS <br>
          <span>2026</span>
        </h1>

        <p class="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          Rayakan Film Indonesia, suaramu menentukan pemenang! Vote sekarang dan jadilah bagian dari perayaan Film Indonesia di Cinemags Awards 2026.
        </p>

        <!-- Countdown Timer to 31 October 2026 23:59 WIB -->
        <div class="pt-2">
          <div class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Voting Berakhir Dalam:</div>
          <div class="grid grid-cols-4 gap-3 max-w-md mx-auto lg:mx-0 text-center">
            <div class="p-3 glass-card rounded-xl border border-amber-500/30">
              <div id="cd-days" class="text-2xl sm:text-3xl font-federo text-amber-400">--</div>
              <div class="text-[10px] text-gray-400 uppercase font-semibold">Hari</div>
            </div>
            <div class="p-3 glass-card rounded-xl border border-amber-500/30">
              <div id="cd-hours" class="text-2xl sm:text-3xl font-federo text-amber-400">--</div>
              <div class="text-[10px] text-gray-400 uppercase font-semibold">Jam</div>
            </div>
            <div class="p-3 glass-card rounded-xl border border-amber-500/30">
              <div id="cd-mins" class="text-2xl sm:text-3xl font-federo text-amber-400">--</div>
              <div class="text-[10px] text-gray-400 uppercase font-semibold">Menit</div>
            </div>
            <div class="p-3 glass-card rounded-xl border border-amber-500/30">
              <div id="cd-secs" class="text-2xl sm:text-3xl font-federo text-amber-400">--</div>
              <div class="text-[10px] text-gray-400 uppercase font-semibold">Detik</div>
            </div>
          </div>
        </div>

        <div class="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <a href="#categories" class="btn-gold px-8 py-3.5 text-sm sm:text-base flex items-center gap-2">
            Mulai Pilih Nominee
          </a>
          <a href="#about" class="px-6 py-3.5 text-sm sm:text-base font-semibold border border-white/20 hover:border-amber-400 text-gray-300 hover:text-white rounded transition-all flex items-center gap-2">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>

      <!-- Right Column: Stationary Trophy Asset -->
      <div class="lg:col-span-5 flex justify-center relative">
        <div class="relative w-64 sm:w-80 lg:w-96">
          <img id="hero-trophy" src="${trophyB64}" alt="Cinemags Awards Trophy" class="w-full h-auto object-contain filter drop-shadow-[0_20px_30px_rgba(210,158,47,0.4)]">
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION WITH CRISP LOGO -->
  <section id="about" class="py-16 px-4 bg-neutral-950/60 border-t border-b border-white/10">
    <div class="max-w-7xl mx-auto space-y-8">
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <img src="${logoB64}" alt="Cinemags Awards Logo" class="h-10 sm:h-12 w-auto mx-auto object-contain">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-federo text-gold-gradient">Tentang Cinemags Awards</h2>
        <p class="text-sm text-gray-300 leading-relaxed">
          Cinemags Awards adalah ajang penghargaan yang diselenggarakan oleh Cinemags sebagai bentuk apresiasi terhadap karya dan insan di dunia perfilman Indonesia dengan mengusung tema <strong class="text-amber-400 font-bold">#RayakanFilmIndonesia</strong>. Tujuannya untuk mengajak Cinemates agar turut serta berpartisipasi dalam memilih aktor, aktris, sutradara hingga film terfavorit melalui sistem voting publik.
        </p>
        <p class="text-xs text-gray-400 leading-relaxed">
          Nominasi yang masuk dalam kategori Cinemags Awards tahun ini merupakan bagian dari film-film Indonesia yang resmi rilis dan sudah tayang pada periode <strong>Juli 2025 hingga Juni 2026</strong>.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass-card p-6 space-y-3 border-t-2 border-t-amber-400">
          <div class="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <span class="material-symbols-outlined">groups</span>
          </div>
          <h3 class="text-lg font-bold text-white">Voting Publik Murni</h3>
          <p class="text-xs text-gray-400 leading-relaxed">Pemenang kategori favorit ditentukan 100% oleh suara penonton film Indonesia secara adil.</p>
        </div>

        <div class="glass-card p-6 space-y-3 border-t-2 border-t-red-400">
          <div class="w-10 h-10 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center">
            <span class="material-symbols-outlined">bolt</span>
          </div>
          <h3 class="text-lg font-bold text-white">Tanpa Registrasi Rumit</h3>
          <p class="text-xs text-gray-400 leading-relaxed">Cukup masukkan Email saat pengiriman vote akhir. Tanpa password atau konfirmasi SMS.</p>
        </div>

        <div class="glass-card p-6 space-y-3 border-t-2 border-t-amber-400">
          <div class="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <span class="material-symbols-outlined">share</span>
          </div>
          <h3 class="text-lg font-bold text-white">Bagikan Vote Pilihanmu</h3>
          <p class="text-xs text-gray-400 leading-relaxed">Dapatkan Voter Pass digital dan bagikan nominasi pilihamu ke Social Media!</p>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW TO VOTE SECTION -->
  <section id="how-to-vote" class="py-16 px-4">
    <div class="max-w-7xl mx-auto space-y-10">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-federo text-gold-gradient">Cara Voting</h2>
        <p class="text-xs sm:text-sm text-gray-400">Ikuti langkah sederhana berikut untuk mendukung karya dan aktor favoritmu.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="glass-card p-5 space-y-3 relative">
          <span class="absolute top-4 right-4 text-3xl font-federo font-bold text-amber-500/20">01</span>
          <span class="material-symbols-outlined text-amber-400 text-2xl">photo_camera</span>
          <h4 class="text-base font-bold text-white">1. Follow Instagram</h4>
          <p class="text-xs text-gray-400">Wajib follow Instagram resmi Cinemags <strong>@cinemagsnews</strong>.</p>
        </div>

        <div class="glass-card p-5 space-y-3 relative">
          <span class="absolute top-4 right-4 text-3xl font-federo font-bold text-amber-500/20">02</span>
          <span class="material-symbols-outlined text-amber-400 text-2xl">category</span>
          <h4 class="text-base font-bold text-white">2. Pilih Kategori & Nominee</h4>
          <p class="text-xs text-gray-400">Vote pilihanmu pada 10 kategori favorit yang tersedia di website cinemags.org.</p>
        </div>

        <div class="glass-card p-5 space-y-3 relative">
          <span class="absolute top-4 right-4 text-3xl font-federo font-bold text-amber-500/20">03</span>
          <span class="material-symbols-outlined text-amber-400 text-2xl">mail</span>
          <h4 class="text-base font-bold text-white">3. Masukkan Email</h4>
          <p class="text-xs text-gray-400">Masukkan email aktif kamu sebelum menekan tombol <strong>'Kirim Vote'</strong>.</p>
        </div>

        <div class="glass-card p-5 space-y-3 relative">
          <span class="absolute top-4 right-4 text-3xl font-federo font-bold text-amber-500/20">04</span>
          <span class="material-symbols-outlined text-amber-400 text-2xl">share</span>
          <h4 class="text-base font-bold text-white">4. Bagikan Tiket</h4>
          <p class="text-xs text-gray-400">Unduh Digital Voter Pass 9:16 dan bagikan ke Instagram Story & WhatsApp!</p>
        </div>
      </div>
    </div>
  </section>

  <!-- VOTING CATEGORY WIZARD -->
  <section id="categories" class="py-16 px-4 bg-neutral-950/80 border-t border-white/10">
    <div class="max-w-7xl mx-auto space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-white font-federo text-gold-gradient">Kategori & Nominee</h2>
        <p class="text-xs sm:text-sm text-gray-400">Pilih 1 nominee dari setiap kategori. Total 10 kategori penghargaan.</p>
      </div>

      <!-- Category Pill Scrollable Tabs -->
      <div class="relative flex items-center">
        <button id="cat-scroll-left" onclick="navigateCategory(-1)" class="btn btn-circle btn-xs bg-neutral-900 border-white/20 text-white hover:bg-amber-400 hover:text-[#08090c] z-10 mr-2 shrink-0 cursor-pointer transition-colors" title="Kategori Sebelumnya">
          <span class="material-symbols-outlined text-sm font-bold">chevron_left</span>
        </button>

        <div id="category-pills-container" class="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-1 w-full scroll-smooth">
          <!-- Dynamically populated category pills -->
        </div>

        <button id="cat-scroll-right" onclick="navigateCategory(1)" class="btn btn-circle btn-xs bg-neutral-900 border-white/20 text-white hover:bg-amber-400 hover:text-[#08090c] z-10 ml-2 shrink-0 cursor-pointer transition-colors" title="Kategori Selanjutnya">
          <span class="material-symbols-outlined text-sm font-bold">chevron_right</span>
        </button>
      </div>

      <!-- Category Title & Nominee Grid -->
      <div class="space-y-6">
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <h3 id="current-category-title" class="text-xl sm:text-2xl font-bold text-amber-400 font-federo">Kategori</h3>
          <span id="current-category-status" class="text-xs text-gray-400">Belum Ada Pilihan</span>
        </div>

        <div id="nominees-grid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          <!-- Nominee Cards dynamically rendered -->
        </div>
      </div>
    </div>
  </section>

  <!-- TERMS & CONDITIONS ACCORDION -->
  <section id="terms" class="py-16 px-4 max-w-4xl mx-auto space-y-6">
    <div class="text-center space-y-2">
      <h2 class="text-3xl font-bold text-white font-federo text-gold-gradient">Syarat & Ketentuan</h2>
      <p class="text-xs text-gray-400">Informasi penting mengenai periode voting dan distribusi piala pemenang.</p>
    </div>

    <div class="space-y-3 text-xs text-gray-300">
      <div tabindex="0" class="collapse collapse-arrow glass-card">
        <div class="collapse-title font-bold text-white text-sm">Periode Voting</div>
        <div class="collapse-content text-gray-400 space-y-1">
          <p>Voting dibuka mulai tanggal <strong>31 Agustus 2026</strong> hingga <strong>31 Oktober 2026 (pukul 23.59 WIB)</strong>.</p>
          <p>Suara yang masuk setelah tenggat waktu tidak akan terhitung dalam rekapitulasi akhir.</p>
        </div>
      </div>

      <div tabindex="0" class="collapse collapse-arrow glass-card">
        <div class="collapse-title font-bold text-white text-sm">Pengumuman & Distribusi Piala Pemenang</div>
        <div class="collapse-content text-gray-400 space-y-1">
          <p>Pengumuman pemenang akan dilaksanakan pada tanggal <strong>2 - 20 November 2026</strong> melalui kanal resmi Cinemags.</p>
          <p>Piala penghargaan akan didistribusikan di hari berikutnya setelah pengumuman semua pemenang telah selesai.</p>
        </div>
      </div>

      <div tabindex="0" class="collapse collapse-arrow glass-card">
        <div class="collapse-title font-bold text-white text-sm">Ketentuan Pemilih</div>
        <div class="collapse-content text-gray-400 space-y-1">
          <p>- Wajib follow Instagram resmi Cinemags @cinemagsnews.</p>
          <p>- Setiap email yang didaftarkan hanya dapat mengirimkan 1 kali kombinasi suara terverifikasi.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- OFFICIAL FOOTER SECTION -->
  <footer class="bg-neutral-950 border-t border-white/10 py-12 px-4 mt-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-gray-400">
      <div class="space-y-3 md:col-span-2">
        <img src="${logoB64}" alt="Cinemags Awards Logo" class="h-10 sm:h-12 w-auto object-contain">
        <p class="text-sm font-federo text-amber-400">#RayakanFilmIndonesia</p>
        <p class="max-w-sm text-gray-400 leading-relaxed">
          Ajang penghargaan perfilman terfavorit pilihan publik Indonesia. Tonton terus film Indonesia dan berikan apresiasimu!
        </p>
      </div>

      <div class="space-y-2">
        <h4 class="font-bold text-white text-sm font-federo text-amber-400">Navigasi</h4>
        <ul class="space-y-1.5">
          <li><a href="#about" class="hover:text-amber-300 transition-colors">Tentang Event</a></li>
          <li><a href="#how-to-vote" class="hover:text-amber-300 transition-colors">Cara Vote</a></li>
          <li><a href="#categories" class="hover:text-amber-300 transition-colors">Kategori & Nominee</a></li>
          <li><a href="#terms" class="hover:text-amber-300 transition-colors">Syarat & Ketentuan</a></li>
        </ul>
      </div>

      <div class="space-y-3">
        <h4 class="font-bold text-white text-sm font-federo text-amber-400">Ikuti Cinemags</h4>
        <div class="flex items-center gap-3">
          <a href="https://instagram.com/cinemagsnews" target="_blank" class="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-400 hover:border-amber-400 transition-colors">
            <span class="material-symbols-outlined text-sm">photo_camera</span>
          </a>
          <a href="https://www.tiktok.com/@cinemags" target="_blank" class="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-400 hover:border-amber-400 transition-colors">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.33 22a6.34 6.34 0 0 0 6.34-6.34V9.38a8.16 8.16 0 0 0 4.77 1.52V7.45a4.85 4.85 0 0 1-.85-.76z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/@cinemags1011media" target="_blank" class="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-400 hover:border-amber-400 transition-colors">
            <span class="material-symbols-outlined text-sm">smart_display</span>
          </a>
          <a href="https://cinemags.org/" target="_blank" class="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-400 hover:border-amber-400 transition-colors">
            <svg class="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              <path d="M2 12h20"/>
            </svg>
          </a>
        </div>
        <p class="text-[11px] text-gray-500 pt-2">© 2026 Cinemags Awards. Hak Cipta Dilindungi.</p>
      </div>
    </div>
  </footer>

  <!-- STICKY BOTTOM VOTE SUMMARY BAR (SLIDES UP ON VOTE WITH PROGRESS BAR) -->
  <div id="sticky-vote-bar" class="fixed bottom-0 left-0 right-0 z-30 bg-neutral-950/95 border-t border-amber-500/40 backdrop-blur-lg pt-0 pb-3 px-4 shadow-2xl transition-all duration-500 transform translate-y-full opacity-0 pointer-events-none">
    <!-- Top Progress Bar Track -->
    <div class="w-full bg-neutral-900 h-1.5 overflow-hidden -mx-4 mb-3 w-[calc(100%+2rem)]">
      <div id="vote-progress-bar" class="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 h-full transition-all duration-500 ease-out" style="width: 0%;"></div>
    </div>

    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400 font-bold text-sm font-federo" id="vote-count-badge">
          0/10
        </div>
        <div class="hidden sm:block text-xs">
          <div class="text-white font-bold" id="vote-summary-text">0 dari 10 Kategori Dipilih</div>
          <div class="text-gray-400 text-[11px]">Lengkapi suara kamu sebelum mengirim</div>
        </div>
      </div>

      <button id="btn-submit-votes" onclick="openReviewModal()" class="btn-crimson px-6 py-2.5 text-xs sm:text-sm flex items-center gap-2 opacity-50 cursor-not-allowed" disabled>
        Kirim Vote
      </button>
    </div>
  </div>

  <!-- MODAL 1: NOMINEE DETAIL MODAL (BIGGER TOP HERO POSTER) -->
  <dialog id="modal-nominee-detail" class="modal modal-bottom sm:modal-middle" onclick="if(event.target===this) this.close()">
    <div class="modal-box glass-modal max-w-lg p-5 sm:p-6 space-y-4 relative overflow-hidden">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 z-10 text-white bg-black/60 hover:bg-black/80">✕</button>
      </form>

      <!-- Top Hero Image Container -->
      <div class="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-xl bg-neutral-900 border border-white/10 shadow-2xl">
        <img id="detail-poster" src="" alt="" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
        <span id="detail-category-badge" class="absolute top-3 left-3 badge badge-warning text-[10px] font-bold shadow-md">Kategori</span>
      </div>

      <div class="space-y-1 text-left">
        <h3 id="detail-name" class="text-xl sm:text-2xl font-bold text-white leading-tight font-federo">Nama Nominee</h3>
        <p id="detail-film" class="text-xs sm:text-sm text-amber-400 font-semibold">Nama Film</p>
        <p id="detail-studio" class="text-[11px] text-gray-400">Production House</p>
      </div>

      <div class="space-y-1.5 text-left pt-2 border-t border-white/10 text-xs">
        <div class="font-bold text-gray-300">Deskripsi / Ringkasan:</div>
        <p id="detail-synopsis" class="text-gray-400 leading-relaxed max-h-32 overflow-y-auto no-scrollbar">Synopsis</p>
      </div>

      <div class="pt-2 flex items-center justify-between">
        <span id="detail-genre" class="text-[11px] text-gray-400 bg-neutral-900 px-2.5 py-1 rounded border border-white/10">Genre</span>
        <button id="detail-vote-btn" onclick="toggleVoteFromModal()" class="btn-gold px-5 py-2 text-xs flex items-center gap-1">
          Vote Nominee Ini
        </button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>

  <!-- MODAL 2: REVIEW VOTES DRAWER (FULLSCREEN MOBILE WITH POSTERS) -->
  <dialog id="modal-review" class="modal modal-bottom sm:modal-middle p-0 sm:p-4">
    <div class="modal-box glass-modal w-full max-w-lg min-h-screen sm:min-h-0 sm:max-h-[90vh] rounded-none sm:rounded-2xl p-4 sm:p-6 space-y-4 flex flex-col justify-between overflow-y-auto">
      <div class="flex items-center justify-between border-b border-white/10 pb-3 shrink-0">
        <h3 class="text-lg font-bold text-white flex items-center gap-2">
          <span class="material-symbols-outlined text-amber-400">fact_check</span>
          Tinjau Pilihan Suara
        </h3>
        <button onclick="document.getElementById('modal-review').close()" class="text-gray-400 hover:text-white">✕</button>
      </div>

      <div id="review-votes-list" class="space-y-2.5 flex-1 overflow-y-auto no-scrollbar pr-1 text-xs my-2">
        <!-- Rendered selected categories with poster/actor images -->
      </div>

      <!-- Guest Email Form -->
      <form id="vote-form" onsubmit="handleVoteSubmit(event)" class="space-y-3 pt-3 border-t border-white/10 text-xs shrink-0">
        <div class="space-y-1 text-left">
          <label for="voter-name" class="font-bold text-gray-300">Nama Pemilih (Opsional untuk Pass Tiket):</label>
          <input type="text" id="voter-name" placeholder="Contoh: Budi Santoso" class="w-full bg-neutral-900 border border-white/20 rounded px-3 py-2 text-white focus:border-amber-400">
        </div>

        <div class="space-y-1 text-left">
          <label for="voter-email" class="font-bold text-gray-300">Email Pemilih (Wajib):</label>
          <input type="email" id="voter-email" required placeholder="nama@email.com" class="w-full bg-neutral-900 border border-white/20 rounded px-3 py-2 text-white focus:border-amber-400">
        </div>

        <div class="flex items-start gap-2 pt-1 text-left">
          <input type="checkbox" id="terms-check" required class="mt-0.5 checkbox checkbox-xs checkbox-warning">
          <label for="terms-check" class="text-[11px] text-gray-400">Saya menyetujui syarat & ketentuan voting Cinemags Awards 2026 dan sudah follow @cinemagsnews.</label>
        </div>

        <p id="review-completeness-status" class="text-left text-[11px] leading-snug text-amber-300" role="status" aria-live="polite"></p>

        <div class="pt-2 flex items-center justify-between gap-3">
          <button type="button" onclick="document.getElementById('modal-review').close()" class="btn btn-sm border-white/20 text-gray-300">Kembali</button>
          <button id="review-submit-votes" type="submit" class="btn-crimson px-6 py-2 text-xs flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Kirim Suara Sekarang
          </button>
        </div>
      </form>
    </div>
  </dialog>

  <!-- MODAL 3: SPOTIFY-WRAPPED STYLE 9:16 DIGITAL VOTER PASS RECEIPT -->
  <dialog id="modal-success" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box glass-modal w-full max-h-screen sm:max-w-md sm:max-h-[85vh] mx-auto p-4 sm:p-6 text-center space-y-4 overflow-y-auto">
      <div class="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
        <span class="material-symbols-outlined text-2xl">verified</span>
      </div>

      <div class="space-y-1">
        <h3 class="text-xl font-bold text-white">Suara Berhasil Terkirim!</h3>
        <p class="text-xs text-gray-400">Terima kasih atas partisipasimu mendukung film Indonesia.</p>
      </div>

      <!-- 9:16 Wrapped Style Pass Container -->
      <div id="wrapped-ticket" class="wrapped-card-9-16 mx-auto px-[24px] py-3.5 flex flex-col justify-between text-center relative overflow-hidden shadow-2xl">
        <div class="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl"></div>
        
        <div class="flex items-center justify-between text-[10px] text-amber-400 font-bold border-b border-white/10 pb-1.5 shrink-0">
          <span>CINEMAGS AWARDS 2026</span>
          <span class="text-gray-400" id="ticket-id">PASS-8921</span>
        </div>

        <div class="space-y-0.5 py-1 shrink-0">
          <div class="text-[9px] text-gray-400 uppercase tracking-widest font-semibold">DIGITAL VOTER PASS</div>
          <div class="text-base font-bold text-white font-federo text-gold-gradient">MY TOP VOTES</div>
          <div class="text-[10px] text-amber-300 font-bold" id="ticket-name">Nama Pemilih</div>
        </div>

        <!-- All 10 Chosen Films and Actors Preview Grid -->
        <div id="ticket-picks-grid" class="grid grid-cols-2 gap-1.5 text-left bg-neutral-900/90 p-2 rounded-lg border border-white/10 text-[9px] max-h-52 overflow-y-auto no-scrollbar my-1">
          <!-- Rendered dynamically -->
        </div>

        <div class="shrink-0 flex flex-col items-center gap-0.5 leading-tight">
          <div class="text-[9px] text-amber-400 font-bold tracking-wide">#RayakanFilmIndonesia</div>
          <div class="text-[8px] text-white font-medium tracking-wide">awards-2026.cinemags.org</div>
        </div>

        <!-- Social Action Buttons -->
        <div class="pt-1.5 border-t border-white/10 flex items-center justify-center gap-3 shrink-0">
          <button id="download-ticket-button" type="button" onclick="downloadPassImage()" title="Simpan Gambar / Download" class="w-8 h-8 rounded-full bg-amber-500 text-[#08090c] flex items-center justify-center hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-sm font-bold">download</span>
          </button>
          <button onclick="shareInstagram()" title="Instagram Story" class="w-8 h-8 rounded-full bg-pink-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-sm">photo_camera</span>
          </button>
          <button onclick="shareWhatsApp()" title="WhatsApp" class="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-sm">chat</span>
          </button>
          <button onclick="shareTwitter()" title="Twitter/X" class="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center hover:scale-110 transition-transform">
            <span class="material-symbols-outlined text-sm">share</span>
          </button>
        </div>
      </div>

      <div class="pt-2">
        <button onclick="document.getElementById('modal-success').close()" class="btn btn-sm btn-wide border-white/20 text-gray-300">Selesai</button>
      </div>
    </div>
  </dialog>

  <!-- JAVASCRIPT DATA & LOGIC -->
  <script>
    // 10 CATEGORIES DATA
    const categoriesData = [
      { id: "cat-1", title: "Film Terfavorit" },
      { id: "cat-2", title: "Film Horror Terfavorit" },
      { id: "cat-3", title: "Pemeran Utama Pria Terfavorit" },
      { id: "cat-4", title: "Pemeran Utama Wanita Terfavorit" },
      { id: "cat-5", title: "Pemeran Pendukung Pria Terfavorit" },
      { id: "cat-6", title: "Pemeran Pendukung Wanita Terfavorit" },
      { id: "cat-7", title: "Pemeran Pendatang Baru Terfavorit" },
      { id: "cat-8", title: "Serial Streaming Indonesia Terbaik" },
      { id: "cat-9", title: "Sutradara Terfavorit" },
      { id: "cat-10", title: "Pemeran Anak Terfavorit" }
    ];

    // 84 NOMINEES DATA (100% MATCHED TO WEBP/JPG ASSETS ON DISK)
    const nomineesData = [
      // Kategori 1: Film Terfavorit (12 Nominees)
      { id: "nom-101", catId: "cat-1", name: "Sore: Istri Dari Masa Depan", film: "Sore: Istri Dari Masa Depan", poster: "assets/poster_sore.webp", studio: "Cerita Films", synopsis: "Mengisahkan Jonathan, seorang fotografer yang hidup mandiri namun tidak teratur di Kroasia, yang kehidupannya mendadak berubah saat didatangi Sore, wanita yang mengaku sebagai istrinya dari masa depan dan bertekad mengubah pola hidupnya sebelum terlambat.", genre: "Romance / Fantasy", director: "Yandy Laurens" },
      { id: "nom-102", catId: "cat-1", name: "Agak Laen: Menyala Pantiku", film: "Agak Laen: Menyala Pantiku", poster: "assets/poster_agak_laen.webp", studio: "Imajinari", synopsis: "Melanjutkan petualangan empat sekawan yang kini mengelola panti asuhan, menghadapi serangkaian masalah tidak terduga dan kekacauan komedi situasi saat tempat tinggal mereka terancam ditutup.", genre: "Komedi", director: "Muhadkly Acho" },
      { id: "nom-103", catId: "cat-1", name: "Nobody Loves Kay", film: "Nobody Loves Kay", poster: "assets/poster_nobody_loves_kay.webp", studio: "Qun Films", synopsis: "Mengisahkan perjalanan emosional Kay dalam menghadapi kekecewaan asmara, mengarungi proses penerimaan diri, dan menemukan kembali pemaknaan atas rasa percaya diri serta cinta sejati.", genre: "Drama", director: "Dionne" },
      { id: "nom-104", catId: "cat-1", name: "Pangku", film: "Pangku", poster: "assets/poster_pangku.webp", studio: "Gambar Gerak", synopsis: "Mengisahkan Sartika, seorang perempuan muda yang berjuang sebagai ibu tunggal di jalur Pantura dan terikat dalam lingkungan warung kopi memangku demi menjamin kehidupan serta masa depan anaknya.", genre: "Drama", director: "Reza Rahadian" },
      { id: "nom-105", catId: "cat-1", name: "Tinggal Meninggal", film: "Tinggal Meninggal", poster: "assets/poster_tinggal_meninggal.webp", studio: "Imajinari", synopsis: "Mengisahkan Gema, seorang pemuda canggung yang terobsesi dengan perhatian masa duka hingga nekat merangkai kebohongan kematian anggota keluarganya, memicu masalah absurd dalam komedi hitam.", genre: "Black Comedy", director: "Kristo Immanuel" },
      { id: "nom-106", catId: "cat-1", name: "Suka Duka Tawa", film: "Suka Duka Tawa", poster: "assets/poster_suka_duka_tawa.webp", studio: "BION Studios", synopsis: "Mengisahkan perjalanan seorang komika muda dalam mengolah komedi tunggal di atas panggung, menyeimbangkan pahit manis pengalaman pribadi dengan materi hiburan bagi penonton.", genre: "Drama / Romance", director: "Adrian" },
      { id: "nom-107", catId: "cat-1", name: "Tunggu Aku Sukses Nanti", film: "Tunggu Aku Sukses Nanti", poster: "assets/poster_tunggu_aku_sukses_nanti.webp", studio: "Rapi Films", synopsis: "Mengisahkan perjuangan tiga sahabat yang merantau ke Jakarta untuk mencari pekerjaan dan membuktikan keberhasilan karier kepada keluarga serta lingkungan asal mereka.", genre: "Drama Komedi", director: "Naya Anindita" },
      { id: "nom-108", catId: "cat-1", name: "Na Willa", film: "Na Willa", poster: "assets/poster_na_willa.webp", studio: "Visinema Studios", synopsis: "Mengisahkan kehidupan Na Willa, seorang anak perempuan berusia enam tahun di Surabaya tahun 1960-an, yang mengeksplorasi lingkungan sekitarnya dan memandang dinamika keluarga dengan kepolosan anak-anak.", genre: "Animasi / Keluarga", director: "Ryan Adriyandy" },
      { id: "nom-109", catId: "cat-1", name: "Para Perasuk", film: "Para Perasuk", poster: "assets/poster_para_perasuk.webp", studio: "Rekata Studio", synopsis: "Mengisahkan Bayu di Desa Latas yang berambisi menjadi perasuk utama dalam pesta adat kerasukan lokal demi mengumpulkan dana untuk menyelamatkan mata air keramat desanya dari penggusuran korporasi.", genre: "Misteri / Thriller", director: "Wregas" },
      { id: "nom-110", catId: "cat-1", name: "Surat Untuk Masa Mudaku", film: "Surat Untuk Masa Mudaku", poster: "assets/poster_surat_untuk_masa_mudaku.webp", studio: "Buddy Buddy Pictures", synopsis: "Mengisahkan seorang pria yang terhubung kembali dengan masa lalunya melalui kepingan surat masa muda, memicu refleksi atas keputusan hidup dan perjalanan waktunya.", genre: "Drama", director: "Teddy" },
      { id: "nom-111", catId: "cat-1", name: "Semua Akan Baik-Baik Saja", film: "Semua Akan Baik-Baik Saja", poster: "assets/poster_semua_akan_baik_baik_saja.webp", studio: "Tiger Wong Entertainment", synopsis: "Mengisahkan ketahanan sebuah keluarga yang saling memberikan dukungan moral dan emosional saat menghadapi krisis ekonomi serta ujian kehidupan sehari-hari.", genre: "Drama Keluarga", director: "Baim Wong" },
      { id: "nom-112", catId: "cat-1", name: "Children of Heaven", film: "Children of Heaven", poster: "assets/poster_children_of_heaven.webp", studio: "MD Pictures", synopsis: "Mengisahkan dua bersaudara dari keluarga kurang mampu yang terpaksa saling bergantian memakai satu pasang sepatu demi dapat terus menghadiri kegiatan sekolah.", genre: "Drama / Keluarga", director: "Hanung" },

      // Kategori 2: Film Horror Terfavorit (8 Nominees)
      { id: "nom-201", catId: "cat-2", name: "Ghost in The Cell", film: "Ghost in The Cell", poster: "assets/poster_ghost_in_the_cell.webp", studio: "Come and See Pictures", synopsis: "Mengisahkan penjara Labuhan Angsana yang dilanda rentetan kematian misterius akibat teror entitas gaib, memaksa para tahanan menyisihkan perselisihan untuk bertahan hidup.", genre: "Horor", director: "Joko Anwar" },
      { id: "nom-202", catId: "cat-2", name: "Danur: The Last Chapter", film: "Danur: The Last Chapter", poster: "assets/poster_danur_4.webp", studio: "MD Pictures", synopsis: "Mengisahkan perjuangan akhir Risa Saraswati bersama sahabat-sahabat gaibnya dalam berhadapan dengan ancaman roh jahat terkuat yang menguji ikatan dua dunia.", genre: "Horor", director: "Awi Suryadi" },
      { id: "nom-203", catId: "cat-2", name: "Kang Solah from Kang Mak x Nenek Gayung", film: "Kang Solah", poster: "assets/poster_kang_solah.webp", studio: "Falcon Pictures", synopsis: "Mengisahkan peristiwa mistis yang dialami Kang Solah ketika urusan pribadinya bersinggungan dengan mitos lokal dan kemunculan sosok gaib Nenek Gayung.", genre: "Komedi Horor", director: "Herwin" },
      { id: "nom-204", catId: "cat-2", name: "Suzzanna: Santet Dosa di Atas Dosa", film: "Suzzanna: Santet Dosa", poster: "assets/poster_suzzanna_santet.webp", studio: "Soraya Intercine Films", synopsis: "Mengisahkan pembalasan atas perlakuan tidak adil masa lalu melalui praktik ilmu santet dan pertarungan kekuatan gaib yang membahayakan jiwa.", genre: "Horor", director: "Rocky Soraya" },
      { id: "nom-205", catId: "cat-2", name: "Monster Pabrik Rambut", film: "Monster Pabrik Rambut", poster: "assets/poster_monster_pabrik_rambut.webp", studio: "Palari Films", synopsis: "Mengisahkan rentetan fenomena tidak biasa dan gangguan makhluk gaib yang dialami para pekerja perempuan di dalam pabrik pengolahan bahan rambut.", genre: "Horor Supranatural", director: "Edwin" },
      { id: "nom-206", catId: "cat-2", name: "Badut Gendong", film: "Badut Gendong", poster: "assets/poster_badut_gendong.webp", studio: "Magma Entertainment", synopsis: "Mengisahkan akibat mistis dari penggunaan ritual badut gendong tradisional yang menuntut konsekuensi dan tebusan nyawa bagi para pemohonnya.", genre: "Horor", director: "Rizal" },
      { id: "nom-207", catId: "cat-2", name: "Kafir: Gerbang Sukma", film: "Kafir: Gerbang Sukma", poster: "assets/poster_kafir_gerbang_sukma.webp", studio: "Starvision", synopsis: "Mengisahkan terbukanya kembali pintu ilmu gaib purba yang mengancam keselamatan satu keluarga dan mengungkap rahasia persekutuan masa lalu.", genre: "Horor", director: "Azhar" },
      { id: "nom-208", catId: "cat-2", name: "Legenda Kelam Malin Kundang", film: "Legenda Kelam Malin Kundang", poster: "assets/poster_malin_kundang.webp", studio: "Come and See Pictures", synopsis: "Mengisahkan penafsiran horor atas cerita Malin Kundang, di mana pertikaian anak dan ibu berlanjut menjadi teror gaib di wilayah pesisir.", genre: "Horor Folklor", director: "Joko Anwar" },

      // Kategori 3: Pemeran Utama Pria Terfavorit (8 Nominees)
      { id: "nom-301", catId: "cat-3", name: "Nicholas Saputra", film: "Tukar Takdir", poster: "assets/actor_nicholas_saputra.webp", studio: "Starvision", synopsis: "Memerankan karakter Rawa, seorang penyintas kecelakaan penerbangan yang harus mengarungi beban trauma psikologis dan perselisihan emosional dengan keluarga korban.", genre: "Drama", director: "Mouly" },
      { id: "nom-302", catId: "cat-3", name: "Ariel NOAH", film: "Dilan ITB 1997", poster: "assets/actor_ariel_noah.webp", studio: "Falcon Pictures", synopsis: "Memerankan karakter Dilan, mahasiswa teknik ITB angkatan 1997 yang mengarungi dinamika organisasi pergerakan mahasiswa dan perjalanan asmaranya.", genre: "Romance", director: "Fajar" },
      { id: "nom-303", catId: "cat-3", name: "Fedi Nuril", film: "Pangku", poster: "assets/actor_fedi_nuril.webp", studio: "Gambar Gerak", synopsis: "Memerankan karakter Hadi, seorang pria yang menjalin hubungan dengan Sartika untuk memberikan dukungan dan stabilitas kehidupan keluarga.", genre: "Drama", director: "Reza Rahadian" },
      { id: "nom-304", catId: "cat-3", name: "Omara Esteghlal", film: "Tinggal Meninggal", poster: "assets/actor_omara_esteghlal.webp", studio: "Imajinari", synopsis: "Memerankan karakter Gema, seorang pemuda yang terjebak dalam pusaran kebohongan kematian anggota keluarga demi mendapatkan perhatian dari lingkungan sekitarnya.", genre: "Black Comedy", director: "Kristo Immanuel" },
      { id: "nom-305", catId: "cat-3", name: "Ardit Erwanda", film: "Tunggu Aku Sukses Nanti", poster: "assets/actor_ardit_erwanda.webp", studio: "Rapi Films", synopsis: "Memerankan karakter Aris, seorang perantau yang bekerja keras mencari peluang kerja di Jakarta demi membuktikan kemampuan dirinya.", genre: "Komedi", director: "Naya Anindita" },
      { id: "nom-306", catId: "cat-3", name: "Dion Wiyoko", film: "Sore: Istri Dari Masa Depan", poster: "assets/actor_dion_wiyoko.webp", studio: "Cerita Films", synopsis: "Memerankan karakter Jonathan, fotografer di Kroasia yang hidup menyendiri dan berangsur mengubah pola hidupnya setelah kehadiran Sore.", genre: "Romance", director: "Yandy Laurens" },
      { id: "nom-307", catId: "cat-3", name: "Rigen", film: "Kang Solah", poster: "assets/actor_rigen.webp", studio: "Falcon Pictures", synopsis: "Memerankan karakter Kang Solah, seorang pria yang terseret dalam serangkaian kejadian mistis dan rumor kemunculan Nenek Gayung di desanya.", genre: "Komedi Horor", director: "Herwin" },
      { id: "nom-308", catId: "cat-3", name: "Rio Dewanto", film: "Legenda Kelam Malin Kundang", poster: "assets/actor_rio_dewanto.webp", studio: "Come and See Pictures", synopsis: "Memerankan karakter Malin, seorang pria modern yang berhadapan dengan konsekuensi keputusan masa lalu dan ancaman kutukan keluarga.", genre: "Horor", director: "Joko Anwar" },

      // Kategori 4: Pemeran Utama Wanita Terfavorit (8 Nominees)
      { id: "nom-401", catId: "cat-4", name: "Sheila Dara", film: "Sore: Istri Dari Masa Depan", poster: "assets/actor_sheila_dara.webp", studio: "Cerita Films", synopsis: "Memerankan karakter Sore, wanita yang melakukan perjalanan waktu dari masa depan untuk mendampingi dan mengubah kebiasaan hidup Jonathan.", genre: "Romance", director: "Yandy Laurens" },
      { id: "nom-402", catId: "cat-4", name: "Prilly Latuconsina", film: "Danur: The Last Chapter", poster: "assets/actor_prilly_latuconsina.webp", studio: "MD Pictures", synopsis: "Memerankan karakter Risa Saraswati, wanita indigo yang berjuang menyelesaikan teror spiritual akhir dan menjaga keselamatan sahabat-sahabat gaibnya.", genre: "Horor", director: "Awi" },
      { id: "nom-403", catId: "cat-4", name: "Claresta Taufan", film: "Pangku", poster: "assets/actor_claresta_taufan.webp", studio: "Gambar Gerak", synopsis: "Memerankan karakter Sartika, seorang ibu tunggal di jalur Pantura yang berjuang memenuhi kebutuhan hidup dan masa depan anaknya, Bayu.", genre: "Drama", director: "Reza Rahadian" },
      { id: "nom-404", catId: "cat-4", name: "Rachel Amanda", film: "Suka Duka Tawa", poster: "assets/actor_rachel_amanda.webp", studio: "BION Studios", synopsis: "Memerankan karakter Amanda, seorang komika muda yang mengolah pengalaman dan dinamika kehidupan pribadinya menjadi materi penulisan komedi.", genre: "Drama", director: "Adrian" },
      { id: "nom-405", catId: "cat-4", name: "Luna Maya", film: "Suzzanna: Santet Dosa", poster: "assets/actor_luna_maya.webp", studio: "Soraya Intercine Films", synopsis: "Memerankan karakter Suzzanna, seorang wanita yang menuntut pembalasan atas perlakuan masa lalu menggunakan perantara ilmu hitam.", genre: "Horor", director: "Rocky" },
      { id: "nom-406", catId: "cat-4", name: "Shenina Cinnamon", film: "Dopamin", poster: "assets/actor_shenina_cinnamon.webp", studio: "Palari Films", synopsis: "Memerankan karakter Alya, wanita muda yang menghadapi kompleksitas hubungan emosional dan pencarian kebahagiaan di lingkungan perkotaan.", genre: "Drama", director: "Kamila" },
      { id: "nom-407", catId: "cat-4", name: "Marsha Timothy", film: "Tukar Takdir", poster: "assets/actor_marsha_timothy.webp", studio: "Starvision", synopsis: "Memerankan karakter Dita (Anindita Suwarso), seorang ibu yang berupaya memproses duka dan menerima takdir keluarga pasca-musibah penerbangan.", genre: "Drama", director: "Mouly" },
      { id: "nom-408", catId: "cat-4", name: "Niken Anjani", film: "Dilan ITB 1997", poster: "assets/actor_niken_anjani.webp", studio: "Falcon Pictures", synopsis: "Memerankan karakter Ancika, wanita yang menjadi bagian penting dalam perjalanan kehidupan dan hubungan asmara Dilan di era kuliah.", genre: "Romance", director: "Fajar" },

      // Kategori 5: Pemeran Pendukung Pria Terfavorit (8 Nominees)
      { id: "nom-501", catId: "cat-5", name: "Mario Caesar", film: "Tinggal Meninggal", poster: "assets/actor_mario_caesar.webp", studio: "Imajinari", synopsis: "Memerankan karakter Bayu, sepupu yang hadir mendampingi prosesi keluarga dan berinteraksi di tengah situasi duka.", genre: "Comedy", director: "Kristo" },
      { id: "nom-502", catId: "cat-5", name: "Oki Rengga", film: "Children of Heaven", poster: "assets/actor_oki_rengga.webp", studio: "MD Pictures", synopsis: "Memerankan karakter Paman Badri, tetangga yang kerap memberikan bantuan praktis dan dukungan moral kepada keluarga anak-anak.", genre: "Drama", director: "Hanung" },
      { id: "nom-503", catId: "cat-5", name: "Benidictus Siregar", film: "La Tahzan", poster: "assets/actor_benidictus_siregar.webp", studio: "Rapi Films", synopsis: "Memerankan karakter Anton, sahabat yang memberikan saran dan pandangan pribadi mengenai permasalahan rumah tangga.", genre: "Drama", director: "Hadrah" },
      { id: "nom-504", catId: "cat-5", name: "Aming", film: "Ghost in The Cell", poster: "assets/actor_aming.webp", studio: "Come and See Pictures", synopsis: "Memerankan karakter Mbah Sukro, salah satu narapidana senior yang mengetahui riwayat kejadian supranatural di dalam sel.", genre: "Horor", director: "Joko Anwar" },
      { id: "nom-505", catId: "cat-5", name: "Reza Chandika", film: "Tunggu Aku Sukses Nanti", poster: "assets/actor_reza_chandika.webp", studio: "Rapi Films", synopsis: "Memerankan karakter Bobby, rekan seperjuangan yang bersama-sama mencari pekerjaan di perantauan Jakarta.", genre: "Komedi", director: "Naya" },
      { id: "nom-506", catId: "cat-5", name: "Didik Nini Thowok", film: "Monster Pabrik Rambut", poster: "assets/actor_didik_nini_thowok.webp", studio: "Palari Films", synopsis: "Memerankan karakter Mbah Jiwo, tokoh sesepuh yang memahami kepercayaan adat dan tradisi mistis di wilayah pabrik.", genre: "Horor", director: "Edwin" },
      { id: "nom-507", catId: "cat-5", name: "Jeremie Moeremans", film: "Keluarga Suami", poster: "assets/actor_jeremie_moeremans.jpg", studio: "MD Pictures", synopsis: "Memerankan karakter Rendy, anggota keluarga ipar yang memicu dinamika pendapat dalam hubungan persaudaraan.", genre: "Drama", director: "Rizal" },
      { id: "nom-508", catId: "cat-5", name: "Junior Liem", film: "Na Willa", poster: "assets/actor_junior_liem.webp", studio: "Visinema Studios", synopsis: "Memerankan karakter Pakcik, paman yang mengasuh dan memberikan perhatian kepada Na Willa dalam keseharian.", genre: "Animasi", director: "Ryan" },

      // Kategori 6: Pemeran Pendukung Wanita Terfavorit (8 Nominees)
      { id: "nom-601", catId: "cat-6", name: "Ashel", film: "Tunggu Aku Sukses Nanti", poster: "assets/actor_ashel.webp", studio: "Rapi Films", synopsis: "Memerankan karakter Maya, kawan perantauan yang menemani dan memberikan dorongan semangat saat pencarian kerja.", genre: "Komedi", director: "Naya" },
      { id: "nom-602", catId: "cat-6", name: "Zee Asadel", film: "Danur: The Last Chapter", poster: "assets/actor_zee_asadel.webp", studio: "MD Pictures", synopsis: "Memerankan karakter Ely, wanita dengan kepekaan supranatural yang terlibat dalam penanganan gangguan gaib bersama Risa.", genre: "Horor", director: "Awi" },
      { id: "nom-603", catId: "cat-6", name: "Mawar de Jongh", film: "Tinggal Meninggal", poster: "assets/actor_mawar_eva.webp", studio: "Imajinari", synopsis: "Memerankan karakter Maya, kerabat dekat yang berupaya menjaga keharmonisan keluarga di tengah perdebatan masa duka.", genre: "Black Comedy", director: "Kristo" },
      { id: "nom-604", catId: "cat-6", name: "Irma Rihi", film: "Na Willa", poster: "assets/actor_irma_rihi.webp", studio: "Visinema Studios", synopsis: "Memerankan karakter Mak (Ibu Na Willa), wanita asal Nusa Tenggara Timur yang mengasuh dan mendidik Na Willa dengan penuh kasih sayang.", genre: "Animasi", director: "Ryan" },
      { id: "nom-605", catId: "cat-6", name: "Raline Shah", film: "Dilan ITB 1997", poster: "assets/actor_raline_shah.webp", studio: "Falcon Pictures", synopsis: "Memerankan karakter Milea, sosok dari masa lalu Dilan yang kembali berinteraksi pada masa perkuliahan di Bandung.", genre: "Romance", director: "Fajar" },
      { id: "nom-606", catId: "cat-6", name: "Shindy Huang", film: "Tinggal Meninggal", poster: "assets/actor_shindy_huang.webp", studio: "Imajinari", synopsis: "Memerankan karakter Nina, adik yang memberikan pertimbangan logis mengenai kelangsungan prosesi adat keluarga.", genre: "Comedy", director: "Kristo" },
      { id: "nom-607", catId: "cat-6", name: "Christine Hakim", film: "Pangku", poster: "assets/actor_christine_hakim.webp", studio: "Gambar Gerak", synopsis: "Memerankan karakter Bu Maya, pemilik kedai kopi di jalur Pantura yang memberikan tempat tinggal dan merawat Sartika.", genre: "Drama", director: "Reza" },
      { id: "nom-608", catId: "cat-6", name: "Zara Adhisty", film: "Tukar Takdir", poster: "assets/actor_zara.webp", studio: "Starvision", synopsis: "Memerankan karakter Zahra, anak remaja yang beradaptasi dengan kondisi keluarga pasca-musibah penerbangan.", genre: "Drama", director: "Mouly" },

      // Kategori 7: Pemeran Pendatang Baru Terfavorit (8 Nominees)
      { id: "nom-701", catId: "cat-7", name: "El Putra", film: "Rangga & Cinta", poster: "assets/actor_el_putra.webp", studio: "Miles Films", synopsis: "Memerankan karakter Rangga muda, siswa SMA dengan kepribadian tenang dan gemar menulis puisi yang menjalin kedekatan dengan Cinta.", genre: "Romance", director: "Riri Riza" },
      { id: "nom-702", catId: "cat-7", name: "King Aloy", film: "Comic 8 Revolutions", poster: "assets/actor_king_aloy.jpg", studio: "Falcon Pictures", synopsis: "Memerankan karakter Aloy, anggota kelompok yang terlibat dalam misi penanganan gangguan mistis bernuansa komedi.", genre: "Komedi", director: "Anggy Umbara" },
      { id: "nom-703", catId: "cat-7", name: "Leya Princy", film: "Rangga & Cinta", poster: "assets/actor_leya_princy.webp", studio: "Miles Films", synopsis: "Memerankan karakter Cinta muda, siswi SMA yang aktif dalam pertemanan sekolah dan menjalin hubungan dengan Rangga.", genre: "Romance", director: "Riri Riza" },
      { id: "nom-704", catId: "cat-7", name: "Anggun C. Sasmi", film: "Para Perasuk", poster: "assets/actor_anggun.webp", studio: "Rekata Studio", synopsis: "Memerankan karakter Nyai Sukma, tokoh pemuka adat yang memimpin jalannya ritual pesta kerasukan di Desa Latas.", genre: "Thriller", director: "Wregas Bhanuteja" },
      { id: "nom-705", catId: "cat-7", name: "Elsa Japassal", film: "Sekawan Limo 2", poster: "assets/actor_elsa_japassal.webp", studio: "Starvision", synopsis: "Memerankan karakter Elsa, pendaki pemula yang mengikuti perjalanan kelompok di jalur gunung Klawih.", genre: "Komedi", director: "Bayu Skak" },
      { id: "nom-706", catId: "cat-7", name: "Magistus Miftah", film: "Ghost in The Cell", poster: "assets/actor_magistus.webp", studio: "Come and See Pictures", synopsis: "Memerankan karakter Miftah, narapidana muda yang berhadapan dengan kehidupan penjara dan peristiwa gaib di dalamnya.", genre: "Horor", director: "Joko Anwar" },
      { id: "nom-707", catId: "cat-7", name: "Kev Luqman", film: "Monster Pabrik Rambut", poster: "assets/actor_kev.webp", studio: "Palari Films", synopsis: "Memerankan karakter Lukman, teknisi pabrik yang memeriksa kejanggalan bahan baku rambut dan fasilitas kerja.", genre: "Horor", director: "Edwin" },
      { id: "nom-708", catId: "cat-7", name: "Messi Gusti (PDM)", film: "Pelangi di Mars", poster: "assets/actor_messi_gusti.webp", studio: "Visinema Studios", synopsis: "Memerankan karakter Pelangi, anak perempuan yang berminat tinggi pada ilmu pengetahuan dan eksplorasi planet Mars.", genre: "Sci-Fi", director: "Angga Dwimas Sasongko" },

      // Kategori 8: Serial Streaming Indonesia Terbaik (8 Nominees)
      { id: "nom-801", catId: "cat-8", name: "Ratu - Ratu Queen The Series", film: "Ratu - Ratu Queen The Series", poster: "assets/poster_ratu_ratu_queens.webp", studio: "Netflix", synopsis: "Mengisahkan empat wanita Indonesia di New York dengan dinamika persahabatan, rahasia pribadi, dan komedi drama kehidupan imigran.", genre: "Drama Komedi Serial", director: "Lucky Kuswandi" },
      { id: "nom-802", catId: "cat-8", name: "Luka Makan Cinta", film: "Luka Makan Cinta", poster: "assets/poster_luka_makan_cinta.webp", studio: "Netflix", synopsis: "Mengisahkan konflik asmara emosional dan trauma masa lalu yang menguji kedewasaan cinta di tengah tekanan karir dan keluarga.", genre: "Romance Serial", director: "Teddy Soeriaatmadja" },
      { id: "nom-803", catId: "cat-8", name: "Algojo", film: "Algojo", poster: "assets/poster_algojo.webp", studio: "Vidio", synopsis: "Mengisahkan sosok pembalas dendam misterius yang menegakkan keadilan sendiri di balik bayang-bayang kejahatan kota.", genre: "Aksi Thriller Serial", director: "Rako Prijanto" },
      { id: "nom-804", catId: "cat-8", name: "Pertaruhan The Series 3", film: "Pertaruhan The Series 3", poster: "assets/poster_pertaruhan_the_series_3.webp", studio: "Vidio", synopsis: "Melanjutkan pertaruhan nyawa dan persaudaraan keras dalam menghadapi ancaman mafia serta pengkhianatan di dunia bawah tanah.", genre: "Aksi Kriminal Serial", director: "Sidharta Tata" },
      { id: "nom-805", catId: "cat-8", name: "Secret High School", film: "Secret High School", poster: "assets/poster_secret_high_school.webp", studio: "Viu", synopsis: "Mengisahkan konspirasi dan misteri kelam di balik reputasi sekolah elite tempat para siswa membongkar rahasia terlarang.", genre: "Misteri Remaja Serial", director: "Ginanti Rona" },
      { id: "nom-806", catId: "cat-8", name: "Rintik Terakhir", film: "Rintik Terakhir", poster: "assets/poster_rintik_terakhir.webp", studio: "Viu", synopsis: "Mengisahkan romansa puitis di bawah rintik hujan yang menyisakan kenangan tak terlupakan serta perpisahan emosional.", genre: "Romance Serial", director: "Hadrah Daeng Ratu" },
      { id: "nom-807", catId: "cat-8", name: "Operation Wedding", film: "Operation Wedding", poster: "assets/poster_operation_wedding.webp", studio: "Netflix", synopsis: "Mengisahkan strategi komedi empat saudara perempuan bersama pasangan meka untuk meluluhkan hati sang ayah yang protektif.", genre: "Komedi Romantis Serial", director: "Monty Tiwa" },
      { id: "nom-808", catId: "cat-8", name: "Bercinta dengan Maut", film: "Bercinta dengan Maut", poster: "assets/poster_bercinta_dengan_maut.webp", studio: "iQIYI", synopsis: "Mengisahkan permainan thriller psikologis yang menjerat para tokohnya dalam teka-teki cinta berbahaya di ambang kematian.", genre: "Thriller Serial", director: "Rizal Mantovani" },

      // Kategori 9: Sutradara Terfavorit (8 Nominees)
      { id: "nom-901", catId: "cat-9", name: "Yandy Laurens", film: "Sore: Istri Dari Masa Depan", poster: "assets/actor_yandy_laurens.webp", studio: "Cerita Films", synopsis: "Sutradara dan penulis skenario yang mengarahkan alur drama romansa fantastis dengan fokus pada interaksi antarkarakter dan ritme penceritaan.", genre: "Director", director: "Yandy Laurens" },
      { id: "nom-902", catId: "cat-9", name: "Joko Anwar", film: "Ghost in The Cell", poster: "assets/actor_joko_anwar.webp", studio: "Come and See Pictures", synopsis: "Sutradara dan penulis skenario yang merancang penataan latar artistik, unsur horor, dan komedi gelap dalam lingkungan penjara.", genre: "Director", director: "Joko Anwar" },
      { id: "nom-903", catId: "cat-9", name: "Muhadkly Acho", film: "Agak Laen: Menyala Pantiku", poster: "assets/actor_muhadly_acho.webp", studio: "Imajinari", synopsis: "Sutradara dan penulis skenario yang mengarahkan adegan komedi situasi dan dinamika dialog dalam kelompok empat sahabat.", genre: "Director", director: "Muhadkly Acho" },
      { id: "nom-904", catId: "cat-9", name: "Naya Anindita", film: "Tunggu Aku Sukses Nanti", poster: "assets/actor_naya_anindita.webp", studio: "Rapi Films", synopsis: "Sutradara yang mengarahkan alur drama perjuangan anak muda di kota besar dengan tempo penceritaan yang lugas.", genre: "Director", director: "Naya Anindita" },
      { id: "nom-905", catId: "cat-9", name: "Ryan Adriyandy", film: "Na Willa", poster: "assets/actor_ryan_adriandhy.webp", studio: "Visinema Studios", synopsis: "Sutradara yang mengarahkan adaptasi cerita keluarga era 1960-an dari sudut pandang anak-anak dalam debut penyutradaraan live-action.", genre: "Director", director: "Ryan Adriyandy" },
      { id: "nom-906", catId: "cat-9", name: "Baim Wong", film: "Semua Akan Baik-Baik Saja", poster: "assets/actor_baim_wong.webp", studio: "Tiger Wong Entertainment", synopsis: "Sutradara yang mengarahkan drama keluarga tentang ketahanan moral dan kondisi sosial-ekonomi masyarakat.", genre: "Director", director: "Baim Wong" },
      { id: "nom-907", catId: "cat-9", name: "Kristo Immanuel", film: "Tinggal Meninggal", poster: "assets/actor_kristo_immanuel.webp", studio: "Imajinari", synopsis: "Sutradara yang mengarahkan komedi hitam bertema duka keluarga dengan pendekatan teknik breaking the fourth wall.", genre: "Director", director: "Kristo Immanuel" },
      { id: "nom-908", catId: "cat-9", name: "Reza Rahadian", film: "Pangku", poster: "assets/actor_reza_rahadian.webp", studio: "Gambar Gerak", synopsis: "Sutradara dan penulis skenario yang mengarahkan isu sosial dan kehidupan masyarakat Pantura dalam debut penyutradaraan layar lebar.", genre: "Director", director: "Reza Rahadian" },

      // Kategori 10: Pemeran Anak Terfavorit (8 Nominees)
      { id: "nom-1001", catId: "cat-10", name: "Jared Ali", film: "Children of Heaven", poster: "assets/actor_jared_ali.webp", studio: "MD Pictures", synopsis: "Memerankan karakter Ali, anak laki-laki yang berupaya membantu adiknya dengan bersikap kooperatif dalam penggunaan sepatu sekolah.", genre: "Drama", director: "Hanung" },
      { id: "nom-1002", catId: "cat-10", name: "Luisa Adreena", film: "Na Willa", poster: "assets/actor_luisa_adreena.webp", studio: "Visinema Studios", synopsis: "Memerankan karakter Na Willa, anak perempuan berusia enam tahun di Surabaya era 1960-an yang mengeksplorasi kehidupan sekitarnya.", genre: "Animasi", director: "Ryan" },
      { id: "nom-1003", catId: "cat-10", name: "King Radja Nasution", film: "Ghost in The Cell", poster: "assets/actor_king_radja_nasution.webp", studio: "Come and See Pictures", synopsis: "Memerankan karakter Radja, anak yang berada di lingkungan penjara dan menyampaikan hal-hal yang diamatinya.", genre: "Horor", director: "Joko" },
      { id: "nom-1004", catId: "cat-10", name: "Myesha Lin", film: "Panggil Aku Ayah", poster: "assets/actor_myesha_lin.webp", studio: "Rapi Films", synopsis: "Memerankan karakter Lin, anak perempuan yang menjadi fokus pengasuhan dan perhatian utama ayahnya.", genre: "Drama", director: "Hadrah" },
      { id: "nom-1005", catId: "cat-10", name: "Azamy Syauqi", film: "Na Willa", poster: "assets/actor_azamy_syauqi.webp", studio: "Visinema Studios", synopsis: "Memerankan karakter Dul, teman seumur Na Willa yang sering bermain bersama di lingkungan perumahan.", genre: "Animasi", director: "Ryan" },
      { id: "nom-1006", catId: "cat-10", name: "Jordan Omar", film: "Yang Lain Boleh Hilang", poster: "assets/actor_jordan_omar.webp", studio: "Miles Films", synopsis: "Memerankan karakter Jordan, anak yang berinteraksi dengan kedua orang tuanya di tengah dinamika keluarga.", genre: "Drama", director: "Riri" },
      { id: "nom-1007", catId: "cat-10", name: "Halim Latuconsina", film: "Surat Untuk Masa Mudaku", poster: "assets/actor_halim_latuconsina.webp", studio: "Buddy Buddy", synopsis: "Memerankan karakter Halim muda, karakter utama pada masa kecil yang menjadi titik awal kenangan cerita.", genre: "Drama", director: "Teddy" },
      { id: "nom-1008", catId: "cat-10", name: "Humaira Jahra", film: "Children of Heaven", poster: "assets/actor_humaira_jahra.webp", studio: "MD Pictures", synopsis: "Memerankan karakter Zahra, anak perempuan yang bergantian memakai sepatu dengan kakaknya untuk berangkat sekolah.", genre: "Drama", director: "Hanung" }
    ];

    // STATE
    let currentCategory = "cat-1";
    let userVotes = {};
    let activeModalNomineeId = null;

    // ASSET PATH RESOLUTION FUNCTION
    function getAssetPath(path) {
      if (!path) return '';
      if (window.location.pathname.includes('.lavish')) {
        return path.startsWith('../') ? path : '../' + path;
      }
      return path;
    }

    // RENDER CATEGORY PILLS (CHECKMARK FONT COLOR MATCHING & FULLY ROUNDED)
    function renderCategoryPills() {
      const container = document.getElementById('category-pills-container');
      container.innerHTML = categoriesData.map(cat => {
        const isVoted = userVotes[cat.id] !== undefined;
        const isActive = cat.id === currentCategory;
        const pillClass = isActive 
          ? 'btn-gold-pill shadow-lg shadow-amber-500/20' 
          : 'bg-[#212121] text-gray-300 border border-white/10 hover:border-amber-400 hover:text-white';

        const checkColor = isActive ? 'text-[#08090c]' : 'text-white';

        return \`
          <button onclick="switchCategory('\${cat.id}')" style="border-radius: 9999px !important;" class="px-4 py-2 text-xs rounded-full shrink-0 flex items-center gap-1.5 transition-all cursor-pointer \${pillClass}">
            \${isVoted ? \`<span class="text-xs font-extrabold \${checkColor}">✓</span>\` : ''}
            \${cat.title}
          </button>
        \`;
      }).join('');
    }

    // DIRECT CATEGORY NAVIGATION WITH CHEVRONS
    function navigateCategory(direction) {
      const currentIndex = categoriesData.findIndex(c => c.id === currentCategory);
      let newIndex = currentIndex + direction;
      if (newIndex < 0) newIndex = categoriesData.length - 1;
      if (newIndex >= categoriesData.length) newIndex = 0;
      switchCategory(categoriesData[newIndex].id);

      const container = document.getElementById('category-pills-container');
      const selectedBtn = container.children[newIndex];
      if (selectedBtn) {
        selectedBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

    // RENDER NOMINEES GRID (FIXED TITLE DUPLICATION & IMAGE PATH FALLBACKS)
    function renderNomineesGrid() {
      const cat = categoriesData.find(c => c.id === currentCategory);
      document.getElementById('current-category-title').innerText = cat.title;

      const votedNomId = userVotes[currentCategory];
      document.getElementById('current-category-status').innerText = votedNomId ? 'Suara Terpilih' : 'Belum Ada Pilihan';

      const categoryNominees = nomineesData.filter(n => n.catId === currentCategory);
      const grid = document.getElementById('nominees-grid');

      grid.innerHTML = categoryNominees.map(nom => {
        const isSelected = userVotes[currentCategory] === nom.id;
        const cardStyle = isSelected ? 'glass-card-selected' : 'glass-card';
        const showSubfilm = nom.film && (nom.film.trim().toLowerCase() !== nom.name.trim().toLowerCase());
        const posterSrc = getAssetPath(nom.poster);

        return \`
          <div class="card \${cardStyle} overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
            <div onclick="openNomineeDetail('\${nom.id}')" class="cursor-pointer">
              <div class="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <img src="\${posterSrc}" onerror="if(!this.dataset.retried){this.dataset.retried=true;if(!this.src.includes('../assets/'))this.src='../' + this.getAttribute('src');}" alt="\${nom.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                \${isSelected ? '<span class="absolute top-2 right-2 badge badge-warning text-[10px] font-bold shadow-lg">Terpilih</span>' : ''}
              </div>
              <div class="p-3.5 space-y-1 text-left">
                <h4 class="font-bold text-sm text-white line-clamp-1 group-hover:text-amber-400 transition-colors">\${nom.name}</h4>
                \${showSubfilm ? \`<p class="text-xs text-amber-400 font-medium line-clamp-1">\${nom.film}</p>\` : ''}
                <p class="text-[11px] text-gray-400 line-clamp-1">\${nom.studio}</p>
              </div>
            </div>

            <div class="p-3.5 pt-0">
              <button onclick="toggleVote('\${nom.id}')" class="w-full py-2 text-xs rounded font-bold cursor-pointer transition-all \${isSelected ? 'btn-crimson' : 'btn-gold'}">
                \${isSelected ? 'Batal Vote' : 'Vote Nominee'}
              </button>
            </div>
          </div>
        \`;
      }).join('');
    }

    // SWITCH CATEGORY
    function switchCategory(catId) {
      currentCategory = catId;
      renderCategoryPills();
      renderNomineesGrid();
      updateReviewValidationUI();
    }

    function getVoteValidation() {
      const missingCategories = categoriesData.filter((cat) => {
        const selectedId = userVotes[cat.id];
        return !nomineesData.some((nominee) => nominee.id === selectedId && nominee.catId === cat.id);
      });
      return { isComplete: missingCategories.length === 0, missingCategories };
    }

    function updateReviewValidationUI() {
      const { isComplete, missingCategories } = getVoteValidation();
      const submitButton = document.getElementById('review-submit-votes');
      const status = document.getElementById('review-completeness-status');
      if (submitButton) submitButton.disabled = !isComplete;
      if (status) {
        status.classList.toggle('text-emerald-400', isComplete);
        status.classList.toggle('text-amber-300', !isComplete);
        status.textContent = isComplete
          ? 'Semua kategori sudah dipilih. Suara siap dikirim.'
          : 'Masih ' + missingCategories.length + ' kategori yang belum dipilih.';
      }
    }

    // TOGGLE VOTE
    function toggleVote(nomId) {
      const nom = nomineesData.find(n => n.id === nomId);
      if (userVotes[nom.catId] === nomId) {
        delete userVotes[nom.catId];
      } else {
        userVotes[nom.catId] = nomId;
      }
      updateUI();
    }

    // OPEN DETAIL MODAL (HERO POSTER TOP LAYOUT)
    function openNomineeDetail(nomId) {
      activeModalNomineeId = nomId;
      const nom = nomineesData.find(n => n.id === nomId);
      const cat = categoriesData.find(c => c.id === nom.catId);

      const img = document.getElementById('detail-poster');
      img.src = getAssetPath(nom.poster);
      img.onerror = function() {
        if (!this.dataset.retried) {
          this.dataset.retried = true;
          if (!this.src.includes('../assets/')) this.src = '../' + this.getAttribute('src');
        }
      };

      document.getElementById('detail-category-badge').innerText = cat.title;
      document.getElementById('detail-name').innerText = nom.name;
      document.getElementById('detail-film').innerText = nom.film;
      document.getElementById('detail-studio').innerText = nom.studio;
      document.getElementById('detail-synopsis').innerText = nom.synopsis;
      document.getElementById('detail-genre').innerText = nom.genre;

      const isSelected = userVotes[nom.catId] === nomId;
      const btn = document.getElementById('detail-vote-btn');
      btn.innerText = isSelected ? 'Batal Vote' : 'Vote Nominee Ini';
      btn.className = isSelected ? 'btn-crimson px-5 py-2 text-xs font-bold' : 'btn-gold px-5 py-2 text-xs font-bold';

      document.getElementById('modal-nominee-detail').showModal();
    }

    function toggleVoteFromModal() {
      if (activeModalNomineeId) {
        toggleVote(activeModalNomineeId);
        openNomineeDetail(activeModalNomineeId);
      }
    }

    // UPDATE ALL UI COMPONENTS (SLIDE-UP STICKY BAR & PROGRESS BAR)
    function updateUI() {
      const count = Object.keys(userVotes).length;
      const percentage = (count / 10) * 100;

      document.getElementById('vote-count-badge').innerText = count + '/10';
      document.getElementById('vote-summary-text').innerText = count + ' dari 10 Kategori Dipilih';

      // Update Progress Bar
      const progressBar = document.getElementById('vote-progress-bar');
      if (progressBar) {
        progressBar.style.width = percentage + '%';
      }

      const bar = document.getElementById('sticky-vote-bar');
      const submitBtn = document.getElementById('btn-submit-votes');

      if (count > 0) {
        bar.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
        bar.classList.add('translate-y-0', 'opacity-100');

        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      } else {
        bar.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
        bar.classList.remove('translate-y-0', 'opacity-100');

        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }

      renderCategoryPills();
      renderNomineesGrid();
    }

    // OPEN REVIEW MODAL (FULL CATEGORY LIST WITH POSTER/ACTOR IMAGES)
    function openReviewModal() {
      const list = document.getElementById('review-votes-list');

      list.innerHTML = categoriesData.map(cat => {
        const nomId = userVotes[cat.id];
        const nom = nomineesData.find(n => n.id === nomId);

        if (!nom) {
          return \`
            <div class="p-2.5 bg-neutral-900/60 rounded-xl border border-white/5 flex items-center justify-between opacity-60">
              <div class="space-y-0.5 text-left">
                <span class="text-[10px] text-gray-400 font-bold uppercase">\${cat.title}</span>
                <div class="text-gray-500 italic text-xs">Belum Ada Pilihan</div>
              </div>
              <button onclick="switchCategory('\${cat.id}'); document.getElementById('modal-review').close();" class="text-amber-400 text-xs hover:underline font-semibold">Pilih</button>
            </div>
          \`;
        }

        const posterSrc = getAssetPath(nom.poster);

        return \`
          <div class="p-2.5 bg-neutral-900 rounded-xl border border-amber-500/20 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <img src="\${posterSrc}" onerror="if(!this.dataset.retried){this.dataset.retried=true;if(!this.src.includes('../assets/'))this.src='../' + this.getAttribute('src');}" alt="\${nom.name}" class="w-10 h-12 object-cover rounded-lg border border-white/10 shrink-0">
              <div class="space-y-0.5 text-left min-w-0">
                <span class="text-[10px] text-amber-400 font-bold uppercase truncate block">\${cat.title}</span>
                <div class="text-white font-bold text-xs truncate">\${nom.name}</div>
                <div class="text-gray-400 text-[11px] truncate">\${nom.film}</div>
              </div>
            </div>
            <button onclick="switchCategory('\${cat.id}'); document.getElementById('modal-review').close();" class="text-amber-400 text-xs hover:underline font-semibold shrink-0">Ubah</button>
          </div>
        \`;
      }).join('');

      updateReviewValidationUI();
      document.getElementById('modal-review').showModal();
    }

    // HANDLE VOTE SUBMIT & GENERATE 9:16 WRAPPED TICKET (ALL 10 VOTED ITEMS)
    function handleVoteSubmit(e) {
      e.preventDefault();
      const validation = getVoteValidation();
      if (!validation.isComplete) {
        updateReviewValidationUI();
        const firstMissing = validation.missingCategories[0];
        const reviewModal = document.getElementById('modal-review');
        if (reviewModal) reviewModal.close();
        if (firstMissing) {
          switchCategory(firstMissing.id);
          requestAnimationFrame(() => {
            const firstChoice = document.querySelector('#nominees-grid button');
            if (firstChoice) firstChoice.focus();
            document.getElementById('nominees-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        }
        return;
      }
      const name = document.getElementById('voter-name').value.trim() || 'Cinemates Voter';
      const email = document.getElementById('voter-email').value.trim();
      const ticketId = 'PASS-' + Math.floor(1000 + Math.random() * 9000);

      document.getElementById('ticket-id').innerText = ticketId;
      document.getElementById('ticket-name').innerText = name;

      // Render ALL chosen films and actors in 9:16 wrapped ticket grid
      const grid = document.getElementById('ticket-picks-grid');

      grid.innerHTML = categoriesData.map(cat => {
        const nomId = userVotes[cat.id];
        if (!nomId) return '';
        const nom = nomineesData.find(n => n.id === nomId);
        const posterSrc = getAssetPath(nom.poster);
        return \`
          <div class="flex items-center gap-1.5 p-1 bg-black/40 rounded border border-white/5 min-w-0">
            <img src="\${posterSrc}" onerror="if(!this.dataset.retried){this.dataset.retried=true;if(!this.src.includes('../assets/'))this.src='../' + this.getAttribute('src');}" alt="\${nom.name}" class="w-6 h-7 object-cover rounded shrink-0">
            <div class="min-w-0 leading-tight">
              <span class="text-gray-400 block text-[6.5px] uppercase truncate">\${cat.title}</span>
              <span class="text-white font-bold block truncate text-[8.5px]">\${nom.name}</span>
            </div>
          </div>
        \`;
      }).filter(Boolean).join('');

      document.getElementById('modal-review').close();
      document.getElementById('modal-success').showModal();
    }

    // SOCIAL SHARE & DOWNLOAD FUNCTIONS
    async function downloadPassImage() {
      const ticket = document.getElementById('wrapped-ticket');
      const button = document.getElementById('download-ticket-button');
      if (!ticket || typeof window.html2canvas !== 'function') {
        alert('Fitur download belum siap. Periksa koneksi internet lalu coba lagi.');
        return;
      }
      if (button) { button.disabled = true; button.title = 'Menyiapkan tiket...'; }
      try {
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
        const images = Array.from(ticket.querySelectorAll('img'));
        await Promise.all(images.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            const finish = () => { clearTimeout(timeout); resolve(); };
            const timeout = setTimeout(finish, 15000);
            img.addEventListener('load', finish, { once: true });
            img.addEventListener('error', finish, { once: true });
          });
        }));
        const capturedCanvas = await window.html2canvas(ticket, {
          backgroundColor: '#080808',
          scale: Math.min(3, Math.max(2, window.devicePixelRatio || 1)),
          useCORS: true,
          allowTaint: false,
          logging: false,
          imageTimeout: 15000,
          scrollX: 0,
          scrollY: -window.scrollY
        });
        const outputCanvas = document.createElement('canvas');
        outputCanvas.width = 1080;
        outputCanvas.height = 1920;
        const outputContext = outputCanvas.getContext('2d');
        if (!outputContext) throw new Error('Canvas is not supported');
        outputContext.imageSmoothingEnabled = true;
        outputContext.imageSmoothingQuality = 'high';
        outputContext.drawImage(capturedCanvas, 0, 0, 1080, 1920);
        const blob = await new Promise((resolve, reject) => {
          outputCanvas.toBlob((value) => value ? resolve(value) : reject(new Error('PNG export failed')), 'image/png', 1);
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        const ticketId = document.getElementById('ticket-id');
        const safeId = ticketId ? ticketId.textContent.trim().replace(/[^a-z0-9_-]+/gi, '-') : 'voter-pass';
        link.href = url;
        link.download = 'cinemags-awards-2026-' + safeId + '.png';
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        if (button) button.title = 'Tiket berhasil diunduh';
      } catch (error) {
        console.error('Ticket download failed:', error);
        if (button) button.title = 'Download gagal — coba lagi';
        alert('Tiket belum berhasil diunduh. Pastikan semua gambar sudah termuat, lalu coba lagi.');
      } finally {
        if (button) button.disabled = false;
        setTimeout(() => { if (button) button.title = 'Simpan Gambar / Download'; }, 2500);
      }
    }
    function shareInstagram() {
      alert('Membuka Instagram Story untuk membagikan Voter Pass kamu...');
    }
    function shareWhatsApp() {
      const text = encodeURIComponent("Saya sudah memilih di Cinemags Awards 2026! Yuk ikutan #RayakanFilmIndonesia di cinemags.org");
      window.open('https://api.whatsapp.com/send?text=' + text, '_blank');
    }
    function shareTwitter() {
      const text = encodeURIComponent("Saya sudah memberikan suara di Cinemags Awards 2026! #RayakanFilmIndonesia vote pilihanmu di cinemags.org");
      window.open('https://twitter.com/intent/tweet?text=' + text, '_blank');
    }

    // COUNTDOWN TIMER TO 31 OCT 2026 23:59:00 WIB
    function initCountdown() {
      const targetDate = new Date('2026-10-31T23:59:00+07:00').getTime();

      function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
          document.getElementById('cd-days').innerText = '00';
          document.getElementById('cd-hours').innerText = '00';
          document.getElementById('cd-mins').innerText = '00';
          document.getElementById('cd-secs').innerText = '00';
          return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('cd-days').innerText = String(d).padStart(2, '0');
        document.getElementById('cd-hours').innerText = String(h).padStart(2, '0');
        document.getElementById('cd-mins').innerText = String(m).padStart(2, '0');
        document.getElementById('cd-secs').innerText = String(s).padStart(2, '0');
      }

      update();
      setInterval(update, 1000);
    }

    // DEEP RED FABRIC VELVET WAVE BACKGROUND ANIMATION (CANVAS + GSAP TICKER)
    function initHeroWaveCanvas() {
      const canvas = document.getElementById('hero-cloth-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');

      let width = 0, height = 0;
      function resize() {
        const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
        width = canvas.width = rect.width || window.innerWidth;
        height = canvas.height = rect.height || window.innerHeight;
      }
      resize();
      window.addEventListener('resize', resize);

      // Velvet Fabric Overlapping Wave Layers with Satin Highlights
      const waves = [
        { amplitude: 55, frequency: 0.0035, speed: 0.005, offset: 0, colorStart: 'rgba(191, 33, 33, 0.50)', colorEnd: 'rgba(90, 10, 10, 0)', highlight: 'rgba(255, 180, 180, 0.12)' },
        { amplitude: 80, frequency: 0.0025, speed: 0.0035, offset: 2.2, colorStart: 'rgba(150, 15, 15, 0.40)', colorEnd: 'rgba(40, 5, 5, 0)', highlight: 'rgba(255, 150, 150, 0.08)' },
        { amplitude: 45, frequency: 0.005, speed: 0.008, offset: 4.1, colorStart: 'rgba(220, 50, 50, 0.30)', colorEnd: 'rgba(70, 8, 8, 0)', highlight: 'rgba(255, 200, 200, 0.15)' },
        { amplitude: 95, frequency: 0.0018, speed: 0.0025, offset: 1.3, colorStart: 'rgba(120, 10, 10, 0.45)', colorEnd: 'rgba(13, 13, 13, 0)', highlight: 'rgba(200, 100, 100, 0.06)' }
      ];

      let step = 0;

      function renderFrame() {
        ctx.clearRect(0, 0, width, height);
        step += 1;

        waves.forEach(wave => {
          ctx.save();
          ctx.beginPath();

          const grad = ctx.createLinearGradient(0, 0, width, height);
          grad.addColorStop(0, wave.colorStart);
          grad.addColorStop(0.7, wave.colorStart);
          grad.addColorStop(1, wave.colorEnd);
          ctx.fillStyle = grad;

          ctx.moveTo(0, height);

          const points = [];
          for (let x = 0; x <= width + 12; x += 10) {
            const y = Math.sin(x * wave.frequency + step * wave.speed + wave.offset) * wave.amplitude 
                    + Math.cos(x * wave.frequency * 0.6 + step * wave.speed * 0.8) * (wave.amplitude * 0.45)
                    + (height * 0.50);
            points.push({ x, y });
            ctx.lineTo(x, y);
          }

          ctx.lineTo(width, height);
          ctx.lineTo(0, height);
          ctx.closePath();
          ctx.fill();

          // Fabric Fold Satin Highlight Line along Wave Ridge
          ctx.beginPath();
          ctx.strokeStyle = wave.highlight;
          ctx.lineWidth = 2.5;
          points.forEach((p, idx) => {
            if (idx === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          });
          ctx.stroke();

          ctx.restore();
        });

        // Fine Fabric Weave Texture Overlay
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
        ctx.lineWidth = 0.5;
        for (let i = -height; i < width + height; i += 16) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i + height, height);
          ctx.stroke();
        }
        ctx.restore();

        requestAnimationFrame(renderFrame);
      }

      renderFrame();
    }

    // INIT
    window.addEventListener('DOMContentLoaded', () => {
      renderCategoryPills();
      renderNomineesGrid();
      initCountdown();
      initHeroWaveCanvas();
    });
  </script>
</body>
</html>
`;

// WRITE OUTPUT FILES
fs.writeFileSync('cinemags_awards_2026.html', html);
fs.writeFileSync('index.html', html);
if (!fs.existsSync('.lavish')) {
  fs.mkdirSync('.lavish', { recursive: true });
}
fs.writeFileSync('.lavish/cinemags_awards_2026.html', html);
console.log('Successfully generated cinemags_awards_2026.html, index.html, and .lavish/cinemags_awards_2026.html');

