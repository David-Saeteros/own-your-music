# Your music. Your files.

## Before you start
You can keep music without renting access to a catalogue. This guide helps you build a collection of ordinary audio files, organise it with Navidrome on Windows, and listen with Tempus on Android. You supply the music; these apps do not include Spotify’s catalogue or convert Spotify downloads into files you own.
**You do not need to leave your computer on all day.** It must be awake, with Navidrome running, while you stream or download from it. Once tracks are downloaded in Tempus, your phone can play them without your computer or an internet connection.
If all you need is music on one phone, copying files by USB into a local player is simpler. Use this guide when you want a central collection and access from several devices.
### What you need
- A Windows computer, an Android phone, and your trusted home network.
- Space for music on both devices; a separate drive for backups is strongly recommended.
- At least one DRM-free MP3 or FLAC album for testing. Software is free; music, storage and electricity may cost money.
- Permission to install software. On an institutional computer, check with its administrator.
**Scope:** Windows + Android, a manual portable installation, and home-network access. Remote internet streaming is outside this first edition.
## 1. Get music you can keep
Buy DRM-free downloads from artists or labels, or download music they explicitly offer for free. Bandcamp is another source of downloadable purchases, although it remains a corporate marketplace. Download the actual files instead of relying only on an app’s offline cache.
Choose **FLAC** for a lossless master copy. MP3 is smaller and widely compatible. A large soundtrack can take several gigabytes in FLAC. WAV and AIFF are normally much larger than FLAC for equivalent audio content.
Extract the album ZIP and keep its tracks and cover art together. A useful folder arrangement is artist → album → tracks. Keep a backup: one copy on an external drive is still only one copy.
**Checkpoint:** you can find actual `.flac` or `.mp3` files in File Explorer.
## 2. Download Navidrome
Open Settings → System → About and check System type. On an x64 Intel or AMD computer, download the stable asset ending in `windows_amd64.zip` from the [official releases](https://github.com/navidrome/navidrome/releases/latest). AMD64 means x64, including Intel. For ARM or 32-bit Windows, consult the [Windows instructions](https://www.navidrome.org/docs/installation/windows/) before choosing a build.
Press Windows + R, type `%USERPROFILE%`, and open your user folder. Create `Navidrome`, extract the ZIP there, and create two subfolders named `music` and `data`. Keep the application, music and database distinct. Do not start the application yet.
Turn on File Explorer → View → Show → File name extensions (Windows 11), or View → File name extensions (Windows 10). You should see `navidrome.exe`.
### Install FFmpeg
Navidrome’s installation documentation calls for FFmpeg, used for format conversion. Open the [official FFmpeg download page](https://ffmpeg.org/download.html), choose Windows, and follow a linked Windows build provider. Extract the build and locate `bin\ffmpeg.exe`. Copy that executable into your `Navidrome` folder; keep any accompanying files if the chosen build requires them. Use a static build if available. Keep its licence information too.
Do not disable Windows security to make a download run. Check the source and any available checksums; if Windows blocks it, investigate the specific warning first.
**Checkpoint:** the Navidrome folder contains `navidrome.exe`, `ffmpeg.exe`, `music` and `data`.
## 3. Configure it before running
Open Notepad, paste the following, and save inside `Navidrome` as `navidrome.toml`. In Save As, select All files. Check it is not named `navidrome.toml.txt`.
```toml
MusicFolder = './music'
DataFolder = './data'
Address = '127.0.0.1'
Port = 4533
EnableInsightsCollector = false
Deezer.Enabled = false
LastFM.Enabled = false
ListenBrainz.Enabled = false
```
Add this line if you copied FFmpeg beside Navidrome:
```toml
FFmpegPath = './ffmpeg.exe'
```
This starts with access limited to the computer and turns off usage reporting and the listed music-service integrations. It does not make every part of Windows or your network private. Configuration details are in the [official reference](https://www.navidrome.org/docs/usage/configuration/options/).
## 4. Start and test on Windows
In File Explorer, open your Navidrome folder. Click the address bar, type `powershell`, and press Enter. Use an ordinary PowerShell window, not an administrator window.
```powershell
.\navidrome.exe --configfile .\navidrome.toml
```
Keep the window open. If a firewall prompt appears, cancel it for this computer-only stage. Open `http://127.0.0.1:4533` in your computer’s browser and create the first administrator account with a unique password. Save it privately in your password manager.
Copy one extracted album into `music`. Use Navidrome’s scan/rescan control, then open Albums or Songs and play a track. An empty library before adding music is normal.
**Checkpoint:** a track plays on Windows. If not, use the troubleshooting section before continuing.
## 5. Install Tempus on Android
On your phone, download the F-Droid client from [f-droid.org](https://f-droid.org/). Open its APK. If Android asks, temporarily allow your browser to install apps from this source; turn that browser permission off after installation.
Open F-Droid, wait for its catalogue to update, then search for **Tempus by eddyizm**. Compare it with the [official F-Droid listing](https://f-droid.org/en/packages/com.eddyizm.degoogled.tempus/). Install Tempus, allowing F-Droid to install apps when Android asks. Open Tempus and stop at Add server.
Tempus is a separate client for your server. It does not need a Spotify account. Its F-Droid build omits Google-dependent Android Auto and Chromecast support; consult its project if those features matter to you.
## 6. Connect only on your home network
Use your own trusted home network, not university, work, public or guest Wi-Fi. Your computer may use Ethernet and your phone Wi-Fi on the same router. Leave the router’s port-forwarding settings untouched. This walkthrough uses HTTP without transport encryption, so it is unsuitable for untrusted networks or public internet exposure.
In Windows network settings, set **only this trusted home connection** to Private. In a new PowerShell window, run:
```powershell
ipconfig
```
Find IPv4 Address under the active Wi-Fi or Ethernet adapter. Ignore disconnected and VPN adapters. We use **192.168.1.100 as an example** below: replace every occurrence with your actual address. A local address is not a password, but there is no need to publish yours.
Stop Navidrome using Ctrl + C. Edit `navidrome.toml`, replacing its Address line:
```toml
Address = '192.168.1.100'
```
Now open a separate PowerShell window **as administrator** and run the rule below, after substituting your computer’s actual address. It allows inbound TCP port 4533 only on the Private profile, from the local subnet, at that address.
```powershell
New-NetFirewallRule -DisplayName "Navidrome - Home" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 4533 -LocalAddress 192.168.1.100 -RemoteAddress LocalSubnet -Profile Private
```
Close the administrator window. Restart Navidrome with the command in step 4 from its folder in ordinary PowerShell. On the phone’s browser, visit `http://192.168.1.100:4533`, substituting your address. Use that address on Windows too: the old loopback address will no longer connect with this binding.
**Checkpoint:** the phone displays the login page. Keep the firewall enabled. If this fails, check the troubleshooting section rather than opening access to every network.
## 7. Sign in and listen in Tempus
For daily listening, use a separate **non-administrator Navidrome user**. Sign in as administrator on Windows, open user management and create that user. Keep your administrator account for maintenance.
In Tempus → Add server, set any display name, your server URL (for example `http://192.168.1.100:4533`), and the listening user’s username and password. Choose Navidrome or Subsonic/OpenSubsonic if asked for a server type. No cloud account is required. Leave optional scrobbling services disconnected unless you want them.
Open an album and play a track. Streaming still requires the computer to be awake and running Navidrome.
**Checkpoint:** a track plays through Tempus while connected to home Wi-Fi.
## 8. Download and prove it works offline
Open the album or playlist menu in Tempus and choose Download. Wait until all intended tracks finish; a song you merely streamed may only be cached. Check available phone storage. FLAC originals can be large; smaller converted downloads need working FFmpeg and suitable server/client settings. Test one track before changing the whole collection.
Enable airplane mode and explicitly switch Wi-Fi off too. Open Tempus’s Downloads or offline view, browse an album, and play several tracks you did not just stream. Check the start, middle and end of a long album.
**Checkpoint:** those tracks play with no connection. You can now stop Navidrome and switch off the computer. Clearing Tempus’s app data or uninstalling it can remove the downloads.
If searching does not work offline, browse downloaded albums directly. Offline search behaviour can vary between app versions.
## 9. Playlists and everyday use
While connected to your server, use a track’s menu → Add to playlist → New playlist, or edit a playlist in Navidrome. Creating a playlist does not download its tracks. Download it separately and test its availability offline; editing server playlists generally needs a connection.
For downloaded music, simply open Tempus. F-Droid does not need to stay open; keep it installed for updates. For streaming, adding downloads or changing server playlists, start Navidrome and reconnect at home.
To stop Navidrome, press Ctrl + C in its window, then close it. To start it again, open PowerShell in its folder and run the command from step 4. This manual setup does not start automatically with Windows.
## 10. External drives, changes and backups
You can keep the music on an external drive while leaving Navidrome and `data` on the computer. **Copy first**, check the new files, stop Navidrome, and change MusicFolder to the actual path, for example:
```toml
MusicFolder = 'E:\Music'
```
Restart and scan. Keep the drive connected during streaming or downloads. A missing drive is not a reason to purge missing tracks. Windows drive letters can change; use Disk Management to assign a stable available letter if needed, without formatting the drive.
After moving tracks inside the configured library, scan again. Navidrome normally attempts to recognise moved files. Deleting or moving files outside the library can leave missing entries. Phone downloads are separate: do not assume a server refresh deletes them. Remove unwanted offline copies explicitly; playlist-sync settings may alter download behaviour.
Back up your music, configuration and database. For this manual setup, stop Navidrome before copying the whole `data` folder and `navidrome.toml` to a separate backup device. Keep that backup private because it contains account information. Phone downloads are useful copies, not a complete server backup. Back up before updating Navidrome and review its release notes.
## Troubleshooting
### Nothing opens or the server stops
Read the last error in PowerShell. Run the command from the correct folder. If it reports FFmpeg missing, check `FFmpegPath` and the executable. If port 4533 is already in use, check whether another Navidrome window is running before changing ports.
### The address stopped working after a restart
Run `ipconfig` again. Your router may have assigned a new address. A DHCP reservation in your own router can keep it stable; consult its manual. If it changed, update Address, the firewall rule’s local address, and the URL in Tempus. To replace our rule, remove it in administrator PowerShell with the command below, then recreate it using step 6 and the new address.
```powershell
Remove-NetFirewallRule -DisplayName 'Navidrome - Home'
```
If you are away from home, the configured home address may not exist on that connection. Use phone downloads. For computer-only listening, stop Navidrome, restore Address to `127.0.0.1`, restart, and use the loopback URL.
### The phone cannot connect
Check that both devices use the main home network, Windows marks it Private, Navidrome is running, the address is current, and guest isolation is not separating the devices. Verify the scoped firewall rule; do not disable the firewall or add router port forwarding. VPNs can affect connectivity.
### An album is missing or a track will not play
Extract ZIPs, check MusicFolder and file permissions, run a scan, and inspect logs. Check audio tags if an album is filed under an unexpected artist. Verify FFmpeg for conversion problems. After repeated failed logins, wait before retrying rather than disabling the login limiter.
### A download works but searching does not
Browse Downloads directly and verify the complete album was downloaded. Do not assume a failed offline search means the audio is missing. Reconnect to the server for operations that need it.
## Why this guide exists
This project grew out of reading **Technofeudalism: What Killed Capitalism**, by **Yanis Varoufakis**. His critique of the power of digital platforms prompted a practical question: how can we make everyday life less dependent on services that rent us access?
For this project, the answer begins with music: keep the files, support the people who make it, use tools you can change, and share what you learn. This is one small experiment in digital autonomy, not a claim that changing a music player solves a political system.
Our solarpunk direction is hopeful and practical: use devices you already have, keep an offline collection, support independent artists, and make useful knowledge available in several languages. You can participate without agreeing with every argument in the book.
**Curious about the ideas behind the guide? Ask for Varoufakis’s book at your nearest independent bookshop or borrow it from your local library. If it is not on the shelf, ask whether they can order it or arrange a loan.**
Reading can be a starting point. Building and sharing alternatives is something we can do together.
## Sources and project notes
This is an independent community guide, not an official Navidrome, Tempus, Bandcamp or Spotify publication. No music files are distributed here. Buttons may have different labels in your language or app version.
The site adds no analytics, advertising, remote fonts or third-party scripts. Hosting and external sites have their own data practices. Keep the downloaded site folder together to read it offline. The three languages cover the same workflow; report corrections through the repository.
Official references: [Navidrome installation](https://www.navidrome.org/docs/installation/), [first use](https://www.navidrome.org/docs/getting-started/), [configuration](https://www.navidrome.org/docs/usage/configuration/options/), [security](https://www.navidrome.org/docs/usage/admin/security/), [missing files](https://www.navidrome.org/docs/usage/library/missing-files/), [FFmpeg](https://ffmpeg.org/download.html), [Tempus](https://github.com/eddyizm/tempus), [Tempus usage](https://eddyizm.github.io/tempus/USAGE.html), [F-Droid](https://f-droid.org/en/packages/com.eddyizm.degoogled.tempus/), [Windows firewall rule](https://learn.microsoft.com/en-us/powershell/module/netsecurity/new-netfirewallrule), and [Bandcamp download formats](https://get.bandcamp.help/en/articles/15263234-in-which-formats-can-i-download-my-purchases).
Last updated: 16 October 2026. Button names may vary between app versions.
