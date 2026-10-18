#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const os = require('os');
const https = require('https');
const { spawn } = require('child_process');

console.log('====================================================');
console.log('  Advanced Control Equipments — ACE Prosoft V2.0    ');
console.log('====================================================');
console.log('Fetching ACE Prosoft V2 desktop installer...\n');

const releaseUrl = 'https://github.com/meenasundaratgmaildotcom/ACE-Prosoft-Releases/releases/download/v2.0.0/ACE.Prosoft.V2.Setup.2.0.0.exe';
const tempTarget = path.join(os.tmpdir(), 'ACE_Prosoft_V2_Setup.exe');

function runInstaller(exePath) {
  console.log(`\nLaunching installer: ${exePath}`);
  console.log('Follow the setup wizard on your screen to complete installation.\n');
  const child = spawn(exePath, [], {
    detached: true,
    stdio: 'ignore',
  });
  child.unref();
  process.exit(0);
}

function download(url) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      return download(res.headers.location);
    }
    if (res.statusCode !== 200) {
      console.error(`Download failed with HTTP status ${res.statusCode}.`);
      process.exit(1);
    }

    const total = parseInt(res.headers['content-length'] || '0', 10);
    let downloaded = 0;

    res.on('data', (chunk) => {
      downloaded += chunk.length;
      if (total > 0) {
        const pct = Math.round((downloaded / total) * 100);
        process.stdout.write(`\rProgress: ${pct}% (${Math.round(downloaded / 1024 / 1024)} MB / ${Math.round(total / 1024 / 1024)} MB)`);
      } else {
        process.stdout.write(`\rDownloaded: ${Math.round(downloaded / 1024 / 1024)} MB`);
      }
    });

    const file = fs.createWriteStream(tempTarget);
    res.pipe(file);

    file.on('finish', () => {
      file.close(() => {
        console.log('\nDownload complete!');
        runInstaller(tempTarget);
      });
    });
  }).on('error', (err) => {
    fs.unlink(tempTarget, () => {});
    console.error('Network error during download:', err.message);
    process.exit(1);
  });
}

download(releaseUrl);
