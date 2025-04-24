<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Text Animation on Scroll</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      height: 200vh; /* Aggiungiamo più spazio per lo scroll */
      background: #111;
      font-family: 'Arial', sans-serif;
      color: white;
      overflow-x: hidden;
    }

    .content {
      position: relative;
      z-index: 10;
      padding: 50px 20px;
      text-align: center;
      font-size: 2em;
      margin-top: 75vh;
    }

    .text-wrapper {
      display: inline-block;
    }

    .letter {
      display: inline-block;
      opacity: 0; /* Partiamo con opacità 0 per ogni lettera */
      transform: translateY(20px); /* Spostiamo la lettera verso il basso per un effetto di animazione */
      transition: opacity 0.2s ease, transform 0.2s ease;
    }
  </style>
</head>
<body>

  <div class="content">
    <div class="text-wrapper">
      <span class="letter">H</span>
      <span class="letter">e</span>
      <span class="letter">l</span>
      <span class="letter">l</span>
      <span class="letter">o</span>
      <span class="letter"> </span>
      <span class="letter">W</span>
      <span class="letter">o</span>
      <span class="letter">r</span>
      <span class="letter">l</span>
      <span class="letter">d</span>
    </div>
    <p>Scorri per vedere l'animazione delle lettere!</p>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  <script>
    gsap.registerPlugin(ScrollTrigger);

    // Selezioniamo tutte le lettere
    const letters = document.querySelectorAll('.letter');

    // Creiamo un'animazione per ogni lettera
    letters.forEach((letter, index) => {
      gsap.fromTo(letter, 
        {
          opacity: 0, // Partiamo con opacità 0
          y: 20 // Partiamo spostati verso il basso
        }, 
        {
          opacity: 1, // Diventa visibile
          y: 0, // Torna alla sua posizione originale
          scrollTrigger: {
            trigger: letter, // Attiviamo l'animazione per ogni lettera individualmente
            start: "top 60%", // Quando la lettera entra nel 80% inferiore della viewport
            end: "top 40%", // Quando esce dal 20% superiore della viewport
            scrub: true, // Sincronizza con lo scroll
            markers: false, // Disattiva i marker per la visualizzazione durante il debug
            delay: index * 0.05 // Ogni lettera ha un ritardo incrementale
          }
        });
    });
  </script>

</body>
</html>
