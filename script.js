// --- Utils ---
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

// --- Year ---
$('#year').textContent = new Date().getFullYear();

// --- Theme (data-theme on <html>) ---
(function(){
  const KEY = 'ws-theme';                // 'dark' | 'light' | null(시스템)
  const root = document.documentElement; // <html>

  function systemPrefersLight(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  }
  function apply(mode){
    if(mode === 'light'){ root.setAttribute('data-theme','light'); }
    else if(mode === 'dark'){ root.setAttribute('data-theme','dark'); }
    else { // null → 시스템 기본
      root.setAttribute('data-theme', systemPrefersLight() ? 'light' : 'dark');
    }
    const isDark = root.getAttribute('data-theme') === 'dark';
    const btn = $('#themeToggle');
    if(btn) btn.setAttribute('aria-pressed', (!isDark).toString()); // true=light(pressed)
  }

  // 초기 적용
  apply(localStorage.getItem(KEY)); // null이면 시스템 기본 적용

  // 시스템 설정이 바뀌면, 사용자가 수동 설정 안했을 때만 반영
  if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme: light)').addEventListener?.('change', e=>{
      if(localStorage.getItem(KEY) === null){ apply(null); }
    });
  }

  // 토글 버튼
  $('#themeToggle')?.addEventListener('click', ()=>{
    const cur = localStorage.getItem(KEY); // 'dark' | 'light' | null
    // 순환: system(null) → dark → light → system(null)
    const currentApplied = document.documentElement.getAttribute('data-theme'); // 'dark' | 'light'
    let next;
    if(cur === null){ next = (currentApplied === 'dark') ? 'light' : 'dark'; }
    else if(cur === 'dark'){ next = 'light'; }
    else if(cur === 'light'){ next = null; }
    if(next === null) localStorage.removeItem(KEY); else localStorage.setItem(KEY, next);
    apply(next);
  });
})();

// --- Smooth scroll for internal anchors ---
$$('a[href^="#"]').forEach(a=>{
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

// --- Project filters ---
const chips = $$('.filters .chip');
const projects = $$('.project');
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

// --- Keyboard nav for filter toolbar ---
$('.filters')?.addEventListener('keydown', (e)=>{
  if(e.key==='ArrowRight' || e.key==='ArrowLeft'){
    const items = chips;
    const idx = items.indexOf(document.activeElement);
    const next = e.key==='ArrowRight' ? (idx+1)%items.length : (idx-1+items.length)%items.length;
    items[next].focus();
    e.preventDefault();
  }
});
