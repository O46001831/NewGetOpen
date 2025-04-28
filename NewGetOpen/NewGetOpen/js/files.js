const trasparenzaFolder = "./pdf/"
const trasparenza = [
    //MAIN TOPIC: 
    //    ORGANIZZAZIONE
    //    BANDI DI GARA E CONTRATTI
    //    BILANCI
    //    PERSONALE
    //    CONSULENZE E COLLABORAZIONI
    //    PROVVEDIMENTI
    //    ATTI GENERALI 
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Modello 231",
        "descrizione_eng": "231 Model",
        "dataPubblicazione": "2024-03-20",
        "link": trasparenzaFolder + "GETOPEN-Modello-231-del-20.03.2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Codice Etico",
        "descrizione_eng": "Code of Ethics",
        "dataPubblicazione": "2024-03-20",
        "link": trasparenzaFolder + "GETOPEN-Codice-Etico.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Statuto ODV",
        "descrizione_eng": "Bylaws of the Supervisory Body",
        "dataPubblicazione": "2024-03-20",
        "link": trasparenzaFolder + "GETOPEN-Statuto-ODV.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Modulo di Segnalazione",
        "descrizione_eng": "Whistleblowing Form",
        "dataPubblicazione": "2024-03-20",
        "link": trasparenzaFolder + "GETOPEN-Modulo-segnalazione-ODV.pdf"
    }
];

//_____________________________________________________________________________________________________________
const loadingContainer = document.getElementById('loadingContainer');
const masterTop = document.getElementById('masterTrasparente');
const errore = document.getElementById('errorTrasparenza');
const trasparenzaLength = trasparenza.length;
const trasparenzaCard = document.getElementById('trasparenzaCard');
const trasparenzaContainer = document.getElementById('trasparenza');
const navigator = document.getElementById('trasparenzaNavigatorPage');
const currentPageBox = document.getElementById('currentPage');
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
var currentLang = getCookie('langCookie');
var currentPage = 1;
var nPages = Math.trunc((trasparenzaLength-1)/10 +1);
var filterValue;
var docCount = 0;

// FUNZIONE CHE MI RIPORTA ALL'INIZIO DELLA SEZIONE OGNI VOLTA CHE CAMBIO PAGINA FILTRI:
function backToTop(){
    window.scrollTo({
        top: masterTop.offsetTop,
        behavior: 'smooth' // Aggiunge uno scroll morbido
    });
}
// FUNZIONE CHE POPOLA LA SEZIONE TRASPARENZA
function fillTrasparenza(array){
    // svuoto il contenitore:
    trasparenzaContainer.innerHTML = '';
    // riempio:
    array.forEach(member => {
        let clone = trasparenzaCard.cloneNode(true);
        clone.removeAttribute('id');
        clone.classList.remove('hidden');
        clone.classList.add('trasparenzaCard');
        clone.querySelector('.mainTopic').innerHTML = member.categoria.split(' ')[0];;
        if (currentLang === 'ita' || !currentLang) {
            clone.querySelector('.categoria').innerHTML = member.categoria;
            clone.querySelector('.descrizione').innerHTML = member.descrizione;
            clone.querySelector('.dataPubblicazione').innerHTML = member.dataPubblicazione;
            clone.querySelector('.linkAlDownload').innerHTML = '<a href="'+member.link+'" target="_blank" ><img class="downloadButton" src="./img/download.png"></a>';
        } else if (currentLang === 'eng') {
            clone.querySelector('.categoria').innerHTML = member.categoria_eng;
            clone.querySelector('.descrizione').innerHTML = member.descrizione_eng;
            clone.querySelector('.dataPubblicazione').innerHTML = member.dataPubblicazione;
            clone.querySelector('.linkAlDownload').innerHTML = '<a href="'+member.link+'" target="_blank"><img class="downloadButton" src="./img/download.png"></a>';
        }
        trasparenzaContainer.appendChild(clone);
    });
}
// FUNZIONE CHE AGGIORNA LA LINGUA:
function updateTrasparenza(langSent){
    currentLang = langSent;
    trasparenzaContainer.innerHTML = '';
    showItems();
}
//_____________ FUNZIONAMENTO FILTRO ________________________
document.addEventListener('DOMContentLoaded', function() { 
    const filterSelect = document.getElementById('filter');
    filterSelect.addEventListener('change', function() {
        const publications = document.querySelectorAll('.trasparenzaCard');
        currentPage = 1;
        docCount = 0;
        filterValue = document.getElementById('filter').value;
        publications.forEach(publication => {
            if (filterValue === 'all' || publication.querySelector('.mainTopic').innerHTML.toLowerCase() === filterValue) {
                publication.style.display = '';
                docCount++;
            } else {
                publication.style.display = 'none';
            }
        });
        if (docCount === 0) {
            errore.classList.remove('hidden');
            nPages = 1;
        }
        else if (docCount > 0) {
            errore.classList.add('hidden');
            nPages = Math.trunc((docCount-1)/10 +1);
        }
        else console.log('errore in docCount');
        manageNavigatorArrows();
    });
});
//_____________ FUNZIONAMENTO NAVIGATOR ________________________
function selectItems(array){
    if(array.length > 0) errore.style.display = 'none';
    var tempArray = [];
    let itemStart = (currentPage*10)-10;
    let itemEnd = (currentPage*10)-1;
    array.forEach((member, index) => {
        if (index >= itemStart && index <= itemEnd) {
            tempArray.push(member);
        } 
    });
    return tempArray;
}
function showItems(){
    var tempArray;
    if (filterValue === 'all' || !filterValue) {
        // TUTTI MA SOLO NEL RANGE PREDEFINITO:
        tempArray = selectItems(trasparenza);
    } else {
        // TUTTI E DOPO SOLO NEL RANGE PREDEFINITO:
        let tempArrayAll = [];
        trasparenza.forEach(member => {
            if (member.categoria.split(' ')[0].toLowerCase() === filterValue) {
                tempArrayAll.push(member);
            } 
        });
        tempArray = selectItems(tempArrayAll);
    }
    // ho tutto quello che devo mandare per essere rappresentato:
    if (tempArray.length === 10) rightArrow.style.visibility = 'visible';
    if (currentPage > 1) leftArrow.style.visibility = 'visible';
    fillTrasparenza(tempArray);
}
function manageNavigatorArrows(){
    currentPageBox.innerHTML = '';
    currentPageBox.innerHTML = currentPage;
    if (currentPage <= 1 && nPages > 1) {
        leftArrow.style.visibility = 'hidden';
        rightArrow.style.visibility = 'visible'
    }
    else if (currentPage >= nPages && nPages > 1) {
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'hidden'
    }
    else if (nPages === 1) {
        leftArrow.style.visibility = 'hidden';
        rightArrow.style.visibility = 'hidden'
    }
    else {
        leftArrow.style.visibility = 'visible';
        rightArrow.style.visibility = 'visible'
    }
    // DICO QUALI COSE DEVO VEDERE:
    showItems();
}
leftArrow.addEventListener('click', function(){
    currentPage--
    manageNavigatorArrows();
    backToTop();
});
rightArrow.addEventListener('click', function(){
    currentPage++
    manageNavigatorArrows();
    backToTop();
});
// ________________START LOGICA_________________________

// italiano come lingua di default:
if (!currentLang) currentLang = 'ita';
// se non ci sono documenti mostro un messaggio
if (trasparenzaLength <= 0) {
    errore.style.display = 'block';
    loadingContainer.style.display = 'none';
    navigator.style.display = 'none';
} else { //altrimenti popolo la tabella:
    loadingContainer.style.display = 'none';
    manageNavigatorArrows();
}

