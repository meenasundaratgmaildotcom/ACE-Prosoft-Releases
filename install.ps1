Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "   Downloading ACE Prosoft V2 Setup..." -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
$url = "https://github.com/meenasundaratgmaildotcom/ACE-Prosoft-Releases/releases/latest/download/ACE.Prosoft.V2.Setup.1.0.0.exe"
$dest = Join-Path $env:TEMP "ACE_Prosoft_Setup.exe"
Start-BitsTransfer -Source $url -Destination $dest -DisplayName "Downloading ACE Prosoft V2"
Write-Host ">>> Launching Installer..." -ForegroundColor Green
Start-Process $dest