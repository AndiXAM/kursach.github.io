window.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.mainheadercontainer');
    var animationDuration = 2; // Настройте время анимации здесь (в секундах)
    container.style.setProperty('--animation-duration', animationDuration + 's');
    container.classList.add('show');
  });

  document.addEventListener('DOMContentLoaded', function() {
    /*------- button with class register -------*/
    let reg_btn = document.querySelector('.container .register');
    
    /*------- button with class sign in --------*/
    let sig_btn = document.querySelector('.container .signin');
    
    /*------- back button ----------------------*/
    let back_btn = document.querySelector('.container .back');
    
    
    
    reg_btn.addEventListener('click', function(e) {
      e.preventDefault();
      this.nextElementSibling.classList.add('reg');
      this.nextElementSibling.style.transform = 'translateY(40%) scale(5)';
      this.nextElementSibling.style.borderRadius = '0';
      this.nextElementSibling.style.width = '100%';
      this.nextElementSibling.style.height = '100%';
      
      this.nextElementSibling.nextElementSibling.style.top = '40%';
      this.nextElementSibling.nextElementSibling.style.zIndex = '8';
    });
    
    sig_btn.addEventListener('click', function(e) {
      e.preventDefault();
      this.nextElementSibling.classList.add('sig');
      this.nextElementSibling.style.transform = 'translateY(40%) scale(5)';
      this.nextElementSibling.style.borderRadius = '0';
      this.nextElementSibling.style.width = '100%';
      this.nextElementSibling.style.height = '100%';
      
      this.nextElementSibling.nextElementSibling.style.top = '40%';
      this.nextElementSibling.nextElementSibling.style.zIndex = '8';
    });

  });


  