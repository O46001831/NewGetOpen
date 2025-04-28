const secondSectionImage = document.querySelector('#secondSectionImage');
const secondCarousel = document.querySelector('#secondCarousel');
const masterChisiamo = document.querySelector('#masterChisiamo');


function fadeInSecondSectionImage() {
    const scrollY = window.scrollY;
    const startSecondImageAnimation = 400;
    const endSecondImageAnimation = 700;
  
    if (scrollY >= startSecondImageAnimation && scrollY <= endSecondImageAnimation) {
      const range = endSecondImageAnimation - startSecondImageAnimation;
      const progress = (scrollY - startSecondImageAnimation) / range;
  
      secondSectionImage.style.opacity = progress;
    } else if (scrollY > endSecondImageAnimation) {
      // Opacità completamente visibile dopo lo scroll completo
      secondSectionImage.style.opacity = 1;
    } else {
      // Opacità completamente invisibile prima dello scroll
      secondSectionImage.style.opacity = 0;
    }
}
