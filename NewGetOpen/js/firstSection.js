const firstSectionImage = document.getElementById('firstSectionImage');
const firstSectionOverlay = document.querySelector('#masterGetopen > .background-image > .overlay');
const firstSectionParagraph = document.querySelector('.change');
const changeElement = document.querySelector('.change');
const firstLine = document.querySelector('#firstLine');
const body = document.body;
const firstSectionTextBelow = document.querySelector('#firstSectionTextBelow > h3');
const startBGcolor = '#d7e6e9';
const endBGcolor = 'rgb(37, 37, 37)';

function getBackgroundColor(progress) {
  const startColor = { r: 215, g: 230, b: 233 }; // #d7e6e9
  const endColor = { r: 37, g: 37, b: 37 }; //rgb(24, 24, 24)

  const currentColor = {
      r: startColor.r - ((startColor.r - endColor.r) * progress),
      g: startColor.g - ((startColor.g - endColor.g) * progress),
      b: startColor.b - ((startColor.b - endColor.b) * progress)
  };

  return `rgb(${Math.round(currentColor.r)}, ${Math.round(currentColor.g)}, ${Math.round(currentColor.b)})`;
}
function cambiaColoriFirstSectionText() {
  const scrollY = window.scrollY;
  const startTransition = windowHeight * 0.3;
  const endTransition = windowHeight * 0.7;

  if (scrollY >= startTransition && scrollY <= endTransition) {
      const range = endTransition - startTransition;
      const progress = (scrollY - startTransition) / range; // Calcola la progressione da 0 a 1

      // Transizione del colore del testo da nero a bianco
      const textColor = `rgb(${255 * progress}, ${255 * progress}, ${255 * progress})`; // Da rgb(0, 0, 0) a rgb(255, 255, 255)
      firstSectionTextBelow.style.color = textColor;

      // Transizione del colore del testo per gli elementi PeCTitle
      const pecTitles = document.querySelectorAll('.PeCTitle');
      pecTitles.forEach(title => {
          title.style.color = textColor;
      });
      
      // Transizione del background-color del body da bianco a nero
      const bgColor = getBackgroundColor(progress);
      body.style.backgroundColor = bgColor;
  } else if (scrollY > endTransition) {
      // Imposta il colore finale (bianco e nero) dopo lo scroll completo
      firstSectionTextBelow.style.color = 'white';
      const pecTitles = document.querySelectorAll('.PeCTitle');
      pecTitles.forEach(title => {
          title.style.color = 'white';
      });
      body.style.backgroundColor = endBGcolor;
  } else {
      // Imposta il colore iniziale (nero e bianco) prima dello scroll
      firstSectionTextBelow.style.color = 'black';
      const pecTitles = document.querySelectorAll('.PeCTitle');
      pecTitles.forEach(title => {
          title.style.color = 'black';
      });
      body.style.backgroundColor = startBGcolor;
  }
}
function regolaOpacitaFirstLine() {
    const scrollY = window.scrollY;  
    const endY = 90;
    if (scrollY >= endY) {
      firstLine.style.opacity = 0;
    } else {
      // Calcola l'opacità in base allo scroll (opzionale, per transizione graduale)
      const opacity = 1 - (scrollY / endY);
      firstLine.style.opacity = opacity;
    }
}

function animateChangeYourMind() {
  const scrollY = window.scrollY;
  const startAnimation = 0;
  const endAnimation = 360;
  const startScale = 1.7;
  const endScale = 1;
  const startTopVh = 51; // top iniziale in vh
  const endTopPx = 56; // top finale in px

  if (!changeElement) {
    console.error("Element with class 'change' not found.");
    return;
  }

  if (scrollY >= startAnimation && scrollY <= endAnimation) {
    // Calcola la proporzione di scorrimento
    const progress = scrollY / endAnimation;

    // Calcola la scala
    const scale = startScale - (startScale - endScale) * progress;

    // Calcola il top finale in vh
    const windowHeight = window.innerHeight;
    const endTopVh = (endTopPx / windowHeight) * 100;

    // Interpolazione lineare tra startTopVh e endTopVh
    const interpolatedTopVh = startTopVh - (startTopVh - endTopVh) * progress; // Usiamo endTopVh

    // Applica le trasformazioni (in vh)
    changeElement.style.top = interpolatedTopVh + 'vh';
    changeElement.style.transform = `translateX(-50%) scale(${scale})`;
  } else if (scrollY < startAnimation) {
    // Stato iniziale
    changeElement.style.top = startTopVh + 'vh';
    changeElement.style.transform = `translateX(-50%) scale(${startScale})`;
  } else {
    // Stato finale
    const windowHeight = window.innerHeight;
    const endTopVh = (endTopPx / windowHeight) * 100;
    changeElement.style.top = endTopVh + 'vh';
    changeElement.style.transform = `translateX(-50%) scale(${endScale})`;
  }
}

function animateLine() {
  const scrollY = window.scrollY;
  const startAnimation = 0;
  const endAnimation = 3000;
  const startTopVh = 48; // top iniziale in vh
  const endTopPx = 50; // top finale in px

  if (!firstLine) {
    console.error("Element with id 'firstLine' not found.");
    return;
  }

  if (scrollY >= startAnimation && scrollY <= endAnimation) {
    // Calcola la proporzione di scorrimento (da 0 a 1) nell'intervallo desiderato
    const progress = scrollY / (endAnimation - startAnimation); // Semplificato perché startAnimation è 0

    // Calcola il top finale in vh
    const windowHeight = window.innerHeight;
    const endTopVh = (endTopPx / windowHeight) * 100;

    // Interpolazione lineare tra startTopVh e endTopVh
    const interpolatedTopVh = startTopVh + (endTopVh - startTopVh) * progress;

    // Applica le trasformazioni (in vh)
    firstLine.style.top = interpolatedTopVh + 'vh';
  } else if (scrollY < startAnimation) {
    // Stato iniziale
    firstLine.style.top = startTopVh + 'vh';
  } else {
    // Stato finale (in vh)
    const windowHeight = window.innerHeight;
    const endTopVh = (endTopPx / windowHeight) * 100;
    firstLine.style.top = endTopVh + 'vh';
  }
}

function animateLineOpacity() {
  const scrollY = window.scrollY;
  const startAnimation = 0;
  const endAnimation = 100;
  const startOpacity = 1;
  const endOpacity = 0;

  if (scrollY >= startAnimation && scrollY <= endAnimation) {
    // Calcola la proporzione di scorrimento (da 0 a 1) nell'intervallo desiderato
    const progress = scrollY / endAnimation;

    // Calcola l opacità
    const opacity = startOpacity - (startOpacity * progress);

    // Applica le trasformazioni
    firstLine.style.opacity = opacity;
  } else if (scrollY < startAnimation) {
    // Stato iniziale
    firstLine.style.opacity = startOpacity;
  } else {
    // Stato finale
    firstLine.style.opacity = endOpacity;
  }
}


function animateImage() {
    const scrollY = window.scrollY;
    const startAnimation = 0;
    const endAnimation = 800;
    const startTextScale = 1;
    const endtTextScale = 0.4;


    if (scrollY >= startAnimation && scrollY <= endAnimation) {
        // Calcola la proporzione di scorrimento
        const progress = scrollY / endAnimation;

        // Calcola l'opacità e la scala in base alla proporzione
        const opacity = 0.6 - (0.6 * progress); // Opacità da 0.6 a 0
        const scaleText = startTextScale - ((startTextScale-endtTextScale) * progress); // Opacità da 1 a 0
        const scale = 1 + (2 * progress); // Scala da 1 a 3

        // Applica le trasformazioni all'immagine e all'overlay
        firstSectionImage.style.opacity = 1 - progress;
        firstSectionImage.style.transform = `scale(${scale})`;
        firstSectionOverlay.style.background = `rgba(0, 0, 0, ${opacity})`;
    } else if (scrollY < startAnimation) {
        // Reimposta l'immagine e l'overlay allo stato iniziale
        firstSectionImage.style.opacity = 1;
        firstSectionImage.style.transform = 'scale(1)';
        firstSectionOverlay.style.background = 'rgba(0, 0, 0, 0.6)';
    } else {
        // Imposta l'immagine e l'overlay allo stato finale
        firstSectionImage.style.opacity = 0;
        firstSectionImage.style.transform = 'scale(3)';
        firstSectionOverlay.style.background = 'rgba(0, 0, 0, 0)';
    }
}

// Anima l'immagine all'avvio e ad ogni evento di scorrimento
animateImage();
regolaOpacitaFirstLine();
cambiaColoriFirstSectionText();
animateChangeYourMind();
animateLine();
animateLineOpacity();
window.addEventListener('scroll', animateChangeYourMind);
window.addEventListener('scroll', animateImage);
window.addEventListener('scroll', regolaOpacitaFirstLine);
window.addEventListener('scroll', cambiaColoriFirstSectionText);
window.addEventListener('scroll', animateLine);
window.addEventListener('scroll', animateLineOpacity);


