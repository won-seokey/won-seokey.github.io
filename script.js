// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal anchors (basic)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
      history.pushState(null,'',id);
    }
  });
});

// Theme toggle (system preference respected; toggle overrides)
(function(){
  const key = 'ws-theme';
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const apply = (mode)=>{
    // mode: 'dark' | 'light' | null
    if(mode==='dark'){ root.style.colorScheme='dark'; btn.setAttribute('aria-pressed','true'); }
    else if(mode==='light'){ root.style.colorScheme='light'; btn.setAttribute('aria-pressed','true'); }
    else { root.style.colorScheme='normal'; btn.setAttribute('aria-pressed','false'); }
  };
  // load
  const saved = localStorage.getItem(key);
  apply(saved);
  btn?.addEventListener('click', ()=>{
    const cur = localStorage.getItem(key);
    const next = cur === 'dark' ? 'light' : (cur === 'light' ? null : 'dark');
    if(next) localStorage.setItem(key,next); else localStorage.removeItem(key);
    apply(next);
  });
})();

// Project filter
const chips = document.querySelectorAll('.filters .chip');
const projects = document.querySelectorAll('.project');
chips.forEach(ch=>{
  ch.addEventListener('click', ()=>{
    chips.forEach(c=>c.classList.remove('is-active'));
    ch.classList.add('is-active');
    const f = ch.dataset.filter;
    projects.forEach(p=>{
      if(f==='all'){ p.style.display='block'; return; }
      const tags = (p.getAttribute('data-tags')||'').split(/\s+/);
      p.style.display = tags.includes(f) ? 'block' : 'none';
    });
  });
});

// Keyboard accessibility for filter toolbar
document.querySelector('.filters')?.addEventListener('keydown', (e)=>{
  if(e.key==='ArrowRight' || e.key==='ArrowLeft'){
    const items = Array.from(chips);
    const idx = items.indexOf(document.activeElement);
    const next = e.key==='ArrowRight' ? (idx+1)%items.length : (idx-1+items.length)%items.length;
    items[next].focus();
    e.preventDefault();
  }
});
