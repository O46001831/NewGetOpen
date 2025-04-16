const clientiCarousel = document.getElementById('clientiCarousel');
const partnerCarousel = document.getElementById('partnerCarousel');

// CARICARE LE IMMAGINI DA UNA CARTELLA:
function loadImages(carousel, folder) {
    fetch(`./img/${folder}/`)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const images = doc.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]');

            // Duplica le immagini
            const duplicatedImages = [...images, ...images, ...images];

            duplicatedImages.forEach(image => {
                const img = document.createElement('img');
                img.src = `./img/${folder}/${image.getAttribute('href')}`;
                img.classList.add('partnerlogo');
                carousel.appendChild(img);
            });
        });
}
loadImages(clientiCarousel, 'clienti');
loadImages(partnerCarousel, 'partner');

// FUNZIONI PER FAR SCORRERE I CAROSELLI CON LO SCROLL
function animatePartnerCarousel(scrollY, startY) {
    const translatePartner = -(scrollY - startY);
    partnerCarousel.style.transform = `translateX(${translatePartner}px)`;
}
function animateClientiCarousel(scrollY, startY) {
    const clientiOffset = calculateClientiOffset();
    const translateClienti = clientiOffset + (scrollY - startY);
    clientiCarousel.style.transform = `translateX(${translateClienti}px)`;
}
function calculateClientiOffset() {
    // Calcola la larghezza totale del carosello
    const carouselWidth = clientiCarousel.scrollWidth;

    // Imposta l'offset negativo pari alla larghezza totale del carosello
    return -carouselWidth;
}
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const startPartnerY = 320;
    const startClientiY = 550;

    // partner
    if (scrollY >= startPartnerY) {
        animatePartnerCarousel(scrollY, startPartnerY);
    } else {
        partnerCarousel.style.transform = 'translateX(0)';
    }

    // clienti
    if (scrollY >= startClientiY) {
        animateClientiCarousel(scrollY, startClientiY);
    } else {
        // Resetta la posizione iniziale dei clienti con l'offset corretto
        clientiCarousel.style.transform = `translateX(${calculateClientiOffset()}px)`;
    }
});
window.addEventListener('load', function() {
    // Imposta la posizione iniziale dei clienti con l'offset corretto
    clientiCarousel.style.transform = `translateX(${calculateClientiOffset()}px)`;
});