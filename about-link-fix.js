(function(){
  var names={
    ar:{about:"من نحن",ph:"اكتب كلمة للبحث...",go:"بحث",aria:"بحث"},
    fr:{about:"À propos",ph:"Rechercher...",go:"Chercher",aria:"Rechercher"},
    en:{about:"About",ph:"Search...",go:"Search",aria:"Search"}
  };

  // روابط حسابات التواصل: بدّلها برابط حسابك الحقيقي
  var SOCIAL=[
    {name:"WhatsApp",url:"https://wa.me/",svg:'<svg viewBox="0 0 24 24"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 10c0 2.5 2.5 5 5 5l1-1.2-1.8-.8-.6.6c-.8-.4-1.6-1.2-2-2l.6-.6-.8-1.8z"/></svg>'},
    {name:"Facebook",url:"https://www.facebook.com/",svg:'<svg viewBox="0 0 24 24"><path d="M14 22v-8h2.6l.4-3H14V9.2c0-.9.3-1.5 1.5-1.5H17.5V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H9v3h2.3v8"/></svg>'},
    {name:"Instagram",url:"https://www.instagram.com/",svg:'<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6"/></svg>'},
    {name:"TikTok",url:"https://www.tiktok.com/",svg:'<svg viewBox="0 0 24 24"><path d="M15 3c.3 2.4 1.8 3.9 4.5 4.1v3.1c-1.6 0-3.1-.5-4.4-1.3v6.3a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v3.2a2.5 2.5 0 1 0 1.6 2.3V3z"/></svg>'},
    {name:"YouTube",url:"https://www.youtube.com/",svg:'<svg viewBox="0 0 24 24"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.5 9.5v5l4-2.5z"/></svg>'},
    {name:"X",url:"https://x.com/",svg:'<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg>'}
  ];

  // هلال للوضع الليلي
  var MOON='<svg viewBox="0 0 24 24"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>';

  var css=
    "header{display:flex !important;justify-content:space-between !important;align-items:center;flex-wrap:wrap}"+
    "header>nav{flex:1 1 auto}"+
    "@media (min-width:700px){header .logo{margin-right:-72px !important}}"+
    ".rahal-tools{display:inline-flex;align-items:center;gap:10px;margin-left:auto}"+
    "@media (min-width:700px){.rahal-tools.rahal-home{margin-left:-40px !important}}"+
    ".rahal-tools select{background:transparent !important;color:#fff !important;border:1px solid #fff !important}"+
    ".rahal-tools select option{color:#252827;background:#fff}"+
    ".rahal-sw{display:inline-flex;align-items:center;margin:0 26px;vertical-align:middle}"+
    ".rahal-sb{background:transparent;border:0;padding:4px;cursor:pointer;opacity:.7;display:inline-flex;align-items:center;justify-content:center}"+
    ".rahal-sb:hover{opacity:1}"+
    ".rahal-sb svg{width:20px;height:20px;stroke:#f4ebdd;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}"+
    ".rahal-soc{display:inline-flex;align-items:center;gap:6px}"+
    ".rahal-soc a{width:36px;height:36px;border:1px solid #d8b879;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;text-decoration:none}"+
    ".rahal-soc a:hover{background:#d8b879}"+
    ".rahal-soc svg{width:18px;height:18px;stroke:#d8b879;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}"+
    ".rahal-soc a:hover svg{stroke:#142c2a}"+
    ".rahal-tbtn{background:transparent;border:0;padding:0;margin-right:24px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;opacity:.95}"+
    ".rahal-tbtn:hover{opacity:1}"+
    ".rahal-tbtn svg{width:22px;height:22px;fill:#d8b879;stroke:none}"+
    ".rahal-sf{display:none;align-items:center;gap:6px}"+
    ".rahal-sf.open{display:inline-flex}"+
    ".rahal-sf input{width:170px;max-width:50vw;padding:7px 10px;border:1px solid #d8b879;border-radius:6px;background:#fff;color:#252827;font-family:inherit;font-size:14px}"+
    ".rahal-sf button{padding:7px 12px;background:#d8b879;color:#142c2a;border:0;border-radius:6px;cursor:pointer;font-family:inherit;font-size:14px}"+
    "html.rahal-dark body{background-color:#0e1a19 !important;color:#e8e2d6 !important}"+
    "html.rahal-dark main,html.rahal-dark section:not(.hero),html.rahal-dark footer{background-color:#0e1a19 !important}"+
    "html.rahal-dark header{background-color:#0a1514 !important}"+
    "html.rahal-dark h1,html.rahal-dark h2,html.rahal-dark h3,html.rahal-dark h4,html.rahal-dark p,html.rahal-dark li,html.rahal-dark label,html.rahal-dark .tag,html.rahal-dark .meta{color:#e8e2d6 !important}"+
    "html.rahal-dark .card,html.rahal-dark .src{background-color:#16292a !important}"+
    "html.rahal-dark main input,html.rahal-dark main textarea{background-color:#16292a !important;color:#e8e2d6 !important;border-color:#2c4a48 !important}"+
    "html.rahal-dark .src a{color:#d8b879 !important}";
  var st=document.createElement("style");
  st.textContent=css;
  document.head.appendChild(st);

  var ICON='<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/></svg>';

  function langSel(){ return document.getElementById("language") || document.getElementById("lang"); }
  function currentLang(){ var s=langSel(); return (s && s.value) || "ar"; }
  function L(){ return names[currentLang()] || names.ar; }

  function socialHTML(){
    return SOCIAL.map(function(s){
      return '<a href="'+s.url+'" target="_blank" rel="noopener" aria-label="'+s.name+'" title="'+s.name+'">'+s.svg+'</a>';
    }).join("");
  }

  function isDark(){ return document.documentElement.classList.contains("rahal-dark"); }

  function loadTheme(){
    var dark=false;
    try{ dark=localStorage.getItem("rahal-theme")==="dark"; }catch(e){}
    document.documentElement.classList.toggle("rahal-dark",dark);
  }

  function paintTheme(){
    var b=document.querySelector(".rahal-tbtn");
    if(!b) return;
    b.innerHTML=MOON;
    var t=isDark() ? "الوضع النهاري" : "الوضع الليلي";
    b.setAttribute("title",t);
    b.setAttribute("aria-label",t);
  }

  function build(){
    if(document.querySelector(".rahal-tools")) return;
    var sel=langSel();
    var search=document.querySelector('a[href="search.html"]');
    var about=document.querySelector('a[href="about.html"]');
    if(!sel && !search && !about) return;

    var wrap=document.createElement("span");
    wrap.className="rahal-sw";
    wrap.innerHTML=
      '<button type="button" class="rahal-sb" aria-label="بحث">'+ICON+'</button>'+
      '<form class="rahal-sf" action="search.html" method="get">'+
        '<input name="q" type="search" autocomplete="off">'+
        '<button type="submit"></button>'+
      '</form>';

    var soc=document.createElement("span");
    soc.className="rahal-soc";
    soc.innerHTML=socialHTML();

    var tbtn=document.createElement("button");
    tbtn.type="button";
    tbtn.className="rahal-tbtn";
    tbtn.addEventListener("click",function(){
      var on=!isDark();
      document.documentElement.classList.toggle("rahal-dark",on);
      try{ localStorage.setItem("rahal-theme", on ? "dark" : "light"); }catch(e){}
      paintTheme();
    });
    soc.appendChild(tbtn);

    var group=document.createElement("span");
    group.className="rahal-tools";
    if(document.querySelector(".hero")) group.classList.add("rahal-home");
    group.appendChild(soc);

    if(sel){
      var host=sel.parentNode;
      if(host.tagName==="NAV" && host.parentNode && host.parentNode.tagName==="HEADER"){
        var hdr=host.parentNode;
        hdr.insertBefore(wrap, host.nextSibling);
        hdr.insertBefore(group, wrap.nextSibling);
        group.appendChild(sel);
      } else {
        host.insertBefore(group, sel);
        group.appendChild(sel);
        host.insertBefore(wrap, group);
      }
      if(search && search.parentNode) search.parentNode.removeChild(search);
    } else if(search){
      search.parentNode.replaceChild(wrap, search);
      wrap.parentNode.insertBefore(group, wrap.nextSibling);
    } else {
      about.parentNode.insertBefore(wrap, about.nextSibling);
      wrap.parentNode.insertBefore(group, wrap.nextSibling);
    }

    var btn=wrap.querySelector(".rahal-sb");
    var form=wrap.querySelector(".rahal-sf");
    var input=form.querySelector("input");
    btn.addEventListener("click",function(){
      form.classList.toggle("open");
      if(form.classList.contains("open")) input.focus();
    });
    form.addEventListener("submit",function(e){
      if(!input.value.trim()) e.preventDefault();
    });
  }

  function labels(){
    var t=L();
    document.querySelectorAll('a[href="about.html"]').forEach(function(a){ a.textContent=t.about; });
    var b=document.querySelector(".rahal-sb");
    if(b) b.setAttribute("aria-label",t.aria);
    var i=document.querySelector(".rahal-sf input");
    if(i) i.placeholder=t.ph;
    var g=document.querySelector(".rahal-sf button");
    if(g) g.textContent=t.go;
  }

  function run(){ build(); labels(); paintTheme(); }

  loadTheme();
  var sel=langSel();
  if(sel){ sel.addEventListener("change",function(){ setTimeout(run,50); }); }
  run();
  setTimeout(run,300);
  setTimeout(run,1000);
})();
