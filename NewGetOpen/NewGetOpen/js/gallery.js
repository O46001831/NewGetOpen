const numberOfImages = 6; 
document.addEventListener('DOMContentLoaded', () => {
    const galleryPlaceholder = document.getElementById('galleryPlaceholder');
  
    if (galleryPlaceholder) {
      galleryPlaceholder.style.height = (100 * (numberOfImages - 1)) + 'vw';
    } else {
      console.error("Element with id 'galleryPlaceholder' not found.");
    }
});


//_______________________________________  LIBRERIA GASP  _______________________________________
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
    const diffOffset = Math.max(0, window.innerWidth-700)
    var dinamicNumber = (-0.0025*diffOffset)+1;
    if (window.innerWidth >= 1500) dinamicNumber = -1;
    else if (window.innerWidth <= 400) dinamicNumber = 1.2;
    const h_offset = window.innerHeight*(dinamicNumber);
    const start = i * viewportWidth;
    const end = (i + 1) * viewportWidth;
    // const before_height_px = document.getElementById('masterGetopen').offsetHeight + document.getElementById('firstSectionTextBelow').offsetHeight; 
    // const before_height_vh = (before_height_px / window.innerHeight) * 100;
    gsap.to(img, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: img,
        start: h_offset+start,
        end: h_offset+end,
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