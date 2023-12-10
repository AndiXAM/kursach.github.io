window.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.mainheadercontainer');
    var animationDuration = 2; // Настройте время анимации здесь (в секундах)
    container.style.setProperty('--animation-duration', animationDuration + 's');
    container.classList.add('show');
  });