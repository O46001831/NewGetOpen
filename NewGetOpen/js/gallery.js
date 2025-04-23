const images = document.querySelectorAll('.gallery-image');
const textAbove = document.querySelector('#firstSectionTextBelow > h3');
const firstCarousel = document.querySelector('#firstCarousel');
//const secondCarousel = document.querySelector('#secondCarousel');
const carouselPlaceholder = document.querySelector('#carouselPlaceholder');
const galleryPlaceholder = document.getElementById('galleryPlaceholder');
const fineGalleryY = (2240 / window.innerHeight) * 100;
const offsetMaturatoTop = 76 + (18 * Math.floor((1418 - window.innerHeight) / 100))
var offsetGalleryY = 294 + ((919 - window.innerHeight) / 100)*29;
var heightDifference = calcHeightDifferenceVH();


function calcHeightDifference() {
    return (919 - window.innerHeight);
}
function calcHeightDifferenceVH() {
    const pixelDiff = 919 - window.innerHeight;
    const vhValue = (pixelDiff / window.innerHeight) * 100;
    return vhValue;
}

function calcoffsetGalleryY() {
    const windowWidth = window.innerWidth;
    const diff1 = 2705 - calcHeightDifference() + (calcHeightDifference()*0.05);
    const diff2 = 2795 - calcHeightDifference() - (calcHeightDifference()*0.05);
    if (windowWidth < 470 || windowWidth > 720) return (diff1 + 'px');
    else return (diff2 + 'px');
}


// le immagini vengono caricate via php da gallery.php

// FUNZIONE PER DARE L'INCLINAZIONE RANDOM ALLE IMMAGINI:
function applyRandomRotation(images) {
    images.forEach(img => {
        const randomRotation = (Math.random() * 20) - 10; // Genera un numero casuale tra -10 e 10
        img.style.transform = `rotate(${randomRotation}deg)`;
    });
}

// Chiama la funzione dopo che il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', () => {
    applyRandomRotation(images);
});

// GESTIONE DELLE IMMAGINI:
let currentImageIndex = 0;
const startY = 900 - heightDifference;
const scrollIncrement = 200;
const imageScrollPoints = Array.from({ length: images.length }, (_, i) => startY + (i * scrollIncrement));
// Crea un array di 30 rotazioni casuali
const rotations = Array.from({ length: 30 }, () => (Math.random() * 30) - 15);

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    for (let i = 0; i < imageScrollPoints.length; i++) {
        if (scrollY >= imageScrollPoints[i]) {
            if (i < images.length) {
                const distanceScrolled = scrollY - imageScrollPoints[i];
                const maxDistance = 200;
                const translateY = Math.min(100, (distanceScrolled / maxDistance) * 100);

                images[i].style.transition = 'transform 0.3s ease-out';
                images[i].style.position = 'fixed';
                images[i].style.top = `${(100 + translateY / 2)}%`;
                images[i].style.left = '50%';

                // Applica la rotazione solo quando l'immagine raggiunge la posizione finale
                if (translateY === 100) {
                    images[i].style.transform = `translate(-50%, ${150 - (translateY * 1.7)}%) rotate(${rotations[i % 30]}deg)`;
                } else {
                    images[i].style.transform = `translate(-50%, ${150 - (translateY * 1.7)}%) rotate(0deg)`; // Nessuna rotazione durante l'animazione
                }
                images[i].style.display = 'block';
            }
        } else {
            if (i >= 0 && i < images.length) {
                images[i].style.display = 'none';
                images[i].style.transition = 'none';
            }
        }
    }
});
if (window.scrollY >= imageScrollPoints[0]) { // Mostra la prima immagine all'avvio se lo scroll è già sufficiente
    if (0 < images.length) {
        images[0].style.position = 'fixed';
        images[0].style.top = '50%';
        images[0].style.left = '50%';
        images[0].style.transform = 'translate(-50%, -50%)';
        images[0].style.display = 'block';
    }
}

// GESTIONE DEL TESTO SOPRA IL BOX IMMAGINI:
window.addEventListener('scroll', () => {
    const scrollY = (window.scrollY / window.innerHeight) * 100;
    const startY = (890 / window.innerHeight) * 100;
    const endY = fineGalleryY;
    let placeholder = document.getElementById('textAbovePlaceholder');

    if (scrollY >= startY && scrollY <= endY) {
        // Calcola l'altezza del testo
        const textHeight = textAbove.offsetHeight;
        // Crea il placeholder se non esiste e dagli l'altezza corretta:
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.id = 'textAbovePlaceholder';
            textAbove.parentNode.insertBefore(placeholder, textAbove);
        }
        placeholder.style.height = `${textHeight + 30}px`;
        // Imposta il testo come fixed
        textAbove.style.position = 'fixed';
        textAbove.style.top = (((80 / window.innerHeight) * 100) - heightDifference) + 'vh';
    } else if (scrollY >= endY) {
        textAbove.style.position = 'relative';
        let heightOffset = (calcHeightDifference()/100)*2.5;
        textAbove.style.top = offsetMaturatoTop + heightOffset + 'vh';     
        if (placeholder) {
            placeholder.remove();
        }
    } else {
        // Rimuovi il placeholder e imposta il testo come unset
        if (placeholder) {
            placeholder.remove();
        }
        textAbove.style.position = 'unset';
    }
});
function calcTopImages() {
    const windowWidth = window.innerWidth; 
    var calcl1 = 50 - (heightDifference/15);
    var calcl2 = 60 - (heightDifference/15);
    if (windowWidth < 470 || windowWidth > 720) return (calcl1+'%');
    else return (calcl2+'%');
}

// RIPOSIZIONA LA GALLERIA DELLE IMMAGINI DOPO AVER FINITO DI SCROLLARE
window.addEventListener('scroll', () => {
    const scrollY = (window.scrollY / window.innerHeight) * 100;
    const scrollThreshold = fineGalleryY;

    if (scrollY >= scrollThreshold) {
        const galleryImages = document.querySelectorAll('.gallery-image');
        galleryImages.forEach(img => {
            img.style.position = 'absolute';
            // devo aggiungere 25vh ogni 100hdifference
            let heightOffset = (calcHeightDifference()*0.01)*(15);
            let offsetRangeX = 0;
            if (windowWidth >= 470 && windowWidth <= 720) offsetRangeX = 9;
            img.style.top = offsetMaturatoTop + heightOffset + offsetRangeX + 146 + 'vh';
        });
    } else {
        // Resetta gli stili se lo scroll è inferiore alla soglia
        const galleryImages = document.querySelectorAll('.gallery-image');
        galleryImages.forEach(img => {
            img.style.position = 'fixed';
            img.style.top = calcTopImages();
        });
    }
});

// FUNZIONE PER RENDERE RESPONSIVE L'ALTEZZA DI galleryPlaceholder:
window.addEventListener('scroll', () => {
    const windowWidth = window.innerWidth;
    // devo aggiungere 25vh ogni 100hdifference
    let heightOffset = (calcHeightDifference()/100)*25;
    if (windowWidth < 900) galleryPlaceholder.style.height = (0.24 * heightDifference + 185 + heightOffset) + 'vh';
    else if (windowWidth < 1300) galleryPlaceholder.style.height = (0.24 * heightDifference + 195 + heightOffset) + 'vh';
    else if (windowWidth >= 1300) galleryPlaceholder.style.height = (0.24 * heightDifference + 215 + heightOffset) + 'vh';
});