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
            "#masterServizi > div > div.PeCTitle > h2.secondMarginless": "RIVZI",
            // MODELLO 231
            "#mater231 > div > div.PeCTitle > h2.first": "MOD",
            "#mater231 > div > div.PeCTitle > h2.secondMarginless": "ELLO 231",
            "#mater231 > div > div.PDFcontainer > a:nth-child(1) > div > span": "MODELLO 231",
            "#mater231 > div > div.PDFcontainer > a:nth-child(2) > div > span": "CODICE ETICO",
            "#mater231 > div > div.PDFcontainer > a:nth-child(3) > div > span": "STATUTO ODV",
            "#mater231 > div > div.PDFcontainer > a:nth-child(4) > div > span": "MODULO DI SEGNALAZIONE",
            // SOC. TRASPARENTE
            "#masterTrasparente > div > div.PeCTitle > h2.first": "SOCIE",
            "#masterTrasparente > div > div.PeCTitle > h2.secondMarginless": "TÀ TRASPARENTE",
            "#filterForm > label": "Categoria:",
            "#filter > option:nth-child(1)": "Tutte le categorie",
            "#filter > option:nth-child(2)": "Organizzazione",
            "#filter > option:nth-child(3)": "Bandi di Gara e Contratti",
            "#filter > option:nth-child(4)": "Bilanci",
            "#filter > option:nth-child(5)": "Personale",
            "#filter > option:nth-child(6)": "Consulenze e Collaborazioni",
            "#filter > option:nth-child(7)": "Provvedimenti",
            "#filter > option:nth-child(8)": "Atti Generali",
            "#trasparenzaTitle > strong:nth-child(1)": "CATEGORIA",
            "#trasparenzaTitle > strong:nth-child(2)": "DESCRIZIONE",
            "#trasparenzaTitle > strong:nth-child(3)": "DATA PUBBLICAZIONE",
            // FOOTER
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
            "#masterServizi > div > div.PeCTitle > h2.secondMarginless": "RVICES",
            // MODELLO 231
            "#mater231 > div > div.PeCTitle > h2.first": "23",
            "#mater231 > div > div.PeCTitle > h2.secondMarginless": "1 MODEL",
            "#mater231 > div > div.PDFcontainer > a:nth-child(1) > div > span": "231 MODEL",
            "#mater231 > div > div.PDFcontainer > a:nth-child(2) > div > span": "CODE OF ETHICS",
            "#mater231 > div > div.PDFcontainer > a:nth-child(3) > div > span": "ODV STATUTE",
            "#mater231 > div > div.PDFcontainer > a:nth-child(4) > div > span": "WHISTLEBLOWING FORM",
            // SOC. TRASPARENTE
            "#masterTrasparente > div > div.PeCTitle > h2.first": "TRASP",
            "#masterTrasparente > div > div.PeCTitle > h2.secondMarginless": "ARENT COMPANY",
            "#filterForm > label": "Topic:",
            "#filter > option:nth-child(1)": "All",
            "#filter > option:nth-child(2)": "Organization",
            "#filter > option:nth-child(3)": "Bids and Contracts",
            "#filter > option:nth-child(4)": "Financial Statement",
            "#filter > option:nth-child(5)": "Personnel",
            "#filter > option:nth-child(6)": "Consultancy and Collaborations",
            "#filter > option:nth-child(7)": "Decisions",
            "#filter > option:nth-child(8)": "General Acts",
            "#trasparenzaTitle > strong:nth-child(1)": "TOPIC",
            "#trasparenzaTitle > strong:nth-child(2)": "DESCRIPTION",
            "#trasparenzaTitle > strong:nth-child(3)": "PUBLICATION DATE",
            // FOOTER
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
    updateTrasparenza('ita');
});
engContainer.addEventListener('click', function(){
    setCookie('langCookie','eng','365');
    appendLineSelectionLanguage('eng');
    updateLanguages('eng');
    updatePageLanguageCookie('eng')
    updateTrasparenza('eng');
});

document.addEventListener('DOMContentLoaded', function(){
    var langUsed = getCookie('langCookie'); // page load
    appendLineSelectionLanguage(langUsed);  // page load 
});