(function(){
  // Google Analytics: رقم القياس ديال المجلة
  var GA_ID="G-P8ZZ24G3DP";
  var gs=document.createElement("script");
  gs.async=true;
  gs.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;
  document.head.appendChild(gs);
  window.dataLayer=window.dataLayer||[];
  window.gtag=window.gtag||function(){ window.dataLayer.push(arguments); };
  window.gtag("js",new Date());
  window.gtag("config",GA_ID);

  // وصف الصفحة الرئيسية لـ Google: مجلة مغربية
  if(document.querySelector(".hero")){
    var desc="رحال مجلة رقمية مغربية مستقلة، مساحة للمعرفة والفضول، نروي فيها قصص الإنسان والمكان والعلم والتاريخ، ونستكشف المدن المغربية وذاكرتها.";
    var md=document.querySelector('meta[name="description"]');
    if(!md){ md=document.createElement("meta"); md.name="description"; document.head.appendChild(md); }
    md.setAttribute("content",desc);
  }

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
    "header{display:flex !important;justify-content:space-between !important;align-items:center;flex-wrap:nowrap}"+
    "header>nav{flex:1 1 auto;min-width:0}"+
    "@media (max-width:699px){"+".rahal-sw:has(.rahal-sf.open){flex:0 0 100% !important;order:5 !important;justify-content:center !important}"+"html[dir=ltr] header .logo,html[dir=ltr] header>a:first-child{order:4 !important}"+"html[dir=ltr] .rahal-lang{order:1 !important}"+"html[dir=ltr] .rahal-tbtn{order:2 !important}"+"html[dir=ltr] .rahal-sw{order:3 !important}"+"html,body{overflow-x:hidden !important;max-width:100% !important}"+"header,header>nav{box-sizing:border-box !important;max-width:100% !important;margin-left:0 !important;margin-right:0 !important}"+
      "header{flex-direction:row !important;flex-wrap:wrap !important;justify-content:space-between !important;align-items:center !important;gap:12px 6px !important;padding:12px 10px !important}"+
      "header img{height:64px !important;width:auto !important}"+
      "header .logo,header>a:first-child{order:1 !important;margin:0 0 0 auto !important}"+
      ".rahal-tools,.rahal-soc{display:contents !important}"+
      ".rahal-tools select{display:none !important}"+
      ".rahal-lang{display:inline-flex !important;order:4 !important;gap:6px !important;margin:0 !important}"+
      ".rahal-sw{order:2 !important;margin:0 !important}"+
      ".rahal-sb svg{width:18px !important;height:18px !important}"+
      ".rahal-tbtn{order:3 !important;margin:0 !important}"+
      ".rahal-tbtn svg{width:18px !important;height:18px !important}"+
      "header>nav{order:10 !important;flex:0 0 100% !important;width:100% !important;flex-wrap:nowrap !important;overflow-x:auto !important;justify-content:flex-start !important;gap:22px !important;padding:10px 16px !important;scrollbar-width:none;scroll-snap-type:x proximity;border-top:1px solid rgba(216,184,121,.45) !important;border-bottom:1px solid rgba(216,184,121,.45) !important;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 24px,#000 100%);mask-image:linear-gradient(to right,transparent 0,#000 24px,#000 100%)}"+
      "header>nav::-webkit-scrollbar{display:none}"+
      "header>nav a{flex:0 0 auto !important;white-space:nowrap !important;font-size:14px !important;letter-spacing:.2px;scroll-snap-align:start}"+
      ".rahal-soc a{order:20 !important;width:28px !important;height:28px !important}"+
      ".rahal-soc svg{width:14px !important;height:14px !important}"+
    "}"+
    "@media (min-width:700px){header{padding-left:24px !important;padding-right:24px !important}header>nav{margin-left:24px !important;margin-right:24px !important}}"+
    ".rahal-tools{display:inline-flex;align-items:center;gap:10px;margin-left:auto}"+
    ""+
    ".rahal-tools select{background:transparent !important;color:#fff !important;border:1px solid #fff !important}"+
    ".rahal-tools select option{color:#252827;background:#fff}"+
    ".rahal-lang{display:none;align-items:center;gap:6px}"+
    ".rahal-lb{width:26px;height:26px;border:1.5px solid #d8b879;border-radius:8px;background:transparent;color:#d8b879;font-family:inherit;font-size:11px;font-weight:700;letter-spacing:.2px;cursor:pointer;padding:0;display:inline-flex;align-items:center;justify-content:center}"+
    ".rahal-lb:hover{background:#d8b879;color:#142c2a}"+
    ".rahal-lb.hid{display:none !important}"+
    ".rahal-sw{display:inline-flex;align-items:center;margin:0 26px;vertical-align:middle}"+
    ".rahal-sb{background:transparent;border:0;padding:4px;cursor:pointer;opacity:.7;display:inline-flex;align-items:center;justify-content:center}"+
    ".rahal-sb:hover{opacity:1}"+
    ".rahal-sb svg{width:20px;height:20px;stroke:#f4ebdd;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}"+
    ".rahal-soc{display:inline-flex;align-items:center;gap:6px}"+
    ".rahal-soc a{width:36px;height:36px;border:1px solid #d8b879;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;text-decoration:none}"+
    ".rahal-soc a:hover{background:#d8b879}"+
    ".rahal-soc svg{width:18px;height:18px;stroke:#d8b879;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}"+
    ".rahal-soc a:hover svg{stroke:#142c2a}"+
    ".rahal-tbtn{background:transparent;border:0;padding:0;margin-inline-start:24px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;opacity:.95}"+
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

  var fav=document.createElement("link");
  fav.rel="icon";
  fav.type="image/png";
  fav.href="favicon.png";
  document.head.appendChild(fav);

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

  function paintLang(){
    var v=currentLang();
    document.querySelectorAll(".rahal-lb").forEach(function(b){
      b.classList.toggle("hid", b.getAttribute("data-l")===v);
    });
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

    var langWrap=document.createElement("span");
    langWrap.className="rahal-lang";
    langWrap.innerHTML=
      '<button type="button" class="rahal-lb" data-l="ar">AR</button>'+
      '<button type="button" class="rahal-lb" data-l="fr">FR</button>'+
      '<button type="button" class="rahal-lb" data-l="en">EN</button>';
    langWrap.querySelectorAll(".rahal-lb").forEach(function(b){
      b.addEventListener("click",function(){
        var s=langSel();
        if(!s) return;
        s.value=b.getAttribute("data-l");
        s.dispatchEvent(new Event("change"));
        paintLang();
      });
    });

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
    group.appendChild(langWrap);

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

  function run(){ build(); labels(); paintTheme(); paintLang(); }

  var SHARE_T={
    ar:{label:"شارك المقال",copy:"انسخ الرابط",copied:"تم نسخ الرابط"},
    fr:{label:"Partager l'article",copy:"Copier le lien",copied:"Lien copié"},
    en:{label:"Share the article",copy:"Copy link",copied:"Link copied"}
  };
  var WA_SVG='<svg viewBox="0 0 24 24"><path d="M4 20l1.3-4A8 8 0 1 1 8 18.7z"/><path d="M9 10c0 2.5 2.5 5 5 5l1-1.2-1.8-.8-.6.6c-.8-.4-1.6-1.2-2-2l.6-.6-.8-1.8z"/></svg>';
  var FB_SVG='<svg viewBox="0 0 24 24"><path d="M14 22v-8h2.6l.4-3H14V9.2c0-.9.3-1.5 1.5-1.5H17.5V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H9v3h2.3v8"/></svg>';
  var X_SVG='<svg viewBox="0 0 24 24"><path d="M4 4l16 16M20 4L4 20"/></svg>';
  var LINK_SVG='<svg viewBox="0 0 24 24"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>';
  var TG_SVG='<svg viewBox="0 0 24 24"><path d="M21 4L3 11l6 2.5L11.5 20l3-4 4.5 3.5z"/></svg>';
  var IN_SVG='<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>';
  var TH_SVG='<svg viewBox="0 0 24 24"><path d="M16.5 10.5c-.6-2.6-2.4-4-5-4-3.3 0-5.3 2.2-5.3 5.5s2 5.5 5.3 5.5c2.7 0 4.5-1.5 4.5-3.8 0-2.5-2.3-3-4.6-2.5"/></svg>';
  var MAIL_SVG='<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>';

  var shareCss=
    ".rahal-share{display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin:14px 0 24px;padding:12px 0;border-top:1px solid rgba(146,113,59,.35);border-bottom:1px solid rgba(146,113,59,.35)}"+
    ".rahal-share-lbl{font-size:14px;color:#92713b;font-weight:600;margin-inline-end:6px}"+
    ".rahal-share a,.rahal-share button{width:36px;height:36px;border:1px solid #92713b;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:transparent;cursor:pointer;padding:0;text-decoration:none}"+
    ".rahal-share a:hover,.rahal-share button:hover,.rahal-share button.ok{background:#92713b}"+
    ".rahal-share svg{width:17px;height:17px;stroke:#92713b;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}"+
    ".rahal-share a:hover svg,.rahal-share button:hover svg,.rahal-share button.ok svg{stroke:#fff}"+
    "html.rahal-dark .rahal-share-lbl{color:#d8b879}"+
    "html.rahal-dark .rahal-share a,html.rahal-dark .rahal-share button{border-color:#d8b879}"+
    "html.rahal-dark .rahal-share svg{stroke:#d8b879}"+
    "html.rahal-dark .rahal-share a:hover,html.rahal-dark .rahal-share button:hover,html.rahal-dark .rahal-share button.ok{background:#d8b879}"+
    "html.rahal-dark .rahal-share a:hover svg,html.rahal-dark .rahal-share button:hover svg,html.rahal-dark .rahal-share button.ok svg{stroke:#142c2a}";

  function shareT(){ return SHARE_T[currentLang()] || SHARE_T.ar; }

  function addShare(){
    var m=document.getElementById("m");
    if(!m || m.querySelector(".rahal-share")) return;
    var h=m.querySelector("h1");
    if(!h) return;
    var t=shareT();
    var title=h.textContent.trim();
    var url=location.href;

    var box=document.createElement("div");
    box.className="rahal-share";
    var lbl=document.createElement("span");
    lbl.className="rahal-share-lbl";
    lbl.textContent=t.label;
    box.appendChild(lbl);

    function link(name,href,svg){
      var a=document.createElement("a");
      a.href=href;
      if(href.indexOf("http")===0){ a.target="_blank"; a.rel="noopener"; }
      a.title=name;
      a.setAttribute("aria-label",name);
      a.innerHTML=svg;
      box.appendChild(a);
    }
    link("WhatsApp","https://wa.me/?text="+encodeURIComponent(title+" "+url),WA_SVG);
    link("Telegram","https://t.me/share/url?url="+encodeURIComponent(url)+"&text="+encodeURIComponent(title),TG_SVG);
    link("Facebook","https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(url),FB_SVG);
    link("X","https://x.com/intent/post?text="+encodeURIComponent(title)+"&url="+encodeURIComponent(url),X_SVG);
    link("Threads","https://www.threads.net/intent/post?text="+encodeURIComponent(title+" "+url),TH_SVG);
    link("LinkedIn","https://www.linkedin.com/sharing/share-offsite/?url="+encodeURIComponent(url),IN_SVG);
    link("Email","mailto:?subject="+encodeURIComponent(title)+"&body="+encodeURIComponent(url),MAIL_SVG);

    var b=document.createElement("button");
    b.type="button";
    b.title=t.copy;
    b.setAttribute("aria-label",t.copy);
    b.innerHTML=LINK_SVG;
    b.addEventListener("click",function(){
      var tt=shareT();
      function done(){
        b.classList.add("ok");
        b.title=tt.copied;
        setTimeout(function(){ b.classList.remove("ok"); b.title=tt.copy; },1500);
      }
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(url).then(done,function(){ window.prompt(tt.copy,url); });
      } else {
        window.prompt(tt.copy,url);
      }
    });
    box.appendChild(b);

    h.parentNode.insertBefore(box,h.nextSibling);
  }

  function shareInit(){
    var m=document.getElementById("m");
    if(!m) return;
    if(!document.getElementById("rahal-share-css")){
      var st2=document.createElement("style");
      st2.id="rahal-share-css";
      st2.textContent=shareCss;
      document.head.appendChild(st2);
    }
    addShare();
    new MutationObserver(function(){ addShare(); }).observe(m,{childList:true});
  }

  loadTheme();
  var sel=langSel();
  var LANG_KEY="rahal-lang";
  function savedLang(){ try{ return localStorage.getItem(LANG_KEY); }catch(e){ return null; } }
  function saveLang(v){ try{ localStorage.setItem(LANG_KEY,v); }catch(e){} }
  function restoreLang(){
    var s2=langSel();
    if(!s2) return;
    var want=savedLang();
    if(!want || s2.value===want) return;
    if(!s2.querySelector('option[value="'+want+'"]')) return;
    s2.value=want;
    s2.dispatchEvent(new Event("change"));
  }
  if(sel){ sel.addEventListener("change",function(){ saveLang(sel.value); setTimeout(run,50); }); }
  restoreLang();
  run();
  setTimeout(restoreLang,300);
  setTimeout(run,300);
  setTimeout(restoreLang,1000);
  setTimeout(run,1000);
  shareInit();
})();
