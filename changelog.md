# Changelog

All notable frontend changes to the Cinemags Awards 2026 voting experience are documented here.

The project is currently maintained as a standalone static frontend and does not yet use numbered releases.

## Unreleased

- No unreleased changes.

## 2026-08-05

### Added

- Added this changelog and linked it from the repository structure documentation.
- Added a floating Obsidian Glass navigator dock with rounded edges, viewport clearance, safe-area support, and a thin integrated vote-progress track.
- Added an inline notification confirming that a Voter Pass was downloaded successfully.

### Changed

- Removed the numeric position prefix from the category title in the navigator dock.
- Changed the Voter Pass action label to `Download Voter Pass`.
- Changed the successful download state to the design system's default button treatment with the text `Voter Pass telah di-download`.
- Removed the download icon after a successful Voter Pass download.
- Updated and validated nomination content and voting-flow data.

### Fixed

- Ensured the floating navigator dock moves completely outside the viewport when hidden.
- Repositioned navigator notifications so they do not overlap the floating dock.

## 2026-08-04

### Added

- Added the clean frontend handoff documentation and repository structure.
- Added complete Voter Pass image generation, download, and native sharing behavior.
- Added adaptive category navigation and vote-completion feedback.

### Changed

- Refined the voting navigation and Terms & Conditions accordion.
- Centered nominee content in the generated Voter Pass.

## 2026-08-03

### Changed

- Improved Voter Pass rendering and vote-completeness validation.

## Backend handoff note

Email-provider restrictions, mailbox verification, duplicate-vote prevention, rate limiting, and other trust controls remain backend responsibilities and are intentionally not implemented in the browser-only form.
