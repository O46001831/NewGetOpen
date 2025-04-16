const scrollToTopButton = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function() {    
    const scrollY = window.scrollY;
    const startY = 600;

    if (scrollY >= startY) {
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