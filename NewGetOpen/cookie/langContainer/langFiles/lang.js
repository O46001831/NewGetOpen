function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return null;
}
const itaContainer = document.getElementById('ita');
const engContainer = document.getElementById('eng');
const langSelectionLine = document.createElement('div');
    langSelectionLine.style.width = '100%';
    langSelectionLine.style.height = '2px';
    langSelectionLine.style.backgroundColor = '#17c8f4'; 
    langSelectionLine.style.borderRadius = '5px';


const arrayLingue = {
    "ita": {                    
            "#firstSectionTextBelow > h3": "GetOpen è una startup innovativa dedicata alla promozione di nuove tecnologie per lo sfruttamento sostenibile delle risorse idriche. La nostra missione è incentivare un cambiamento nell'azione per un mondo più verde, garantendo a tutti l'accesso all'acqua, una sfida cruciale per i prossimi anni. Di fronte ai cambiamenti climatici, alla crescente urbanizzazione e all'inquinamento, la qualità e la quantità delle riserve idriche rinnovabili sono seriamente compromesse. In Italia, il 4% dei consumi elettrici è attribuito all'industria dell'acqua, mentre negli Stati Uniti questa percentuale sale al 13%, con il 40% dell'acqua trattata e immessa negli acquedotti che viene dispersa durante il trasporto.",
            "#address": "Sede Legale: Via Cesare Vivante 9, CATANIA, 95123, IT",
            "#firstCarousel > div.PeCTitle > h2.first": "I NOSTRI",
            "#firstCarousel > div.PeCTitle > h2.second": "PARTNER",
            "#secondCarousel > div.PeCTitle > h2.first": "I NOSTRI",
            "#secondCarousel > div.PeCTitle > h2.second": "CLIENTI",
            "#footer > div.contatti > div.textSplitted > h2.firstHalf": "CO",
            "#footer > div.contatti > div.textSplitted > h2.secondHalf": "NTATTI"
        },
        "eng": {       
            "#firstSectionTextBelow > h3": "GetOpen is an innovative startup committed to advancing new technologies for the sustainable management of water resources. Our mission is to foster a transformative shift toward a greener future by ensuring universal access to water—an increasingly critical challenge in the coming years. Amidst the growing impacts of climate change, urban expansion, and pollution, both the quality and availability of renewable water reserves are under severe threat. In Italy, the water sector accounts for approximately 4% of national electricity consumption, whereas in the United States, this figure reaches 13%. Moreover, up to 40% of treated water introduced into distribution networks is lost during transportation.",
            "#address": "Headquarters: Via Cesare Vivante 9, CATANIA, 95123, IT",
            "#firstCarousel > div.PeCTitle > h2.first": "OUR",
            "#firstCarousel > div.PeCTitle > h2.second": "PARTNERS",
            "#secondCarousel > div.PeCTitle > h2.first": "OUR",
            "#secondCarousel > div.PeCTitle > h2.second": "CUSTOMERS",
            "#footer > div.contatti > div.textSplitted > h2.firstHalf": "CONT",
            "#footer > div.contatti > div.textSplitted > h2.secondHalf": "ACT INFORMATIONS"
        } 
}

// language line selection
function appendLineSelectionLanguage(langUsed){
    if(langUsed === 'it-IT' || langUsed === 'ita') {
        itaContainer.appendChild(langSelectionLine);
        itaContainer.click();
    }
    else if (langUsed === 'en-EN' || langUsed === 'eng') {
        engContainer.appendChild(langSelectionLine);
        engContainer.click();
    }
    else {
        itaContainer.appendChild(langSelectionLine);
        updateLanguages(langUsed);
    } // italian as default language
}

// UPDATE LANGUAGES FUNCTION
function updateLanguages(language){
    //appendLineSelectionLanguage(language); // update line selector
    const elementsLanguagesArray = [arrayLingue];
    elementsLanguagesArray.forEach(object => {
        const elements = object[language];
        if (elements) {
            for (const [selector, text] of Object.entries(elements)) {
                const nodes = document.querySelectorAll(selector);
                nodes.forEach(node => {
                    node.innerHTML = text;
                });
            }
        }
    }); 
}
// listener on flag icons
itaContainer.addEventListener('click', function(){
    setCookie('langCookie','ita','365');
    appendLineSelectionLanguage('ita');
    updateLanguages('ita');
    updatePageLanguageCookie('ita')
    //updateTrasparenza('ita');
});
engContainer.addEventListener('click', function(){
    setCookie('langCookie','eng','365');
    appendLineSelectionLanguage('eng');
    updateLanguages('eng');
    updatePageLanguageCookie('eng')
    //updateTrasparenza('eng');
});

document.addEventListener('DOMContentLoaded', function(){
    var langUsed = getCookie('langCookie'); // page load
    appendLineSelectionLanguage(langUsed);  // page load 
});