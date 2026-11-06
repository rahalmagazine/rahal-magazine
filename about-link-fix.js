(function(){
  var names={ar:"من نحن",fr:"À propos",en:"About"};
  function currentLang(){
    var sel=document.getElementById("language");
    return (sel && sel.value) || "ar";
  }
  function applyAboutLabel(){
    var label=names[currentLang()] || names.ar;
    document.querySelectorAll('a[href="about.html"]').forEach(function(a){
      a.textContent=label;
    });
  }
  var sel=document.getElementById("language");
  if(sel){
    sel.addEventListener("change",function(){ setTimeout(applyAboutLabel,50); });
  }
  applyAboutLabel();
  setTimeout(applyAboutLabel,300);
  setTimeout(applyAboutLabel,1000);
})();
