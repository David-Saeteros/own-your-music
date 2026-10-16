"use strict";
window.OYM_DATA = {
  "steps": [
    {
      "id": "welcome",
      "titles": [
        "Start with what you have",
        "Empieza con lo que tienes",
        "Comença amb el que tens"
      ],
      "intros": [
        "We will build a music library on Windows and take it offline on Android.",
        "Vamos a crear una biblioteca en Windows y llevarla sin conexión a Android.",
        "Crearem una biblioteca a Windows i la portarem sense connexió a Android."
      ],
      "actions": [
        [
          "Have your Windows computer, Android phone and trusted home network ready.",
          "You supply DRM-free music. Navidrome does not include a catalogue.",
          "Your computer only needs to stay awake while streaming or downloading from it."
        ],
        [
          "Ten a mano tu ordenador Windows, tu móvil Android y tu red doméstica de confianza.",
          "Tú aportas música sin DRM. Navidrome no incluye un catálogo.",
          "El ordenador solo necesita estar activo mientras reproduces o descargas desde él."
        ],
        [
          "Tingues a mà l’ordinador Windows, el mòbil Android i la xarxa domèstica de confiança.",
          "Tu hi poses música sense DRM. Navidrome no inclou cap catàleg.",
          "L’ordinador només ha d’estar actiu mentre hi accedeixes per reproduir o descarregar."
        ]
      ],
      "checks": [
        "I understand when the computer needs to be on.",
        "Entiendo cuándo debe estar encendido el ordenador.",
        "Entenc quan ha d’estar encès l’ordinador."
      ],
      "helps": [
        "For music on just one phone, a USB transfer and a local player may be enough.",
        "Para escuchar solo en un móvil, puede bastar con copiar por USB y usar un reproductor local.",
        "Per escoltar només en un mòbil, pot ser suficient copiar per USB i utilitzar un reproductor local."
      ],
      "code": null,
      "ref": 1,
      "kind": null
    },
    {
      "id": "music",
      "titles": [
        "Get one album",
        "Consigue un álbum",
        "Aconsegueix un àlbum"
      ],
      "intros": [
        "A small first collection makes setup easier.",
        "Una colección pequeña facilita la primera prueba.",
        "Una col·lecció petita facilita la primera prova."
      ],
      "actions": [
        [
          "Obtain a DRM-free download from an artist or label.",
          "Choose FLAC for a lossless master, or MP3 to use less space.",
          "Extract the ZIP. Keep the tracks and artwork together."
        ],
        [
          "Consigue una descarga sin DRM de un artista o sello.",
          "Elige FLAC como copia sin pérdida o MP3 para ocupar menos.",
          "Extrae el ZIP y conserva juntas las canciones y la portada."
        ],
        [
          "Aconsegueix una descàrrega sense DRM d’un artista o segell.",
          "Tria FLAC com a còpia sense pèrdua o MP3 per ocupar menys.",
          "Extreu el ZIP i conserva juntes les cançons i la portada."
        ]
      ],
      "checks": [
        "I can see actual MP3 or FLAC files.",
        "Veo archivos MP3 o FLAC reales.",
        "Veig fitxers MP3 o FLAC reals."
      ],
      "helps": [
        "Spotify’s offline downloads are not ordinary music files. You can buy downloadable music on Bandcamp, too.",
        "Las descargas sin conexión de Spotify no son archivos de música normales. Bandcamp también vende música descargable.",
        "Les descàrregues sense connexió de Spotify no són fitxers de música normals. Bandcamp també ven música descarregable."
      ],
      "code": null,
      "ref": 2,
      "kind": null
    },
    {
      "id": "download",
      "titles": [
        "Download Navidrome",
        "Descarga Navidrome",
        "Descarrega Navidrome"
      ],
      "intros": [
        "Choose a build that matches your computer.",
        "Elige la descarga adecuada para tu ordenador.",
        "Tria la descàrrega adequada per a l’ordinador."
      ],
      "actions": [
        [
          "Check Settings → System → About → System type.",
          "For an x64 Intel or AMD processor, download windows_amd64.zip from the official stable release.",
          "For ARM or 32-bit Windows, check the official Windows instructions before continuing."
        ],
        [
          "Mira Configuración → Sistema → Acerca de → Tipo de sistema.",
          "Para Intel o AMD x64, descarga windows_amd64.zip de la versión estable oficial.",
          "Para Windows ARM o de 32 bits, consulta antes las instrucciones oficiales de Windows."
        ],
        [
          "Mira Configuració → Sistema → Quant a → Tipus de sistema.",
          "Per a Intel o AMD x64, descarrega windows_amd64.zip de la versió estable oficial.",
          "Per a Windows ARM o de 32 bits, consulta abans les instruccions oficials de Windows."
        ]
      ],
      "checks": [
        "I have the correct Navidrome ZIP.",
        "Tengo el ZIP correcto de Navidrome.",
        "Tinc el ZIP correcte de Navidrome."
      ],
      "helps": [
        "AMD64 also works on Intel x64. Use official sources and investigate security warnings; do not disable protection.",
        "AMD64 también sirve para Intel x64. Usa fuentes oficiales e investiga los avisos de seguridad; no desactives la protección.",
        "AMD64 també serveix per a Intel x64. Utilitza fonts oficials i investiga els avisos de seguretat; no desactivis la protecció."
      ],
      "code": null,
      "ref": 3,
      "kind": "download"
    },
    {
      "id": "folders",
      "titles": [
        "Make a home for the collection",
        "Prepara las carpetas",
        "Prepara les carpetes"
      ],
      "intros": [
        "Keep the program, audio and database organised.",
        "Separa el programa, el audio y la base de datos.",
        "Separa el programa, l’àudio i la base de dades."
      ],
      "actions": [
        [
          "Press Windows + R, enter %USERPROFILE%, and create a Navidrome folder.",
          "Extract the Navidrome ZIP into it. Create music and data subfolders there.",
          "Enable file name extensions in File Explorer. Do not run Navidrome yet."
        ],
        [
          "Pulsa Windows + R, escribe %USERPROFILE% y crea una carpeta Navidrome.",
          "Extrae allí el ZIP de Navidrome. Crea dentro las subcarpetas music y data.",
          "Activa las extensiones de nombre de archivo en el Explorador. No ejecutes Navidrome todavía."
        ],
        [
          "Prem Windows + R, escriu %USERPROFILE% i crea una carpeta Navidrome.",
          "Extreu-hi el ZIP de Navidrome. Crea-hi les subcarpetes music i data.",
          "Activa les extensions de nom de fitxer a l’Explorador. Encara no executis Navidrome."
        ]
      ],
      "checks": [
        "I see navidrome.exe, music and data together.",
        "Veo navidrome.exe, music y data juntos.",
        "Veig navidrome.exe, music i data junts."
      ],
      "helps": [
        "Use Extract All; do not work from inside the ZIP. In Windows 11, file extensions are under View → Show.",
        "Usa Extraer todo; no trabajes desde dentro del ZIP. En Windows 11, las extensiones están en Ver → Mostrar.",
        "Utilitza Extreu-ho tot; no treballis des de dins del ZIP. A Windows 11, les extensions són a Visualització → Mostra."
      ],
      "code": null,
      "ref": 3,
      "kind": null
    },
    {
      "id": "ffmpeg",
      "titles": [
        "Add FFmpeg",
        "Añade FFmpeg",
        "Afegeix FFmpeg"
      ],
      "intros": [
        "This tool lets the server convert audio formats when needed.",
        "Esta herramienta permite convertir formatos cuando hace falta.",
        "Aquesta eina permet convertir formats quan cal."
      ],
      "actions": [
        [
          "Open FFmpeg’s official download page and follow a listed Windows build provider.",
          "Download and extract a static Windows build matching your computer.",
          "Copy bin/ffmpeg.exe beside navidrome.exe; keep its licence information."
        ],
        [
          "Abre la página oficial de FFmpeg y sigue uno de sus enlaces a compilaciones para Windows.",
          "Descarga y extrae una compilación estática para tu ordenador.",
          "Copia bin/ffmpeg.exe junto a navidrome.exe y conserva la información de licencia."
        ],
        [
          "Obre la pàgina oficial de FFmpeg i segueix un dels enllaços a compilacions per a Windows.",
          "Descarrega i extreu una compilació estàtica per a l’ordinador.",
          "Copia bin/ffmpeg.exe al costat de navidrome.exe i conserva la informació de llicència."
        ]
      ],
      "checks": [
        "ffmpeg.exe is beside navidrome.exe.",
        "ffmpeg.exe está junto a navidrome.exe.",
        "ffmpeg.exe és al costat de navidrome.exe."
      ],
      "helps": [
        "A static build avoids separate DLL dependencies. If you chose a shared build, keep the required companion files.",
        "Una compilación estática evita depender de DLL separadas. Si elegiste una compartida, conserva los archivos adicionales necesarios.",
        "Una compilació estàtica evita dependre de DLL separades. Si n’has triat una de compartida, conserva els fitxers addicionals necessaris."
      ],
      "code": null,
      "ref": 3,
      "kind": "ffmpeg"
    },
    {
      "id": "config",
      "titles": [
        "Start privately",
        "Empieza en local",
        "Comença en local"
      ],
      "intros": [
        "Create the settings before launching the server.",
        "Crea la configuración antes de iniciar el servidor.",
        "Crea la configuració abans d’iniciar el servidor."
      ],
      "actions": [
        [
          "Paste this into Notepad.",
          "Save it in the Navidrome folder as navidrome.toml; choose All files in Save As.",
          "Check the name does not end in .txt."
        ],
        [
          "Pega este contenido en el Bloc de notas.",
          "Guárdalo en Navidrome como navidrome.toml; elige Todos los archivos al guardar.",
          "Comprueba que el nombre no termine en .txt."
        ],
        [
          "Enganxa aquest contingut al Bloc de notes.",
          "Desa’l a Navidrome com a navidrome.toml; tria Tots els fitxers en desar.",
          "Comprova que el nom no acabi en .txt."
        ]
      ],
      "checks": [
        "navidrome.toml is saved beside the application.",
        "navidrome.toml está guardado junto a la aplicación.",
        "navidrome.toml és al costat de l’aplicació."
      ],
      "helps": [
        "127.0.0.1 restricts access to this computer. The listed integrations and usage reporting are switched off.",
        "127.0.0.1 limita el acceso a este ordenador. Se desactivan las integraciones indicadas y las estadísticas de uso.",
        "127.0.0.1 limita l’accés a aquest ordinador. Es desactiven les integracions indicades i les estadístiques d’ús."
      ],
      "code": "MusicFolder = './music'\nDataFolder = './data'\nAddress = '127.0.0.1'\nPort = 4533\nFFmpegPath = './ffmpeg.exe'\nEnableInsightsCollector = false\nDeezer.Enabled = false\nLastFM.Enabled = false\nListenBrainz.Enabled = false",
      "ref": 4,
      "kind": null
    },
    {
      "id": "start",
      "titles": [
        "Launch the server",
        "Inicia el servidor",
        "Inicia el servidor"
      ],
      "intros": [
        "An ordinary PowerShell window is enough.",
        "Basta con una ventana normal de PowerShell.",
        "N’hi ha prou amb una finestra normal de PowerShell."
      ],
      "actions": [
        [
          "Open the Navidrome folder in File Explorer. Type powershell in its address bar and press Enter.",
          "Run this command and keep the window open.",
          "Cancel any firewall-access prompt for this computer-only test."
        ],
        [
          "Abre Navidrome en el Explorador. Escribe powershell en la barra de direcciones y pulsa Intro.",
          "Ejecuta este comando y deja la ventana abierta.",
          "Cancela cualquier petición de acceso del cortafuegos en esta prueba local."
        ],
        [
          "Obre Navidrome a l’Explorador. Escriu powershell a la barra d’adreces i prem Retorn.",
          "Executa aquesta ordre i deixa la finestra oberta.",
          "Cancel·la qualsevol petició d’accés del tallafoc en aquesta prova local."
        ]
      ],
      "checks": [
        "The server stays running without a fatal error.",
        "El servidor sigue activo sin errores que lo detengan.",
        "El servidor continua actiu sense errors que l’aturin."
      ],
      "helps": [
        "Check the folder and config filename. If FFmpeg is missing, check its path. Do not run the server as administrator.",
        "Revisa la carpeta y el nombre de la configuración. Si falta FFmpeg, revisa su ruta. No ejecutes el servidor como administrador.",
        "Revisa la carpeta i el nom de la configuració. Si falta FFmpeg, revisa’n la ruta. No executis el servidor com a administrador."
      ],
      "code": ".\\navidrome.exe --configfile .\\navidrome.toml",
      "ref": 5,
      "kind": null
    },
    {
      "id": "account",
      "titles": [
        "Create your private login",
        "Crea tu acceso",
        "Crea el teu accés"
      ],
      "intros": [
        "The first account administers your own server.",
        "La primera cuenta administra tu propio servidor.",
        "El primer compte administra el teu servidor."
      ],
      "actions": [
        [
          "On Windows, open http://127.0.0.1:4533 in your browser.",
          "Create the administrator account with a unique password.",
          "Save it privately in a password manager. Never paste it into this guide."
        ],
        [
          "En Windows, abre http://127.0.0.1:4533 en el navegador.",
          "Crea la cuenta de administrador con una contraseña única.",
          "Guárdala en un gestor de contraseñas. Nunca la pegues en esta guía."
        ],
        [
          "A Windows, obre http://127.0.0.1:4533 al navegador.",
          "Crea el compte d’administrador amb una contrasenya única.",
          "Desa-la en un gestor de contrasenyes. No l’enganxis mai en aquesta guia."
        ]
      ],
      "checks": [
        "I can see the Navidrome library.",
        "Veo la biblioteca de Navidrome.",
        "Veig la biblioteca de Navidrome."
      ],
      "helps": [
        "An empty library is normal. If the page will not open, check the PowerShell window for errors and confirm the server is running.",
        "Una biblioteca vacía es normal. Si no se abre la página, revisa los errores de PowerShell y que el servidor siga activo.",
        "Una biblioteca buida és normal. Si la pàgina no s’obre, revisa els errors de PowerShell i que el servidor continuï actiu."
      ],
      "code": null,
      "ref": 5,
      "kind": null
    },
    {
      "id": "play-pc",
      "titles": [
        "Play your first track",
        "Escucha la primera canción",
        "Escolta la primera cançó"
      ],
      "intros": [
        "Confirm the music works before adding the phone.",
        "Comprueba la música antes de añadir el móvil.",
        "Comprova la música abans d’afegir el mòbil."
      ],
      "actions": [
        [
          "Copy the extracted album into music.",
          "In Navidrome, run a scan, then open Albums or Songs.",
          "Play one track."
        ],
        [
          "Copia el álbum extraído dentro de music.",
          "En Navidrome, ejecuta un escaneo y abre Álbumes o Canciones.",
          "Reproduce una pista."
        ],
        [
          "Copia l’àlbum extret dins de music.",
          "A Navidrome, executa un escaneig i obre Àlbums o Cançons.",
          "Reprodueix una pista."
        ]
      ],
      "checks": [
        "Music plays on my computer.",
        "La música suena en el ordenador.",
        "La música sona a l’ordinador."
      ],
      "helps": [
        "Check the files are extracted, not still in a ZIP. Check MusicFolder, audio tags and logs if the album is missing.",
        "Comprueba que los archivos estén extraídos. Si falta el álbum, revisa MusicFolder, las etiquetas y los registros.",
        "Comprova que els fitxers estiguin extrets. Si falta l’àlbum, revisa MusicFolder, les etiquetes i els registres."
      ],
      "code": null,
      "ref": 5,
      "kind": null
    },
    {
      "id": "tempus",
      "titles": [
        "Install your Android player",
        "Instala el reproductor Android",
        "Instal·la el reproductor Android"
      ],
      "intros": [
        "Tempus connects your phone to your own collection.",
        "Tempus conecta el móvil con tu colección.",
        "Tempus connecta el mòbil amb la col·lecció."
      ],
      "actions": [
        [
          "On Android, download and install F-Droid from f-droid.org.",
          "If required, temporarily allow the browser to install it; disable that browser permission afterward.",
          "Let F-Droid update, then install Tempus by eddyizm. Open Add server."
        ],
        [
          "En Android, descarga e instala F-Droid desde f-droid.org.",
          "Si hace falta, permite temporalmente que el navegador lo instale y desactiva después ese permiso.",
          "Deja actualizar F-Droid e instala Tempus, de eddyizm. Abre Añadir servidor."
        ],
        [
          "A Android, descarrega i instal·la F-Droid des de f-droid.org.",
          "Si cal, permet temporalment que el navegador l’instal·li i desactiva després aquest permís.",
          "Deixa actualitzar F-Droid i instal·la Tempus, d’eddyizm. Obre Afegeix un servidor."
        ]
      ],
      "checks": [
        "Tempus is installed and open.",
        "Tempus está instalado y abierto.",
        "Tempus està instal·lat i obert."
      ],
      "helps": [
        "Allow F-Droid to install apps when Android asks. Tempus needs no Spotify account. The F-Droid build omits Google-dependent Android Auto and Chromecast features.",
        "Permite instalar aplicaciones a F-Droid cuando Android lo pida. Tempus no necesita Spotify. La versión de F-Droid omite Android Auto y Chromecast dependientes de Google.",
        "Permet instal·lar aplicacions a F-Droid quan Android ho demani. Tempus no necessita Spotify. La versió de F-Droid omet Android Auto i Chromecast dependents de Google."
      ],
      "code": null,
      "ref": 6,
      "kind": "tempus"
    },
    {
      "id": "home",
      "titles": [
        "Use a trusted home network",
        "Usa tu red doméstica",
        "Utilitza la xarxa de casa"
      ],
      "intros": [
        "Keep this connection inside a network you trust.",
        "Limita esta conexión a una red de confianza.",
        "Limita aquesta connexió a una xarxa de confiança."
      ],
      "actions": [
        [
          "Connect both devices to your main home network; Ethernet on the computer is fine.",
          "In Windows network settings, mark only this trusted home connection Private.",
          "Do not use university, public or guest Wi-Fi for this setup. Leave router port forwarding unchanged."
        ],
        [
          "Conecta ambos dispositivos a tu red doméstica principal; el ordenador puede usar Ethernet.",
          "En Windows, marca solo esta conexión doméstica de confianza como Privada.",
          "No uses la Wi-Fi universitaria, pública ni de invitados. No cambies el reenvío de puertos del router."
        ],
        [
          "Connecta tots dos dispositius a la xarxa domèstica principal; l’ordinador pot utilitzar Ethernet.",
          "A Windows, marca només aquesta connexió domèstica de confiança com a Privada.",
          "No utilitzis la Wi-Fi universitària, pública ni de convidats. No canviïs el reenviament de ports de l’encaminador."
        ]
      ],
      "checks": [
        "Both devices are on my trusted home network.",
        "Ambos dispositivos están en mi red doméstica de confianza.",
        "Tots dos dispositius són a la xarxa domèstica de confiança."
      ],
      "helps": [
        "This walkthrough uses unencrypted HTTP inside your trusted network. It is not a public internet streaming setup. If you are away, pause here.",
        "Esta guía usa HTTP sin cifrar dentro de tu red de confianza. No configura acceso público por internet. Si estás fuera, pausa aquí.",
        "Aquesta guia utilitza HTTP sense xifrar dins la xarxa de confiança. No configura accés públic per internet. Si ets fora, atura’t aquí."
      ],
      "code": null,
      "ref": 7,
      "kind": null
    },
    {
      "id": "ip",
      "titles": [
        "Find your local address",
        "Encuentra tu dirección local",
        "Troba l’adreça local"
      ],
      "intros": [
        "We will use it to build the next commands for you.",
        "La usaremos para preparar los siguientes comandos.",
        "La farem servir per preparar les ordres següents."
      ],
      "actions": [
        [
          "In a new PowerShell window, run ipconfig.",
          "Find IPv4 Address under the active Wi-Fi or Ethernet adapter. Ignore VPN and disconnected adapters.",
          "Enter that address below. It is saved only in this browser, never sent to us."
        ],
        [
          "En otra ventana de PowerShell, ejecuta ipconfig.",
          "Busca Dirección IPv4 en el adaptador Wi-Fi o Ethernet activo. Ignora VPN y adaptadores desconectados.",
          "Introduce esa dirección debajo. Solo se guarda en este navegador; no nos la envía."
        ],
        [
          "En una altra finestra de PowerShell, executa ipconfig.",
          "Busca Adreça IPv4 a l’adaptador Wi-Fi o Ethernet actiu. Ignora VPN i adaptadors desconnectats.",
          "Introdueix aquesta adreça a sota. Només es desa en aquest navegador; no ens l’envia."
        ]
      ],
      "checks": [
        "I have saved my computer’s home-network address.",
        "He guardado la dirección del ordenador en casa.",
        "He desat l’adreça de l’ordinador a casa."
      ],
      "helps": [
        "Use a private IPv4 address beginning 192.168., 10., or 172.16–172.31. Do not use 127.0.0.1 or the router gateway. If your network differs, consult its administrator.",
        "Usa una IPv4 privada: 192.168., 10. o 172.16–172.31. No uses 127.0.0.1 ni la puerta de enlace del router. Si tu red es distinta, consulta a su administrador.",
        "Utilitza una IPv4 privada: 192.168., 10. o 172.16–172.31. No utilitzis 127.0.0.1 ni la passarel·la de l’encaminador. Si la xarxa és diferent, consulta’n l’administrador."
      ],
      "code": "ipconfig",
      "ref": 7,
      "kind": "ip"
    },
    {
      "id": "bind",
      "titles": [
        "Allow the home connection",
        "Permite la conexión de casa",
        "Permet la connexió de casa"
      ],
      "intros": [
        "Stop the server before changing its address.",
        "Detén el servidor antes de cambiar la dirección.",
        "Atura el servidor abans de canviar l’adreça."
      ],
      "actions": [
        [
          "Press Ctrl + C in the Navidrome PowerShell window.",
          "Open navidrome.toml and replace only its Address line with the one below.",
          "Save the file. Keep the other settings."
        ],
        [
          "Pulsa Ctrl + C en la ventana de Navidrome.",
          "Abre navidrome.toml y sustituye solo la línea Address por la de abajo.",
          "Guarda el archivo y conserva los demás ajustes."
        ],
        [
          "Prem Ctrl + C a la finestra de Navidrome.",
          "Obre navidrome.toml i substitueix només la línia Address per la de sota.",
          "Desa el fitxer i conserva la resta d’ajustos."
        ]
      ],
      "checks": [
        "The address is updated and the server is stopped.",
        "La dirección está actualizada y el servidor detenido.",
        "L’adreça està actualitzada i el servidor aturat."
      ],
      "helps": [
        "After this change, use the new address on Windows too. The old 127.0.0.1 address will not connect with this binding.",
        "Tras el cambio, usa también la nueva dirección en Windows. 127.0.0.1 ya no responderá con esta configuración.",
        "Després del canvi, utilitza també l’adreça nova a Windows. 127.0.0.1 ja no respondrà amb aquesta configuració."
      ],
      "code": "Address = '{{IP}}'",
      "ref": 7,
      "kind": "needs-ip"
    },
    {
      "id": "firewall",
      "titles": [
        "Open one local door",
        "Abre una puerta local",
        "Obre una porta local"
      ],
      "intros": [
        "A scoped firewall rule allows your phone to reach the server.",
        "Una regla limitada permite que el móvil llegue al servidor.",
        "Una regla limitada permet que el mòbil arribi al servidor."
      ],
      "actions": [
        [
          "Open a separate PowerShell window as administrator.",
          "Run the generated rule below once. Then close that administrator window.",
          "Keep Windows Firewall enabled. Do not open router ports."
        ],
        [
          "Abre otra ventana de PowerShell como administrador.",
          "Ejecuta una vez la regla de abajo. Cierra después esa ventana de administrador.",
          "Mantén el cortafuegos activado. No abras puertos del router."
        ],
        [
          "Obre una altra finestra de PowerShell com a administrador.",
          "Executa una vegada la regla de sota. Tanca després aquella finestra d’administrador.",
          "Mantén el tallafoc activat. No obris ports de l’encaminador."
        ]
      ],
      "checks": [
        "The rule was created without errors.",
        "La regla se creó sin errores.",
        "La regla s’ha creat sense errors."
      ],
      "helps": [
        "This allows only TCP 4533, the Private profile and the local subnet at your computer’s address. Repeating it may create duplicate rules.",
        "Solo permite TCP 4533, perfil Privado y subred local hacia la dirección del ordenador. Repetirla puede crear reglas duplicadas.",
        "Només permet TCP 4533, perfil Privat i subxarxa local cap a l’adreça de l’ordinador. Repetir-la pot crear regles duplicades."
      ],
      "code": "New-NetFirewallRule -DisplayName \"Navidrome - Home\" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 4533 -LocalAddress {{IP}} -RemoteAddress LocalSubnet -Profile Private",
      "ref": 7,
      "kind": "needs-ip"
    },
    {
      "id": "connect",
      "titles": [
        "Check the phone connection",
        "Comprueba la conexión del móvil",
        "Comprova la connexió del mòbil"
      ],
      "intros": [
        "Test the connection before entering it in Tempus.",
        "Prueba la conexión antes de introducirla en Tempus.",
        "Prova la connexió abans d’introduir-la a Tempus."
      ],
      "actions": [
        [
          "Restart Navidrome in ordinary PowerShell from its folder using the command below.",
          "On your phone’s browser, open http://{{IP}}:4533.",
          "You should see the Navidrome login page."
        ],
        [
          "Reinicia Navidrome en PowerShell normal desde su carpeta con el comando de abajo.",
          "En el navegador del móvil, abre http://{{IP}}:4533.",
          "Deberías ver la página de acceso de Navidrome."
        ],
        [
          "Reinicia Navidrome en PowerShell normal des de la seva carpeta amb l’ordre de sota.",
          "Al navegador del mòbil, obre http://{{IP}}:4533.",
          "Hauries de veure la pàgina d’accés de Navidrome."
        ]
      ],
      "checks": [
        "My phone displays the login page.",
        "El móvil muestra la página de acceso.",
        "El mòbil mostra la pàgina d’accés."
      ],
      "helps": [
        "Check the current IP, home Wi-Fi, Private profile and firewall rule. Guest isolation or a VPN can prevent connections. Do not disable the firewall.",
        "Revisa IP, Wi-Fi doméstica, perfil Privado y regla. El aislamiento de invitados o una VPN pueden impedir la conexión. No desactives el cortafuegos.",
        "Revisa IP, Wi-Fi domèstica, perfil Privat i regla. L’aïllament de convidats o una VPN poden impedir la connexió. No desactivis el tallafoc."
      ],
      "code": ".\\navidrome.exe --configfile .\\navidrome.toml",
      "ref": 7,
      "kind": "needs-ip"
    },
    {
      "id": "listen-user",
      "titles": [
        "Keep daily listening separate",
        "Separa la escucha diaria",
        "Separa l’escolta diària"
      ],
      "intros": [
        "Use an ordinary account on your phone.",
        "Usa una cuenta normal en el móvil.",
        "Utilitza un compte normal al mòbil."
      ],
      "actions": [
        [
          "On Windows, sign in to Navidrome as administrator.",
          "In user management, create a listening user without administrator permissions.",
          "Keep both passwords private; this guide never asks you to enter them."
        ],
        [
          "En Windows, entra en Navidrome como administrador.",
          "En la gestión de usuarios, crea uno para escuchar sin permisos de administrador.",
          "Mantén privadas ambas contraseñas; esta guía nunca te pide introducirlas."
        ],
        [
          "A Windows, entra a Navidrome com a administrador.",
          "A la gestió d’usuaris, crea’n un per escoltar sense permisos d’administrador.",
          "Mantén privades les dues contrasenyes; aquesta guia no et demana introduir-les."
        ]
      ],
      "checks": [
        "I have a non-administrator listening account.",
        "Tengo una cuenta de escucha sin permisos de administrador.",
        "Tinc un compte d’escolta sense permisos d’administrador."
      ],
      "helps": [
        "The first account remains your administrator for maintenance. Do not delete it.",
        "La primera cuenta sigue siendo la de administración para mantenimiento. No la borres.",
        "El primer compte continua sent el d’administració per al manteniment. No l’esborris."
      ],
      "code": null,
      "ref": 8,
      "kind": null
    },
    {
      "id": "login-tempus",
      "titles": [
        "Connect Tempus",
        "Conecta Tempus",
        "Connecta Tempus"
      ],
      "intros": [
        "Your phone becomes a window onto your own collection.",
        "El móvil se convierte en una ventana a tu colección.",
        "El mòbil es converteix en una finestra a la col·lecció."
      ],
      "actions": [
        [
          "In Tempus → Add server, choose any server name.",
          "Set the server URL to http://{{IP}}:4533 and enter the listening account credentials inside Tempus.",
          "Choose Navidrome or Subsonic/OpenSubsonic if asked. Sign in and play a track."
        ],
        [
          "En Tempus → Añadir servidor, elige un nombre.",
          "Usa http://{{IP}}:4533 y escribe las credenciales de escucha dentro de Tempus.",
          "Si pide el tipo, elige Navidrome o Subsonic/OpenSubsonic. Entra y reproduce una canción."
        ],
        [
          "A Tempus → Afegeix un servidor, tria un nom.",
          "Utilitza http://{{IP}}:4533 i escriu les credencials d’escolta dins de Tempus.",
          "Si demana el tipus, tria Navidrome o Subsonic/OpenSubsonic. Entra i reprodueix una cançó."
        ]
      ],
      "checks": [
        "A track plays in Tempus.",
        "Una canción suena en Tempus.",
        "Una cançó sona a Tempus."
      ],
      "helps": [
        "Use http, not https, for this local setup. The computer must stay awake for streaming. Leave optional scrobbling disconnected unless you want it.",
        "Usa http, no https, para esta configuración local. El ordenador debe estar activo para transmitir. Deja desconectados los servicios de registro de escuchas si no los quieres.",
        "Utilitza http, no https, per a aquesta configuració local. L’ordinador ha d’estar actiu per transmetre. Deixa desconnectats els serveis de registre d’escoltes si no els vols."
      ],
      "code": null,
      "ref": 8,
      "kind": "needs-ip"
    },
    {
      "id": "download-phone",
      "titles": [
        "Take an album with you",
        "Llévate un álbum",
        "Emporta’t un àlbum"
      ],
      "intros": [
        "Streaming a song does not download the whole album.",
        "Reproducir una canción no descarga el álbum entero.",
        "Reproduir una cançó no descarrega tot l’àlbum."
      ],
      "actions": [
        [
          "Check your phone has enough storage.",
          "In the album menu in Tempus, choose Download.",
          "Wait until every intended track has finished downloading."
        ],
        [
          "Comprueba que el móvil tenga espacio suficiente.",
          "En el menú del álbum en Tempus, elige Descargar.",
          "Espera a que terminen todas las canciones que quieres conservar."
        ],
        [
          "Comprova que el mòbil tingui prou espai.",
          "Al menú de l’àlbum a Tempus, tria Descarrega.",
          "Espera que acabin totes les cançons que vols conservar."
        ]
      ],
      "checks": [
        "The complete album appears in Downloads.",
        "El álbum completo aparece en Descargas.",
        "L’àlbum complet apareix a Descàrregues."
      ],
      "helps": [
        "FLAC albums can be large. Smaller converted downloads require working FFmpeg and appropriate settings. Test a single track before changing download format.",
        "Los FLAC pueden ocupar mucho. Las descargas convertidas más pequeñas necesitan FFmpeg y ajustes adecuados. Prueba una pista antes de cambiar el formato.",
        "Els FLAC poden ocupar molt. Les descàrregues convertides més petites necessiten FFmpeg i ajustos adequats. Prova una pista abans de canviar el format."
      ],
      "code": null,
      "ref": 9,
      "kind": null
    },
    {
      "id": "offline",
      "titles": [
        "Prove it works offline",
        "Comprueba que funciona sin conexión",
        "Comprova que funciona sense connexió"
      ],
      "intros": [
        "This is the moment your computer can take a rest.",
        "Aquí es cuando el ordenador puede descansar.",
        "Aquí és quan l’ordinador pot descansar."
      ],
      "actions": [
        [
          "Enable airplane mode on Android and explicitly switch Wi-Fi off.",
          "In Tempus Downloads, browse the album and play tracks you did not just stream.",
          "Check several tracks across the album. If they work, you can stop Navidrome and turn off the computer."
        ],
        [
          "Activa el modo avión en Android y desactiva también la Wi-Fi.",
          "En Descargas de Tempus, navega hasta el álbum y reproduce pistas que no acabes de escuchar.",
          "Prueba varias canciones del álbum. Si funcionan, puedes detener Navidrome y apagar el ordenador."
        ],
        [
          "Activa el mode avió a Android i desactiva també la Wi-Fi.",
          "A Descàrregues de Tempus, navega fins a l’àlbum i reprodueix pistes que no acabis d’escoltar.",
          "Prova diverses cançons de l’àlbum. Si funcionen, pots aturar Navidrome i apagar l’ordinador."
        ]
      ],
      "checks": [
        "Several downloaded tracks play with no connection.",
        "Varias pistas descargadas suenan sin conexión.",
        "Diverses pistes descarregades sonen sense connexió."
      ],
      "helps": [
        "If offline search fails, browse downloaded albums directly. Clearing app data or uninstalling Tempus may remove downloads.",
        "Si falla la búsqueda sin conexión, navega por los álbumes descargados. Borrar datos o desinstalar Tempus puede eliminar las descargas.",
        "Si falla la cerca sense connexió, navega pels àlbums descarregats. Esborrar les dades o desinstal·lar Tempus pot eliminar les descàrregues."
      ],
      "code": null,
      "ref": 9,
      "kind": null
    },
    {
      "id": "playlist",
      "titles": [
        "Make it your collection",
        "Hazla tuya",
        "Fes-la teva"
      ],
      "intros": [
        "Playlists help organise your listening.",
        "Las listas te ayudan a organizar lo que escuchas.",
        "Les llistes t’ajuden a organitzar el que escoltes."
      ],
      "actions": [
        [
          "Reconnect to home Wi-Fi and start Navidrome if you stopped it.",
          "Use a track’s menu → Add to playlist → New playlist.",
          "Download the playlist separately and check it offline. Creating a playlist alone does not download tracks."
        ],
        [
          "Vuelve a la Wi-Fi de casa e inicia Navidrome si lo detuviste.",
          "Usa el menú de una canción → Añadir a lista → Nueva lista.",
          "Descarga la lista por separado y compruébala sin conexión. Crear la lista no descarga las canciones."
        ],
        [
          "Torna a la Wi-Fi de casa i inicia Navidrome si l’havies aturat.",
          "Utilitza el menú d’una cançó → Afegeix a una llista → Llista nova.",
          "Descarrega la llista per separat i comprova-la sense connexió. Crear-la no descarrega les cançons."
        ]
      ],
      "checks": [
        "I know how to create and download a playlist.",
        "Sé crear y descargar una lista.",
        "Sé crear i descarregar una llista."
      ],
      "helps": [
        "Playlist editing generally needs the server. For everyday downloaded listening, open Tempus; F-Droid can be closed.",
        "Editar listas suele necesitar el servidor. Para escuchar descargas, abre Tempus; F-Droid puede estar cerrado.",
        "Editar llistes acostuma a necessitar el servidor. Per escoltar descàrregues, obre Tempus; F-Droid pot estar tancat."
      ],
      "code": null,
      "ref": 10,
      "kind": null
    },
    {
      "id": "backup",
      "titles": [
        "Keep a second copy",
        "Conserva otra copia",
        "Conserva una altra còpia"
      ],
      "intros": [
        "Owning the files also means looking after them.",
        "Tener los archivos también implica cuidarlos.",
        "Tenir els fitxers també implica cuidar-los."
      ],
      "actions": [
        [
          "Stop Navidrome with Ctrl + C.",
          "Copy your music, navidrome.toml and the complete data folder to a separate backup drive. Keep the backup private.",
          "For external-drive storage and address changes, use the complete guide below."
        ],
        [
          "Detén Navidrome con Ctrl + C.",
          "Copia la música, navidrome.toml y toda la carpeta data a otra unidad de respaldo. Protege esa copia.",
          "Para usar un disco externo o resolver cambios de dirección, consulta la guía completa."
        ],
        [
          "Atura Navidrome amb Ctrl + C.",
          "Copia la música, navidrome.toml i tota la carpeta data a una altra unitat de còpia de seguretat. Protegeix la còpia.",
          "Per utilitzar un disc extern o resoldre canvis d’adreça, consulta la guia completa."
        ]
      ],
      "checks": [
        "I have a separate backup, or know where I will keep it.",
        "Tengo una copia aparte o sé dónde la guardaré.",
        "Tinc una còpia a part o sé on la desaré."
      ],
      "helps": [
        "One external disk holding the only copy is not a backup. Phone downloads do not preserve all server settings and accounts.",
        "Un disco externo con la única copia no es un respaldo. Las descargas del móvil no conservan todos los ajustes y cuentas del servidor.",
        "Un disc extern amb l’única còpia no és una còpia de seguretat. Les descàrregues del mòbil no conserven tots els ajustos i comptes del servidor."
      ],
      "code": null,
      "ref": 11,
      "kind": null
    }
  ],
  "ui": {
    "en": {
      "guided": "One step at a time",
      "full": "See complete guide",
      "returnGuide": "Back to steps",
      "next": "Done, next",
      "finish": "Finish",
      "back": "Back",
      "help": "Something is not working",
      "more": "Read the full explanation",
      "checkpoint": "Before you continue",
      "copy": "Copy",
      "copied": "Copied",
      "copyFail": "Select and copy the text manually.",
      "progress": "completed",
      "of": "of",
      "step": "Step",
      "restart": "Start again",
      "confirm": "Clear the saved progress and local address for this guide?",
      "saved": "Progress saved only in this browser. No account needed.",
      "unsaved": "This browser cannot save progress. Keep this tab open to continue.",
      "ipLabel": "Your computer’s local IPv4 address",
      "ipPlaceholder": "Example: 192.168.1.100",
      "ipSave": "Save address",
      "ipBad": "Enter the private IPv4 address from your computer’s active home-network adapter.",
      "ipGood": "Address saved for the next steps.",
      "ipRequired": "First save your home-network address in the address step.",
      "ipGo": "Go to address step",
      "jump": "Choose a step",
      "allDone": "Your music can travel with you.",
      "doneText": "You have completed every step. Keep your files backed up, and enjoy your downloads with the computer off.",
      "incomplete": "You have reached the end. You can revisit any unfinished steps.",
      "finishTitle": "A little more independence.",
      "resources": "Useful links",
      "mascotLabel": "You found Brot: open a solarpunk tip",
      "mascotTitle": "Brot’s little seeds",
      "nextTip": "Another tip",
      "close": "Close tip",
      "privacy": "No passwords or account details are stored here."
    },
    "es": {
      "guided": "Paso a paso",
      "full": "Ver guía completa",
      "returnGuide": "Volver a los pasos",
      "next": "Ya está, siguiente",
      "finish": "Terminar",
      "back": "Anterior",
      "help": "Algo no funciona",
      "more": "Ver la explicación completa",
      "checkpoint": "Antes de seguir",
      "copy": "Copiar",
      "copied": "Copiado",
      "copyFail": "Selecciona y copia el texto manualmente.",
      "progress": "completados",
      "of": "de",
      "step": "Paso",
      "restart": "Empezar de nuevo",
      "confirm": "¿Borrar el progreso y la dirección local guardados para esta guía?",
      "saved": "El progreso se guarda solo en este navegador. Sin cuentas.",
      "unsaved": "Este navegador no puede guardar el progreso. Mantén esta pestaña abierta para continuar.",
      "ipLabel": "Dirección IPv4 local de tu ordenador",
      "ipPlaceholder": "Ejemplo: 192.168.1.100",
      "ipSave": "Guardar dirección",
      "ipBad": "Introduce la IPv4 privada del adaptador activo de tu ordenador en casa.",
      "ipGood": "Dirección guardada para los siguientes pasos.",
      "ipRequired": "Primero guarda la dirección doméstica en el paso de la dirección.",
      "ipGo": "Ir al paso de la dirección",
      "jump": "Elegir un paso",
      "allDone": "Tu música ya puede acompañarte.",
      "doneText": "Has completado todos los pasos. Conserva una copia de seguridad y disfruta de las descargas con el ordenador apagado.",
      "incomplete": "Has llegado al final. Puedes volver a los pasos que queden pendientes.",
      "finishTitle": "Un poco más de independencia.",
      "resources": "Enlaces útiles",
      "mascotLabel": "Has encontrado a Brot: abre un consejo solarpunk",
      "mascotTitle": "Las semillas de Brot",
      "nextTip": "Otro consejo",
      "close": "Cerrar consejo",
      "privacy": "Aquí no se guardan contraseñas ni datos de cuentas."
    },
    "ca": {
      "guided": "Pas a pas",
      "full": "Veure la guia completa",
      "returnGuide": "Tornar als passos",
      "next": "Ja està, següent",
      "finish": "Acabar",
      "back": "Anterior",
      "help": "Alguna cosa no funciona",
      "more": "Veure l’explicació completa",
      "checkpoint": "Abans de continuar",
      "copy": "Copiar",
      "copied": "Copiat",
      "copyFail": "Selecciona i copia el text manualment.",
      "progress": "completats",
      "of": "de",
      "step": "Pas",
      "restart": "Tornar a començar",
      "confirm": "Vols esborrar el progrés i l’adreça local desats per a aquesta guia?",
      "saved": "El progrés només es desa en aquest navegador. Sense comptes.",
      "unsaved": "Aquest navegador no pot desar el progrés. Mantén aquesta pestanya oberta per continuar.",
      "ipLabel": "Adreça IPv4 local de l’ordinador",
      "ipPlaceholder": "Exemple: 192.168.1.100",
      "ipSave": "Desar l’adreça",
      "ipBad": "Introdueix la IPv4 privada de l’adaptador actiu de l’ordinador a casa.",
      "ipGood": "Adreça desada per als passos següents.",
      "ipRequired": "Primer desa l’adreça domèstica al pas de l’adreça.",
      "ipGo": "Anar al pas de l’adreça",
      "jump": "Triar un pas",
      "allDone": "La música ja et pot acompanyar.",
      "doneText": "Has completat tots els passos. Conserva una còpia de seguretat i gaudeix de les descàrregues amb l’ordinador apagat.",
      "incomplete": "Has arribat al final. Pots tornar als passos que quedin pendents.",
      "finishTitle": "Una mica més d’independència.",
      "resources": "Enllaços útils",
      "mascotLabel": "Has trobat en Brot: obre un consell solarpunk",
      "mascotTitle": "Les llavors d’en Brot",
      "nextTip": "Un altre consell",
      "close": "Tancar el consell",
      "privacy": "Aquí no es desen contrasenyes ni dades de comptes."
    }
  },
  "tips": {
    "en": [
      "Before buying a new device, see whether you can repair or reuse one you already have.",
      "Ask your local library for a book that sparked your curiosity. If it is missing, ask about a loan or purchase suggestion.",
      "Buy an album directly from an artist when you can. Keep the files and a backup.",
      "Offer to help someone set up a tool you understand. Shared knowledge grows useful alternatives.",
      "Turn off a home music server when you do not need it. Downloaded albums can keep playing on your phone.",
      "Borrow or share a rarely used tool with a neighbour instead of each buying one.",
      "Keep useful files in portable formats so you can change apps later.",
      "Take a small first step. You do not need a perfect setup to reduce one dependency."
    ],
    "es": [
      "Antes de comprar otro dispositivo, mira si puedes reparar o reutilizar uno que ya tienes.",
      "Pide en tu biblioteca un libro que haya despertado tu curiosidad. Si falta, pregunta por un préstamo o una sugerencia de compra.",
      "Cuando puedas, compra un álbum directamente a un artista. Conserva los archivos y una copia de seguridad.",
      "Ayuda a alguien a configurar una herramienta que conozcas. Compartir conocimiento hace crecer las alternativas.",
      "Apaga el servidor musical de casa cuando no lo necesites. Los álbumes descargados pueden seguir sonando en el móvil.",
      "Pide prestada o comparte con un vecino una herramienta que uses poco, en lugar de comprar una cada uno.",
      "Conserva tus archivos importantes en formatos portables para poder cambiar de aplicación.",
      "Empieza con algo pequeño. No necesitas una configuración perfecta para reducir una dependencia."
    ],
    "ca": [
      "Abans de comprar un altre dispositiu, mira si pots reparar o reutilitzar un que ja tens.",
      "Demana a la biblioteca un llibre que t’hagi despertat la curiositat. Si falta, pregunta per un préstec o un suggeriment de compra.",
      "Quan puguis, compra un àlbum directament a un artista. Conserva els fitxers i una còpia de seguretat.",
      "Ajuda algú a configurar una eina que coneguis. Compartir coneixement fa créixer les alternatives.",
      "Apaga el servidor musical de casa quan no el necessitis. Els àlbums descarregats poden continuar sonant al mòbil.",
      "Demana prestada o comparteix amb un veí una eina que utilitzis poc, en lloc de comprar-ne una cadascú.",
      "Conserva els fitxers importants en formats portables per poder canviar d’aplicació.",
      "Comença amb una cosa petita. No cal una configuració perfecta per reduir una dependència."
    ]
  }
};
