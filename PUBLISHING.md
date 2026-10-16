# Review and publish

This package does not change the live repository by itself.

## Before publishing
- Read each language and check terminology against the installed Windows and Android interfaces.
- On Windows, record the Navidrome and FFmpeg versions; on Android, record Tempus and Android versions.
- Repeat the guide on a fresh setup, especially FFmpeg detection, the scoped firewall rule, non-admin listening account, and complete offline album playback.
- Confirm all sample IP addresses are examples, not personal addresses; adapt the guide if the test exposes an error.
- Select a content licence if you want people to freely reuse it. Suggested options to discuss: CC BY 4.0 or CC BY-SA 4.0. Nothing in this draft grants either licence automatically.

## Upload
Use Add file → Upload files on the repository. Upload the files INSIDE the extracted folder to the repository root; do not upload the ZIP or add a nested parent folder. Root `index.html` becomes the homepage. This deliberately updates the README alongside the new site. Preserve other repository files.

The existing Pages source should remain main / (root). Check Actions for the deployment result. Preview the published homepage and each language after deployment.

## Check after publishing
- Language links and table-of-contents anchors work.
- Commands remain readable on a phone.
- No personal data is present.
- The footer's repository link points to your project.
- All three guides use the same step numbers and examples.

To undo a publication, revert its commit in GitHub, then let Pages deploy again. Keep the original ZIP locally for editing and backup.

## Editorial boundary
Public guide pages address people installing and using the tools. Keep release-validation tasks, publication decisions, test-version records, and screenshot preparation in this maintenance file, not in the translated guides. The public date records a content update, not a claim of a fully tested software release. Before publishing future revisions, review English, Spanish and Catalan together for leaked editorial instructions. Keep useful reader-facing compatibility and troubleshooting notes.

## Interactive release checks
- In Chrome and on Android, complete a tour, reload, switch languages, and reopen the same site.
- Test denied clipboard access, unavailable local storage, and JavaScript disabled.
- Enter an invalid address and confirm the network steps remain blocked. Never enter credentials into the guide.
- Open and close Brot with pointer and keyboard; Escape closes the advice without interrupting the tour.
- Test printing from guided mode: the full guide should print.
- Keep `app.js`, `guide-data.js` and both SVG files beside `index.html` when uploading.
