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

<script>
gsap.registerPlugin(ScrollTrigger);

const gallery = document.querySelector('.horizontal-gallery');
const images = gsap.utils.toArray('.horizontal-gallery img');
const totalWidth = images.length * window.innerWidth;
fattoreDiWidth = calcFattoreDiWidth(); 

function calcFattoreDiWidth() {
    var x_var = Math.max(0.01, window.innerWidth - 1000);
    var x_var2 = Math.max(0, window.innerWidth - 1700);
    var coeff = (-2.1515e-8) * Math.pow(x_var2, 3) - (3.2900e-6) * Math.pow(x_var2, 2) - 0.001783 * x_var2 - 0.0891;
    var fattoreDiWidth = (7 * Math.pow(10, -12)) * Math.pow(x_var, 4) - (6.722 * Math.pow(10, -9)) * Math.pow(x_var, 3) - (9.47222 * Math.pow(10, -7)) * Math.pow(x_var, 2) + (0.0051553 * x_var) + 1;
    if (window.innerWidth >= 1700) fattoreDiWidth += coeff; 
    console.log(fattoreDiWidth) 
    return fattoreDiWidth;
}
// Horizontal scroll
gsap.to(gallery, {
    x: () => `-${totalWidth - (window.innerWidth*(fattoreDiWidth))}px`,
    ease: "none",
    scrollTrigger: {
    trigger: ".horizontal-gallery-wrapper",
    start: "top top",
    end: () => `+=${totalWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1
    }
});

// Animate each image in (opacity + scale)
images.forEach((img, i) => {
    gsap.to(img, {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
        trigger: gallery,
        containerAnimation: ScrollTrigger.getById("horizontal"),
        start: () => `left+=${i * window.innerWidth} right`,
        end: () => `left+=${(i + 1) * window.innerWidth} right`,
        scrub: true
    }
    });
});
</script>
