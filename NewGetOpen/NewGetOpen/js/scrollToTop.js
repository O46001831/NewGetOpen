const scrollToTopButton = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function() {    
    const scrollY = (window.scrollY/window.innerHeight)*100;
    const width = this.window.innerWidth;
    var functionY = (0.444*width) + 283.333; // passa per i punti (375,450) e (1500,950)

    if (scrollY >= functionY) {
        scrollToTopButton.style.opacity = 1;
    } else {
        scrollToTopButton.style.opacity = 0;
    }
});
scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});