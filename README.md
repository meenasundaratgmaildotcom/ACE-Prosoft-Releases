# ACE Prosoft V2 â€” Official Downloads & Releases

Official standalone distribution repository for **ACE Process Control Software (Prosoft V2)** with Delta DTB9696 Modbus RTU and Remote Lab Client/Host capability.

---

### ðŸš€ Direct Download

Click the link below to download the latest Windows installer:

ðŸ‘‰ **[Download ACE Prosoft V2 Setup (v1.0.0)](https://github.com/meenasundaratgmaildotcom/ACE-Prosoft-Releases/releases/latest/download/ACE.Prosoft.V2.Setup.1.0.0.exe)**

*(File size: ~94.9 MB â€¢ Standalone .exe â€¢ No Node.js or developer tools required)*

---

### ðŸ’» 1-Line Quick Install via PowerShell

Students can simply open Windows PowerShell and paste this command to automatically download and run the installer:

```powershell
Start-BitsTransfer "https://github.com/meenasundaratgmaildotcom/ACE-Prosoft-Releases/releases/latest/download/ACE.Prosoft.V2.Setup.1.0.0.exe" "$env:TEMP\ACE_Setup.exe"; Start-Process "$env:TEMP\ACE_Setup.exe"
```

---

### ðŸŒ Connecting as a Remote Student
1. Launch **ACE Prosoft V2** from your Desktop shortcut.
2. In the top menu, click **COM Port** â†’ **Communication Setup & Remote Lab...**
3. Select the **ðŸŒ Remote Lab Client (Student Mode)** tab.
4. Enter the **Host URL** (e.g. `https://xxxx.trycloudflare.com`) and the **Access Passkey** (e.g. `ACE-101`) provided by your instructor.
5. Click **Connect to Remote Lab** to begin receiving real-time hardware data!