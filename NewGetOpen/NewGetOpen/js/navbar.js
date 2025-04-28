document.addEventListener('DOMContentLoaded', function() {
    const burger = document.getElementById('burgerIcon');
    const navbar = document.getElementById('navBar');
    var navLinks = document.querySelectorAll('#navBar > div > a');
    
    //_____________________ FUNZIONI ___________________________________
    function closeNavbar(){
        if(!burger.classList.contains('active') || !burger.classList.contains('unactive')){
            setTimeout(function() {
                if(!burger.classList.contains('active')) burger.classList.add('unactive');
            }, 10);
        }
        if (navbar.classList.contains('hide')){    
            navbar.classList.toggle('hide'); 
            setTimeout(function() {
                navbar.classList.toggle('toggleNav');
            }, 10);
        }
        else {
            //content.style.width='100vw';
            navbar.classList.toggle('toggleNav');
            setTimeout(function() {
                navbar.classList.toggle('hide');
            }, 500);
        }    
        burger.classList.toggle('unactive');
        burger.classList.toggle('active');
    }
    //______________________ NO SCROLL ________________________________
    document.body.addEventListener('touchmove', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    }, { passive: false });
    //______________________ ANIMAZIONI _______________________________
    burger.addEventListener('click', function() {
        closeNavbar();
    });
    //______________________ SCROLL LINK ______________________________
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeNavbar();
        });
    });
    //___________________ SCORRIMENTO GRADUALE ________________________
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            var targetOffset = targetElement.offsetTop - 110;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        });
    });
});