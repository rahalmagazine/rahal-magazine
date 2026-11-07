(function(){
  var names={
    ar:{about:"من نحن",search:"بحث"},
    fr:{about:"À propos",search:"Recherche"},
    en:{about:"About",search:"Search"}
  };
  function currentLang(){
    var sel=document.getElementById("language");
    return (sel && sel.value) || "ar";
  }
  function ensureSearchLink(){
    var about=document.querySelector('a[href="about.html"]');
    if(!about) return;
    if(document.querySelector('a[href="search.html"]')) return;
    var s=document.createElement("a");
    s.href="search.html";
    about.parentNode.insertBefore(s, about.nextSibling);
  }
  function applyLabels(){
    var L=names[currentLang()] || names.ar;
    document.querySelectorAll('a[href="about.html"]').forEach(function(a){ a.textContent=L.about; });
    document.querySelectorAll('a[href="search.html"]').forEach(function(a){ a.textContent=L.search; });
  }
  function run(){ ensureSearchLink(); applyLabels(); }
  var sel=document.getElementById("language");
  if(sel){ sel.addEventListener("change",function(){ setTimeout(run,50); }); }
  run();
  setTimeout(run,300);
  setTimeout(run,1000);
})();
