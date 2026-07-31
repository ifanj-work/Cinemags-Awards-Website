const fs = require('fs');

const logoB64 = fs.readFileSync('logo_b64.txt', 'utf8').trim();
const trophyB64 = fs.readFileSync('trophy_b64.txt', 'utf8').trim();

let html = fs.readFileSync('cinemags_awards_2026.html', 'utf8');

// Replace image sources with base64 URIs
html = html.replace(/src="assets\/Logo\.png"/g, `src="${logoB64}"`);
html = html.replace(/src="assets\/Trophy\.png"/g, `src="${trophyB64}"`);

fs.writeFileSync('cinemags_awards_2026.html', html);
console.log('Base64 images embedded successfully!');
