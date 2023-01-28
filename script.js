let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener('click', function(){
    if(toggleBtn.classList.contains('toggled')){
      toggleBtn.classList.remove('toggled');
      darktheme();
    } else {
      toggleBtn.classList.add('toggled');
      lightheme()
    } 
  })

function darktheme() {
    var root = document.querySelector(':root');
    root.style.setProperty('--toggle-l', "hsl(210, 78%, 56%)");
    root.style.setProperty('--toggle-r', "hsl(146, 68%, 55%)");

    root.style.setProperty('--neutral-bg-blue', "hsl(230, 17%, 14%)");
    root.style.setProperty('--neutral-top-bg-blue', "hsl(232, 19%, 15%)");
    root.style.setProperty('--neutral-card-bg-blue', "hsl(228, 28%, 20%)");
    root.style.setProperty('--neutral-text-grey', "hsl(228, 34%, 66%)");
    root.style.setProperty('--neutral-white', "hsl(0, 0%, 100%)");
}

  function lightheme() {
    var root = document.querySelector(':root');
    root.style.setProperty('--toggle-l', "hsl(230, 22%, 74%)");
    root.style.setProperty('--toggle-r', "hsl(230, 22%, 74%)");

    root.style.setProperty('--neutral-bg-blue', "hsl(0, 0%, 100%)");
    root.style.setProperty('--neutral-top-bg-blue', "hsl(225, 100%, 98%)");
    root.style.setProperty('--neutral-card-bg-blue', "hsl(227, 47%, 96%)");
    root.style.setProperty('--neutral-text-grey', "hsl(228, 12%, 44%)");
    root.style.setProperty('--neutral-white', "hsl(230, 17%, 14%)");
}