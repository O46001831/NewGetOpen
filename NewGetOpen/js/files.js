const trasparenzaFolder = "./documenti"
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
        "descrizione": "Descrizione dell'organizzazione aziendale.",
        "descrizione_eng": "Description of the company's organization.",
        "dataPubblicazione": "2024-01-01",
        "link": trasparenzaFolder + "organizzazione_2024.pdf"
    },
    {
        "categoria": "BANDI DI GARA E CONTRATTI",
        "categoria_eng": "Tenders and Contracts",
        "descrizione": "Elenco dei bandi di gara e contratti.",
        "descrizione_eng": "List of tenders and contracts.",
        "dataPubblicazione": "2024-02-01",
        "link": trasparenzaFolder + "bandi_gara_2024.pdf"
    },
    {
        "categoria": "BILANCI",
        "categoria_eng": "Budgets",
        "descrizione": "Bilancio annuale aziendale.",
        "descrizione_eng": "Annual company budget.",
        "dataPubblicazione": "2024-03-01",
        "link": trasparenzaFolder + "bilancio_2024.pdf"
    },
    {
        "categoria": "PERSONALE",
        "categoria_eng": "Personnel",
        "descrizione": "Informazioni sul personale aziendale.",
        "descrizione_eng": "Information about company personnel.",
        "dataPubblicazione": "2024-04-01",
        "link": trasparenzaFolder + "personale_2024.pdf"
    },
    {
        "categoria": "CONSULENZE E COLLABORAZIONI",
        "categoria_eng": "Consulting and Collaborations",
        "descrizione": "Elenco delle consulenze e collaborazioni.",
        "descrizione_eng": "List of consulting and collaborations.",
        "dataPubblicazione": "2024-05-01",
        "link": trasparenzaFolder + "consulenze_2024.pdf"
    },
    {
        "categoria": "PROVVEDIMENTI",
        "categoria_eng": "Provisions",
        "descrizione": "Provvedimenti adottati dall'azienda.",
        "descrizione_eng": "Provisions adopted by the company.",
        "dataPubblicazione": "2024-06-01",
        "link": trasparenzaFolder + "provvedimenti_2024.pdf"
    },
    {
        "categoria": "ATTI GENERALI",
        "categoria_eng": "General Acts",
        "descrizione": "Atti generali aziendali.",
        "descrizione_eng": "General company acts.",
        "dataPubblicazione": "2024-07-01",
        "link": trasparenzaFolder + "atti_generali_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Struttura organizzativa e contatti.",
        "descrizione_eng": "Organizational structure and contacts.",
        "dataPubblicazione": "2024-01-15",
        "link": trasparenzaFolder + "organizzazione_struttura_2024.pdf"
    },
    {
        "categoria": "BANDI DI GARA E CONTRATTI",
        "categoria_eng": "Tenders and Contracts",
        "descrizione": "Documentazione bandi di gara 2024.",
        "descrizione_eng": "Tenders documentation 2024.",
        "dataPubblicazione": "2024-02-15",
        "link": trasparenzaFolder + "bandi_documenti_2024.pdf"
    },
    {
        "categoria": "BILANCI",
        "categoria_eng": "Budgets",
        "descrizione": "Bilancio previsionale 2024.",
        "descrizione_eng": "Budget forecast 2024.",
        "dataPubblicazione": "2024-03-15",
        "link": trasparenzaFolder + "bilancio_previsionale_2024.pdf"
    },
    {
        "categoria": "PERSONALE",
        "categoria_eng": "Personnel",
        "descrizione": "Elenco dipendenti e qualifiche.",
        "descrizione_eng": "List of employees and qualifications.",
        "dataPubblicazione": "2024-04-15",
        "link": trasparenzaFolder + "personale_elenco_2024.pdf"
    },
    {
        "categoria": "CONSULENZE E COLLABORAZIONI",
        "categoria_eng": "Consulting and Collaborations",
        "descrizione": "Dettagli sulle consulenze esterne.",
        "descrizione_eng": "Details on external consulting.",
        "dataPubblicazione": "2024-05-15",
        "link": trasparenzaFolder + "consulenze_dettagli_2024.pdf"
    },
    {
        "categoria": "PROVVEDIMENTI",
        "categoria_eng": "Provisions",
        "descrizione": "Provvedimenti disciplinari 2024.",
        "descrizione_eng": "Disciplinary provisions 2024.",
        "dataPubblicazione": "2024-06-15",
        "link": trasparenzaFolder + "provvedimenti_disciplinari_2024.pdf"
    },
    {
        "categoria": "ATTI GENERALI",
        "categoria_eng": "General Acts",
        "descrizione": "Atti normativi generali 2024.",
        "descrizione_eng": "General normative acts 2024.",
        "dataPubblicazione": "2024-07-15",
        "link": trasparenzaFolder + "atti_normativi_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Informazioni sui dirigenti.",
        "descrizione_eng": "Information about managers.",
        "dataPubblicazione": "2024-08-01",
        "link": trasparenzaFolder + "dirigenti_2024.pdf"
    },
    {
        "categoria": "BANDI DI GARA E CONTRATTI",
        "categoria_eng": "Tenders and Contracts",
        "descrizione": "Risultati delle gare d'appalto 2024.",
        "descrizione_eng": "Results of the 2024 tenders.",
        "dataPubblicazione": "2024-09-01",
        "link": trasparenzaFolder + "risultati_gare_2024.pdf"
    },
    {
        "categoria": "BILANCI",
        "categoria_eng": "Budgets",
        "descrizione": "Bilancio consolidato 2024.",
        "descrizione_eng": "Consolidated budget 2024.",
        "dataPubblicazione": "2024-10-01",
        "link": trasparenzaFolder + "bilancio_consolidato_2024.pdf"
    },
    {
        "categoria": "PERSONALE",
        "categoria_eng": "Personnel",
        "descrizione": "Piano assunzioni 2024.",
        "descrizione_eng": "Hiring plan 2024.",
        "dataPubblicazione": "2024-11-01",
        "link": trasparenzaFolder + "piano_assunzioni_2024.pdf"
    },
    {
        "categoria": "CONSULENZE E COLLABORAZIONI",
        "categoria_eng": "Consulting and Collaborations",
        "descrizione": "Collaborazioni con enti esterni 2024.",
        "descrizione_eng": "Collaborations with external entities 2024.",
        "dataPubblicazione": "2024-12-01",
        "link": trasparenzaFolder + "collaborazioni_2024.pdf"
    },
    {
        "categoria": "PROVVEDIMENTI",
        "categoria_eng": "Provisions",
        "descrizione": "Provvedimenti amministrativi 2024.",
        "descrizione_eng": "Administrative provisions 2024.",
        "dataPubblicazione": "2024-12-15",
        "link": trasparenzaFolder + "provvedimenti_amministrativi_2024.pdf"
    },{
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Piano strategico aziendale per l'anno 2024.",
        "descrizione_eng": "Company strategic plan for the year 2024.",
        "dataPubblicazione": "2024-01-20",
        "link": trasparenzaFolder + "piano_strategico_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Organigramma aggiornato dell'azienda.",
        "descrizione_eng": "Updated organizational chart of the company.",
        "dataPubblicazione": "2024-02-10",
        "link": trasparenzaFolder + "organigramma_aggiornato_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Mansioni e responsabilità dei dirigenti.",
        "descrizione_eng": "Duties and responsibilities of managers.",
        "dataPubblicazione": "2024-03-05",
        "link": trasparenzaFolder + "mansioni_dirigenti_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Sedi operative e contatti principali.",
        "descrizione_eng": "Operational offices and main contacts.",
        "dataPubblicazione": "2024-04-18",
        "link": trasparenzaFolder + "sedi_operativi_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Piano di formazione interna per il 2024.",
        "descrizione_eng": "Internal training plan for 2024.",
        "dataPubblicazione": "2024-05-25",
        "link": trasparenzaFolder + "piano_formazione_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Regolamento interno aziendale 2024.",
        "descrizione_eng": "Internal company regulations 2024.",
        "dataPubblicazione": "2024-06-15",
        "link": trasparenzaFolder + "regolamento_interno_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Procedure operative standard aziendali.",
        "descrizione_eng": "Company standard operating procedures.",
        "dataPubblicazione": "2024-07-10",
        "link": trasparenzaFolder + "procedure_operative_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Politiche di sicurezza aziendale.",
        "descrizione_eng": "Company security policies.",
        "dataPubblicazione": "2024-08-05",
        "link": trasparenzaFolder + "politiche_sicurezza_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Codice etico aziendale 2024.",
        "descrizione_eng": "Company ethical code 2024.",
        "dataPubblicazione": "2024-09-12",
        "link": trasparenzaFolder + "codice_etico_2024.pdf"
    },
    {
        "categoria": "ORGANIZZAZIONE",
        "categoria_eng": "Organization",
        "descrizione": "Codice etico aziendale 2024.",
        "descrizione_eng": "Company ethical code 2024.",
        "dataPubblicazione": "2024-09-12",
        "link": trasparenzaFolder + "codice_etico_2024.pdf"
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

