# Tu música. Tus archivos.

## Antes de empezar
Puedes conservar tu música sin alquilar el acceso a un catálogo. Esta guía te ayuda a reunir archivos de audio, organizarlos con Navidrome en Windows y escucharlos con Tempus en Android. Tú aportas la música: estas aplicaciones no incluyen el catálogo de Spotify ni convierten sus descargas en archivos propios.
**No necesitas dejar el ordenador encendido todo el día.** Debe estar activo, con Navidrome abierto, mientras reproduces desde él o descargas música al móvil. Una vez descargadas las canciones en Tempus, puedes escucharlas sin ordenador ni internet.
Si solo quieres música en un móvil, copiar los archivos por USB y usar un reproductor local es más sencillo. Esta guía tiene sentido si quieres una colección central y acceso desde varios dispositivos.
### Qué necesitas
- Un ordenador Windows, un móvil Android y tu red doméstica de confianza.
- Espacio para música en ambos dispositivos; es muy recomendable otra unidad para las copias de seguridad.
- Al menos un álbum MP3 o FLAC sin DRM para probar. Los programas son gratuitos; la música, el almacenamiento y la electricidad pueden costar dinero.
- Permiso para instalar programas. Si el ordenador es institucional, consulta con su administrador.
**Alcance:** Windows + Android, instalación portátil manual y acceso desde casa. Esta primera edición no configura acceso por internet.
## 1. Consigue música que puedas conservar
Compra descargas sin DRM a artistas o sellos, o descarga música que ofrezcan expresamente gratis. Bandcamp también permite comprar archivos descargables, aunque sigue siendo una plataforma empresarial. Descarga los archivos reales en vez de depender únicamente de la caché de una aplicación.
Elige **FLAC** como copia maestra sin pérdida. MP3 ocupa menos y es ampliamente compatible. Una banda sonora extensa puede ocupar varios gigabytes en FLAC. WAV y AIFF suelen ocupar mucho más que FLAC para el mismo contenido de audio.
Extrae el ZIP del álbum y conserva juntas las canciones y la portada. Una estructura útil es artista → álbum → canciones. Haz una copia de seguridad: una sola copia en un disco externo sigue siendo una sola copia.
**Comprobación:** encuentras archivos `.flac` o `.mp3` reales en el Explorador.
## 2. Descarga Navidrome
En Configuración → Sistema → Acerca de, comprueba el tipo de sistema. Si tienes un procesador Intel o AMD x64, descarga el archivo estable terminado en `windows_amd64.zip` desde las [versiones oficiales](https://github.com/navidrome/navidrome/releases/latest). AMD64 significa x64, también para Intel. Para Windows ARM o de 32 bits, consulta las [instrucciones de Windows](https://www.navidrome.org/docs/installation/windows/) antes de elegir.
Pulsa Windows + R, escribe `%USERPROFILE%` y abre tu carpeta de usuario. Crea `Navidrome`, extrae el ZIP allí y crea dos subcarpetas llamadas `music` y `data`. Separa la aplicación, la música y la base de datos. Todavía no abras el programa.
Activa Explorador → Ver → Mostrar → Extensiones de nombre de archivo (Windows 11), o Vista → Extensiones de nombre de archivo (Windows 10). Debes ver `navidrome.exe`.
### Instala FFmpeg
La documentación de instalación de Navidrome pide FFmpeg para convertir formatos. Abre la [página oficial de FFmpeg](https://ffmpeg.org/download.html), elige Windows y sigue uno de sus enlaces a compilaciones para Windows. Extrae la descarga y localiza `bin\ffmpeg.exe`. Copia ese ejecutable a `Navidrome`; conserva los archivos adicionales si esa compilación los necesita. Si está disponible, usa una compilación estática. Conserva también la información de licencia.
No desactives la seguridad de Windows para ejecutar una descarga. Comprueba la procedencia y las sumas de verificación disponibles; si Windows la bloquea, investiga primero el aviso concreto.
**Comprobación:** la carpeta contiene `navidrome.exe`, `ffmpeg.exe`, `music` y `data`.
## 3. Configura antes de ejecutar
Abre el Bloc de notas, pega lo siguiente y guárdalo en `Navidrome` como `navidrome.toml`. En Guardar como, selecciona Todos los archivos. Comprueba que no se llama `navidrome.toml.txt`.
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
Añade esta línea si has copiado FFmpeg junto a Navidrome:
```toml
FFmpegPath = './ffmpeg.exe'
```
Así limitas inicialmente el acceso al ordenador y desactivas las estadísticas de uso y las integraciones musicales indicadas. Esto no hace privado todo Windows ni toda tu red. Consulta la [referencia oficial](https://www.navidrome.org/docs/usage/configuration/options/) para los detalles.
## 4. Inicia y prueba en Windows
Abre la carpeta Navidrome en el Explorador. Pulsa la barra de direcciones, escribe `powershell` y pulsa Intro. Usa una ventana normal, sin permisos de administrador.
```powershell
.\navidrome.exe --configfile .\navidrome.toml
```
Deja la ventana abierta. Si aparece una solicitud del cortafuegos, cancélala en esta fase local. Abre `http://127.0.0.1:4533` en el navegador del ordenador y crea la primera cuenta de administrador con una contraseña única. Guárdala de forma privada en tu gestor de contraseñas.
Copia un álbum extraído a `music`. Ejecuta el escaneo desde Navidrome y abre Álbumes o Canciones para reproducir una pista. Es normal que la biblioteca esté vacía antes de añadir música.
**Comprobación:** una canción suena en Windows. Si no, consulta la sección de problemas antes de seguir.
## 5. Instala Tempus en Android
En el móvil, descarga F-Droid desde [f-droid.org](https://f-droid.org/). Abre el APK. Si Android lo pide, permite temporalmente que tu navegador instale aplicaciones de ese origen; desactiva ese permiso del navegador al terminar.
Abre F-Droid, espera a que actualice el catálogo y busca **Tempus, de eddyizm**. Compáralo con su [ficha en F-Droid](https://f-droid.org/en/packages/com.eddyizm.degoogled.tempus/). Instala Tempus y permite a F-Droid instalar aplicaciones cuando Android lo solicite. Abre Tempus y detente en Añadir servidor.
Tempus es un cliente independiente para tu servidor. No necesita una cuenta de Spotify. La versión de F-Droid omite Android Auto y Chromecast, que dependen de bibliotecas de Google; consulta el proyecto si necesitas esas funciones.
## 6. Conecta solo desde tu red doméstica
Usa tu red doméstica de confianza, no la universidad, el trabajo, una red pública ni la de invitados. El ordenador puede usar Ethernet y el móvil Wi-Fi del mismo router. No cambies el reenvío de puertos del router. Este procedimiento utiliza HTTP sin cifrado de transporte, por lo que no es adecuado para redes no fiables ni para exponer el servidor a internet.
En la configuración de red de Windows, marca **solo esta conexión doméstica de confianza** como Privada. En otra ventana de PowerShell, ejecuta:
```powershell
ipconfig
```
Busca Dirección IPv4 en el adaptador Wi-Fi o Ethernet activo. Ignora adaptadores desconectados o de VPN. **192.168.1.100 es un ejemplo**: sustituye todas sus apariciones por tu dirección real. Una dirección local no es una contraseña, pero no necesitas publicarla.
Detén Navidrome con Ctrl + C. Edita `navidrome.toml` y sustituye la línea Address:
```toml
Address = '192.168.1.100'
```
Abre otra ventana de PowerShell **como administrador** y ejecuta esta regla tras sustituir la dirección de ejemplo. Permite conexiones entrantes al puerto TCP 4533 solo en el perfil Privado, desde la subred local y hacia esa dirección.
```powershell
New-NetFirewallRule -DisplayName "Navidrome - Home" -Direction Inbound -Action Allow -Protocol TCP -LocalPort 4533 -LocalAddress 192.168.1.100 -RemoteAddress LocalSubnet -Profile Private
```
Cierra la ventana de administrador. Reinicia Navidrome con el comando del paso 4 desde su carpeta en PowerShell normal. En el navegador del móvil, abre `http://192.168.1.100:4533`, con tu dirección real. Usa esa dirección también en Windows: con esta configuración, la dirección local anterior ya no responderá.
**Comprobación:** el móvil muestra la página de acceso. Mantén el cortafuegos activado. Si falla, consulta los problemas antes de abrir el acceso a todas las redes.
## 7. Entra y escucha con Tempus
Para escuchar a diario, utiliza un **usuario de Navidrome sin permisos de administrador**. Entra como administrador desde Windows, abre la gestión de usuarios y créalo. Reserva la cuenta de administrador para el mantenimiento.
En Tempus → Añadir servidor, introduce el nombre que prefieras, la URL del servidor (por ejemplo `http://192.168.1.100:4533`) y las credenciales del usuario de escucha. Si pide un tipo de servidor, elige Navidrome o Subsonic/OpenSubsonic. No necesitas una cuenta en la nube. Deja desconectados los servicios opcionales de registro de escuchas, salvo que quieras usarlos.
Abre un álbum y reproduce una canción. Para reproducir desde el servidor, el ordenador debe seguir activo y ejecutando Navidrome.
**Comprobación:** Tempus reproduce una canción mientras está conectado a la Wi-Fi de casa.
## 8. Descarga y verifica sin conexión
Abre el menú de un álbum o una lista en Tempus y elige Descargar. Espera a que terminen todas las canciones: una pista que solo hayas reproducido puede estar únicamente en caché. Comprueba el espacio libre. Los FLAC pueden ser grandes; para descargar versiones convertidas más pequeñas hacen falta FFmpeg y los ajustes adecuados del servidor y del cliente. Prueba una canción antes de cambiar toda la colección.
Activa el modo avión y desactiva también la Wi-Fi. Entra en Descargas o en la vista sin conexión de Tempus, busca el álbum navegando y reproduce varias pistas que no acabes de escuchar. Comprueba el principio, la mitad y el final si es largo.
**Comprobación:** esas canciones suenan sin conexión. Ya puedes detener Navidrome y apagar el ordenador. Borrar los datos de Tempus o desinstalarlo puede eliminar las descargas.
Si la búsqueda no funciona sin conexión, navega directamente por los álbumes descargados. El funcionamiento de la búsqueda sin conexión puede variar según la versión de la aplicación.
## 9. Listas y uso diario
Con conexión al servidor, usa el menú de una canción → Añadir a lista → Nueva lista, o edita una lista en Navidrome. Crear una lista no descarga las canciones. Descárgala por separado y comprueba que puedes abrirla sin conexión; editar listas del servidor suele requerir conexión.
Para escuchar descargas, basta con abrir Tempus. F-Droid no necesita seguir abierto; consérvalo para actualizar. Para reproducir desde el servidor, añadir descargas o modificar listas, inicia Navidrome y conecta desde casa.
Para detener Navidrome, pulsa Ctrl + C en su ventana y ciérrala. Para volver a iniciarlo, abre PowerShell en su carpeta y ejecuta el comando del paso 4. Esta instalación manual no arranca automáticamente con Windows.
## 10. Discos externos, cambios y copias
Puedes guardar la música en un disco externo y mantener Navidrome y `data` en el ordenador. **Primero copia**, comprueba los archivos, detén Navidrome y cambia MusicFolder por la ruta real, por ejemplo:
```toml
MusicFolder = 'E:\Music'
```
Reinicia y escanea. El disco debe estar conectado mientras reproduces o descargas desde él. Si falta el disco, no purgues las canciones ausentes. Las letras de unidad pueden cambiar: si hace falta, asigna una letra disponible estable con Administración de discos, sin formatear.
Después de mover pistas dentro de la biblioteca configurada, escanea de nuevo. Navidrome intenta reconocer los archivos movidos. Borrarlos o sacarlos de la biblioteca puede dejar entradas ausentes. Las descargas del móvil son independientes: no presupongas que actualizar el servidor las elimina. Borra expresamente las copias sin conexión que no quieras; los ajustes de sincronización de listas pueden modificar este comportamiento.
Haz copias de la música, la configuración y la base de datos. En esta instalación manual, detén Navidrome antes de copiar toda la carpeta `data` y `navidrome.toml` a otro dispositivo. Protege esa copia: contiene información de las cuentas. Las descargas del móvil no sustituyen una copia completa del servidor. Haz una copia antes de actualizar Navidrome y revisa las notas de la versión.
## Problemas frecuentes
### No se abre o el servidor se detiene
Lee el último error de PowerShell. Ejecuta desde la carpeta correcta. Si falta FFmpeg, revisa `FFmpegPath` y el ejecutable. Si el puerto 4533 está ocupado, comprueba si ya hay otra ventana de Navidrome antes de cambiarlo.
### La dirección deja de funcionar tras reiniciar
Ejecuta otra vez `ipconfig`. El router puede haber asignado otra dirección. Una reserva DHCP en tu router puede mantenerla estable; consulta su manual. Si cambia, actualiza Address, la dirección local de la regla del cortafuegos y la URL en Tempus. Para sustituir nuestra regla, elimínala en PowerShell como administrador con este comando y vuelve a crearla según el paso 6 con la nueva dirección.
```powershell
Remove-NetFirewallRule -DisplayName 'Navidrome - Home'
```
Si estás fuera de casa, esa dirección doméstica puede no existir en la conexión actual. Usa las descargas del móvil. Para escuchar solo en el ordenador, detén Navidrome, vuelve a poner Address en `127.0.0.1`, reinicia y usa esa dirección local.
### El móvil no conecta
Comprueba la red doméstica principal en ambos dispositivos, el perfil Privado de Windows, que Navidrome esté activo y la dirección actual. La red de invitados puede aislar dispositivos. Revisa la regla limitada del cortafuegos; no lo desactives ni abras puertos en el router. Una VPN puede afectar la conexión.
### Falta un álbum o no suena una canción
Extrae los ZIP, comprueba MusicFolder y los permisos, escanea y revisa los registros. Mira las etiquetas si el álbum aparece bajo otro artista. Comprueba FFmpeg si falla la conversión. Tras varios accesos fallidos, espera antes de reintentar; no desactives el límite de intentos.
### Las descargas suenan pero la búsqueda falla
Navega directamente por Descargas y comprueba que el álbum esté completo. Una búsqueda fallida sin conexión no significa que falte el audio. Conecta al servidor para las funciones que lo necesiten.
## Por qué existe esta guía
Este proyecto nació de la lectura de **Technofeudalism: What Killed Capitalism**, de **Yanis Varoufakis**, publicado en castellano como **Tecnofeudalismo**. Su crítica al poder de las plataformas digitales nos llevó a una pregunta práctica: ¿cómo podemos depender menos, en la vida cotidiana, de servicios que nos alquilan el acceso?
Aquí empezamos por la música: conservar los archivos, apoyar a quienes la crean, usar herramientas que podamos cambiar y compartir lo aprendido. Es un pequeño experimento de autonomía digital, no la afirmación de que cambiar de reproductor resuelva un sistema político.
Nuestra orientación solarpunk es esperanzadora y práctica: aprovechar los dispositivos que ya tenemos, conservar una colección sin conexión, apoyar a artistas independientes y compartir conocimiento útil en varios idiomas. Puedes participar sin estar de acuerdo con todos los argumentos del libro.
**¿Te interesan las ideas que inspiraron la guía? Pide el libro de Varoufakis en tu librería independiente más cercana o búscalo en tu biblioteca. Si no lo tienen, pregunta si pueden encargarlo o tramitar un préstamo.**
La lectura puede ser un punto de partida. Construir y compartir alternativas es algo que podemos hacer en común.
## Fuentes y notas del proyecto
Esta es una guía comunitaria independiente, no una publicación oficial de Navidrome, Tempus, Bandcamp ni Spotify. No distribuye música. Los nombres de los botones pueden variar según idioma y versión.
El sitio no añade analítica, publicidad, fuentes remotas ni scripts externos. El alojamiento y los sitios enlazados tienen sus propias prácticas de datos. Conserva junta la carpeta del sitio descargado para leerlo sin conexión. Los tres idiomas cubren el mismo procedimiento; comunica correcciones en el repositorio.
Referencias oficiales: [instalación de Navidrome](https://www.navidrome.org/docs/installation/), [primer uso](https://www.navidrome.org/docs/getting-started/), [configuración](https://www.navidrome.org/docs/usage/configuration/options/), [seguridad](https://www.navidrome.org/docs/usage/admin/security/), [archivos ausentes](https://www.navidrome.org/docs/usage/library/missing-files/), [FFmpeg](https://ffmpeg.org/download.html), [Tempus](https://github.com/eddyizm/tempus), [uso de Tempus](https://eddyizm.github.io/tempus/USAGE.html), [F-Droid](https://f-droid.org/en/packages/com.eddyizm.degoogled.tempus/), [reglas del cortafuegos](https://learn.microsoft.com/en-us/powershell/module/netsecurity/new-netfirewallrule) y [formatos de Bandcamp](https://get.bandcamp.help/en/articles/15263234-in-which-formats-can-i-download-my-purchases).
Última actualización: 16 de octubre de 2026. Los nombres de los botones pueden variar según la versión de las aplicaciones.
