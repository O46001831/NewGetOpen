document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {  // aspetta 1 secondo
  
      const galleryImages = document.querySelectorAll('body > div.pin-spacer > section > div > img');
      const scrollButton = document.getElementById('scrollToEndGallery');
      const afterGallery = document.getElementById('firstCarousel');
  
      const imagesArray = Array.from(galleryImages);
      const lastImage = imagesArray[imagesArray.length - 1];
  
      let anyImageVisible = false;
      let lastImageVisible = false;
  
      const observer = new IntersectionObserver(entries => {
        anyImageVisible = false;
        lastImageVisible = false;
  
        entries.forEach(entry => {
          if (entry.target === lastImage) {
            lastImageVisible = entry.isIntersecting;
          } else {
            if (entry.isIntersecting) {
              anyImageVisible = true;
            }
          }
        });
  
        if (anyImageVisible && !lastImageVisible) {
          scrollButton.style.opacity = 1;
          scrollButton.style.pointerEvents = 'auto';
        } else {
          scrollButton.style.opacity = 0;
          scrollButton.style.pointerEvents = 'none';
        }
  
      }, {
        threshold: 0.5 // metà immagine visibile
      });
  
      // Osserva tutte le immagini
      imagesArray.forEach(img => {
        observer.observe(img);
      });
  
      // Scroll graduale alla fine della galleria
      scrollButton.addEventListener('click', () => {
        const offset = window.innerHeight * 0.2; // 20% della viewport height
        const targetPosition = afterGallery.getBoundingClientRect().top + window.pageYOffset - offset;
  
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
  
    }, 1000); // 1 secondo di ritardo
  });
  