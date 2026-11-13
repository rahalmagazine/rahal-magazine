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

  var SBN="https://fiqwenrnvwiiondcztpm.supabase.co";
  var KEYN="sb_publishable_cxciqxe-xfZhDAb8FcGAZA_DzqqCpcx";
  var NL={
    ar:{title:"اشترك فالنشرة البريدية",ph:"بريدك الإلكتروني",btn:"اشترك",ok:"شكرا، تسجلتي بنجاح!",dup:"أنت مسجل بالفعل.",bad:"أدخل بريدا إلكترونيا صحيحا.",err:"تعذر الاشتراك، حاول مرة أخرى."},
    fr:{title:"Abonnez-vous à la newsletter",ph:"Votre adresse e-mail",btn:"S'abonner",ok:"Merci, votre inscription est confirmée !",dup:"Vous êtes déjà inscrit.",bad:"Veuillez saisir une adresse e-mail valide.",err:"Inscription impossible, réessayez."},
    en:{title:"Subscribe to the newsletter",ph:"Your email address",btn:"Subscribe",ok:"Thanks, you are subscribed!",dup:"You are already subscribed.",bad:"Please enter a valid email address.",err:"Subscription failed, please try again."}
  };

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
    var MAPT={ar:"الخريطة",fr:"Carte",en:"Map"};
    var mp=document.querySelector('a[href="map.html"]');
    if(mp) mp.textContent=(MAPT[currentLang()]||MAPT.ar);
    var b=document.querySelector(".rahal-sb");
    if(b) b.setAttribute("aria-label",t.aria);
    var i=document.querySelector(".rahal-sf input");
    if(i) i.placeholder=t.ph;
    var g=document.querySelector(".rahal-sf button");
    if(g) g.textContent=t.go;
  }

  function footerLink(){
    if(!document.getElementById("rahal-foot-css")){
      var fc=document.createElement("style");
      fc.id="rahal-foot-css";
      fc.textContent=".rahal-foot{text-align:center;padding:18px 12px;font-size:14px;background:#142c2a;color:#d8b879;line-height:2}"+
        ".rahal-foot a{color:#d8b879;text-decoration:none}"+
        ".rahal-foot a:hover{text-decoration:underline}"+
        ".rahal-nl{max-width:480px;margin:0 auto 14px;text-align:center}"+
        ".rahal-nl .nl-title{font-weight:700;margin-bottom:8px;font-size:15px}"+
        ".rahal-nl .nl-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}"+
        ".rahal-nl .nl-in{padding:9px 12px;border-radius:8px;border:1px solid #d8b879;min-width:220px;font-family:inherit;font-size:14px;background:#fff;color:#252827}"+
        ".rahal-nl .nl-btn{padding:9px 18px;border:0;border-radius:8px;background:#d8b879;color:#142c2a;font-weight:700;cursor:pointer;font-family:inherit}"+
        ".rahal-nl .nl-msg{font-size:13px;margin-top:8px;min-height:18px;color:#d8b879}";
      document.head.appendChild(fc);
    }
    var P={ar:{t:"سياسة الخصوصية",h:""},fr:{t:"Politique de confidentialité",h:"#fr"},en:{t:"Privacy Policy",h:"#en"}};
    var c=P[currentLang()] || P.ar;
    var f=document.querySelector(".rahal-foot");
    if(!f){
      f=document.createElement("div");
      f.className="rahal-foot";
      document.body.appendChild(f);
    }
    var pl=f.querySelector(".rahal-pl");
    if(!pl){
      pl=document.createElement("div");
      pl.className="rahal-pl";
      f.appendChild(pl);
    }
    pl.innerHTML='<a href="privacy.html'+c.h+'">'+c.t+'</a>';
    newsletterBlock(f);
  }

  function newsletterBlock(f){
    var t=NL[currentLang()]||NL.ar;
    var nl=f.querySelector(".rahal-nl");
    if(!nl){
      nl=document.createElement("form");
      nl.className="rahal-nl";
      nl.innerHTML='<div class="nl-title"></div>'+
        '<div class="nl-row"><input type="email" class="nl-in" required><button type="submit" class="nl-btn"></button></div>'+
        '<div class="nl-msg"></div>';
      f.insertBefore(nl,f.firstChild);
      nl.addEventListener("submit",function(e){
        e.preventDefault();
        var tt=NL[currentLang()]||NL.ar;
        var msg=nl.querySelector(".nl-msg");
        var input=nl.querySelector(".nl-in");
        var email=input.value.trim();
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
          msg.textContent=tt.bad;
          return;
        }
        fetch(SBN+"/rest/v1/subscribers",{
          method:"POST",
          headers:{apikey:KEYN,"Content-Type":"application/json",Prefer:"return=minimal"},
          body:JSON.stringify({email:email,lang:currentLang()})
        })
        .then(function(r){
          if(r.ok){ msg.textContent=tt.ok; input.value=""; return; }
          if(r.status===409){ msg.textContent=tt.dup; return; }
          msg.textContent=tt.err;
        })
        .catch(function(){ msg.textContent=tt.err; });
      });
    }
    nl.querySelector(".nl-title").textContent=t.title;
    nl.querySelector(".nl-in").placeholder=t.ph;
    nl.querySelector(".nl-btn").textContent=t.btn;
  }

  function sectionLinks(){
    var CATS=["culture","society","science","history","explore"];
    document.querySelectorAll("a").forEach(function(a){
      var h=a.getAttribute("href")||"";
      var m=h.match(/^(?:index\.html)?#(culture|society|science|history|explore)$/);
      if(m && CATS.indexOf(m[1])>=0){
        a.setAttribute("href","category.html?c="+m[1]);
      }
    });
  }

  function mapLink(){
    var about=document.querySelector('a[href="about.html"]');
    if(!about) return;
    if(document.querySelector('a[href="map.html"]')) return;
    var m=document.createElement("a");
    m.href="map.html";
    about.parentNode.insertBefore(m, about.nextSibling);
  }

  var FLAB={ar:"مقال مميز",fr:"À la une",en:"Featured"};

  function featuredBlock(){
    var hero=document.querySelector(".hero");
    if(!hero) return;
    if(document.querySelector(".rahal-featured")) return;
    if(!document.getElementById("rahal-featured-css")){
      var fst=document.createElement("style");
      fst.id="rahal-featured-css";
      fst.textContent=
        ".rahal-featured{max-width:1100px;margin:30px auto;padding:0 20px;box-sizing:border-box}"+
        ".rahal-featured a,.rahal-featured a:hover,.rahal-featured *{text-decoration:none !important}"+
        ".rahal-featured a{display:grid !important;grid-template-columns:1.1fr 1fr !important;gap:0 !important;background:#fff !important;border-radius:14px !important;overflow:hidden !important;color:#252827 !important;box-shadow:0 4px 18px rgba(0,0,0,.10) !important;border:0 !important;padding:0 !important;margin:0 !important;min-height:300px}"+
        ".rahal-featured img{display:block !important;width:100% !important;height:100% !important;max-width:none !important;min-height:300px !important;margin:0 !important;border-radius:0 !important;object-fit:cover !important}"+
        ".rahal-featured .fb{padding:34px 36px !important;display:flex !important;flex-direction:column !important;justify-content:center !important;text-align:right}"+
        ".rahal-featured .flab{display:inline-block !important;align-self:flex-start;background:#d8b879;color:#142c2a !important;font-size:13px !important;font-weight:700 !important;padding:4px 12px !important;border-radius:20px;margin:0 0 16px !important}"+
        ".rahal-featured h2{color:#142c2a !important;font-size:clamp(22px,2.8vw,30px) !important;font-weight:800 !important;line-height:1.5 !important;margin:0 0 14px !important;padding:0 !important;border:0 !important}"+
        ".rahal-featured p{font-size:16px !important;color:#555 !important;line-height:1.9 !important;margin:0 !important;padding:0 !important;border:0 !important}"+
        ".rahal-featured a:hover h2{color:#92713b !important}"+
        "@media (max-width:699px){.rahal-featured a{grid-template-columns:1fr !important}.rahal-featured img{min-height:220px !important}.rahal-featured .fb{padding:22px !important}}"+
        "html.rahal-dark .rahal-featured a{background:#16292a !important;color:#e8e2d6 !important}"+
        "html.rahal-dark .rahal-featured h2{color:#e8e2d6 !important}"+
        "html.rahal-dark .rahal-featured p{color:#b8c2bf !important}";
      document.head.appendChild(fst);
    }
    var lang=currentLang();
    var box=document.createElement("div");
    box.className="rahal-featured";
    hero.parentNode.insertBefore(box, hero.nextSibling);

    var SBU="https://fiqwenrnvwiiondcztpm.supabase.co";
    var HD={apikey:"sb_publishable_cxciqxe-xfZhDAb8FcGAZA_DzqqCpcx"};
    fetch(SBU+"/rest/v1/articles?select=slug,lang,title,excerpt,image_url,category,created_at"+
          "&published=eq.true&featured=eq.true&order=created_at.desc&limit=20",{headers:HD})
    .then(function(r){ return r.json(); })
    .then(function(rows){
      var groups={}, order=[];
      rows.forEach(function(r){
        if(!groups[r.slug]){ groups[r.slug]=[]; order.push(r.slug); }
        groups[r.slug].push(r);
      });
      if(!order.length){ box.remove(); return; }
      var g=groups[order[0]];
      var a=g.find(function(r){ return r.lang===lang; }) || g.find(function(r){ return r.lang==="ar"; }) || g[0];

      var link=document.createElement("a");
      link.href="article.html?s="+encodeURIComponent(order[0])+"&lang="+encodeURIComponent(a.lang||"ar");
      if(a.image_url && a.image_url.indexOf("https://")===0){
        var img=document.createElement("img");
        img.src=a.image_url;
        img.alt=a.title||"";
        link.appendChild(img);
      }
      var fb=document.createElement("div");
      fb.className="fb";
      var lab=document.createElement("div");
      lab.className="flab";
      lab.textContent=(FLAB[lang]||FLAB.ar);
      var h=document.createElement("h2");
      h.textContent=a.title||"";
      var p=document.createElement("p");
      p.textContent=a.excerpt||"";
      fb.appendChild(lab);
      fb.appendChild(h);
      fb.appendChild(p);
      link.appendChild(fb);
      box.appendChild(link);
    })
    .catch(function(){ box.remove(); });
  }

  function run(){ build(); labels(); paintTheme(); paintLang(); footerLink(); sectionLinks(); mapLink(); featuredBlock(); }

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
    ".rahal-read{font-size:14px;color:#92713b;margin:4px 0 0;font-weight:600}"+
    "html.rahal-dark .rahal-read{color:#d8b879}"+
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

    var words=0;
    m.querySelectorAll("p,h3").forEach(function(x){
      var w=(x.textContent||"").trim();
      if(w) words+=w.split(/\s+/).length;
    });
    var mins=Math.max(1,Math.round(words/200));
    var RT={ar:"دقائق للقراءة",fr:"min de lecture",en:"min read"};
    var rd=document.createElement("div");
    rd.className="rahal-read";
    rd.textContent=mins+" "+(RT[currentLang()]||RT.ar);
    h.parentNode.insertBefore(rd,h.nextSibling);
    rd.parentNode.insertBefore(box,rd.nextSibling);
  }

  var fsCss=
    ".rahal-bar{position:fixed;top:0;left:0;height:3px;width:0;background:#d8b879;z-index:9999;transition:width .1s linear}"+
    ".rahal-fs{display:flex;align-items:center;gap:8px;margin:18px 0 6px;font-size:14px;color:#92713b;font-weight:600}"+
    ".rahal-fs button{width:34px;height:34px;border:1px solid #92713b;border-radius:8px;background:transparent;color:#92713b;cursor:pointer;font-family:inherit;font-weight:700}"+
    ".rahal-fs button:hover{background:#92713b;color:#fff}"+
    "#m p{font-size:calc(18px * var(--rahal-fs,1)) !important}"+
    "#m h3{font-size:calc(20px * var(--rahal-fs,1)) !important}"+
    "html.rahal-dark .rahal-fs{color:#d8b879}"+
    "html.rahal-dark .rahal-fs button{border-color:#d8b879;color:#d8b879}"+
    ".rahal-related{margin-top:40px;padding-top:20px;border-top:1px solid #c9bdab}"+
    ".rahal-related h2{color:#142c2a;font-size:20px;margin:0 0 14px}"+
    ".rahal-related .rgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:14px}"+
    ".rahal-related a.rcard{display:block;background:#fff;border-radius:8px;padding:12px 14px;text-decoration:none;color:#252827;box-shadow:0 1px 4px rgba(0,0,0,.08)}"+
    "#m .rahal-related a.rcard h3{font-size:16px !important;line-height:1.5;margin:0 0 4px;color:#142c2a}"+
    "#m .rahal-related a.rcard p{font-size:13px !important;margin:0;color:#555}"+
    "#m .rahal-related a.rcard:hover h3{color:#92713b}"+
    "html.rahal-dark .rahal-related h2{color:#e8e2d6}"+
    "html.rahal-dark .rahal-related a.rcard{background:#16292a}"+
    "html.rahal-dark #m .rahal-related a.rcard h3{color:#e8e2d6}"+
    "html.rahal-dark #m .rahal-related a.rcard p{color:#b8c2bf}"+
    ".rahal-featured{max-width:1100px;margin:30px auto;padding:0 20px;box-sizing:border-box}"+
    ".rahal-featured a{display:grid;grid-template-columns:1fr 1fr;gap:0;background:#fff;border-radius:12px;overflow:hidden;text-decoration:none;color:#252827;box-shadow:0 2px 10px rgba(0,0,0,.08)}"+
    ".rahal-featured img{width:100%;height:100%;min-height:260px;object-fit:cover;display:block}"+
    ".rahal-featured .fb{padding:26px 28px;display:flex;flex-direction:column;justify-content:center}"+
    ".rahal-featured .flab{color:#92713b;font-size:14px;font-weight:700;margin-bottom:8px}"+
    ".rahal-featured h2{color:#142c2a;font-size:clamp(20px,3vw,28px);line-height:1.5;margin:0 0 10px}"+
    ".rahal-featured p{font-size:15px;color:#555;margin:0;line-height:1.8}"+
    ".rahal-featured a:hover h2{color:#92713b}"+
    "@media (max-width:699px){.rahal-featured a{grid-template-columns:1fr}.rahal-featured img{min-height:200px}}"+
    "html.rahal-dark .rahal-featured a{background:#16292a;color:#e8e2d6}"+
    "html.rahal-dark .rahal-featured h2{color:#e8e2d6}"+
    "html.rahal-dark .rahal-featured p{color:#b8c2bf}"+
    ".rahal-featured a,.rahal-featured a:hover,.rahal-featured *{text-decoration:none !important}"+
    ".rahal-featured a{display:grid !important;grid-template-columns:1.1fr 1fr !important;gap:0 !important;background:#fff !important;border-radius:14px !important;overflow:hidden !important;color:#252827 !important;box-shadow:0 4px 18px rgba(0,0,0,.10) !important;border:0 !important;padding:0 !important;margin:0 !important;min-height:300px}"+
    ".rahal-featured img{display:block !important;width:100% !important;height:100% !important;max-width:none !important;min-height:300px !important;margin:0 !important;border-radius:0 !important;object-fit:cover !important}"+
    ".rahal-featured .fb{padding:34px 36px !important;display:flex !important;flex-direction:column !important;justify-content:center !important;text-align:right}"+
    ".rahal-featured .flab{display:inline-block !important;align-self:flex-start;background:#d8b879;color:#142c2a !important;font-size:13px !important;font-weight:700 !important;padding:4px 12px !important;border-radius:20px;margin:0 0 16px !important}"+
    ".rahal-featured h2{color:#142c2a !important;font-size:clamp(22px,2.8vw,30px) !important;font-weight:800 !important;line-height:1.5 !important;margin:0 0 14px !important;padding:0 !important;border:0 !important}"+
    ".rahal-featured p{font-size:16px !important;color:#555 !important;line-height:1.9 !important;margin:0 !important;padding:0 !important;border:0 !important}"+
    ".rahal-featured a:hover h2{color:#92713b !important}"+
    "@media (max-width:699px){.rahal-featured a{grid-template-columns:1fr !important}.rahal-featured img{min-height:220px !important}.rahal-featured .fb{padding:22px !important}}"+
    "html.rahal-dark .rahal-featured a{background:#16292a !important;color:#e8e2d6 !important}"+
    "html.rahal-dark .rahal-featured h2{color:#e8e2d6 !important}"+
    "html.rahal-dark .rahal-featured p{color:#b8c2bf !important}";

  var FSLAB={ar:"حجم الخط",fr:"Taille du texte",en:"Text size"};
  var FS_STEPS=[0.9,1,1.15,1.3];

  function readingTools(){
    if(!document.getElementById("rahal-fs-css")){
      var st3=document.createElement("style");
      st3.id="rahal-fs-css";
      st3.textContent=fsCss;
      document.head.appendChild(st3);
    }
    if(!document.querySelector(".rahal-bar")){
      var bar=document.createElement("div");
      bar.className="rahal-bar";
      document.body.appendChild(bar);
      var upd=function(){
        var h=document.documentElement;
        var max=h.scrollHeight-h.clientHeight;
        bar.style.width=(max>0 ? (h.scrollTop/max)*100 : 0)+"%";
      };
      window.addEventListener("scroll",upd,{passive:true});
      upd();
    }
    var cur=parseFloat(localStorage.getItem("rahal-fs")||"1");
    if(FS_STEPS.indexOf(cur)<0) cur=1;
    document.documentElement.style.setProperty("--rahal-fs",cur);
  }

  function addFs(){
    var m=document.getElementById("m");
    if(!m || m.querySelector(".rahal-fs")) return;
    var anchor=m.querySelector(".rahal-share") || m.querySelector("h1");
    if(!anchor) return;

    var wrap=document.createElement("div");
    wrap.className="rahal-fs";
    var lab=document.createElement("span");
    lab.textContent=(FSLAB[currentLang()]||FSLAB.ar);
    var minus=document.createElement("button");
    minus.type="button";
    minus.textContent="A-";
    var plus=document.createElement("button");
    plus.type="button";
    plus.textContent="A+";

    function setStep(d){
      var cur=parseFloat(localStorage.getItem("rahal-fs")||"1");
      var i=FS_STEPS.indexOf(cur);
      if(i<0) i=1;
      i=Math.min(FS_STEPS.length-1,Math.max(0,i+d));
      var v=FS_STEPS[i];
      localStorage.setItem("rahal-fs",String(v));
      document.documentElement.style.setProperty("--rahal-fs",v);
    }
    minus.addEventListener("click",function(){ setStep(-1); });
    plus.addEventListener("click",function(){ setStep(1); });

    wrap.appendChild(lab);
    wrap.appendChild(minus);
    wrap.appendChild(plus);
    anchor.parentNode.insertBefore(wrap,anchor.nextSibling);
  }

  var RLAB={ar:"مقالات مشابهة",fr:"Articles similaires",en:"Related articles"};

  function addRelated(){
    var m=document.getElementById("m");
    if(!m || m.querySelector(".rahal-related")) return;
    var slug=new URLSearchParams(location.search).get("s");
    if(!slug) return;
    var lang=currentLang();

    var box=document.createElement("div");
    box.className="rahal-related";
    var h=document.createElement("h2");
    h.textContent=(RLAB[lang]||RLAB.ar);
    var grid=document.createElement("div");
    grid.className="rgrid";
    box.appendChild(h);
    box.appendChild(grid);
    m.appendChild(box);

    var SBU="https://fiqwenrnvwiiondcztpm.supabase.co";
    var HD={apikey:"sb_publishable_cxciqxe-xfZhDAb8FcGAZA_DzqqCpcx"};

    fetch(SBU+"/rest/v1/articles?select=category&slug=eq."+encodeURIComponent(slug)+"&limit=1",{headers:HD})
    .then(function(r){ return r.json(); })
    .then(function(rows){
      var cat=rows[0] && rows[0].category;
      if(!cat){ box.remove(); return null; }
      return fetch(SBU+"/rest/v1/articles?select=slug,lang,title,excerpt,created_at"+
          "&category=eq."+encodeURIComponent(cat)+"&published=eq.true"+
          "&slug=neq."+encodeURIComponent(slug)+"&order=created_at.desc&limit=30",{headers:HD})
        .then(function(r){ return r.json(); })
        .then(function(list){
          var groups={}, order=[];
          list.forEach(function(r){
            if(!groups[r.slug]){ groups[r.slug]=[]; order.push(r.slug); }
            groups[r.slug].push(r);
          });
          var slugs=order.slice(0,3);
          if(!slugs.length){ box.remove(); return; }
          slugs.forEach(function(sl){
            var g=groups[sl];
            var a=g.find(function(r){ return r.lang===lang; }) || g.find(function(r){ return r.lang==="ar"; }) || g[0];
            var link=document.createElement("a");
            link.className="rcard";
            link.href="article.html?s="+encodeURIComponent(sl)+"&lang="+encodeURIComponent(a.lang||"ar");
            var t=document.createElement("h3");
            t.textContent=a.title||sl;
            var p=document.createElement("p");
            p.textContent=a.excerpt||"";
            link.appendChild(t);
            link.appendChild(p);
            grid.appendChild(link);
          });
        });
    })
    .catch(function(){ box.remove(); });
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
    readingTools();
    addShare();
    addFs();
    addRelated();
    new MutationObserver(function(){ addShare(); addFs(); addRelated(); }).observe(m,{childList:true});
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
