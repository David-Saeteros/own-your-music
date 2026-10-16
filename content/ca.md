# La teva música. Els teus fitxers.

## Abans de començar
Pots conservar la música sense llogar l’accés a un catàleg. Aquesta guia t’ajuda a reunir fitxers d’àudio, organitzar-los amb Navidrome a Windows i escoltar-los amb Tempus a Android. Tu hi poses la música: aquestes aplicacions no inclouen el catàleg de Spotify ni converteixen les seves descàrregues en fitxers propis.
**No cal deixar l’ordinador encès tot el dia.** Ha d’estar actiu, amb Navidrome obert, mentre hi accedeixes per reproduir música o descarregar-la al mòbil. Un cop descarregades les cançons a Tempus, les pots escoltar sense ordinador ni internet.
Si només vols música en un mòbil, copiar els fitxers per USB i utilitzar un reproductor local és més senzill. Aquesta guia té sentit si vols una col·lecció central i accés des de diversos dispositius.
### Què necessites
- Un ordinador Windows, un mòbil Android i la teva xarxa domèstica de confiança.
- Espai per a la música als dos dispositius; és molt recomanable una altra unitat per a les còpies de seguretat.
- Com a mínim un àlbum MP3 o FLAC sense DRM per fer proves. Els programes són gratuïts; la música, l’emmagatzematge i l’electricitat poden tenir un cost.
- Permís per instal·lar programes. Si l’ordinador és institucional, consulta’n l’administrador.
**Abast:** Windows + Android, instal·lació portàtil manual i accés des de casa. Aquesta primera edició no configura accés per internet.
## 1. Aconsegueix música que puguis conservar
Compra descàrregues sense DRM a artistes o segells, o descarrega música que ofereixin expressament de franc. Bandcamp també permet comprar fitxers descarregables, tot i que continua sent una plataforma empresarial. Descarrega els fitxers reals en lloc de dependre només de la memòria cau d’una aplicació.
Tria **FLAC** per conservar una còpia mestra sense pèrdua. MP3 ocupa menys i té una compatibilitat àmplia. Una banda sonora llarga pot ocupar diversos gigabytes en FLAC. WAV i AIFF acostumen a ocupar molt més que FLAC amb el mateix contingut d’àudio.
Extreu el ZIP de l’àlbum i conserva juntes les cançons i la portada. Una estructura útil és artista → àlbum → cançons. Fes una còpia de seguretat: una sola còpia en un disc extern continua sent una sola còpia.
**Comprovació:** trobes fitxers `.flac` o `.mp3` reals a l’Explorador.
## 2. Descarrega Navidrome
A Configuració → Sistema → Quant a, comprova el tipus de sistema. Si tens un processador Intel o AMD x64, descarrega el fitxer estable acabat en `windows_amd64.zip` des de les [versions oficials](https://github.com/navidrome/navidrome/releases/latest). AMD64 vol dir x64, també per a Intel. Per a Windows ARM o de 32 bits, consulta les [instruccions de Windows](https://www.navidrome.org/docs/installation/windows/) abans de triar.
Prem Windows + R, escriu `%USERPROFILE%` i obre la carpeta d’usuari. Crea `Navidrome`, extreu-hi el ZIP i crea dues subcarpetes anomenades `music` i `data`. Separa l’aplicació, la música i la base de dades. Encara no obris el programa.
Activa Explorador → Visualització → Mostra → Extensions de nom de fitxer (Windows 11), o Visualització → Extensions de nom de fitxer (Windows 10). Hi has de veure `navidrome.exe`.
### Instal·la FFmpeg
La documentació d’instal·lació de Navidrome demana FFmpeg per convertir formats. Obre la [pàgina oficial de FFmpeg](https://ffmpeg.org/download.html), tria Windows i segueix un dels enllaços a compilacions per a Windows. Extreu la descàrrega i localitza `bin\ffmpeg.exe`. Copia aquest executable a `Navidrome`; conserva els fitxers addicionals si aquella compilació els necessita. Si n’hi ha, utilitza una compilació estàtica. Conserva també la informació de llicència.
No desactivis la seguretat de Windows per executar una descàrrega. Comprova’n la procedència i les sumes de verificació disponibles; si Windows la bloqueja, investiga primer l’avís concret.
**Comprovació:** la carpeta conté `navidrome.exe`, `ffmpeg.exe`, `music` i `data`.
## 3. Configura abans d’executar
Obre el Bloc de notes, enganxa-hi el contingut següent i desa’l a `Navidrome` com a `navidrome.toml`. A Anomena i desa, selecciona Tots els fitxers. Comprova que no s’anomena `navidrome.toml.txt`.
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
Afegeix aquesta línia si has copiat FFmpeg al costat de Navidrome:
```toml
FFmpegPath = './ffmpeg.exe'
```
Això limita inicialment l’accés a l’ordinador i desactiva les estadístiques d’ús i les integracions musicals indicades. No fa privat tot Windows ni tota la xarxa. Consulta la [referència oficial](https://www.navidrome.org/docs/usage/configuration/options/) per als detalls.
## 4. Inicia i prova a Windows
Obre la carpeta Navidrome a l’Explorador. Prem la barra d’adreces, escriu `powershell` i prem Retorn. Utilitza una finestra normal, sense permisos d’administrador.
```powershell
.\navidrome.exe --configfile .\navidrome.toml
```
Deixa la finestra oberta. Si apareix una petició del tallafoc, cancel·la-la en aquesta fase local. Obre `http://127.0.0.1:4533` al navegador de l’ordinador i crea el primer compte d’administrador amb una contrasenya única. Desa-la de manera privada al gestor de contrasenyes.
Copia un àlbum extret a `music`. Executa l’escaneig des de Navidrome i obre Àlbums o Cançons per reproduir una pista. És normal que la biblioteca sigui buida abans d’afegir-hi música.
**Comprovació:** una cançó sona a Windows. Si no, consulta l’apartat de problemes abans de continuar.
## 5. Instal·la Tempus a Android
Al mòbil, descarrega F-Droid des de [f-droid.org](https://f-droid.org/). Obre l’APK. Si Android ho demana, permet temporalment que el navegador instal·li aplicacions d’aquell origen; desactiva aquest permís del navegador en acabar.
Obre F-Droid, espera que actualitzi el catàleg i cerca **Tempus, d’eddyizm**. Compara’l amb la [fitxa de F-Droid](https://f-droid.org/en/packages/com.eddyizm.degoogled.tempus/). Instal·la Tempus i permet que F-Droid instal·li aplicacions quan Android ho demani. Obre Tempus i atura’t a Afegeix un servidor.
Tempus és un client independent per al teu servidor. No necessita un compte de Spotify. La versió de F-Droid omet Android Auto i Chromecast, que depenen de biblioteques de Google; consulta el projecte si necessites aquestes funcions.
## 6. Connecta només des de la xarxa domèstica
Utilitza la teva xarxa domèstica de confiança, no la de la universitat, la feina, una xarxa pública ni la de convidats. L’ordinador pot utilitzar Ethernet i el mòbil la Wi-Fi del mateix encaminador. No canviïs el reenviament de ports de l’encaminador. Aquest procediment utilitza HTTP sense xifratge de transport: no és adequat per a xarxes no fiables ni per exposar el servidor a internet.
A la configuració de xarxa de Windows, marca **només aquesta connexió domèstica de confiança** com a Privada. En una altra finestra de PowerShell, executa:
```powershell
ipconfig
```
Busca Adreça IPv4 a l’adaptador Wi-Fi o Ethernet actiu. Ignora els adaptadors desconnectats o de VPN. **192.168.1.100 és un exemple**: substitueix-ne totes les aparicions per l’adreça real. Una adreça local no és una contrasenya, però no cal publicar-la.
Atura Navidrome amb Ctrl + C. Edita `navidrome.toml` i substitueix la línia Address:
```toml
Address = '192.168.1.100'
```
Obre una altra finestra de PowerShell **com a administrador** i executa aquesta regla després de substituir l’adreça d’exemple. Permet connexions entrants al port TCP 4533 només amb el perfil Privat, des de la subxarxa local i cap a aquesta adreça.
```powershell
New-NetFirewallRule -DisplayName "Navidrome - Home" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 4533 -LocalAddress 192.168.1.100 -RemoteAddress LocalSubnet -Profile Private
```
Tanca la finestra d’administrador. Reinicia Navidrome amb l’ordre del pas 4 des de la seva carpeta en un PowerShell normal. Al navegador del mòbil, obre `http://192.168.1.100:4533` amb l’adreça real. Utilitza-la també a Windows: amb aquesta configuració, l’adreça local anterior ja no respondrà.
**Comprovació:** el mòbil mostra la pàgina d’accés. Mantén el tallafoc activat. Si falla, consulta els problemes abans d’obrir l’accés a totes les xarxes.
## 7. Entra i escolta amb Tempus
Per escoltar música cada dia, utilitza un **usuari de Navidrome sense permisos d’administrador**. Entra com a administrador des de Windows, obre la gestió d’usuaris i crea’l. Reserva el compte d’administrador per al manteniment.
A Tempus → Afegeix un servidor, introdueix el nom que vulguis, l’URL del servidor (per exemple `http://192.168.1.100:4533`) i les credencials de l’usuari per escoltar música. Si et demana el tipus, tria Navidrome o Subsonic/OpenSubsonic. No necessites un compte al núvol. Deixa desconnectats els serveis opcionals de registre d’escoltes, tret que els vulguis fer servir.
Obre un àlbum i reprodueix una cançó. Per reproduir des del servidor, l’ordinador ha de continuar actiu i executant Navidrome.
**Comprovació:** Tempus reprodueix una cançó mentre està connectat a la Wi-Fi de casa.
## 8. Descarrega i comprova sense connexió
Obre el menú d’un àlbum o una llista a Tempus i tria Descarrega. Espera que acabin totes les cançons: una pista que només hagis reproduït pot ser únicament a la memòria cau. Comprova l’espai lliure. Els FLAC poden ser grans; per descarregar versions convertides més petites calen FFmpeg i els ajustos adequats del servidor i del client. Prova una cançó abans de canviar tota la col·lecció.
Activa el mode avió i desactiva també la Wi-Fi. Entra a Descàrregues o a la vista sense connexió de Tempus, navega fins a l’àlbum i reprodueix diverses pistes que no acabis d’escoltar. Si és llarg, comprova’n el principi, la meitat i el final.
**Comprovació:** aquestes cançons sonen sense connexió. Ja pots aturar Navidrome i apagar l’ordinador. Esborrar les dades de Tempus o desinstal·lar-lo pot eliminar les descàrregues.
Si la cerca no funciona sense connexió, navega directament pels àlbums descarregats. El funcionament de la cerca sense connexió pot variar segons la versió de l’aplicació.
## 9. Llistes i ús diari
Amb connexió al servidor, utilitza el menú d’una cançó → Afegeix a una llista → Llista nova, o edita una llista a Navidrome. Crear una llista no descarrega les cançons. Descarrega-la per separat i comprova que la pots obrir sense connexió; editar llistes del servidor acostuma a requerir connexió.
Per escoltar les descàrregues, només cal obrir Tempus. F-Droid no ha de continuar obert; conserva’l per actualitzar. Per reproduir des del servidor, afegir descàrregues o modificar llistes, inicia Navidrome i connecta des de casa.
Per aturar Navidrome, prem Ctrl + C a la seva finestra i tanca-la. Per tornar-lo a iniciar, obre PowerShell a la seva carpeta i executa l’ordre del pas 4. Aquesta instal·lació manual no s’inicia automàticament amb Windows.
## 10. Discos externs, canvis i còpies
Pots desar la música en un disc extern i mantenir Navidrome i `data` a l’ordinador. **Primer copia**, comprova els fitxers, atura Navidrome i canvia MusicFolder per la ruta real, per exemple:
```toml
MusicFolder = 'E:\Music'
```
Reinicia i escaneja. El disc ha d’estar connectat mentre hi accedeixes per reproduir o descarregar. Si falta el disc, no purguis les cançons absents. Les lletres d’unitat poden canviar: si cal, assigna una lletra disponible estable amb Administració de discos, sense formatar.
Després de moure pistes dins la biblioteca configurada, torna a escanejar. Navidrome intenta reconèixer els fitxers moguts. Esborrar-los o treure’ls de la biblioteca pot deixar entrades absents. Les descàrregues del mòbil són independents: no pressuposis que actualitzar el servidor les elimina. Esborra expressament les còpies sense connexió que no vulguis; els ajustos de sincronització de llistes poden modificar aquest comportament.
Fes còpies de la música, la configuració i la base de dades. En aquesta instal·lació manual, atura Navidrome abans de copiar tota la carpeta `data` i `navidrome.toml` a un altre dispositiu. Protegeix la còpia: conté informació dels comptes. Les descàrregues del mòbil no substitueixen una còpia completa del servidor. Fes una còpia abans d’actualitzar Navidrome i revisa les notes de la versió.
## Problemes freqüents
### No s’obre o el servidor s’atura
Llegeix l’últim error de PowerShell. Executa des de la carpeta correcta. Si falta FFmpeg, revisa `FFmpegPath` i l’executable. Si el port 4533 està ocupat, comprova si ja hi ha una altra finestra de Navidrome abans de canviar-lo.
### L’adreça deixa de funcionar després de reiniciar
Torna a executar `ipconfig`. L’encaminador pot haver assignat una altra adreça. Una reserva DHCP al teu encaminador pot mantenir-la estable; consulta’n el manual. Si canvia, actualitza Address, l’adreça local de la regla del tallafoc i l’URL de Tempus. Per substituir la nostra regla, elimina-la en PowerShell com a administrador amb aquesta ordre i torna-la a crear segons el pas 6 amb la nova adreça.
```powershell
Remove-NetFirewallRule -DisplayName 'Navidrome - Home'
```
Si ets fora de casa, aquesta adreça domèstica pot no existir a la connexió actual. Utilitza les descàrregues del mòbil. Per escoltar només a l’ordinador, atura Navidrome, torna a posar Address a `127.0.0.1`, reinicia i utilitza aquesta adreça local.
### El mòbil no connecta
Comprova que tots dos dispositius són a la xarxa domèstica principal, el perfil Privat de Windows, que Navidrome és actiu i l’adreça actual. La xarxa de convidats pot aïllar els dispositius. Revisa la regla limitada del tallafoc; no el desactivis ni obris ports a l’encaminador. Una VPN pot afectar la connexió.
### Falta un àlbum o no sona una cançó
Extreu els ZIP, comprova MusicFolder i els permisos, escaneja i revisa els registres. Mira les etiquetes si l’àlbum apareix sota un altre artista. Comprova FFmpeg si falla la conversió. Després de diversos accessos fallits, espera abans de tornar-hi; no desactivis el límit d’intents.
### Les descàrregues sonen però la cerca falla
Navega directament per Descàrregues i comprova que l’àlbum sigui complet. Una cerca fallida sense connexió no vol dir que falti l’àudio. Connecta al servidor per utilitzar les funcions que ho necessitin.
## Per què existeix aquesta guia
Aquest projecte va néixer de la lectura de **Technofeudalism: What Killed Capitalism**, de **Yanis Varoufakis**. La seva crítica al poder de les plataformes digitals ens va dur a una pregunta pràctica: com podem dependre menys, en la vida quotidiana, de serveis que ens lloguen l’accés?
Aquí comencem per la música: conservar els fitxers, donar suport a qui la crea, utilitzar eines que puguem canviar i compartir el que aprenem. És un petit experiment d’autonomia digital, no l’afirmació que canviar de reproductor resolgui un sistema polític.
La nostra orientació solarpunk és esperançadora i pràctica: aprofitar els dispositius que ja tenim, conservar una col·lecció sense connexió, donar suport a artistes independents i compartir coneixement útil en diverses llengües. Hi pots participar sense estar d’acord amb tots els arguments del llibre.
**T’interessen les idees que han inspirat la guia? Demana el llibre de Varoufakis a la llibreria independent més propera o busca’l a la biblioteca. Si no el tenen, pregunta si el poden encarregar o gestionar un préstec.**
La lectura pot ser un punt de partida. Construir i compartir alternatives és una cosa que podem fer plegats.
## Fonts i notes del projecte
Aquesta és una guia comunitària independent, no una publicació oficial de Navidrome, Tempus, Bandcamp ni Spotify. No distribueix música. Els noms dels botons poden variar segons l’idioma i la versió.
El lloc no afegeix analítica, publicitat, tipus de lletra remots ni scripts externs. L’allotjament i els llocs enllaçats tenen les seves pròpies pràctiques de dades. Conserva junta la carpeta del lloc descarregat per llegir-lo sense connexió. Els tres idiomes cobreixen el mateix procediment; comunica correccions al repositori.
Referències oficials: [instal·lació de Navidrome](https://www.navidrome.org/docs/installation/), [primer ús](https://www.navidrome.org/docs/getting-started/), [configuració](https://www.navidrome.org/docs/usage/configuration/options/), [seguretat](https://www.navidrome.org/docs/usage/admin/security/), [fitxers absents](https://www.navidrome.org/docs/usage/library/missing-files/), [FFmpeg](https://ffmpeg.org/download.html), [Tempus](https://github.com/eddyizm/tempus), [ús de Tempus](https://eddyizm.github.io/tempus/USAGE.html), [F-Droid](https://f-droid.org/en/packages/com.eddyizm.degoogled.tempus/), [regles del tallafoc](https://learn.microsoft.com/en-us/powershell/module/netsecurity/new-netfirewallrule) i [formats de Bandcamp](https://get.bandcamp.help/en/articles/15263234-in-which-formats-can-i-download-my-purchases).
Última actualització: 16 d’octubre de 2026. Els noms dels botons poden variar segons la versió de les aplicacions.
