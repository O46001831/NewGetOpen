const clientiCarousel = document.getElementById('clientiCarousel');
const partnerCarousel = document.getElementById('partnerCarousel');

// CARICARE LE IMMAGINI DA UNA CARTELLA:
function loadImages(carousel, folder) {
    fetch(`./functions/getImages.php?folder=${folder}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(imageURLs => {
            const duplicatedImages = [];

            for (let i = 0; i < 3; i++) {
                imageURLs.forEach(imageURL => {
                    const img = document.createElement('img');
                    img.src = imageURL;
                    img.classList.add('partnerlogo');
                    duplicatedImages.push(img);
                });
            }

            duplicatedImages.forEach(img => {
                carousel.appendChild(img);
            });
        })
        .catch(error => {
            console.error('Error loading images:', error);
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
    console.log(window.scrollY);
    const vh = window.innerHeight;
    const diff_vw_percentage = Math.max(0, 1500 - window.innerWidth)/100;
    const fattoreDiVw = diff_vw_percentage*70;
    const scrollY = window.scrollY;
    const startPartnerY_VH = 1050 - fattoreDiVw;
    const startClientiY_VH = startPartnerY_VH - 50;
    const startPartnerY = startPartnerY_VH * vh * 0.01;
    const startClientiY = startClientiY_VH * vh * 0.01;

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