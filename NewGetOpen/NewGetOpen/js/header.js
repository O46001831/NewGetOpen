const windowHeight = window.innerHeight;
const header = document.querySelector('header');
const scritta = document.querySelector('.scritta');
const change = document.querySelector('.change');
const logo = document.getElementById('logo');
//const burgerIcon = document.getElementById('burgerIcon');
const scrittaStartPercentageStart = -60;
const scrittaStartPercentageEnd = -50; 
const scrollThreshold = windowHeight * 0.4; 
const startTopLogo = 38;
const endTopLogo = 1;
const numberOfImmages = 5;

function handleScroll() {
    const scrollY = window.scrollY;
    const progress = scrollY / scrollThreshold;
    // console.log(scrollY);
    const scrittaStartPercentageCalculated = scrittaStartPercentageStart - ((scrittaStartPercentageStart - scrittaStartPercentageEnd) * progress);
    requestAnimationFrame(() => {
        if (scrollY >= 0 && scrollY < scrollThreshold) {
            const opacity = scrollY / scrollThreshold;
            header.style.backgroundColor = `rgba(51, 51, 51, ${opacity})`;

            // Calcola il valore in vh
            const topValue = startTopLogo - (scrollY * (startTopLogo - endTopLogo) / scrollThreshold);
            scritta.style.top = `${topValue}vh`;

            const scaleValue = 2 - (scrollY / scrollThreshold);
            scritta.style.transform = `translate(${scrittaStartPercentageCalculated}%, 0) scale(${scaleValue})`;

            logo.style.display = 'none';
            //burgerIcon.style.display = 'none';
        } else if (scrollY >= scrollThreshold) {
            header.style.backgroundColor = 'rgba(51, 51, 51, 1)';
            scritta.style.top = `${endTopLogo}vh`; // endTopLogo è in px, quindi va bene
            scritta.style.transform = 'translate('+scrittaStartPercentageEnd+'%, 0) scale(1)';

            logo.style.display = 'block';
            //burgerIcon.style.display = 'block';
        } else {
            header.style.backgroundColor = 'rgba(51, 51, 51, 0)';
            scritta.style.top = `${startTopLogo}vh`; // Aggiungi "vh"
            scritta.style.transform = 'translate('+scrittaStartPercentageStart+'%, 0) scale(2)';

            logo.style.display = 'none';
            //burgerIcon.style.display = 'none';
        }
    });
}

handleScroll();
window.addEventListener('scroll', handleScroll);