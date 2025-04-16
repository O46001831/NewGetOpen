// COSTANTI DA CAMBIARE:
// footer
    const footerPPButton = document.getElementById('footerPrivacyPolicy');
    const footerCButton = document.getElementById('footerCookiePolicy');
// -settare la seguente variabile: true o false.
    const thereIsALangContainer = true;
// -box to switch language (it needs to be build in the html/php header file)   
    document.addEventListener('DOMContentLoaded', function(){ 
        if (thereIsALangContainer){
            updatePageLanguageCookie(getCookie('langCookie'));
        }
    });

// COSTANTI DA NON CAMBIARE
const html = document.querySelector('html');
// banner, settings and policys
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieSettingsModal = document.querySelector('#cookieModal');
    const ppModal = document.getElementById('privacyPolicyModal');
    const cModal = document.getElementById('cookiePolicyModal');
// buttons into banner
    const accettaBtnBanner = document.getElementById('accettaBtn');
    const rifiutaBtnBanner = document.getElementById('rifiutaBtn');
    const openCookieSettingsBtn = document.getElementById('moreBtn');
    const openPPFromBanner = document.getElementById('openPPolicyFromBanner');
    const openCFromBanner = document.getElementById('openCookieFromBanner');
// buttons into cookie settings
    const exitFromCookieSettings = document.getElementsByClassName('closeCookieModal')[0];
    const openPPFromCookieSettings = document.querySelector('.pPolicyButton');
    const refuseBtnModal = document.querySelector('#rifiutaBtnModal');
    const acceptBtnModal = document.querySelector('#accettaBtnModal');
    const openCookiePolicyFromCookieSettings = document.querySelector('#openPolicyFromCookieSettings');
    const checkboxEsperienza = document.querySelector('#cookieModal > div > div.esperienza > label > input'); 
    const checkbox = document.getElementById('purpose-2');
    const saveCookie = document.querySelector('#savePreferences');
// buttons into PP:
    const closePPButton = document.getElementById('closePrivacyPolicyModal');
    const openCookieFromPP = document.getElementById('anotherCookieOpener');
// buttons into C:
    const closeCButton = document.getElementById('closeCookiePolicyModal');

//______________________________________________________________________________________________________ FUNZIONI BASE COOKIE
    // Funzione per ottenere il valore di un cookie
    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];
        return null;
    }
    // Funzione per impostare un cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
        getCookie(name);
    }
    // Controllo se l'utente ha già accettato i cookie
    if (!getCookie('cookiesExperience')) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
    // accetta cookie
    function acceptCookie(){
    let userLang = navigator.language || navigator.userLanguage;
    setCookie('cookiesAccepted', 'true', 365); 
    setCookie('cookiesNecessari', 'true', 365); 
    setCookie('cookiesExperience', 'true', 365); 
    setCookie('langCookie', userLang, 365);
    return true;
    }
    // rifiuta cookie
    function refuseCookie(){
    setCookie('cookiesAccepted', 'false', -1); // Imposta il cookie per un anno
    setCookie('cookiesNecessari', 'false', -1); // Imposta il cookie per un anno
    setCookie('cookiesExperience', 'false', -1); // Imposta il cookie per un anno
    setCookie('langCookie', 'false', -1); // Imposta la lingua dell'utente in un cookie
    }
//______________________________________________________________________________________________________ GLOBAL FUNCTION   
    // hide overflow Y when a modal is opened:
    document.addEventListener('click', function(){
        if (document.getElementById('privacyPolicyModal').style.display.includes('block')) {
            html.style.overflowY = 'hidden';
            stuffToDpWhenOpenAModal();
        }
        else if (document.getElementById('cookiePolicyModal').style.display.includes('block')) {
            html.style.overflowY = 'hidden';
            stuffToDpWhenOpenAModal();
        }
        else if (document.getElementById('cookieModal').style.display.includes('block')) {
            html.style.overflowY = 'hidden';
            stuffToDpWhenOpenAModal();
        }
        else {
            html.style.overflowY = 'visible';
            closeModal();
        }
    });
    // stuffs: 
    function stuffToDpWhenOpenAModal(){
        document.querySelector('header').classList.add('hidden'); // TO ADAPT
        document.querySelector('#scrollToTopBtn').classList.add('hidden'); // TO ADAPT
        document.querySelector('#logo').style.zIndex = '-1'; // TO ADAPT
        html.style.overflowY = 'hidden';
        /*
        if(!getCookie('cookiesExperience')) {
            checkboxEsperienza.checked = 'false';
        } else checkboxEsperienza.checked = 'true';
         */
        cookieBanner.style.zIndex = 0;
    }
    function stuffToDpWhenCloseAModal(){
        document.querySelector('header').classList.remove('hidden'); // TO ADAPT
        document.querySelector('#scrollToTopBtn').classList.remove('hidden'); // TO ADAPT
        document.querySelector('#logo').style.zIndex = '101'; // TO ADAPT
        html.style.overflowY = 'visible';
        cookieBanner.style.zIndex = 100000000000;
    }
//______________________________________________________________________________________________________ COOKIE BANENR
    // listener to accept and refuse buttons
    accettaBtnBanner.addEventListener('click', function() {
        if(acceptCookie()){
            closeCookieBanner();
        }
    });
    rifiutaBtnBanner.addEventListener('click', function() {
        refuseCookie();
        closeCookieBanner();
    });
    // open policys
    openPPFromBanner.addEventListener('click', function(){
        document.getElementById('privacyPolicyModal').style.display='block';
    });
    openCFromBanner.addEventListener('click', function(){
        document.getElementById('cookiePolicyModal').style.display='block';
    });
    // close
    function closeCookieBanner(){
        cookieBanner.style.display = 'none';
    }
//______________________________________________________________________________________________________ COOKIE SETTINGS
    // manage experience checkbox
    function checkEsperienzaChecked(){    
        if (getCookie('cookiesExperience')) {
            acceptBtnModal.classList.add('selectedBtn');
            refuseBtnModal.classList.remove('selectedBtn');   
            checkboxEsperienza.checked = true;
        }
        else {   
            refuseBtnModal.classList.add('selectedBtn');
            acceptBtnModal.classList.remove('selectedBtn');     
            checkboxEsperienza.checked = false;
        }
    } 
    // modal CLOSE
    function closeModal(){
        cookieSettingsModal.style.display = 'none';
        stuffToDpWhenCloseAModal();
    }
    // exit button
    exitFromCookieSettings.addEventListener('click', function() {
        closeModal();
    });   
    // open PP
    openPPFromCookieSettings.addEventListener('click', function(){
        ppModal.style.display='block';
        cookieSettingsModal.style.display='none';
    });

    // FUNCTION OPENMODAL() IS CONTAINED INTO PREFERENZEBUTTON.PHP FILE

    // open cookie settings when click on #moreBtn
    openCookieSettingsBtn.addEventListener('click', function() {
        openModal();
    });
    openCookiePolicyFromCookieSettings.addEventListener('click', function(){
        cookieSettingsModal.style.display='none';
        cModal.style.display='block';
    });
    // listener on refuse and accept buttons
    refuseBtnModal.addEventListener('click', function(){
        acceptBtnModal.classList.remove('selectedBtn');
        refuseBtnModal.classList.add('selectedBtn');
        if(getCookie('cookiesExperience')) {
            checkboxEsperienza.click();
        }
        setCookie('cookiesExperience', 'false', '-1');
    });
    acceptBtnModal.addEventListener('click', function(){
        refuseBtnModal.classList.remove('selectedBtn');
        acceptBtnModal.classList.add('selectedBtn');
        if(!getCookie('cookiesExperience')) {
            checkboxEsperienza.click();
        }
        setCookie('cookiesExperience', 'true', '365');
    });
    // save cookie button
    saveCookie.addEventListener('click', function(){
        if (acceptBtnModal.classList.contains('selectedBtn')) {
            setCookie('cookiesExperience', 'true', '365');
            closeCookieBanner();
        }
        else setCookie('cookiesExperience', 'false', '-1');
        closeModal();
    });
//______________________________________________________________________________________________________ PRIVACY POLICY
    // close PP
    closePPButton.addEventListener('click', function(){
        ppModal.style.display = 'none';
    });
    // open PP:
    function openPrivacyPolicyModal() {
        ppModal.style.display = 'block';
    }
    // open cookie from PP
    function closeAndOpenCookiePolicyModal(){
        ppModal.style.display = 'none';
        openCookiePolicyModal();
    }
    openCookieFromPP.addEventListener('click', closeAndOpenCookiePolicyModal);
//______________________________________________________________________________________________________ COOKIE POLICY
    // open Cookie
    function openCookiePolicyModal(){
        cModal.style.display = 'block';
    }
    // close cookie
    closeCButton.addEventListener('click', function(){
        cModal.style.display = 'none';
    });
    //__________________________________________________________________________________________________ FOOTER
    footerPPButton.addEventListener('click', function(){
        openPrivacyPolicyModal();
    });
    footerCButton.addEventListener('click', function(){
        openCookiePolicyModal();
    });

//__________________________________________ GESTIONE DELLE LINGUE _____________________________________________________
const preferenzeBarraTranslations = {
    "ita": {        
        "#infoRaccolta": "Informativa sulla raccolta",
        "#preferenzeText": "Le tue preferenze relative alla privacy"
    },
    "eng": {
        "#infoRaccolta": "Collection Notice",
        "#preferenzeText": "Your privacy preferences"
    } 
}
const cookieBannerTranslations = {
    "ita": {        
        "#accettaBtn": "Accetta",
        "#rifiutaBtn": "Rifiuta",
        "#moreBtn": "Scopri di più e personalizza",
        "#cookie-banner > div:nth-child(1) > div > p:nth-child(1)": "<p>Noi e terze parti selezionate raccogliamo informazioni personali come specificato nella <span class='likeAElement' id='openPPolicyFromBanner'>privacy policy</span>  e utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per le finalità di <strong>esperienza</strong> come specificato nella <span class='likeAElement' id='openCookieFromBanner'>cookie policy</span>.</p>",
        "#cookie-banner > div:nth-child(1) > div > p:nth-child(2)": "<p>Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, accedendo al pannello delle preferenze. Il rifiuto del consenso può rendere non disponibili le relative funzioni.</p>",
        "#cookie-banner > div:nth-child(1) > div > p:nth-child(4)": "<p>Usa il pulsante “Accetta” per acconsentire. Usa il pulsante “Rifiuta”  per continuare senza accettare.</p>"


    },
    "eng": {
        "#accettaBtn": "Accept",
        "#rifiutaBtn": "Refuse",
        "#moreBtn": "Learn more and customize",
        "#cookie-banner > div:nth-child(1) > div > p:nth-child(1)": "<p>We and selected third parties collect personal information as specified in the <span class='likeAElement' id='openPPolicyFromBanner'>privacy policy</span> and use cookies or similar technologies for technical purposes and, with your consent, also for <strong>experience</strong> purposes as specified in the <span class='likeAElement' id='openCookieFromBanner'>cookie policy</span>.</p>",
        "#cookie-banner > div:nth-child(1) > div > p:nth-child(2)": "<p>You can freely give, refuse, or withdraw your consent at any time by accessing the preferences panel. Refusing consent may make the related functions unavailable.</p>",
        "#cookie-banner > div:nth-child(1) > div > p:nth-child(4)": "<p>Use the “Accept” button to consent. Use the “Refuse” button to continue without accepting.</p>"
    } 
}
const preferenzeTranslations = {
    "ita": {        
        "#cookieModal > div > div.topCookieModal > button.pPolicyButton": "Visualzza Privacy Policy completa",
        "#cookieModal > div > h2": "Le tue preferenze relative alla privacy",
        "#cookieModal > div > p:nth-child(3)": "Questo pannello ti permette di esprimere alcune preferenze relative al trattamento delle tue informazioni personali.",
        "#cookieModal > div > p:nth-child(4)": "Puoi rivedere e modificare le tue scelte in qualsiasi momento accedendo al presente pannello tramite l’apposito link.",
        "#cookieModal > div > p:nth-child(5)": "Per rifiutare il tuo consenso alle attività di trattamento descritte di seguito o, dove applicabile, fare opt-out, disattiva i singoli comandi o utilizza il pulsante “Rifiuta tutto” e conferma di voler salvare le scelte effettuate.",
        "#rifiutaBtnModal > strong": "Rifiuta",
        "#accettaBtnModal > strong": "Accetta",
        "#cookieModal > div > h3": "Le tue preferenze relative al consenso per le tecnologie di tracciamento",
        "#cookieModal > div > p:nth-child(8)": "Le opzioni disponibili in questa sezione ti permettono di personalizzare le preferenze relative al consenso per qualsiasi tecnologia di tracciamento utilizzata per le finalità descritte di seguito. Per ottenere ulteriori informazioni in merito all'utilità e al funzionamento di tali strumenti di tracciamento, fai riferimento alla <a href='#' id='openPolicyFromCookieSettings'>cookie policy</a>. Tieni presente che il rifiuto del consenso per una finalità particolare può rendere le relative funzioni non disponibili.",
        "#cookieModal > div > div.necessari > strong": "Necessari",
        "#cookieModal > div > div.esperienza > strong": "Esperienza",
        "#cookieModal > div > p:nth-child(11)": "Questi strumenti di tracciamento sono strettamente necessari per garantire il funzionamento e la fornitura del servizio che ci hai richiesto e, pertanto, non richiedono il tuo consenso.",
        "#savePreferences": "Salva e continua"
    },
    "eng": {
        "#cookieModal > div > div.topCookieModal > button.pPolicyButton": "View full Privacy Policy",
        "#cookieModal > div > h2": "Your privacy preferences",
        "#cookieModal > div > p:nth-child(3)": "This panel allows you to express some preferences regarding the processing of your personal information.",
        "#cookieModal > div > p:nth-child(4)": "You can review and modify your choices at any time by accessing this panel through the appropriate link.",
        "#cookieModal > div > p:nth-child(5)": "To refuse your consent to the processing activities described below or, where applicable, to opt-out, disable the individual controls or use the “Refuse all” button and confirm that you want to save the choices made.",
        "#rifiutaBtnModal > strong": "Refuse",
        "#accettaBtnModal > strong": "Accept",
        "#cookieModal > div > h3": "Your consent preferences for tracking technologies",
        "#cookieModal > div > p:nth-child(8)": "The options available in this section allow you to customize your consent preferences for any tracking technology used for the purposes described below. For further information on the utility and functioning of these tracking tools, refer to the <a href='#' id='openPolicyFromCookieSettings'>cookie policy</a>. Please note that refusing consent for a particular purpose may make the related functions unavailable.",
        "#cookieModal > div > div.necessari > strong": "Necessary",
        "#cookieModal > div > div.esperienza > strong": "Experience",
        "#cookieModal > div > p:nth-child(11)": "These tracking tools are strictly necessary to ensure the functioning and provision of the service you requested and, therefore, do not require your consent.",
        "#savePreferences": "Save and continue"
    } 
}
const privacyPolicyTranslations = {
    "ita": {        
        "#privacyPolicyModal > div > div:nth-child(2) > div.modal_header > h1 > div": "Privacy Policy di",
        "#privacyPolicyModal > div > div:nth-child(2) > div.modal_header > p": "Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.",
        "#privacyPolicyModal > div > div:nth-child(2) > div:nth-child(2) > h2": "Titolare del Trattamento dei Dati",
        "#privacyPolicyModal > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(3) > strong": "Indirizzo email del Titolare:",
        "#privacyPolicyModal > div > div:nth-child(3) > h2": "Tipologie di Dati raccolti",
        "#privacyPolicyModal > div > div:nth-child(3) > p:nth-child(2)": "Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono: Dati di utilizzo; Strumenti di Tracciamento; nome; numero di telefono; email.",
        "#privacyPolicyModal > div > div:nth-child(3) > p:nth-child(3)": "Dettagli completi su ciascuna tipologia di Dati Personali raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei Dati stessi. I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l'uso di questa Applicazione. Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono obbligatori. Se l’Utente rifiuta di comunicarli, potrebbe essere impossibile per questa Applicazione fornire il Servizio. Nei casi in cui questa Applicazione indichi alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività. Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori sono incoraggiati a contattare il Titolare. L’eventuale utilizzo di Cookie - o di altri strumenti di tracciamento - da parte di questa Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione ha la finalità di fornire il Servizio richiesto dall'Utente, oltre alle ulteriori finalità descritte nel presente documento e nella Cookie Policy.",
        "#privacyPolicyModal > div > div:nth-child(3) > p:nth-child(4)": "L'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione.",
        "#privacyPolicyModal > div > div:nth-child(4) > h2": "Modalità e luogo del trattamento dei Dati raccolti",
        "#privacyPolicyModal > div > div:nth-child(4) > h3:nth-child(2)": "Modalità di trattamento",
        "#privacyPolicyModal > div > div:nth-child(4) > p:nth-child(3)": "Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell’organizzazione di questa Applicazione (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare. L’elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.",
        "#privacyPolicyModal > div > div:nth-child(4) > h3:nth-child(4)": "Luogo",
        "#privacyPolicyModal > div > div:nth-child(4) > p:nth-child(5)": "I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare. I Dati Personali dell’Utente potrebbero essere trasferiti in un paese diverso da quello in cui l’Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento l’Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.",
        "#privacyPolicyModal > div > div:nth-child(4) > h3:nth-child(6)": "Periodo di conservazione",
        "#privacyPolicyModal > div > p:nth-child(14)": "Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.",
        "#privacyPolicyModal > div > div:nth-child(5)": "<h2>Finalità del Trattamento dei Dati raccolti</h2><p>I Dati dell’Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità: Visualizzazione di contenuti da piattaforme esterne e Contattare l'Utente.</p><p>Per ottenere informazioni dettagliate sulle finalità del trattamento e sui Dati Personali trattati per ciascuna finalità, l’Utente può fare riferimento alla sezione “Dettagli sul trattamento dei Dati Personali”.</p>",
        "#privacyPolicyModal > div > div:nth-child(6)": "<h2>Dettagli sul trattamento dei Dati Personali</h2><p>I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:</p><ul><li><div><h3> Contattare l'Utente </h3><div><h4>Modulo di contatto (questa Applicazione) </h4><p>L’Utente, compilando con i propri Dati il modulo di contatto, acconsente al loro utilizzo per rispondere alle richieste di informazioni, di preventivo, o di qualunque altra natura indicata dall’intestazione del modulo.</p><p>Dati Personali trattati: email; nome; numero di telefono.</p></div></div></li><li><h3> Visualizzazione di contenuti da piattaforme esterne </h3><div><p>Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi. Tali servizi sono spesso definiti widget, ovvero piccoli elementi inseriti in un sito web o in un'applicazione. Forniscono informazioni specifiche o svolgono una funzione particolare e spesso consentono l'interazione con l'utente.<br>Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.</p><h4>Google Fonts </h4><p>Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google LLC oppure da Google Ireland Limited, a seconda di come il Titolare gestisce il trattamento dei Dati, che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.</p><p>Dati Personali trattati: Dati di utilizzo; Strumenti di Tracciamento.</p><p>Luogo del trattamento:  Stati Uniti –  <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>;  Irlanda –  <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>.</p></div></li></ul>",
        "#privacyPolicyModal > div > div:nth-child(7) > h2": "Cookie Policy",
        "#privacyPolicyModal > div > div:nth-child(7) > p:nth-child(2)": "Questa Applicazione fa utilizzo di Strumenti di Tracciamento. Per saperne di più, gli Utenti possono consultare la ",
        "#privacyPolicyModal > div > h2": "Ulteriori informazioni per gli utenti",
        "#privacyPolicyModal > div > h3:nth-child(9)": "Base giuridica del trattamento",
        "#privacyPolicyModal > div > p:nth-child(10)": "Il Titolare tratta Dati Personali relativi all’Utente in caso sussista una delle seguenti condizioni:",
        "#privacyPolicyModal > div > ul:nth-child(11)": "<li>l’Utente ha prestato il consenso per una o più finalità specifiche.</li><li>il trattamento è necessario all'esecuzione di un contratto con l’Utente e/o all'esecuzione di misure precontrattuali;</li><li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;</li><li>il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o per l'esercizio di pubblici poteri di cui è investito il Titolare;</li><li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.</li>",
        "#privacyPolicyModal > div > p:nth-child(12)": "È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un contratto o necessario per concludere un contratto.",
        "#privacyPolicyModal > div > h3:nth-child(13)": "Ulteriori informazioni sul tempo di conservazione",
        "#privacyPolicyModal > div > p:nth-child(15)": "Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti.",
        "#privacyPolicyModal > div > p:nth-child(15)": "Pertanto:",
        "#privacyPolicyModal > div > ul:nth-child(16)": "<li>I Dati Personali raccolti per scopi collegati all’esecuzione di un contratto tra il Titolare e l’Utente saranno trattenuti sino a quando sia completata l’esecuzione di tale contratto.</li><li>I Dati Personali raccolti per finalità riconducibili all’interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse. L’Utente può ottenere ulteriori informazioni in merito all’interesse legittimo perseguito dal Titolare nelle relative sezioni di questo documento o contattando il Titolare.</li>",
        "#privacyPolicyModal > div > p:nth-child(17)": "Quando il trattamento è basato sul consenso dell’Utente, il Titolare può conservare i Dati Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo per adempiere ad un obbligo di legge o per ordine di un’autorità.<br>Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.",
        "#privacyPolicyModal > div > h3:nth-child(18)": "Diritti dell’Utente sulla base del Regolamento Generale sulla Protezione dei Dati (GDPR)",
        "#privacyPolicyModal > div > p:nth-child(19)": "Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.",
        "#privacyPolicyModal > div > p:nth-child(20)": "In particolare, nei limiti previsti dalla legge, l’Utente ha il diritto di:",
        "#privacyPolicyModal > div > ul:nth-child(21)": "<li><strong>revocare il consenso in ogni momento.</strong> L’Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso. </li><li><strong>opporsi al trattamento dei propri Dati.</strong> L’Utente può opporsi al trattamento dei propri Dati quando esso avviene in virtù di una base giuridica diversa dal consenso.</li><li><strong>accedere ai propri Dati.</strong> L’Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.</li><li><strong>verificare e chiedere la rettificazione.</strong> L’Utente può verificare la correttezza dei propri Dati e richiederne l’aggiornamento o la correzione. </li><li><strong>ottenere la limitazione del trattamento.</strong> L’Utente può richiedere la limitazione del trattamento dei propri Dati. In tal caso il Titolare non tratterà i Dati per alcun altro scopo se non la loro conservazione.</li><li><strong>ottenere la cancellazione o rimozione dei propri Dati Personali.</strong> L’Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.</li><li><strong>ricevere i propri Dati o farli trasferire ad altro titolare.</strong> L’Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare.</li><li><strong>proporre reclamo.</strong> L’Utente può proporre un reclamo all’autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.</li>",
        "#privacyPolicyModal > div > p:nth-child(22)": "Gli Utenti hanno diritto di ottenere informazioni in merito alla base giuridica per il trasferimento di Dati all'estero incluso verso qualsiasi organizzazione internazionale regolata dal diritto internazionale o costituita da due o più paesi, come ad esempio l’ONU, nonché in merito alle misure di sicurezza adottate dal Titolare per proteggere i loro Dati.",
        "#privacyPolicyModal > div > h4:nth-child(23)": "Dettagli sul diritto di opposizione",
        "#privacyPolicyModal > div > p:nth-child(24) > strong": "Quando i Dati Personali sono trattati nell’interesse pubblico, nell’esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.",
        "#privacyPolicyModal > div > p:nth-child(25) > strong": "Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento in qualsiasi momento, gratuitamente e senza fornire alcuna motivazione. Qualora gli Utenti si oppongano al trattamento per finalità di marketing diretto, i Dati Personali non sono più oggetto di trattamento per tali finalità. Per scoprire se il Titolare tratti Dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni di questo documento.",
        "#privacyPolicyModal > div > h4:nth-child(26)": "Come esercitare i diritti",
        "#privacyPolicyModal > div > p:nth-child(27)": "Per esercitare i propri diritti, gli Utenti possono indirizzare una richiesta ai recapiti del Titolare indicati in questo documento. La richiesta è gratuita e il Titolare risponderà nel più breve tempo possibile, in ogni caso entro un mese, fornendo all’Utente tutte le informazioni previste dalla legge. Eventuali rettifiche, cancellazioni o limitazioni del trattamento saranno comunicate dal Titolare a ciascuno dei destinatari, se esistenti, a cui sono stati trasmessi i Dati Personali, salvo che ciò si riveli impossibile o implichi uno sforzo sproporzionato. Il Titolare comunica all'Utente tali destinatari qualora egli lo richieda.",
        "#privacyPolicyModal > div > div:nth-child(28)": "<h2>Ulteriori informazioni sul trattamento</h2><h3> Difesa in giudizio </h3><p>I Dati Personali dell’Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo di questa Applicazione o dei Servizi connessi da parte dell’Utente.<br>L’Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.</p><h3> Informative specifiche </h3><p>Su richiesta dell’Utente, in aggiunta alle informazioni contenute in questa privacy policy, questa Applicazione potrebbe fornire all'Utente delle informative aggiuntive e contestuali riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.</p><h3> Log di sistema e manutenzione </h3><p>Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l’indirizzo IP Utente.</p><h3> Informazioni non contenute in questa policy </h3><p>Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.</p><h3> Modifiche a questa privacy policy </h3><p>Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.<br><br>Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell’Utente, se necessario.</p>",
        "#privacyPolicyModal > div > div:nth-child(29) > div > h3": "Definizioni e riferimenti legali",
        "#ppElenco > h4:nth-child(1)": "Dati Personali (o Dati)",
        "#ppElenco > p:nth-child(2)": "Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.",
        "#ppElenco > h4:nth-child(3)": "Dati di Utilizzo",
        "#ppElenco > p:nth-child(4)": "Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall’Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato nell’inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all’ambiente informatico dell’Utente.",
        "#ppElenco > h4:nth-child(5)": "Utente",
        "#ppElenco > p:nth-child(6)": "L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l'Interessato.",
        "#ppElenco > h4:nth-child(7)": "Interessato",
        "#ppElenco > p:nth-child(8)": "La persona fisica cui si riferiscono i Dati Personali.",
        "#ppElenco > h4:nth-child(9)": "Responsabile del Trattamento (o Responsabile)",
        "#ppElenco > p:nth-child(10)": "La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.",
        "#ppElenco > h4:nth-child(11)": "Titolare del Trattamento (o Titolare)",
        "#ppElenco > p:nth-child(12)": "La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.",
        "#ppElenco > h4:nth-child(13)": "Questa Applicazione",
        "#ppElenco > p:nth-child(14)": "Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.",
        "#ppElenco > h4:nth-child(15)": "Servizio",
        "#ppElenco > p:nth-child(16)": "Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.",
        "#ppElenco > h4:nth-child(17)": "Unione Europea (o UE)",
        "#ppElenco > p:nth-child(18)": "Salvo ove diversamente specificato, ogni riferimento all’Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell’Unione Europea e dello Spazio Economico Europeo.",
        "#ppElenco > p:nth-child(20)": "I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.",
        "#ppElenco > h4:nth-child(21)": "Strumento di Tracciamento",
        "#ppElenco > p:nth-child(22)": "Per Strumento di Tracciamento s’intende qualsiasi tecnologia - es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting - che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell’Utente.",
        "#ppElenco > h4:nth-child(24)": "Riferimenti legali",
        "#ppElenco > p:nth-child(25)": "Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questa Applicazione.",
        "#privacyPolicyModal > div > div:nth-child(30) > p": "Ultima modifica: 26 febbraio 2024"
    },
    "eng": {
        "#privacyPolicyModal > div > div:nth-child(2) > div.modal_header > h1 > div": "Privacy Policy",
    "#privacyPolicyModal > div > div:nth-child(2) > div.modal_header > p": "This Application collects some Personal Data from its Users.",
    "#privacyPolicyModal > div > div:nth-child(2) > div:nth-child(2) > h2": "Data Controller",
    "#privacyPolicyModal > div > div:nth-child(2) > div:nth-child(2) > p:nth-child(3) > strong": "Email address of the Data Controller:",
    "#privacyPolicyModal > div > div:nth-child(3) > h2": "Types of Data Collected",
    "#privacyPolicyModal > div > div:nth-child(3) > p:nth-child(2)": "Among the Personal Data collected by this Application, either independently or through third parties, there are: Usage Data; Tracking Tools; name; phone number; email.",
    "#privacyPolicyModal > div > div:nth-child(3) > p:nth-child(3)": "Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or through specific informative texts displayed before the collection of Data. Personal Data can be freely provided by the User or, in the case of Usage Data, collected automatically during the use of this Application. Unless otherwise specified, all Data requested by this Application is mandatory. If the User refuses to communicate them, it may be impossible for this Application to provide the Service. In cases where this Application indicates certain Data as optional, Users are free to refrain from communicating such Data, without affecting the availability or functionality of the Service. Users who have doubts about which Data are mandatory are encouraged to contact the Data Controller. The eventual use of Cookies - or other tracking tools - by this Application or by the owners of third-party services used by this Application has the purpose of providing the Service requested by the User, in addition to the further purposes described in this document and in the Cookie Policy.",
    "#privacyPolicyModal > div > div:nth-child(3) > p:nth-child(4)": "The User is responsible for the Personal Data of third parties obtained, published, or shared through this Application.",
    "#privacyPolicyModal > div > div:nth-child(4) > h2": "Methods and Place of Processing of Collected Data",
    "#privacyPolicyModal > div > div:nth-child(4) > h3:nth-child(2)": "Processing Methods",
    "#privacyPolicyModal > div > div:nth-child(4) > p:nth-child(3)": "The Data Controller adopts appropriate security measures to prevent unauthorized access, disclosure, modification, or destruction of Personal Data. The processing is carried out using computer and/or telematic tools, with organizational methods and logic strictly related to the purposes indicated. In addition to the Data Controller, in some cases, other subjects involved in the organization of this Application (administrative, commercial, marketing, legal personnel, system administrators) or external subjects (such as third-party technical service providers, postal couriers, hosting providers, IT companies, communication agencies) may have access to the Data, also appointed, if necessary, Data Processors by the Data Controller. The updated list of Data Processors can always be requested from the Data Controller.",
    "#privacyPolicyModal > div > div:nth-child(4) > h3:nth-child(4)": "Place",
    "#privacyPolicyModal > div > div:nth-child(4) > p:nth-child(5)": "Data are processed at the Data Controller's operational headquarters and in any other place where the parties involved in the processing are located. For further information, contact the Data Controller. The User's Personal Data may be transferred to a country other than that in which the User is located. To obtain further information on the place of processing, the User can refer to the section relating to details on the processing of Personal Data.",
    "#privacyPolicyModal > div > div:nth-child(4) > h3:nth-child(6)": "Retention Period",
    "#privacyPolicyModal > div > p:nth-child(14)": "Unless otherwise indicated in this document, Personal Data are processed and stored for the time required by the purpose for which they were collected and may be stored for a longer period due to any legal obligations or based on the User's consent.",
    "#privacyPolicyModal > div > div:nth-child(5)": "<h2>Purposes of Data Processing</h2><p>User Data is collected to allow the Data Controller to provide the Service, comply with legal obligations, respond to requests or executive actions, protect its rights and interests (or those of Users or third parties), identify any unlawful or fraudulent activities, as well as for the following purposes: Displaying content from external platforms and Contacting the User.</p><p>For detailed information on the purposes of the processing and the Personal Data processed for each purpose, the User can refer to the section “Details on the processing of Personal Data”.</p>",
    "#privacyPolicyModal > div > div:nth-child(6)": "<h2>Details on the Processing of Personal Data</h2><p>Personal Data are collected for the following purposes and using the following services:</p><ul><li><div><h3>Contacting the User</h3><div><h4>Contact form (this Application)</h4><p>The User, by filling in the contact form with their Data, consents to their use to respond to information requests, quotes, or any other nature indicated in the form header.</p><p>Personal Data processed: email; name; phone number.</p></div></div></li><li><h3>Displaying content from external platforms</h3><div><p>This type of service allows viewing content hosted on external platforms directly from the pages of this Application and interacting with them. These services are often defined as widgets, i.e., small elements inserted in a website or application. They provide specific information or perform a particular function and often allow interaction with the user.<br>This type of service could nevertheless collect data on web traffic related to the pages where the service is installed, even when users do not use it.</p><h4>Google Fonts</h4><p>Google Fonts is a font style display service managed by Google LLC or Google Ireland Limited, depending on how the Data Controller manages the processing of Data, which allows this Application to integrate such content within its pages.</p><p>Personal Data processed: Usage Data; Tracking Tools.</p><p>Place of processing: United States – <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>; Ireland – <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>.</p></div></li></ul>",
    "#privacyPolicyModal > div > div:nth-child(7) > h2": "Cookie Policy",
    "#privacyPolicyModal > div > div:nth-child(7) > p:nth-child(2)": "This Application uses Tracking Tools. To learn more, Users can consult the ",
    "#privacyPolicyModal > div > h2": "Further Information for Users",
    "#privacyPolicyModal > div > h3:nth-child(9)": "Legal Basis for Processing",
    "#privacyPolicyModal > div > p:nth-child(10)": "The Data Controller processes Personal Data related to the User if one of the following conditions applies:",
    "#privacyPolicyModal > div > ul:nth-child(11)": "<li>The User has given consent for one or more specific purposes.</li><li>the processing is necessary for the execution of a contract with the User and/or for the execution of pre-contractual measures;</li><li>the processing is necessary to fulfill a legal obligation to which the Data Controller is subject;</li><li>the processing is necessary for the performance of a task of public interest or for the exercise of public powers vested in the Data Controller;</li><li>the processing is necessary for the pursuit of the legitimate interest of the Data Controller or third parties.</li>",
    "#privacyPolicyModal > div > p:nth-child(12)": "It is always possible to request the Data Controller to clarify the concrete legal basis of each processing and, in particular, to specify whether the processing is based on the law, provided for by a contract, or necessary to conclude a contract.",
    "#privacyPolicyModal > div > h3:nth-child(13)": "Further Information on Retention Time",
    "#privacyPolicyModal > div > p:nth-child(15)": "Unless otherwise indicated in this document, Personal Data are processed and stored for the time required by the purpose for which they were collected and may be stored for a longer period due to any legal obligations or based on the User's consent.",
    "#privacyPolicyModal > div > p:nth-child(15)": "Therefore:",
    "#privacyPolicyModal > div > ul:nth-child(16)": "<li>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.</li><li>Personal Data collected for purposes related to the legitimate interests of the Owner shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.</li>",
    "#privacyPolicyModal > div > p:nth-child(17)": "When processing is based on consent, the Owner may retain Personal Data longer until such consent is revoked. Additionally, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority.<br>At the end of the retention period, Personal Data shall be deleted. Therefore, upon expiration of this term, the right to access, delete, rectify, and the right to data portability cannot be exercised anymore.",
    "#privacyPolicyModal > div > h3:nth-child(18)": "User rights under the General Data Protection Regulation (GDPR)",
    "#privacyPolicyModal > div > p:nth-child(19)": "Users may exercise certain rights regarding their Data processed by the Owner.",
    "#privacyPolicyModal > div > p:nth-child(20)": "In particular, within the limits established by law, Users have the right to:",
    "#privacyPolicyModal > div > ul:nth-child(21)": "<li><strong>withdraw consent at any time.</strong> Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.</li><li><strong>object to processing of their Data.</strong> Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent.</li><li><strong>access their Data.</strong> Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing, and obtain a copy of the Data undergoing processing.</li><li><strong>verify and seek rectification.</strong> Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.</li><li><strong>restrict the processing of their Data.</strong> Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.</li><li><strong>obtain the erasure or removal of their Personal Data.</strong> Users have the right to obtain the erasure of their Data from the Owner.</li><li><strong>receive their Data and have it transferred to another controller.</strong> Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance.</li><li><strong>lodge a complaint.</strong> Users have the right to bring a claim before their competent data protection authority or in court.</li>",
    "#privacyPolicyModal > div > p:nth-child(22)": "Users have the right to obtain information regarding the legal basis for data transfers to countries outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, as well as regarding the security measures taken by the Owner to safeguard their Data.",
    "#privacyPolicyModal > div > h4:nth-child(23)": "Details about the right to object",
    "#privacyPolicyModal > div > p:nth-child(24) > strong": "Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.",
    "#privacyPolicyModal > div > p:nth-child(25) > strong": "Users are reminded that they may object to the processing of their Personal Data for direct marketing purposes at any time without providing any justification. To learn whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.",
    "#privacyPolicyModal > div > h4:nth-child(26)": "How to exercise rights",
    "#privacyPolicyModal > div > p:nth-child(27)": "To exercise their rights, Users may address a request to the Owner's contact details provided in this document. Requests are free of charge and will be addressed by the Owner as early as possible, within one month, unless an extension is justified. In certain circumstances, Users may request the limitation of the processing of their Data, in which case the Owner will not process their Data for any purpose other than storage.",
    "#privacyPolicyModal > div > div:nth-child(28)": "<h2>Additional information about Data collection and processing</h2><h3> Legal defense </h3><p>The User's Personal Data may be used for legal purposes by the Owner in court or in the stages leading to possible legal action arising from improper use of this Application or related Services.<br>The User declares to be aware that the Owner may be required to reveal Personal Data upon request of public authorities.</p><h3> Specific information </h3><p>At the User's request, in addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services, or the collection and processing of Personal Data.</p><h3> System logs and maintenance </h3><p>For operation and maintenance purposes, this Application and any third-party Services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose.</p><h3> Information not contained in this policy </h3><p>More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.</p><h3> Changes to this privacy policy </h3><p>The Owner reserves the right to make changes to this privacy policy at any time by notifying Users on this page and possibly within this Application and/or – as far as technically and legally feasible – sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.<br>If changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.</p>",
    "#privacyPolicyModal > div > div:nth-child(29) > div > h3": "Definitions and legal references",
    "#ppElenco > h4:nth-child(1)": "Personal Data (or Data)",
    "#ppElenco > p:nth-child(2)": "Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.",
    "#ppElenco > h4:nth-child(3)": "Usage Data",
    "#ppElenco > p:nth-child(4)": "Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.",
    "#ppElenco > h4:nth-child(5)": "User",
    "#ppElenco > p:nth-child(6)": "The individual using this Application, which must coincide with or be authorized by the Data Subject, to whom the Personal Data refers.",
    "#ppElenco > h4:nth-child(7)": "Data Subject",
    "#ppElenco > p:nth-child(8)": "The natural person to whom the Personal Data refers.",
    "#ppElenco > h4:nth-child(9)": "Data Controller (or Owner)",
    "#ppElenco > p:nth-child(10)": "The natural person, legal entity, public administration or any other body that processes Personal Data on behalf of the Data Controller, as described in this privacy policy.",
    "#ppElenco > h4:nth-child(11)": "Data Controller (or Owner)",
    "#ppElenco > p:nth-child(12)": "The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.",
    "#ppElenco > h4:nth-child(13)": "This Application",
    "#ppElenco > p:nth-child(14)": "The hardware or software tool through which the Personal Data of Users are collected and processed",
    "#ppElenco > h4:nth-child(15)": "Service",
    "#ppElenco > p:nth-child(16)": "The service provided by this Application as described in the relative terms (if available) and on this site/application.",
    "#ppElenco > h4:nth-child(17)": "European Union (or EU)",
    "#ppElenco > p:nth-child(18)": "Unless otherwise specified, any reference to the European Union in this document is extended to all current member states of the European Union and the European Economic Area.",
    "#ppElenco > p:nth-child(20)": "Cookies are Tracking Tools consisting of small pieces of data stored within the User's browser.",
    "#ppElenco > h4:nth-child(21)": "Tracking Tool",
    "#ppElenco > p:nth-child(22)": "By Tracking Tool, we mean any technology - such as Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables tracking Users, for example by collecting or storing information on the User’s device.",
    "#ppElenco > h4:nth-child(24)": "Legal references",
    "#ppElenco > p:nth-child(25)": "Unless otherwise specified, this privacy statement solely concerns this Application.",
    "#privacyPolicyModal > div > div:nth-child(30) > p": "Last updated: 26 February 2024"
    } 
}
const cookiePolicyTranslations = {
    "ita": {        
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h2 > div": "Cookie Policy di",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)": "Questo documento contiene informazioni in merito alle tecnologie che consentono a questa Applicazione di raggiungere gli scopi descritti di seguito. Tali tecnologie permettono al Titolare di raccogliere e salvare informazioni (per esempio tramite l’utilizzo di Cookie) o di utilizzare risorse (per esempio eseguendo uno script) sul dispositivo dell’Utente quando quest’ultimo interagisce con questa Applicazione.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)": "Per semplicità, in questo documento tali tecnologie sono sinteticamente definite “Strumenti di Tracciamento”, salvo vi sia ragione di differenziare. Per esempio, sebbene i Cookie possano essere usati in browser sia web sia mobili, sarebbe fuori luogo parlare di Cookie nel contesto di applicazioni per dispositivi mobili, dal momento che si tratta di Strumenti di Tracciamento che richiedono la presenza di un browser. Per questo motivo, all’interno di questo documento il termine Cookie è utilizzato solo per indicare in modo specifico quel particolare tipo di Strumento di Tracciamento.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(4)": "Alcune delle finalità per le quali vengono impiegati Strumenti di Tracciamento potrebbero, inoltre richiedere il consenso dell’Utente. Se viene prestato il consenso, esso può essere revocato liberamente in qualsiasi momento seguendo le istruzioni contenute in questo documento.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(5)": "Questa Applicazione utilizza Strumenti di Tracciamento gestiti direttamente dal Titolare (comunemente detti Strumenti di Tracciamento “di prima parte”) e Strumenti di Tracciamento che abilitano servizi forniti da terzi (comunemente detti Strumenti di Tracciamento “di terza parte”). Se non diversamente specificato all’interno di questo documento, tali terzi hanno accesso ai rispettivi Strumenti di Tracciamento. Durata e scadenza dei Cookie e degli altri Strumenti di Tracciamento simili possono variare a seconda di quanto impostato dal Titolare o da ciascun fornitore terzo. Alcuni di essi scadono al termine della sessione di navigazione dell’Utente. In aggiunta a quanto specificato nella descrizione di ciascuna delle categorie di seguito riportate, gli Utenti possono ottenere informazioni più dettagliate ed aggiornate sulla durata, così come qualsiasi altra informazione rilevante - quale la presenza di altri Strumenti di Tracciamento - nelle privacy policy dei rispettivi fornitori terzi (tramite i link messi a disposizione) o contattando il Titolare.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h3:nth-child(6)": "Attività strettamente necessarie a garantire il funzionamento di questa Applicazione e la fornitura del Servizio",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(7)": "Questa Applicazione utilizza Cookie comunemente detti “tecnici” o altri Strumenti di Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la fornitura del Servizio.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h3:nth-child(8)": "Altre attività che prevedono l’utilizzo di Strumenti di Tracciamento",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(10)": "Esperienza",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(10)": "Questa Applicazione utilizza Strumenti di Tracciamento per migliorare la qualità della user experience e consentire le interazioni con contenuti, network e piattaforme esterni.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(11)": "<li><div><h3> Visualizzazione di contenuti da piattaforme esterne </h3><div><p>Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi. Tali servizi sono spesso definiti widget, ovvero piccoli elementi inseriti in un sito web o in un'applicazione. Forniscono informazioni specifiche o svolgono una funzione particolare e spesso consentono l'interazione con l'utente.<br>Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.</p><h4> Google Fonts  </h4><div><p>Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google LLC oppure da Google Ireland Limited, a seconda di come il Titolare gestisce il trattamento dei Dati, che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.</p></div><p>Dati Personali trattati: Dati di utilizzo e Strumenti di Tracciamento.</p><p>Luogo del trattamento:  Stati Uniti –  <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>;  Irlanda –  <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>. </p></div></div></li>",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h3:nth-child(12)": "Come gestire le preferenze e prestare o revocare il consenso",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(13)": "Esistono vari modi per gestire le preferenze relative agli Strumenti di Tracciamento e per prestare o revocare il consenso, ove necessario:",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(14)": "Gli Utenti possono gestire le preferenze relative agli Strumenti di Tracciamento direttamente tramite le impostazioni dei propri dispositivi - per esempio, possono impedire l’uso o l’archiviazione di Strumenti di Tracciamento.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(15)": "In aggiunta, ogni qualvolta l’utilizzo di Strumenti di Tracciamento dipenda da consenso, l’Utente può prestare o revocare tale consenso impostando le proprie preferenze all’interno dell’informativa sui cookie o aggiornando tali preferenze tramite il widget privacy per le preferenze relative al consenso, se presente.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(16)": "Grazie ad apposite funzioni del browser o del dispositivo è anche possibile rimuovere Strumenti di Tracciamento precedentemente salvati, inclusi quelli utilizzati per il salvataggio delle preferenze relative al consenso inizialmente espresse dall'Utente.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(17)": "Altri Strumenti di Tracciamento presenti nella memoria locale del browser possono essere rimossi cancellando la cronologia di navigazione.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(18)": "Per quanto riguarda Strumenti di Tracciamento di terza parte, gli Utenti possono gestire le proprie preferenze visitando il relativo link di opt out (qualora disponibile), utilizzando gli strumenti descritti nella privacy policy della terza parte o contattando quest'ultima direttamente.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h4:nth-child(19)": "Individuare le impostazioni relative agli Strumenti di Tracciamento",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(20)": "Gli Utenti possono, per esempio, trovare informazioni su come gestire i Cookie in alcuni dei browser più diffusi ai seguenti indirizzi:",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(22)": "Gli Utenti possono inoltre gestire alcuni Strumenti di Tracciamento per applicazioni mobili disattivandoli tramite le apposite impostazioni del dispositivo, quali le impostazioni di pubblicità per dispositivi mobili o le impostazioni relative al tracciamento in generale (gli Utenti possono consultare le impostazioni del dispositivo per individuare quella pertinente).",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h4:nth-child(23)": "Conseguenze legate al rifiuto dell'utilizzo di Strumenti di Tracciamento",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(24)": "Gli Utenti sono liberi di decidere se permettere o meno l'utilizzo di Strumenti di Tracciamento. Tuttavia, si noti che gli Strumenti di Tracciamento consentono a questa Applicazione di fornire agli Utenti un'esperienza migliore e funzionalità avanzate (in linea con le finalità delineate nel presente documento). Pertanto, qualora l'Utente decida di bloccare l'utilizzo di Strumenti di Tracciamento, il Titolare potrebbe non essere in grado di fornire le relative funzionalità.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h3:nth-child(25)": "Titolare del Trattamento dei Dati",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(27) > strong": "Indirizzo email del Titolare:",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(28)": "Dal momento che l’uso di Strumenti di Tracciamento di terza parte su questa Applicazione non può essere completamente controllato dal Titolare, ogni riferimento specifico a Strumenti di Tracciamento di terza parte è da considerarsi indicativo. Per ottenere informazioni complete, gli Utenti sono gentilmente invitati a consultare la privacy policy dei rispettivi servizi terzi elencati in questo documento.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(29)": "Data l'oggettiva complessità di identificazione delle tecnologie di tracciamento, gli Utenti sono invitati a contattare il Titolare qualora volessero ricevere ulteriori informazioni in merito all'utilizzo di tali tecnologie su questa Applicazione.",
        
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > h3": "Definizioni e riferimenti legali",
        "#cElenco > h4:nth-child(1)": "Dati Personali (o Dati)",
        "#cElenco > p:nth-child(2)": "Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.",
        "#cElenco > h4:nth-child(3)": "Dati di Utilizzo",
        "#cElenco > p:nth-child(4)": "Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall’Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato nell’inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all’ambiente informatico dell’Utente.",
        "#cElenco > h4:nth-child(5)": "Utente",
        "#cElenco > p:nth-child(6)": "L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l'Interessato.",
        "#cElenco > h4:nth-child(7)": "Interessato",
        "#cElenco > p:nth-child(8)": "La persona fisica cui si riferiscono i Dati Personali.",
        "#cElenco > h4:nth-child(9)": "Responsabile del Trattamento (o Responsabile)",
        "#cElenco > p:nth-child(10)": "La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.",
        "#cElenco > h4:nth-child(11)": "Titolare del Trattamento (o Titolare)",
        "#cElenco > p:nth-child(12)": "La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.",
        "#cElenco > h4:nth-child(13)": "Questa Applicazione",
        "#cElenco > p:nth-child(14)": "Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.",
        "#cElenco > h4:nth-child(15)": "Servizio",
        "#cElenco > p:nth-child(16)": "Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.",
        "#cElenco > h4:nth-child(17)": "Unione Europea (o UE)",
        "#cElenco > p:nth-child(18)": "Salvo ove diversamente specificato, ogni riferimento all’Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell’Unione Europea e dello Spazio Economico Europeo.",
        "#cElenco > p:nth-child(20)": "I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.",
        "#cElenco > h4:nth-child(21)": "Strumento di Tracciamento",
        "#cElenco > p:nth-child(22)": "Per Strumento di Tracciamento s’intende qualsiasi tecnologia - es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting - che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell’Utente.",
        "#cElenco > h4:nth-child(24)": "Riferimenti legali",
        "#cElenco > p:nth-child(25)": "Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questa Applicazione.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p": "Ultima modifica: 26 febbraio 2024"
    },
    "eng": {
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h2 > div": "Cookie Policy of",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)": "This document contains information about the technologies that allow this Application to achieve the purposes described below. These technologies enable the Owner to collect and store information (for example, through the use of Cookies) or to use resources (for example, by running a script) on the User's device when the User interacts with this Application.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)": "For simplicity, these technologies are collectively referred to as 'Tracking Tools' within this document, unless there is reason to differentiate. For example, although Cookies can be used in both web and mobile browsers, it would be inappropriate to refer to Cookies in the context of mobile applications, as they are Tracking Tools that require a browser. For this reason, the term Cookies is used specifically within this document to refer to that particular type of Tracking Tool.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(4)": "Some of the purposes for which Tracking Tools are used may also require the User's consent. If consent is given, it can be freely revoked at any time following the instructions provided in this document.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(5)": "This Application uses Tracking Tools managed directly by the Owner (commonly referred to as 'first-party' Tracking Tools) and Tracking Tools that enable services provided by third parties (commonly referred to as 'third-party' Tracking Tools). Unless otherwise specified within this document, these third parties have access to their respective Tracking Tools. The duration and expiration of Cookies and other similar Tracking Tools may vary depending on how they are set by the Owner or by each third-party provider. Some of them expire at the end of the User's browsing session. In addition to what is specified in the description of each of the categories below, Users can find more detailed and up-to-date information about the duration, as well as any other relevant information - such as the presence of other Tracking Tools - in the privacy policies of their respective third-party providers (via the links provided) or by contacting the Owner.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h3:nth-child(6)": "Activities strictly necessary for the operation of this Application and the provision of the Service",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(7)": "This Application uses Cookies or other similar 'technical' Tracking Tools to perform activities that are strictly necessary to ensure the operation or provision of the Service.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h3:nth-child(8)": "Other activities involving the use of Tracking Tools",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(10)": "Experience",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(10)": "This Application uses Tracking Tools to enhance the quality of the user experience and enable interactions with external networks and platforms.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > ul:nth-child(11)": "<li><div><h3> Displaying content from external platforms </h3><div><p>This type of service allows you to view content hosted on external platforms directly from the pages of this Application and interact with them. These services may still collect web traffic data for the pages where the service is installed, even when users do not use it.</p><h4> Google Fonts  </h4><div><p>Google Fonts is a font style visualization service provided by Google LLC or Google Ireland Limited, depending on how the Owner manages the Data processing, that allows this Application to integrate such content within its pages.</p></div><p>Personal Data processed: Usage Data and Tracking Tools.</p><p>Place of processing: United States –  <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>;  Ireland –  <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>Privacy Policy</a>. </p></div></div></li>",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h3:nth-child(12)": "How to manage preferences and provide or withdraw consent",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(13)": "There are various ways to manage preferences related to Tracking Tools and to provide or withdraw consent, where necessary:",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(14)": "Users can manage preferences related to Tracking Tools directly through the settings of their devices - for example, they can prevent the use or storage of Tracking Tools.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(15)": "In addition, whenever the use of Tracking Tools is based on consent, Users can provide or withdraw such consent by setting their preferences within the cookie policy or by updating those preferences through the consent preference widget, if available.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(16)": "It is also possible to remove previously saved Tracking Tools, including those used to store preferences initially expressed by the User, through specific functions of the browser or device.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(17)": "Other Tracking Tools present in the browser's local memory can be removed by deleting the browsing history.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(18)": "As for third-party Tracking Tools, Users can manage their preferences by visiting the related opt-out link (if available), using the tools described in the third party's privacy policy, or by contacting the third party directly.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h4:nth-child(19)": "Locate Tracking Tool settings",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(20)": "For example, Users can find information on how to manage Cookies in some of the most popular browsers at the following addresses:",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(22)": "Users can also manage some Tracking Tools for mobile applications by disabling them through the device's settings, such as mobile advertising settings or general tracking settings (Users can check the device's settings to identify the relevant one).",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h4:nth-child(23)": "Consequences of refusing to use Tracking Tools",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(24)": "Users are free to decide whether to allow the use of Tracking Tools or not. However, please note that Tracking Tools allow this Application to provide Users with a better experience and advanced features (in line with the purposes outlined in this document). Therefore, if the User decides to block the use of Tracking Tools, the Owner may not be able to provide the related functionality.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > h3:nth-child(25)": "Data Controller",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(27) > strong": "Owner's email address:",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(28)": "Since the use of third-party Tracking Tools on this Application cannot be fully controlled by the Owner, any specific reference to third-party Tracking Tools is to be considered indicative. For complete information, Users are kindly requested to consult the privacy policy of the respective third-party services listed in this document.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(1) > p:nth-child(29)": "Due to the objective complexity of identifying tracking technologies, Users are encouraged to contact the Owner should they wish to receive further information regarding the use of such technologies on this Application.",

        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > h3": "Definitions and legal references",
        "#cElenco > h4:nth-child(1)": "Personal Data (or Data)",
        "#cElenco > p:nth-child(2)": "Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.",
        "#cElenco > h4:nth-child(3)": "Usage Data",
        "#cElenco > p:nth-child(4)": "Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.",
        "#cElenco > h4:nth-child(5)": "User",
        "#cElenco > p:nth-child(6)": "The individual using this Application, which must coincide with or be authorized by the Data Subject, to whom the Personal Data refers.",
        "#cElenco > h4:nth-child(7)": "Data Subject",
        "#cElenco > p:nth-child(8)": "The natural person to whom the Personal Data refers.",
        "#cElenco > h4:nth-child(9)": "Data Controller (or Owner)",
        "#cElenco > p:nth-child(10)": "The natural person, legal entity, public administration or any other body that processes Personal Data on behalf of the Data Controller, as described in this privacy policy.",
        "#cElenco > h4:nth-child(11)": "Data Controller (or Owner)",
        "#cElenco > p:nth-child(12)": "The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.",
        "#cElenco > h4:nth-child(13)": "This Application",
        "#cElenco > p:nth-child(14)": "The hardware or software tool through which the Personal Data of Users are collected and processed",
        "#cElenco > h4:nth-child(15)": "Service",
        "#cElenco > p:nth-child(16)": "The service provided by this Application as described in the relative terms (if available) and on this site/application.",
        "#cElenco > h4:nth-child(17)": "European Union (or EU)",
        "#cElenco > p:nth-child(18)": "Unless otherwise specified, any reference to the European Union in this document is extended to all current member states of the European Union and the European Economic Area.",
        "#cElenco > p:nth-child(20)": "Cookies are Tracking Tools consisting of small pieces of data stored within the User's browser.",
        "#cElenco > h4:nth-child(21)": "Tracking Tool",
        "#cElenco > p:nth-child(22)": "By Tracking Tool, we mean any technology - such as Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables tracking Users, for example by collecting or storing information on the User’s device.",
        "#cElenco > h4:nth-child(24)": "Legal references",
        "#cElenco > p:nth-child(25)": "Unless otherwise specified, this privacy statement solely concerns this Application.",
        "#cookiePolicyModal > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > p": "Last updated: 26 February 2024"
    } 
}
function updatePageLanguageCookie(language) {   
    const elementsArray = [preferenzeBarraTranslations, cookieBannerTranslations, preferenzeTranslations, privacyPolicyTranslations, cookiePolicyTranslations];
    elementsArray.forEach(object => {
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

