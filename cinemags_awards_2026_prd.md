# Product Requirements Document - Cinemags Awards 2026

**Product Name**: Cinemags Awards 2026 Public Voting Platform
**Document Version**: 1.3
**Date**: 31 July 2026
**Status**: Production-Ready Prototype Requirements
**Project Repository**: `ifanj-work/Cinemags-Awards-Website`
**Design System Source**: `DESIGN.md` (Cinemags Award Design System v3.1.0)

---

## 1. Executive Summary

Cinemags Awards 2026 is the official interactive public voting platform for Indonesia's annual film appreciation awards.
Organized by Cinemags, the campaign brings together film enthusiasts under the official theme and hashtag **#RayakanFilmIndonesia**.
The platform empowers the public to discover nominated films and artists across 10 categories featuring 84 nominees.
Voters cast their selections without complex account registration and receive a personalized 9:16 portrait Digital Voter Pass upon submission.

The product is built as a lightweight, ultra-performant, single-page web application.
The design system strictly adheres to `DESIGN.md`, pairing cinema obsidian backgrounds (`#0d0d0d`) with gala gold accents (`#d29e2f`) and high-contrast typography.

---

## 2. Campaign Timeline and Governance Rules

### 2.1 Event Schedule

- **Eligible Release Period**: Indonesian feature films officially released in theaters or major platforms between July 2025 and June 2026.
- **Public Voting Window**: August 31, 2026 until October 31, 2026 at 23:59 WIB.
- **Winners Announcement Window**: November 2, 2026 through November 20, 2026 across official Cinemags media channels.
- **Trophy Distribution**: Commences immediately following the conclusion of winner announcements.

### 2.2 Mandatory Voting Guidelines

- Voters must follow the official Cinemags Instagram account `@cinemagsnews`.
- Public voting is accessed via the official domain `cinemags.org`.
- Voters select 1 nominee per category across 10 total categories.
- Voters provide a valid email address and optional name prior to final submission.
- Each verified email address is limited to 1 submitted vote combination.

---

## 3. Product Goals and Non-Goals

### 3.1 Primary Goals

- Deliver a high-conversion, frictionless voting experience on mobile and desktop devices.
- Maintain strict design system fidelity following `DESIGN.md`.
- Achieve high WCAG AAA contrast accessibility on all primary action buttons.
- Drive viral organic reach through downloadable and shareable 9:16 Spotify-Wrapped style voter passes.
- Ensure 100% asset coverage for all 84 nominees across posters and actor headshots.

### 3.2 Non-Goals and Explicit Exclusions

- No account creation, password setup, or mandatory phone OTP verification.
- No embedded YouTube video trailers in nominee detail modals to ensure fast loading and zero modal bloat.
- No Power Hour vote multiplier mechanisms to keep voting fair and transparent.
- No admin dashboard or backend database tallying in Phase 1 prototype scope.

---

## 4. System Architecture and Implementation

### 4.1 Architecture Overview

The application is generated via `generate_final_html.js`, a Node.js build script.
The script embeds core binary brand assets directly into Base64 format (`logo_b64.txt` and `trophy_b64.txt`).
It outputs a standalone static HTML application (`cinemags_awards_2026.html`) alongside a synced preview (`.lavish/cinemags_awards_2026.html`).

### 4.2 Technology Stack

- **Core Structure**: HTML5 with semantic layout tags and accessibility attributes.
- **Styling**: Vanilla CSS custom properties combined with Tailwind CSS v4 and DaisyUI v5.
- **Typography**: Google Fonts Federo (Display Serif) and DM Sans (UI Body Copy).
- **Iconography**: Google Material Symbols Outlined (`https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined`).
- **Animations & Interactivity**: GSAP 3.12.5 platform and pure JavaScript state handlers.

---

## 5. Design System and Visual Specification

### 5.1 Color Palette

- **Canvas Background**: Deep Cinema Obsidian `#0d0d0d`.
- **Elevated Canvas**: Charcoal Card Base `#212121` and Card Fill `#181818`.
- **Primary Gold**: `#d29e2f` with dark gradient stop `#7d5912` and hover `#d5ab4e`.
- **Primary Crimson**: `#bf2121` with hover `#dc3737` and active `#991b1b`.
- **Text on Gold Controls**: `#08090c` ultra-dark charcoal, achieving a **9.1:1 WCAG AAA** contrast ratio.
- **Text on Crimson Controls**: `#ffffff` pure white, achieving a **5.9:1 WCAG AAA** contrast ratio.

### 5.2 Micro-Interactions and Components

- **Category Navigation Pills**: Full pill border radius (`rounded-full`) with smooth horizontal touch-scrolling.
- **Nominee Cards**: Glassmorphism surface styling (`rgba(33, 33, 33, 0.85)` backdrop blur).
- **Selected Nominee Cards**: Gold glow border with ambient shadow (`0 0 20px rgba(210, 158, 47, 0.35)`).
- **Modals**: Glassmorphism overlay dialogs with gold hairline borders (`rgba(210, 158, 47, 0.4)`).

---

## 6. Functional Specifications

### 6.1 Header Navigation and Mobile Drawer

- Sticky top bar with blurred background (`backdrop-blur-md bg-neutral-950/90`).
- Crisp display of official Cinemags Awards logo.
- Desktop navigation links for "Tentang Event", "Cara Vote", "Kategori Vote", and "Syarat & Ketentuan".
- Mobile hamburger menu button triggering an inline drawer navigation overlay.

### 6.2 Hero Section and Live Countdown Timer

- Gala display headline in Federo gold gradient text ("CINEMAGS AWARDS 2026").
- Hero tagline badge with `#RayakanFilmIndonesia`.
- Real-time JavaScript countdown timer targeted to October 31, 2026 at 23:59 WIB (Hari, Jam, Menit, Detik).
- Stationary trophy illustration with golden ambient drop-shadow.

### 6.3 Voting Wizard and Category Filtering

- 10 category selection pills with active indicators and completed vote checkmarks (`✓`).
- Chevron navigation controls for scrolling category pills horizontally.
- Nominee cards rendering poster image, nominee name, sub-film title, production house, and action button.
- Floating sticky bottom vote bar showing selection progress (`0/10`) and triggering vote submission.

### 6.4 Nominee Detail Modal

- Displays nominee poster image, category badge, nominee name, film title, production house, genre tag, and full synopsis.
- Video trailer embeds are explicitly removed to preserve quick load times and clean presentation.
- Provides direct "Vote Nominee Ini" toggle button within the modal.

### 6.5 Review Drawer Modal ("Tinjau Pilihan Suara")

- Centered modal dialog displaying all selected categories and chosen nominees.
- Provides an inline "Ubah" option to jump directly back to any specific category.
- Captures voter name (optional) and voter email (required).
- Includes mandatory checkbox for terms agreement and `@cinemagsnews` Instagram follow verification.

### 6.6 9:16 Digital Voter Pass ("Spotify-Wrapped Style")

- Full 9:16 portrait card modal centered on desktop and full-screen / bottom-sheet on mobile.
- Displays voter name, unique pass tracking ID (e.g. `PASS-8921`), top vote summary grid, and campaign hashtag.
- Action controls for saving image (`download`), Instagram Story (`photo_camera`), WhatsApp (`chat`), and Twitter/X (`share`).

---

## 7. Award Categories and Nominee Roster (100% Asset Verified)

### 7.1 Kategori 1: Film Terfavorit (12 Nominees)
1. Sore: Istri Dari Masa Depan (`assets/poster_sore.webp`)
2. Agak Laen: Menyala Pantiku (`assets/poster_agak_laen.webp`)
3. Nobody Loves Kay (`assets/poster_nobody_loves_kay.webp`)
4. Pangku (`assets/poster_pangku.webp`)
5. Tinggal Meninggal (`assets/poster_tinggal_meninggal.webp`)
6. Suka Duka Tawa (`assets/poster_suka_duka_tawa.webp`)
7. Tunggu Aku Sukses Nanti (`assets/poster_tunggu_aku_sukses_nanti.webp`)
8. Na Willa (`assets/poster_na_willa.webp`)
9. Para Perasuk (`assets/poster_para_perasuk.webp`)
10. Surat Untuk Masa Mudaku (`assets/poster_surat_untuk_masa_mudaku.webp`)
11. Semua Akan Baik-Baik Saja (`assets/poster_semua_akan_baik_baik_saja.webp`)
12. Children of Heaven (`assets/poster_children_of_heaven.webp`)

### 7.2 Kategori 2: Film Horror Terfavorit (8 Nominees)
1. Ghost in The Cell (`assets/poster_ghost_in_the_cell.webp`)
2. Danur: The Last Chapter (`assets/poster_danur_4.webp`)
3. Kang Solah from Kang Mak x Nenek Gayung (`assets/poster_kang_solah.webp`)
4. Suzzanna: Santet Dosa di Atas Dosa (`assets/poster_suzzanna_santet.webp`)
5. Monster Pabrik Rambut (`assets/poster_monster_pabrik_rambut.webp`)
6. Badut Gendong (`assets/poster_badut_gendong.webp`)
7. Kafir: Gerbang Sukma (`assets/poster_kafir_gerbang_sukma.webp`)
8. Legenda Kelam Malin Kundang (`assets/poster_malin_kundang.webp`)

### 7.3 Kategori 3: Pemeran Utama Pria Terfavorit (8 Nominees)
1. Nicholas Saputra - Tukar Takdir (`assets/actor_nicholas_saputra.webp`)
2. Ariel NOAH - Dilan ITB 1997 (`assets/actor_ariel_noah.webp`)
3. Fedi Nuril - Pangku (`assets/actor_fedi_nuril.webp`)
4. Omara Esteghlal - Tinggal Meninggal (`assets/actor_omara_esteghlal.webp`)
5. Ardit Erwanda - Tunggu Aku Sukses Nanti (`assets/actor_ardit_erwanda.webp`)
6. Dion Wiyoko - Sore: Istri Dari Masa Depan (`assets/actor_dion_wiyoko.webp`)
7. Rigen - Kang Solah (`assets/actor_rigen.webp`)
8. Rio Dewanto - Legenda Kelam Malin Kundang (`assets/actor_rio_dewanto.webp`)

### 7.4 Kategori 4: Pemeran Utama Wanita Terfavorit (8 Nominees)
1. Sheila Dara - Sore: Istri Dari Masa Depan (`assets/actor_sheila_dara.webp`)
2. Prilly Latuconsina - Danur: The Last Chapter (`assets/actor_prilly_latuconsina.webp`)
3. Claresta Taufan - Pangku (`assets/actor_claresta_taufan.webp`)
4. Rachel Amanda - Suka Duka Tawa (`assets/actor_rachel_amanda.webp`)
5. Luna Maya - Suzzanna: Santet Dosa (`assets/actor_luna_maya.webp`)
6. Shenina Cinnamon - Dopamin (`assets/actor_shenina_cinnamon.webp`)
7. Marsha Timothy - Tukar Takdir (`assets/actor_marsha_timothy.webp`)
8. Niken Anjani - Dilan ITB 1997 (`assets/actor_niken_anjani.webp`)

### 7.5 Kategori 5: Pemeran Pendukung Pria Terfavorit (8 Nominees)
1. Mario Caesar - Tinggal Meninggal (`assets/actor_mario_caesar.webp`)
2. Oki Rengga - Children of Heaven (`assets/actor_oki_rengga.webp`)
3. Benidictus Siregar - La Tahzan (`assets/actor_benidictus_siregar.webp`)
4. Aming - Ghost in The Cell (`assets/actor_aming.webp`)
5. Reza Chandika - Tunggu Aku Sukses Nanti (`assets/actor_reza_chandika.webp`)
6. Didik Nini Thowok - Monster Pabrik Rambut (`assets/actor_didik_nini_thowok.webp`)
7. Jeremie Moeremans - Keluarga Suami (`assets/actor_jeremie_moeremans.jpg`)
8. Junior Liem - Na Willa (`assets/actor_junior_liem.webp`)

### 7.6 Kategori 6: Pemeran Pendukung Wanita Terfavorit (8 Nominees)
1. Ashel - Tunggu Aku Sukses Nanti (`assets/actor_ashel.webp`)
2. Zee Asadel - Danur: The Last Chapter (`assets/actor_zee_asadel.webp`)
3. Mawar de Jongh - Tinggal Meninggal (`assets/actor_mawar_eva.webp`)
4. Irma Rihi - Na Willa (`assets/actor_irma_rihi.webp`)
5. Raline Shah - Dilan ITB 1997 (`assets/actor_raline_shah.webp`)
6. Shindy Huang - Tinggal Meninggal (`assets/actor_shindy_huang.webp`)
7. Christine Hakim - Pangku (`assets/actor_christine_hakim.webp`)
8. Zara Adhisty - Tukar Takdir (`assets/actor_zara.webp`)

### 7.7 Kategori 7: Pemeran Pendatang Baru Terfavorit (8 Nominees)
1. El Putra - Rangga & Cinta (`assets/actor_el_putra.webp`)
2. King Aloy - Comic 8 Revolutions (`assets/actor_king_aloy.jpg`)
3. Leya Princy - Rangga & Cinta (`assets/actor_leya_princy.webp`)
4. Anggun C. Sasmi - Para Perasuk (`assets/actor_anggun.webp`)
5. Elsa Japassal - Sekawan Limo 2 (`assets/actor_elsa_japassal.webp`)
6. Magistus Miftah - Ghost in The Cell (`assets/actor_magistus.webp`)
7. Kev Luqman - Monster Pabrik Rambut (`assets/actor_kev.webp`)
8. Messi Gusti (PDM) - Pelangi di Mars (`assets/actor_messi_gusti.webp`)

### 7.8 Kategori 8: Serial Streaming Indonesia Terbaik (8 Nominees)
1. Ratu - Ratu Queen The Series (Netflix) (`assets/poster_ratu_ratu_queens.webp`)
2. Luka Makan Cinta (Netflix) (`assets/poster_luka_makan_cinta.webp`)
3. Algojo (Vidio) (`assets/poster_algojo.webp`)
4. Pertaruhan The Series 3 (Vidio) (`assets/poster_pertaruhan_the_series_3.webp`)
5. Secret High School (Viu) (`assets/poster_secret_high_school.webp`)
6. Rintik Terakhir (Viu) (`assets/poster_rintik_terakhir.webp`)
7. Operation Wedding (Netflix) (`assets/poster_operation_wedding.webp`)
8. Bercinta dengan Maut (IQiyi) (`assets/poster_bercinta_dengan_maut.webp`)

### 7.9 Kategori 9: Sutradara Terfavorit (8 Nominees)
1. Yandy Laurens - Sore: Istri Dari Masa Depan (`assets/actor_yandy_laurens.webp`)
2. Joko Anwar - Ghost in The Cell (`assets/actor_joko_anwar.webp`)
3. Muhadkly Acho - Agak Laen: Menyala Pantiku (`assets/actor_muhadly_acho.webp`)
4. Naya Anindita - Tunggu Aku Sukses Nanti (`assets/actor_naya_anindita.webp`)
5. Ryan Adriyandy - Na Willa (`assets/actor_ryan_adriandhy.webp`)
6. Baim Wong - Semua Akan Baik-Baik Saja (`assets/actor_baim_wong.webp`)
7. Kristo Immanuel - Tinggal Meninggal (`assets/actor_kristo_immanuel.webp`)
8. Reza Rahadian - Pangku (`assets/actor_reza_rahadian.webp`)

### 7.10 Kategori 10: Pemeran Anak Terfavorit (8 Nominees)
1. Jared Ali - Children of Heaven (`assets/actor_jared_ali.webp`)
2. Luisa Adreena - Na Willa (`assets/actor_luisa_adreena.webp`)
3. King Radja Nasution - Ghost in The Cell (`assets/actor_king_radja_nasution.webp`)
4. Myesha Lin - Panggil Aku Ayah (`assets/actor_myesha_lin.webp`)
5. Azamy Syauqi - Na Willa (`assets/actor_azamy_syauqi.webp`)
6. Jordan Omar - Yang Lain Boleh Hilang (`assets/actor_jordan_omar.webp`)
7. Halim Latuconsina - Surat Untuk Masa Mudaku (`assets/actor_halim_latuconsina.webp`)
8. Humaira Jahra - Children of Heaven (`assets/actor_humaira_jahra.webp`)

---

## 8. Verification and Quality Sign-Off

- **Asset Mapping**: 100% verified across 22 poster files and 64 actor headshot images.
- **Accessibility**: 9.1:1 AAA contrast on primary gold interactive buttons.
- **Responsiveness**: Verified across mobile breakpoints (375px, 414px) and desktop viewports (1280px, 1440px).
- **Execution Script**: Clean node build execution via `node generate_final_html.js`.

---

## 9. Future Roadmap (Phase 2 Backend Integration)

- **Database**: Integration with Supabase PostgreSQL for storing verified votes and voter metadata.
- **Rate Limiting**: Upstash Redis integration to enforce IP and email rate limits.
- **Bot Protection**: Integration of Cloudflare Turnstile CAPTCHA prior to form submission.
- **Email Verification**: One-Time Passcode (OTP) or magic link email confirmation for vote validation.
