# Own Your Music

A community guide in English, Spanish and Catalan for a local music collection using Windows, Navidrome, Android and Tempus.

## Preview
Open `index.html` in a browser. Keep `style.css` and the other HTML files beside it. No install, build, external fonts or scripts are needed to read the site. Use Print → Save as PDF for a printable copy of any language.

## Publish using GitHub Pages
1. Extract the distribution ZIP on your computer.
2. Open https://github.com/David-Saeteros/own-your-music and choose Add file → Upload files.
3. Drag the CONTENTS of this folder into the repository root, including `index.html`, `en.html`, `es.html`, `ca.html`, `style.css`, `garden.svg`, `brot.svg`, `app.js`, `guide-data.js`, `content`, `README.md`, `PUBLISHING.md`, and `build.py`. This replaces the starter README; keep any unrelated existing repository files. If your browser omits `.nojekyll`, the plain HTML still works with this site's current structure.
4. Commit with message: Add multilingual local music guide.
5. Pages is already configured for main / root. Wait for the Pages deployment to finish and check all three languages on the published site.

## Edit
Edit `content/en.md`, `content/es.md` and `content/ca.md` together. Then run `python build.py` with Python 3. It regenerates the three guide HTML files from those Markdown files. The homepage and CSS are edited directly. No Python packages required. Before release, check links, sample commands, mobile layout, playback and offline behaviour. The renderer supports only the Markdown subset currently used (headings, bullets, links, bold text and code blocks).

## Status
Draft v0.3, prepared 2026-10-16. The initial user's Windows/Android workflow worked, including offline playback. Exact installed software versions were not recorded. This complete published walkthrough, including FFmpeg, a separate listening account and IP-change troubleshooting, has not yet had an independent end-to-end Windows/Android test. Do not label it fully tested until that is done.

No personal screenshots, actual credentials or music downloads are included. No content licence has been selected yet; public availability alone is not an open licence. Pick one before inviting redistribution or translated adaptations. Third-party software retains its own licences. The material is an independent guide and is not endorsed by the named projects.

## Solarpunk edition
Local SVG greenhouse artwork, botanical colours and a reading recommendation for Yanis Varoufakis’s Technofeudalism. Bookshops and libraries are suggested in each language; there are no purchase or affiliate links. The reading illustration is an original typographic design, not the published book cover. The website itself is hosted on GitHub, a Microsoft service; its source is portable.

## Interactive edition
The guides now open as a 21-step tour with local progress, short actions, step-specific help, code-copy buttons, a validated local-address field, and a full-guide view. Brot, the local SVG sprout mascot, offers opt-in tips in the current language. No account, password collection, network API, or third-party script is added. The JavaScript is local. If it is disabled, the complete guide remains readable.

Progress and the local IP address are stored only in this browser under `own-your-music.journey.v1`. Start again clears both. The same browser on the same site shares progress across the three languages; another device or private browser does not. Browser file URLs can restrict persistence or clipboard access; the UI reports these failures and manual copying still works. Publishing on HTTPS GitHub Pages improves browser compatibility. Language links preserve the current tour step. Print uses the complete guide.

Edit the interactive translations and actions in `guide-data.js`; edit the full guide in `content/*.md` and run `python build.py`. Keep both versions aligned. Navigation and storage behaviours were exercised with a Node DOM harness; this is not a substitute for testing the visual layout and interactions in Chrome and Android before a release.
