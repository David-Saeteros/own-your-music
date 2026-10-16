from pathlib import Path
import re, html
ROOT=Path(__file__).resolve().parent
META={'en': ('Your music. Your files.', 'A practical guide to keeping your collection and listening on your own terms.', 'Contents', 'Start reading', 'Back to top', 'Skip to guide'), 'es': ('Tu música. Tus archivos.', 'Una guía práctica para conservar tu colección y escucharla a tu manera.', 'Contenido', 'Empieza aquí', 'Volver arriba', 'Ir a la guía'), 'ca': ('La teva música. Els teus fitxers.', 'Una guia pràctica per conservar la col·lecció i escoltar-la a la teva manera.', 'Contingut', 'Comença aquí', 'Torna a dalt', 'Ves a la guia')}
def inline(s):
    saved=[]
    def keep(m):
        saved.append('<code>'+html.escape(m.group(1))+'</code>'); return f'@@CODE{len(saved)-1}@@'
    s=re.sub(r'`([^`]+)`',keep,s); s=html.escape(s)
    s=re.sub(r'\[([^\]]+)\]\((https://[^\s)]+)\)',r'<a href="\2">\1</a>',s)
    s=re.sub(r'\*\*(.+?)\*\*',r'<strong>\1</strong>',s)
    for i,v in enumerate(saved):s=s.replace(f'@@CODE{i}@@',v)
    return s

def render(md):
    out=[]; toc=[]; block=[]; incode=False; lang=''; inlist=False; n=0
    def close_list():
        nonlocal inlist
        if inlist: out.append('</ul>');inlist=False
    for line in md.splitlines():
        if line.startswith('```'):
            if incode:out.append('<pre><code>'+html.escape('\n'.join(block))+'</code></pre>');block=[];incode=False
            else:close_list();incode=True;lang=line[3:]
            continue
        if incode:block.append(line);continue
        if line.startswith('## '):
            close_list();
            if n: out.append('</section>')
            n+=1; title=line[3:]; ident=f'section-{n}';toc.append((ident,title));out.append(f'<section class="guide-step"><h2 id="{ident}">{inline(title)}</h2>')
        elif line.startswith('### '):close_list();out.append('<h3>'+inline(line[4:])+'</h3>')
        elif line.startswith('- '):
            if not inlist:out.append('<ul>');inlist=True
            out.append('<li>'+inline(line[2:])+'</li>')
        elif line.strip():
            close_list()
            checkpoint=line.startswith(('**Checkpoint:', '**Comprobación:', '**Comprovació:'))
            out.append(('<p class="checkpoint">' if checkpoint else '<p>')+inline(line)+'</p>')
        else:close_list()
    close_list()
    if n:out.append('</section>')
    return '\n'.join(out),toc

def shell(lang,title,desc,body,skip='Skip to content'):
    return f'''<!doctype html>
<html lang="{lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>{html.escape(title)} · Own Your Music</title><meta name="description" content="{html.escape(desc,quote=True)}"><meta name="color-scheme" content="light"><link rel="stylesheet" href="style.css"></head><body><a class="skip" href="#main">{skip}</a><header><a class="brand" href="index.html"><span class="mark" aria-hidden="true">●</span> Own Your Music</a><nav aria-label="Language"><a lang="es" href="es.html" {'aria-current="page"' if lang=='es' else ''}>Español</a><a lang="en" href="en.html" {'aria-current="page"' if lang=='en' else ''}>English</a><a lang="ca" href="ca.html" {'aria-current="page"' if lang=='ca' else ''}>Català</a></nav></header>{body}<footer><span>Own Your Music · David Saeteros · 2026</span><a href="https://github.com/David-Saeteros/own-your-music">GitHub ↗</a></footer><script src="guide-data.js" defer></script><script src="app.js" defer></script></body></html>'''

for lang,(title,desc,contents,start,back,skip) in META.items():
    md=(ROOT/'content'/f'{lang}.md').read_text(encoding='utf-8').split('\n',1)[1]
    forbidden=('Before presenting a future app version', 'Antes de presentar una versión futura', 'Abans de presentar una versió futura', 'this published guide needs independent testing', 'esta guía publicada necesita pruebas independientes', 'aquesta guia publicada necessita proves independents', 'Screenshots from the original setup are omitted', 'Se omiten las capturas originales', 'S’ometen les captures originals')
    assert not any(phrase in md for phrase in forbidden), f'Maintainer instruction found in public guide: {lang}'
    article,toc=render(md)
    links=''.join(f'<li><a href="#{i}">{html.escape(t)}</a></li>' for i,t in toc)
    body=f'<main id="main"><div class="guide-hero" id="top"><p class="eyebrow">WINDOWS + ANDROID / NAVIDROME + TEMPUS</p><h1>{title}</h1><p class="intro">{desc}</p><div class="meta"><span>v0.3</span><span>16.10.2026</span><span>{lang.upper()}</span></div></div><div id="journey-root" hidden></div><div class="layout" id="complete-guide"><aside><details open><summary>{contents}</summary><ol>{links}</ol></details></aside><article>{article}<a class="toplink" href="#top">↑ {back}</a></article></div></main>'
    (ROOT/f'{lang}.html').write_text(shell(lang,title,desc,body,skip),encoding='utf-8')
print('Rebuilt en.html, es.html, ca.html')
