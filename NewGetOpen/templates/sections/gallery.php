<section class="horizontal-gallery-wrapper">
  <div class="horizontal-gallery">
    <img src="./img/gallery/1.jpg" alt="img1">
    <img src="./img/gallery/2.jpg" alt="img2">
    <img src="./img/gallery/3.jpg" alt="img3">
    <img src="./img/gallery/4.jpg" alt="img4">
    <img src="./img/gallery/5.jpg" alt="img5">
    <img src="./img/gallery/6.jpg" alt="img6">
  </div>
</section>

<style>
.horizontal-gallery-wrapper {
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.horizontal-gallery {
  display: flex;
  height: 100%;
}
.horizontal-gallery img {
  width: 100vw;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
  opacity: 0.5;
  transform: scale(0.95);
}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script>
gsap.registerPlugin(ScrollTrigger);

function setupGalleryScroll() {
  const gallery = document.querySelector('.horizontal-gallery');
  const images = gsap.utils.toArray('.horizontal-gallery img');
  const totalScrollWidth = gallery.scrollWidth;
  const viewportWidth = window.innerWidth;
  const scrollDistance = totalScrollWidth - viewportWidth;

  // Clear previous triggers
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  // Main horizontal scroll animation
  gsap.to(gallery, {
    x: -scrollDistance,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-gallery-wrapper",
      start: "top top",
      end: () => `+=${scrollDistance}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      // Apply ScrollTrigger only if screen width is larger than 768px
      // MatchMedia settings
      markers: false, // This will show markers for debugging
      matchMedia: {
        "(min-width: 768px)": {
          // Apply this animation for screens larger than 768px
          pin: true, // Pin the gallery on larger screens
          scrub: true, // Enable scroll scrub
        },
        "(max-width: 767px)": {
          // Apply a different animation for screens smaller than 768px
          pin: false, // Disable pinning
          scrub: false, // Disable scroll scrub
          // You can add another animation here for mobile, e.g.:
          // Use an alternative gallery layout or animation
        }
      }
    }
  });

  // Fade in & scale effect for each image
  images.forEach((img, i) => {
    const start = i * viewportWidth;
    const end = (i + 1) * viewportWidth;
    gsap.to(img, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: img,
        start: `left+=${start} left`,
        end: `left+=${end} left`,
        scrub: true
      }
    });
  });
}

window.addEventListener("load", setupGalleryScroll);
window.addEventListener("resize", () => {
  setupGalleryScroll();
  ScrollTrigger.refresh();
});

</script>
