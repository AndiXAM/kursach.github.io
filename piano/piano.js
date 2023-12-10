window.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.mainheadercontainer');
    var animationDuration = 2; // Настройте время анимации здесь (в секундах)
    container.style.setProperty('--animation-duration', animationDuration + 's');
    container.classList.add('show');
  });

  document.addEventListener('DOMContentLoaded', function() {
    const hero = document.querySelector('.hero');
    
    function activate(e) {
      if (e.target.matches('.hero') || !e.target.matches('img')) return;
      [hero.src, e.target.src] = [e.target.src, hero.src];
    }
    
    window.addEventListener('click', activate, false);
  });