const preferenzeBtn = document.getElementById('preferenzeBtn');
const secondSectionOverlay = document.getElementById('secondSectionOverlay');

const windowWidth = window.innerWidth;
const startFooterChange = 860;
//console.log('width: ' + windowWidth)

window.addEventListener('scroll', function() {
    const footer = document.getElementById('footerContainer');
    const scrollY = window.scrollY;
    const bottomFooter = 54;
    const startY = startYResponsive();
    console.log(startY)
    const footerHeight = footer.offsetHeight + 54;
    let placeholder = document.getElementById('footerPlaceholder');
    

    if (scrollY >= startY) {
        // Crea il placeholder se non esiste
        if (!placeholder) {
            placeholder = document.createElement('div');
            placeholder.id = 'footerPlaceholder';
            footer.parentNode.insertBefore(placeholder, footer);
            placeholder.style.height = `${footerHeight}px`;
        }
        footer.style.position = 'fixed';
        footer.style.bottom = bottomFooter + 'px';
    } else {
        // Rimuovi il placeholder e imposta il footer come static
        if (placeholder) {
            placeholder.remove();
        }
        footer.style.position = 'relative';
        footer.style.bottom = 'auto';
    }

    if (preferenzeBtn) { // Controllo se preferenzeBtn esiste
        if (scrollY > startY) {
            preferenzeBtn.style.display = 'flex';
        } else {
            preferenzeBtn.style.display = 'none';
        }
    }
});
preferenzeBtn.style.display = 'none';



// PER IL PUNTO IN CUI FAR PARTIRE IL FOOTER DEVO CONSIDERARE LA SOMMA DELLE ALTEZZE DI TUTTI I BLOCCHI
function calcDocumentHeight() {
    const altezzaProvvisioriaFinoATrasparenza = 0;
    var master231Height = document.getElementById('mater231').offsetHeight;
    var altezzaTrasparenzaHeight = document.querySelector('#masterTrasparente > div').offsetHeight;
    var altezzaImmagineHeight = document.querySelector('#masterChisiamo').offsetHeight;
    var masterServiziHeight = document.querySelector('#masterServizi').offsetHeight;
    var secondCarouselHeight = document.querySelector('#secondCarousel').offsetHeight;
    var firstCarouselHeight = document.querySelector('#firstCarousel').offsetHeight;
    var galleryPlaceholderHeight = document.querySelector('#galleryPlaceholder').offsetHeight;
    var firstSectionTextBelowHeight = document.querySelector('#firstSectionTextBelow').offsetHeight;
    var masterGetopenHeight = 100;//document.querySelector('#masterGetopen').offsetHeight;
    var fullHeight = altezzaProvvisioriaFinoATrasparenza + altezzaTrasparenzaHeight + altezzaImmagineHeight + master231Height +     
                        masterServiziHeight + secondCarouselHeight + firstCarouselHeight + galleryPlaceholderHeight +
                        firstSectionTextBelowHeight + masterGetopenHeight;
    //console.log(fullHeight)
    return fullHeight
}
// SCHERMO RESPONSIVE:
function startYResponsive() { // partenza footer displayed
    var startY = calcDocumentHeight();
    if (windowWidth < 470) {
        startY -= 100;
    } //else if (windowWidth <= startFooterChange) {
    //     startY += 450;
    // }
    return startY;
}
window.addEventListener('scroll', function() { // regolazione altezza immagine che copre il footer:
    if (windowWidth <= startFooterChange) {
        secondSectionImage.style.height = '800px';
        masterChisiamo.style.height = '800px';
        secondSectionOverlay.style.height = '800px';
    } else {
        secondSectionImage.style.height = '320px';
        masterChisiamo.style.height = '320px';
        secondSectionOverlay.style.height = '320px';
    }
});