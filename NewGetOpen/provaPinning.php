<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pin + Scroll Horizontal</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background: #111;
      color: white;
      overflow-x: hidden;
    }

    .spacer {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
      background-color: #222;
    }

    .horizontal-gallery-wrapper {
      height: 100vh;
      position: relative;
      overflow: hidden;
    }

    .horizontal-gallery {
      display: flex;
      height: 100%;
    }

    .horizontal-gallery img {
      width: 100vw;
      height: 100vh;
      object-fit: cover;
      opacity: 0;
      transform: scale(0.9);
    }
  </style>
</head>
<body>

  <div class="spacer">Scroll down to start →</div>

  <section class="horizontal-gallery-wrapper">
    <div class="horizontal-gallery" id="gallery">
      <img src="./img/gallery/1.jpg" class="gallery-image" alt="img1">
      <img src="./img/gallery/2.jpg" class="gallery-image" alt="img2">
      <img src="./img/gallery/3.jpg" class="gallery-image" alt="img3">
      <img src="./img/gallery/4.jpg" class="gallery-image" alt="img4">
      <img src="./img/gallery/5.jpg" class="gallery-image" alt="img5">
      <img src="./img/gallery/6.jpg" class="gallery-image" alt="img6">
    </div>
  </section>

  <div class="spacer">That's it! 🎉</div>

  <!-- GSAP + ScrollTrigger -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

  <script>
    gsap.registerPlugin(ScrollTrigger); // Registriamo il plugin ScrollTrigger

    const gallery = document.querySelector('#gallery');
    const images = gsap.utils.toArray('.gallery-image');
    const totalWidth = images.length * window.innerWidth;

    // Scroll orizzontale con ID per usarlo nel containerAnimation
    ScrollTrigger.create({
      id: "horizontalScroll", // Assegniamo un ID per usarlo più tardi
      trigger: ".horizontal-gallery-wrapper",
      start: "top top",
      end: () => `+=${totalWidth}`,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      animation: gsap.to(gallery, {
        x: () => `-${totalWidth - window.innerWidth}px`,
        ease: "none"
      })
    });

    // Animazione delle immagini quando entrano da sinistra
    images.forEach((img, i) => {
      gsap.to(img, {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: img,
          containerAnimation: ScrollTrigger.getById("horizontalScroll"), // Referenziamo l'ID dell'animazione orizzontale
          start: `left left`,
          end: `right left`,
          scrub: true
        }
      });
    });
  </script>
</body>
</html>
