'use strict';
(() => {
  const data = window.OYM_DATA;
  if (!data) return;
  const language = ['en', 'es', 'ca'].includes(document.documentElement.lang) ? document.documentElement.lang : 'en';
  const li = ['en', 'es', 'ca'].indexOf(language);
  const ui = data.ui[language];
  const key = 'own-your-music.journey.v1';
  const count = data.steps.length;
  const element = (tag, text, cls) => {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  };
  const button = (text, fn, cls = 'journey-button') => {
    const node = element('button', text, cls);
    node.type = 'button'; node.addEventListener('click', fn); return node;
  };
  function privateIP(value) {
    if (!/^\d{1,3}(\.\d{1,3}){3}$/.test(value)) return false;
    const a = value.split('.').map(Number);
    if (a.some(x => x > 255) || a[3] === 0 || a[3] === 255) return false;
    return a[0] === 10 || (a[0] === 192 && a[1] === 168) || (a[0] === 172 && a[1] >= 16 && a[1] <= 31);
  }
  let state = {current: 0, completed: [], ip: ''};
  let storageOK = true;
  try {
    const existing = JSON.parse(localStorage.getItem(key) || 'null');
    if (existing && typeof existing === 'object') {
      if (Number.isInteger(existing.current) && existing.current >= 0 && existing.current < count) state.current = existing.current;
      if (Array.isArray(existing.completed)) state.completed = [...new Set(existing.completed.filter(id => data.steps.some(s => s.id === id)))];
      if (typeof existing.ip === 'string' && privateIP(existing.ip)) state.ip = existing.ip;
    }
    localStorage.setItem(key, JSON.stringify(state));
  } catch (_) { storageOK = false; }
  let storageMessage;
  function save() {
    try { localStorage.setItem(key, JSON.stringify(state)); storageOK = true; } catch (_) { storageOK = false; }
    if (storageMessage) storageMessage.textContent = storageOK ? ui.saved : ui.unsaved;
  }
  const root = document.getElementById('journey-root');
  const complete = document.getElementById('complete-guide');
  let guided = true;
  let finished = false;
  let toolbar, toggle, card, progress, bar, picker, status;
  const replaceIP = text => text.replaceAll('{{IP}}', state.ip || '…');
  function updateLanguageLinks() {
    if (!root) return;
    document.querySelectorAll('header nav a').forEach(a => {
      const code = a.getAttribute('lang');
      a.setAttribute('href', code + '.html' + (guided ? '#step-' + data.steps[state.current].id : (location.hash.startsWith('#section-') ? location.hash : '#section-1')));
    });
  }
  function showFull(section) {
    guided = false; root.hidden = true; complete.hidden = false; toggle.textContent = ui.returnGuide;
    if (section) {
      try { history.replaceState(null, '', '#section-' + section); } catch (_) {}
      const target = document.getElementById('section-' + section);
      if (target) { target.tabIndex = -1; target.focus({preventScroll: true}); target.scrollIntoView({block: 'start'}); }
    }
    updateLanguageLinks();
  }
  function showGuided() {
    guided = true; root.hidden = false; complete.hidden = true; toggle.textContent = ui.full; finished = false; render();
  }
  function go(index) {
    state.current = Math.max(0, Math.min(count - 1, index)); finished = false; save(); render(true);
  }
  async function copyCode(text, source, feedback) {
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('No clipboard');
      await navigator.clipboard.writeText(text);
      source.textContent = ui.copied; feedback.textContent = ui.copied;
    } catch (_) { feedback.textContent = ui.copyFail; }
  }
  function render(focus = false) {
    if (!root) return;
    const step = data.steps[state.current];
    picker.value = String(state.current);
    progress.textContent = state.completed.length + ' ' + ui.of + ' ' + count + ' ' + ui.progress;
    bar.value = state.completed.length;
    card.replaceChildren();
    card.id = 'step-' + step.id;
    const badge = element('p', ui.step + ' ' + (state.current + 1) + ' / ' + count, 'eyebrow');
    const title = element('h2', finished ? (state.completed.length === count ? ui.allDone : ui.finishTitle) : step.titles[li]);
    title.tabIndex = -1; title.id = 'current-step-title';
    card.append(badge, title);
    if (finished) {
      card.append(element('p', state.completed.length === count ? ui.doneText : ui.incomplete, 'step-intro'));
      card.append(button(ui.returnGuide, () => { finished = false; render(true); }));
    } else {
      card.append(element('p', step.intros[li], 'step-intro'));
      const list = element('ol', undefined, 'action-list');
      step.actions[li].forEach(text => list.append(element('li', replaceIP(text))));
      card.append(list);
      if (['download','ffmpeg','tempus'].includes(step.kind)) {
        const refs = {
          download: ['Navidrome', 'https://github.com/navidrome/navidrome/releases/latest'],
          ffmpeg: ['FFmpeg', 'https://ffmpeg.org/download.html'],
          tempus: ['F-Droid / Tempus', 'https://f-droid.org/en/packages/com.eddyizm.degoogled.tempus/']
        };
        const [name, href] = refs[step.kind]; const link = element('a', name + ' ↗', 'resource-link'); link.href = href;
        card.append(link);
        if (step.kind === 'tempus') { const fd = element('a','F-Droid ↗','resource-link');fd.href='https://f-droid.org/';card.append(fd); }
      }
      const blocked = step.kind === 'needs-ip' && !privateIP(state.ip);
      if (blocked) {
        const warning = element('div', undefined, 'ip-warning');
        warning.append(element('p', ui.ipRequired), button(ui.ipGo, () => go(data.steps.findIndex(s => s.kind === 'ip'))));
        card.append(warning);
      } else if (step.code) {
        const text = replaceIP(step.code);
        const pre = element('pre'); pre.append(element('code', text));
        const feedback = element('span', '', 'copy-feedback'); feedback.setAttribute('role','status');
        const copy = button(ui.copy, () => copyCode(text, copy, feedback), 'copy-button');
        const wrap = element('div', undefined, 'command-block'); wrap.append(pre, copy, feedback); card.append(wrap);
      }
      if (step.kind === 'ip') {
        const form = element('form',undefined,'ip-form');
        const label = element('label', ui.ipLabel); label.htmlFor = 'local-ip';
        const input = element('input'); input.id='local-ip';input.type='text'; input.inputMode='decimal';input.autocomplete='off';input.spellcheck=false;input.placeholder=ui.ipPlaceholder;input.value=state.ip;input.required=true;
        input.setAttribute('aria-describedby','ip-feedback');
        const feedback = element('p', state.ip ? ui.ipGood : '', 'ip-feedback'); feedback.id='ip-feedback'; feedback.setAttribute('role','status');
        const submit = element('button',ui.ipSave,'journey-button secondary');submit.type='submit';
        form.append(label,input,submit,feedback);
        form.addEventListener('submit', event => {
          event.preventDefault(); const value=input.value.trim();
          if (!privateIP(value)) {feedback.textContent=ui.ipBad;input.setAttribute('aria-invalid','true');return;}
          // Normalise decimal octets. Only validated numeric addresses enter commands.
          state.ip=value.split('.').map(Number).join('.');save();render();
          const feedbackNew = document.getElementById('ip-feedback');if(feedbackNew)feedbackNew.focus();
        });
        card.append(form);
      }
      const check = element('div',undefined,'step-check');check.append(element('strong',ui.checkpoint),element('p',step.checks[li]));card.append(check);
      const help = element('details',undefined,'step-help');help.append(element('summary',ui.help),element('p',step.helps[li]));
      help.append(button(ui.more, () => showFull(step.ref), 'text-button'));card.append(help);
      const controls = element('div',undefined,'step-controls');
      const previous = button(ui.back,()=>go(state.current-1),'journey-button secondary');previous.disabled=state.current===0;
      const next = button(state.current===count-1 ? ui.finish : ui.next,()=>{
        if (blocked || (step.kind==='ip' && !privateIP(state.ip))) return;
        if (!state.completed.includes(step.id)) state.completed.push(step.id);
        if (state.current===count-1) {finished=true;save();render(true);} else go(state.current+1);
      });
      next.disabled=blocked||(step.kind==='ip'&&!privateIP(state.ip));
      controls.append(previous,next);card.append(controls);
    }
    if (guided) {try {history.replaceState(null,'','#step-'+step.id);} catch (_) {}}
    updateLanguageLinks();
    if (focus) {title.focus({preventScroll:true});root.scrollIntoView({block:'start'});}
  }
  if (root && complete) {
    toolbar=element('div',undefined,'guide-tools');
    toggle=button(ui.full,()=>guided?showFull():showGuided(),'journey-button secondary');
    const reset=button(ui.restart,()=>{
      if(!window.confirm(ui.confirm))return;
      state={current:0,completed:[],ip:''};finished=false;save();showGuided();
    },'text-button');
    toolbar.append(toggle,reset);root.before(toolbar);
    const header=element('div',undefined,'journey-header');header.append(element('h2',ui.guided));
    progress=element('p',undefined,'progress-text');progress.setAttribute('role','status');
    bar=element('progress');bar.max=count;bar.setAttribute('aria-label',ui.guided);
    const label=element('label',ui.jump,'step-picker-label');label.htmlFor='step-picker';
    picker=element('select');picker.id='step-picker';
    data.steps.forEach((s,i)=>{const option=element('option',(i+1)+'. '+s.titles[li]);option.value=String(i);picker.append(option);});
    picker.addEventListener('change',()=>go(Number(picker.value)));
    header.append(progress,bar,label,picker);
    card=element('section',undefined,'journey-card');card.setAttribute('aria-labelledby','current-step-title');
    storageMessage=element('p',storageOK?ui.saved:ui.unsaved,'local-note');
    const privacy=element('p',ui.privacy,'local-note');
    root.append(header,card,storageMessage,privacy);
    const requested=data.steps.findIndex(s=>'#step-'+s.id===location.hash);
    if(requested>=0)state.current=requested;
    if(location.hash.startsWith('#section-')) {const section=Number(location.hash.split('-').pop());guided=false;render();showFull(section);}
    else showGuided();
    window.addEventListener('hashchange',()=>{
      const index=data.steps.findIndex(s=>'#step-'+s.id===location.hash);
      if(index>=0){state.current=index;save();showGuided();}
      else if(location.hash.startsWith('#section-'))showFull();
    });
  }
  // Brot is deliberately quiet: no popup until the reader asks.
  const companion=element('div',undefined,'brot-companion');
  const launch=button('',()=>{bubble.hidden=!bubble.hidden;launch.setAttribute('aria-expanded',String(!bubble.hidden));if(!bubble.hidden){refreshTip();close.focus();}},'brot-button');
  launch.setAttribute('aria-label',ui.mascotLabel);launch.setAttribute('aria-expanded','false');launch.setAttribute('aria-controls','brot-advice');launch.title=ui.mascotLabel;
  const image=element('img');image.src='brot.svg';image.alt='';image.width=80;image.height=88;launch.append(image);
  const bubble=element('section',undefined,'brot-bubble');bubble.id='brot-advice';bubble.hidden=true;bubble.setAttribute('role','dialog');bubble.setAttribute('aria-labelledby','brot-title');
  const tipTitle=element('h2',ui.mascotTitle);tipTitle.id='brot-title';
  const tip=element('p');tip.setAttribute('aria-live','polite');let tipIndex=Math.floor(Math.random()*data.tips[language].length);
  function refreshTip(){tip.textContent=data.tips[language][tipIndex];tipIndex=(tipIndex+1)%data.tips[language].length;}
  const close=button(ui.close,()=>{bubble.hidden=true;launch.setAttribute('aria-expanded','false');launch.focus();},'text-button');
  bubble.append(tipTitle,tip,button(ui.nextTip,refreshTip,'journey-button secondary'),close);companion.append(bubble,launch);document.body.append(companion);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!bubble.hidden){bubble.hidden=true;launch.setAttribute('aria-expanded','false');launch.focus();}});
})();
