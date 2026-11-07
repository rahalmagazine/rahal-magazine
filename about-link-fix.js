(function(){
  var names={
    ar:{about:"من نحن",ph:"اكتب كلمة للبحث...",go:"بحث",aria:"بحث"},
    fr:{about:"À propos",ph:"Rechercher...",go:"Chercher",aria:"Rechercher"},
    en:{about:"About",ph:"Search...",go:"Search",aria:"Search"}
  };
  var css=
    ".rahal-sw{display:inline-flex;align-items:center;gap:6px;vertical-align:middle;margin:0 4px}"+
    ".rahal-sb{background:none;border:1px solid #d8b879;border-radius:50%;width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;padding:0}"+
    ".rahal-sb svg{width:18px;height:18px;stroke:#d8b879;fill:none;stroke-width:2}"+
    ".rahal-sf{display:none;align-items:center;gap:6px}"+
    ".rahal-sf.open{display:inline-flex}"+
    ".rahal-sf input{width:170px;max-width:50vw;padding:7px 10px;border:1px solid #d8b879;border-radius:6px;background:#fff;color:#252827;font-family:inherit;font-size:14px}"+
    ".rahal-sf button{padding:7px 12px;background:#d8b879;color:#142c2a;border:0;border-radius:6px;cursor:pointer;font-family:inherit;font-size:14px}";
  var st=document.createElement("style");
  st.textContent=css;
  document.head.appendChild(st);

  var ICON='<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21" stroke-linecap="round"/></svg>';

  function langSel(){ return document.getElementById("language") || document.getElementById("lang"); }
  function currentLang(){ var s=langSel(); return (s && s.value) || "ar"; }
  function L(){ return names[currentLang()] || names.ar; }

  function build(){
    if(document.querySelector(".rahal-sw")) return;
    var sel=langSel();
    var search=document.querySelector('a[href="search.html"]');
    var about=document.querySelector('a[href="about.html"]');
    if(!sel && !search && !about) return;

    var wrap=document.createElement("span");
    wrap.className="rahal-sw";
    wrap.innerHTML=
      '<button type="button" class="rahal-sb">'+ICON+'</button>'+
      '<form class="rahal-sf" action="search.html" method="get">'+
        '<input name="q" type="search" autocomplete="off">'+
        '<button type="submit"></button>'+
      '</form>';

    if(sel){
      sel.parentNode.insertBefore(wrap, sel);
      if(search && search.parentNode) search.parentNode.removeChild(search);
    } else if(search){
      search.parentNode.replaceChild(wrap, search);
    } else {
      about.parentNode.insertBefore(wrap, about.nextSibling);
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

  function run(){ build(); labels(); }

  var sel=langSel();
  if(sel){ sel.addEventListener("change",function(){ setTimeout(run,50); }); }
  run();
  setTimeout(run,300);
  setTimeout(run,1000);
})();
