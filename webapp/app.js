/* Sports World — Experiencia Ideal · Dev Docs (bilingual ES/EN) */
(() => {
  const UI = {
    es: { subtitle:'Experiencia Ideal · Dev Docs', toc:'Temario', all:'Todo', loading:'Cargando…',
          prev:'Anterior', next:'Siguiente', source:'Fuente', search:'Buscar…', noresults:'Sin resultados',
          orig:'original' },
    en: { subtitle:'Experiencia Ideal · Dev Docs', toc:'Contents', all:'All', loading:'Loading…',
          prev:'Previous', next:'Next', source:'Source', search:'Search…', noresults:'No results',
          orig:'original' }
  };
  let SECTIONS = [], FLAT = [], lang = localStorage.getItem('lang') || 'es', docFilter = 'all';

  const $ = s => document.querySelector(s);
  const tocEl=$('#toc'), artEl=$('#article'), searchEl=$('#search'), srEl=$('#searchResults');

  marked.setOptions({ gfm:true, breaks:false, headerIds:false, mangle:false });
  let MERMAID_N = 0;
  if (window.mermaid) mermaid.initialize({ startOnLoad:false, theme:'neutral', securityLevel:'loose' });
  function renderMermaid(root){
    if(!window.mermaid) return;
    root.querySelectorAll('code.language-mermaid').forEach(code=>{
      const div=document.createElement('div');
      div.className='mermaid'; div.id='mmd-'+(MERMAID_N++);
      div.textContent=code.textContent;
      (code.closest('pre')||code).replaceWith(div);
    });
    const nodes=root.querySelectorAll('.mermaid');
    if(nodes.length){ try{ mermaid.run({ nodes }); }catch(e){ /* leave source visible */ } }
  }

  function t(k){ return (UI[lang]||UI.es)[k] || k; }
  function pick(field, sec){ // field: 'title' | 'body'
    const o = sec[field] || {};
    if (o[lang] && o[lang].trim()) return { text:o[lang], orig:false };
    const other = lang==='es'?'en':'es';
    return { text:o[other]||'', orig:true };
  }

  function visible(){ return FLAT.filter(s => docFilter==='all' || s.doc===docFilter); }

  function buildTOC(){
    tocEl.innerHTML='';
    visible().forEach(sec => {
      const li=document.createElement('li');
      li.className='lvl-'+sec.level;
      const a=document.createElement('a');
      a.href='#'+sec.id; a.dataset.id=sec.id;
      a.textContent = pick('title',sec).text || sec.id;
      li.appendChild(a); tocEl.appendChild(li);
    });
    highlightTOC(location.hash.slice(1));
  }

  function renderSection(id){
    const sec = FLAT.find(s=>s.id===id) || visible()[0];
    if(!sec){ artEl.innerHTML='<p>'+t('noresults')+'</p>'; return; }
    const title=pick('title',sec), body=pick('body',sec);
    const badge = (title.orig||body.orig) ? `<span class="lang-badge" title="shown in source language">${lang==='es'?'EN':'ES'} ${t('orig')}</span>` : '';
    const md = '# '+ (title.text||'') + ' ' + '\n\n' + (body.text||'');
    artEl.innerHTML = marked.parse(md);
    renderMermaid(artEl);
    // append badge to first heading
    const h=artEl.querySelector('h1'); if(h && badge) h.insertAdjacentHTML('beforeend',' '+badge);
    document.title = (title.text||'Docs')+' · Sports World Dev Docs';
    highlightTOC(id);
    updatePager(sec);
    $('#content').scrollTop=0; window.scrollTo(0,0);
  }

  function highlightTOC(id){
    tocEl.querySelectorAll('a').forEach(a=>{
      const on=a.dataset.id===id; a.classList.toggle('active',on);
      if(on) a.scrollIntoView({block:'nearest'});
    });
  }

  function updatePager(sec){
    const list=visible(), i=list.indexOf(sec);
    const prev=list[i-1], next=list[i+1];
    const pb=$('#prevBtn'), nb=$('#nextBtn');
    if(prev){ pb.hidden=false; pb.onclick=()=>go(prev.id); pb.querySelector('span').textContent=pick('title',prev).text.slice(0,42)||t('prev'); }
    else pb.hidden=true;
    if(next){ nb.hidden=false; nb.onclick=()=>go(next.id); nb.querySelector('span').textContent=pick('title',next).text.slice(0,42)||t('next'); }
    else nb.hidden=true;
  }

  function go(id){ if(location.hash.slice(1)===id) renderSection(id); else location.hash=id;
    if(window.innerWidth<=900) closeNav(); }

  /* ---- Search ---- */
  function plain(md){ return (md||'').replace(/[#*`>|_-]/g,' ').replace(/\s+/g,' ').trim(); }
  function search(q){
    q=q.trim().toLowerCase();
    if(q.length<2){ srEl.hidden=true; srEl.innerHTML=''; return; }
    const res=[];
    for(const s of visible()){
      const ti=pick('title',s).text, bo=pick('body',s).text;
      const hay=(ti+' '+plain(bo)).toLowerCase();
      const idx=hay.indexOf(q);
      if(idx>=0){
        const snip=plain(bo); const p=snip.toLowerCase().indexOf(q);
        let ex = p>=0 ? snip.slice(Math.max(0,p-30),p+60) : snip.slice(0,80);
        res.push({s,ti,ex});
      }
      if(res.length>=40) break;
    }
    if(!res.length){ srEl.hidden=false; srEl.innerHTML=`<button disabled>${t('noresults')}</button>`; return; }
    const rx=new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig');
    srEl.innerHTML=res.map(r=>`<button data-id="${r.s.id}">
        <span class="sr-title">${esc(r.ti).replace(rx,'<mark>$1</mark>')}</span>
        <span class="sr-snip">${esc(r.ex).replace(rx,'<mark>$1</mark>')}…</span></button>`).join('');
    srEl.hidden=false;
    srEl.querySelectorAll('button[data-id]').forEach(b=>b.onclick=()=>{ go(b.dataset.id); closeSearch(); });
  }
  function esc(s){ return (s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
  function closeSearch(){ srEl.hidden=true; searchEl.value=''; }

  /* ---- Nav (mobile) ---- */
  function openNav(){ document.body.classList.add('nav-open'); $('#overlay').hidden=false; $('#menuToggle').setAttribute('aria-expanded','true'); }
  function closeNav(){ document.body.classList.remove('nav-open'); $('#overlay').hidden=true; $('#menuToggle').setAttribute('aria-expanded','false'); }

  /* ---- i18n chrome ---- */
  function applyChrome(){
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.dataset.i18n; if(UI[lang][k]) el.textContent=UI[lang][k]; });
    searchEl.placeholder=t('search');
    document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  }
  function setLang(l){ lang=l; localStorage.setItem('lang',l); applyChrome(); buildTOC();
    renderSection(location.hash.slice(1)); search(searchEl.value); }

  /* ---- Init ---- */
  function bind(){
    window.addEventListener('hashchange',()=>renderSection(location.hash.slice(1)));
    document.querySelectorAll('.lang-btn').forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
    document.querySelectorAll('.doc-btn').forEach(b=>b.onclick=()=>{
      docFilter=b.dataset.doc; document.querySelectorAll('.doc-btn').forEach(x=>x.classList.toggle('active',x===b));
      buildTOC(); if(!visible().some(s=>s.id===location.hash.slice(1))) go(visible()[0].id);
    });
    searchEl.addEventListener('input',e=>search(e.target.value));
    searchEl.addEventListener('keydown',e=>{ if(e.key==='Escape') closeSearch(); });
    document.addEventListener('click',e=>{ if(!e.target.closest('.search-wrap')) srEl.hidden=true; });
    $('#menuToggle').onclick=()=>document.body.classList.contains('nav-open')?closeNav():openNav();
    $('#overlay').onclick=closeNav;
  }

  fetch('content.json').then(r=>r.json()).then(data=>{
    SECTIONS=data.sections||data; FLAT=SECTIONS;
    applyChrome(); bind(); buildTOC();
    const start=location.hash.slice(1) && FLAT.some(s=>s.id===location.hash.slice(1)) ? location.hash.slice(1) : FLAT[0].id;
    renderSection(start);
  }).catch(err=>{ artEl.innerHTML='<p style="color:#b71f21">Error cargando content.json: '+esc(String(err))+'</p>'; });
})();
