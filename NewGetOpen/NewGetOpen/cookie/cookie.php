<?php 
    $nome = 'GetOpen S.r.l.';
    $sito = 'www.GetOpen.it';
    $indirizzo = 'Via Cesare Vivante 9, CATANIA, 95123, IT';
    $email = 'info@getopen.it';
?>

<div id="cookie-banner" class="cookie-banner" style='display: none'>
    <div>
        <button type="button" class="closeBtn" style="display:none!important;">×</button>
        <div class="scritteContainer">
            <p>Noi e terze parti selezionate raccogliamo informazioni personali come specificato nella 
                <span class='likeAElement white' id='openPPolicyFromBanner'>privacy policy</span> 
                e utilizziamo cookie o tecnologie simili per finalità tecniche e, con il tuo consenso, anche per le finalità di 
                <strong>esperienza</strong> come specificato nella 
                <span class='likeAElement white' id='openCookieFromBanner'>cookie policy</span>.
            </p>
                
            <p>Puoi liberamente prestare, rifiutare o revocare il tuo consenso, in qualsiasi momento, accedendo al pannello delle preferenze.  
                Il rifiuto del consenso può rendere non disponibili le relative funzioni.</p>
            <p></p>
            <p>Usa il pulsante “Accetta” per acconsentire. Usa il pulsante “Rifiuta”  per continuare senza accettare.</p>
        </div>
    </div>
    <div class='buttonContainer'>
        <div><button id='moreBtn'>Scopri di più e personalizza</button></div>
        <div class='rifiutaAccettaContainer'><button id='rifiutaBtn'>Rifiuta</button><button id='accettaBtn'>Accetta</button></div>
    </div>
</div>

<!-- Modale per le preferenze sui cookie -->
<div id="cookieModal" class="modal">    
    <div class="modal-content">
        <div class='topCookieModal'>
            <button class="closeCookieModal">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 4-8 8 8 8" stroke="currentColor" stroke-width="3"></path></svg>
            </button>        
            <button class="pPolicyButton">Visualizza Privacy Policy completa</button>
        </div>
        <h2>Le tue preferenze relative alla privacy</h2>
        <p>Questo pannello ti permette di esprimere alcune preferenze relative al trattamento delle tue informazioni personali.</p>
        <p>Puoi rivedere e modificare le tue scelte in qualsiasi momento accedendo al presente pannello tramite l’apposito link.</p>
        <p>Per rifiutare il tuo consenso alle attività di trattamento descritte di seguito o, dove applicabile, fare opt-out, disattiva i singoli comandi o utilizza il pulsante “Rifiuta tutto” e conferma di voler salvare le scelte effettuate.</p>
        <div class='rifiutaAccettaContainerModal'>
            <button id='rifiutaBtnModal'> 
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L16.8995 7.10051" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 7.00001L16.8995 16.8995" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> 
                <strong>Rifiuta</strong>
            </button>
            <button id='accettaBtnModal'>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 13.3636L8.03559 16.3204C8.42388 16.6986 9.04279 16.6986 9.43108 16.3204L19 7" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
                <strong>Accetta</strong>
            </button>
        </div>
        <!-- Aggiungi qui le opzioni di preferenze sui cookie -->
        <h3>Le tue preferenze relative al consenso per le tecnologie di tracciamento</h3>
        <p style='display: contents'>Le opzioni disponibili in questa sezione ti permettono di personalizzare le preferenze relative al consenso per qualsiasi tecnologia di tracciamento utilizzata per le finalità descritte di seguito. Per ottenere ulteriori informazioni in merito all'utilità e al funzionamento di tali strumenti di tracciamento, fai riferimento alla <div id='openPolicyFromCookieSettings' class='likeAElement' style='display: contents'>Cookie Policy.</div> Tieni presente che il rifiuto del consenso per una finalità particolare può rendere le relative funzioni non disponibili.</p>
        <div class='necessari'>
            <strong>Necessari</strong>
            <label class="checkbox-container">
                <input type="checkbox" class="checkbox-input" id="purpose-1" name="1" checked disabled>
                <span class="checkbox-slider"></span>
            </label>
        </div>
        <div class='esperienza'>
            <strong>Esperienza</strong>
            <label class="checkbox-container">
                <input type="checkbox" class="checkbox-input" id="purpose-2" name="1">
                <span class="checkbox-slider"></span>
            </label>
        </div>
        <p>Questi strumenti di tracciamento sono strettamente necessari per garantire il funzionamento e la fornitura del servizio che ci hai richiesto e, pertanto, non richiedono il tuo consenso.</p>
        
        <div class='buttonSaveContainer'><button id="savePreferences">Salva e continua</button></div>
    </div>
</div>
<!-- PRIVACY POLICY MODAL BOX -->
<div id='privacyPolicyModal' class='modal' style='display: none'>
    <div class='modal-content'>
        <div id='closePrivacyPolicyModal'>x</div>
        <div>
            <div class="modal_header"> 
                <h1> <div style='display: inline'>Privacy Policy di</div> <strong> <?php echo $sito ?> </strong></h1>
                <p>Questa Applicazione raccoglie alcuni Dati Personali dei propri Utenti.</p><br>
            </div>        
            <div>
                <h2> Titolare del Trattamento dei Dati </h2>
                <p> <?php echo $nome ?>  -  <?php echo $indirizzo ?> </p>
                <p><strong>Indirizzo email del Titolare:</strong> <?php echo $email ?> </p>
            </div>
        </div>
        <div>
            <h2> Tipologie di Dati raccolti </h2>
            <p>
                Fra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono:
                Dati di utilizzo; Strumenti di Tracciamento; nome; numero di telefono; email.
            </p>
            <p> Dettagli completi su ciascuna tipologia di Dati Personali raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei Dati stessi.<br>
                I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati di Utilizzo, raccolti automaticamente durante l'uso di questa Applicazione.<br>
                Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono obbligatori. Se l’Utente rifiuta di comunicarli, potrebbe essere impossibile per questa Applicazione fornire il Servizio. Nei casi in cui questa Applicazione indichi alcuni Dati come facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività.<br> 
                Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori sono incoraggiati a contattare il Titolare.<br>
                L’eventuale utilizzo di Cookie - o di altri strumenti di tracciamento - da parte di questa Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione ha la finalità di fornire il Servizio richiesto dall'Utente, oltre alle ulteriori finalità descritte nel presente documento e nella Cookie Policy.
            </p>
            <p>L'Utente si assume la responsabilità dei Dati Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione.</p>
        </div>
        <div>
            <h2>Modalità e luogo del trattamento dei Dati raccolti</h2>
            <h3> Modalità di trattamento </h3>
            <p>
                Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. <br>
                Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi, potrebbero avere accesso ai Dati altri soggetti coinvolti nell’organizzazione di questa Applicazione (personale amministrativo, commerciale, marketing, legali, amministratori di sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali, hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se necessario, Responsabili del Trattamento da parte del Titolare. L’elenco aggiornato dei Responsabili potrà sempre essere richiesto al Titolare del Trattamento.
            </p>
            <h3> Luogo </h3>
            <p>
                I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il Titolare.<br>
                I Dati Personali dell’Utente potrebbero essere trasferiti in un paese diverso da quello in cui l’Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento l’Utente può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.
            </p>
            <h3> Periodo di conservazione </h3>
            <p>Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti. </p>
        </div>
        <div>
            <h2>Finalità del Trattamento dei Dati raccolti</h2>
                <p>
                    I Dati dell’Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità:
                    Visualizzazione di contenuti da piattaforme esterne e Contattare l'Utente.
                </p>    
            <p>Per ottenere informazioni dettagliate sulle finalità del trattamento e sui Dati Personali trattati per ciascuna finalità, l’Utente può fare riferimento alla sezione “Dettagli sul trattamento dei Dati Personali”.</p>
        </div>
        <div>
            <h2>Dettagli sul trattamento dei Dati Personali</h2>
            <p>I Dati Personali sono raccolti per le seguenti finalità ed utilizzando i seguenti servizi:</p>
            <ul>
                <li>
                <div>
                    <h3> Contattare l'Utente </h3>
                    <div>
                        <h4>Modulo di contatto (questa Applicazione) </h4>
                        <p>L’Utente, compilando con i propri Dati il modulo di contatto, acconsente al loro utilizzo per rispondere alle richieste di informazioni, di preventivo, o di qualunque altra natura indicata dall’intestazione del modulo.</p>
                        <p>Dati Personali trattati: email; nome; numero di telefono.</p>
                    </div>
                </div>
                </li>
                <li>
                <h3> Visualizzazione di contenuti da piattaforme esterne </h3>
                <div>
                    <p>
                        Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi. Tali servizi sono spesso definiti widget, ovvero piccoli elementi inseriti in un sito web o in un'applicazione. Forniscono informazioni specifiche o svolgono una funzione particolare e spesso consentono l'interazione con l'utente.<br>
                        Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.
                    </p>
                    <h4>Google Fonts </h4>
                    <p>Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google LLC oppure da Google Ireland Limited, a seconda di come il Titolare gestisce il trattamento dei Dati, che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.</p>
                    <p>Dati Personali trattati: Dati di utilizzo; Strumenti di Tracciamento.</p>
                    <p>Luogo del trattamento:  Stati Uniti –  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>;  Irlanda –  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </p>
                </div>
                </li>
            </ul>
        </div>
        <div>
            <h2>Cookie Policy</h2>
            <p style='display: inline'>Questa Applicazione fa utilizzo di Strumenti di Tracciamento. Per saperne di più, gli Utenti possono consultare la <div id='anotherCookieOpener' class='likeAElement'>Cookie Policy.</div></p>
        </div>
        <h2> Ulteriori informazioni per gli utenti </h2>
        <h3> Base giuridica del trattamento </h3>
        <p>Il Titolare tratta Dati Personali relativi all’Utente in caso sussista una delle seguenti condizioni:</p>
        <ul>
        <li>l’Utente ha prestato il consenso per una o più finalità specifiche.</li>
        <li>il trattamento è necessario all'esecuzione di un contratto con l’Utente e/o all'esecuzione di misure precontrattuali;</li>
        <li>il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare;</li>
        <li>il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o per l'esercizio di pubblici poteri di cui è investito il Titolare;</li>
        <li>il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.</li>
        </ul>
        <p>È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge, previsto da un contratto o necessario per concludere un contratto.</p>
        <h3> Ulteriori informazioni sul tempo di conservazione </h3>
        <p>Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del consenso degli Utenti. </p>
        <p>Pertanto:</p>
        <ul>
        <li>I Dati Personali raccolti per scopi collegati all’esecuzione di un contratto tra il Titolare e l’Utente saranno trattenuti sino a quando sia completata l’esecuzione di tale contratto.</li>
        <li>I Dati Personali raccolti per finalità riconducibili all’interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse. L’Utente può ottenere ulteriori informazioni in merito all’interesse legittimo perseguito dal Titolare nelle relative sezioni di questo documento o contattando il Titolare.</li>
        </ul>
        <p>
            Quando il trattamento è basato sul consenso dell’Utente, il Titolare può conservare i Dati Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo per adempiere ad un obbligo di legge o per ordine di un’autorità.<br><br>
            Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla portabilità dei Dati non potranno più essere esercitati.
        </p>
        <h3>Diritti dell’Utente sulla base del Regolamento Generale sulla Protezione dei Dati (GDPR)</h3>
        <p>Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.</p>
        <p>In particolare, nei limiti previsti dalla legge, l’Utente ha il diritto di:</p>
        <ul>
        <li><strong>revocare il consenso in ogni momento.</strong> L’Utente può revocare il consenso al trattamento dei propri Dati Personali precedentemente espresso. </li>
        <li><strong>opporsi al trattamento dei propri Dati.</strong> L’Utente può opporsi al trattamento dei propri Dati quando esso avviene in virtù di una base giuridica diversa dal consenso.</li>
        <li><strong>accedere ai propri Dati.</strong> L’Utente ha diritto ad ottenere informazioni sui Dati trattati dal Titolare, su determinati aspetti del trattamento ed a ricevere una copia dei Dati trattati.</li>
        <li><strong>verificare e chiedere la rettificazione.</strong> L’Utente può verificare la correttezza dei propri Dati e richiederne l’aggiornamento o la correzione. </li>
        <li><strong>ottenere la limitazione del trattamento.</strong> L’Utente può richiedere la limitazione del trattamento dei propri Dati. In tal caso il Titolare non tratterà i Dati per alcun altro scopo se non la loro conservazione.</li>
        <li><strong>ottenere la cancellazione o rimozione dei propri Dati Personali.</strong> L’Utente può richiedere la cancellazione dei propri Dati da parte del Titolare.</li>
        <li><strong>ricevere i propri Dati o farli trasferire ad altro titolare.</strong> L’Utente ha diritto di ricevere i propri Dati in formato strutturato, di uso comune e leggibile da dispositivo automatico e, ove tecnicamente fattibile, di ottenerne il trasferimento senza ostacoli ad un altro titolare.</li>
        <li><strong>proporre reclamo.</strong> L’Utente può proporre un reclamo all’autorità di controllo della protezione dei dati personali competente o agire in sede giudiziale.</li>
        </ul>
        <p>
        Gli Utenti hanno diritto di ottenere informazioni in merito alla base giuridica per il trasferimento di Dati all'estero incluso verso qualsiasi organizzazione internazionale regolata dal diritto internazionale o costituita da due o più paesi, come ad esempio l’ONU, nonché in merito alle misure di sicurezza adottate dal Titolare per proteggere i loro Dati.
        </p>
        <h4> Dettagli sul diritto di opposizione </h4>
        <p><strong>Quando i Dati Personali sono trattati nell’interesse pubblico, nell’esercizio di pubblici poteri di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione particolare.</strong></p>
        <p><strong>Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing diretto, possono opporsi al trattamento in qualsiasi momento, gratuitamente e senza fornire alcuna motivazione. Qualora gli Utenti si oppongano al trattamento per finalità di marketing diretto, i Dati Personali non sono più oggetto di trattamento per tali finalità. Per scoprire se il Titolare tratti Dati con finalità di marketing diretto gli Utenti possono fare riferimento alle rispettive sezioni di questo documento. </strong></p>
        <h4> Come esercitare i diritti </h4>
        <p>Per esercitare i propri diritti, gli Utenti possono indirizzare una richiesta ai recapiti del Titolare indicati in questo documento. La richiesta è gratuita e il Titolare risponderà nel più breve tempo possibile, in ogni caso entro un mese, fornendo all’Utente tutte le informazioni previste dalla legge. Eventuali rettifiche, cancellazioni o limitazioni del trattamento saranno comunicate dal Titolare a ciascuno dei destinatari, se esistenti, a cui sono stati trasmessi i Dati Personali, salvo che ciò si riveli impossibile o implichi uno sforzo sproporzionato. Il Titolare comunica all'Utente tali destinatari qualora egli lo richieda.</p>
        <div>
            <h2>Ulteriori informazioni sul trattamento</h2>
            <h3> Difesa in giudizio </h3>
            <p>
                I Dati Personali dell’Utente possono essere utilizzati da parte del Titolare in giudizio o nelle fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo di questa Applicazione o dei Servizi connessi da parte dell’Utente.<br>
                L’Utente dichiara di essere consapevole che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.
            </p>
            <h3> Informative specifiche </h3>
            <p>Su richiesta dell’Utente, in aggiunta alle informazioni contenute in questa privacy policy, questa Applicazione potrebbe fornire all'Utente delle informative aggiuntive e contestuali riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.</p>
            <h3> Log di sistema e manutenzione </h3>
            <p>Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano le interazioni e che possono contenere anche Dati Personali, quali l’indirizzo IP Utente.</p>
            <h3> Informazioni non contenute in questa policy </h3>
            <p>Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.</p>
            <h3> Modifiche a questa privacy policy </h3>
            <p>Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica agli Utenti attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in fondo.<br><br>Qualora le modifiche interessino trattamenti la cui base giuridica è il consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell’Utente, se necessario.</p>
        </div> 
        <div>
            <div>
                <h3>
                Definizioni e riferimenti legali
                </h3>
                <div id='ppElenco'>
                    <h4>Dati Personali (o Dati)</h4>
                    <p>Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.</p>

                    <h4>Dati di Utilizzo</h4>
                    <p>Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall’Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato nell’inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all’ambiente informatico dell’Utente.</p>

                    <h4>Utente</h4>
                    <p>L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l'Interessato.</p>

                    <h4>Interessato</h4>
                    <p>La persona fisica cui si riferiscono i Dati Personali.</p>

                    <h4>Responsabile del Trattamento (o Responsabile)</h4>
                    <p>La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.</p>

                    <h4>Titolare del Trattamento (o Titolare)</h4>
                    <p>La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.</p>

                    <h4>Questa Applicazione</h4>
                    <p>Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.</p>

                    <h4>Servizio</h4>
                    <p>Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.</p>

                    <h4>Unione Europea (o UE)</h4>
                    <p>Salvo ove diversamente specificato, ogni riferimento all’Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell’Unione Europea e dello Spazio Economico Europeo.</p>

                    <h4>Cookie</h4>
                    <p>I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.</p>

                    <h4>Strumento di Tracciamento</h4>
                    <p>Per Strumento di Tracciamento s’intende qualsiasi tecnologia - es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting - che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell’Utente.</p>
                    <hr>
                    <h4>Riferimenti legali</h4>
                    <p>Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questa Applicazione.</p>
                </div>
            </div>
        </div>        
        <div> <p> Ultima modifica: 26 febbraio 2024 </p> </div>
    </div>
</div>
<!-- COOKIE POLICY MODAL BOX -->
<div id='cookiePolicyModal' class='modal' style='display: none'>
    <div class='modal-content'>
        <div id='closeCookiePolicyModal'>x</div>
        <div>
            <div>
                <h2 style="padding-top: 0;"> <div style='display: inline'>Cookie Policy di</div> <?php echo $sito ?> </h2>
                <p>Questo documento contiene informazioni in merito alle tecnologie che consentono a questa Applicazione di raggiungere gli scopi descritti di seguito. Tali tecnologie permettono al Titolare di raccogliere e salvare informazioni (per esempio tramite l’utilizzo di Cookie) o di utilizzare risorse (per esempio eseguendo uno script) sul dispositivo dell’Utente quando quest’ultimo interagisce con questa Applicazione.</p>
                <p>
                    Per semplicità, in questo documento tali tecnologie sono sinteticamente definite “Strumenti di Tracciamento”, salvo vi sia ragione di differenziare.<br>
                    Per esempio, sebbene i Cookie possano essere usati in browser sia web sia mobili, sarebbe fuori luogo parlare di Cookie nel contesto di applicazioni per dispositivi mobili, dal momento che si tratta di Strumenti di Tracciamento che richiedono la presenza di un browser. Per questo motivo, all’interno di questo documento il termine Cookie è utilizzato solo per indicare in modo specifico quel particolare tipo di Strumento di Tracciamento.
                </p>
                <p>Alcune delle finalità per le quali vengono impiegati Strumenti di Tracciamento potrebbero, inoltre richiedere il consenso dell’Utente. Se viene prestato il consenso, esso può essere revocato liberamente in qualsiasi momento seguendo le istruzioni contenute in questo documento.</p>
                <p>
                    Questa Applicazione utilizza Strumenti di Tracciamento gestiti direttamente dal Titolare (comunemente detti Strumenti di Tracciamento “di prima parte”) e Strumenti di Tracciamento che abilitano servizi forniti da terzi (comunemente detti Strumenti di Tracciamento “di terza parte”). Se non diversamente specificato all’interno di questo documento, tali terzi hanno accesso ai rispettivi Strumenti di Tracciamento.<br>
                    Durata e scadenza dei Cookie e degli altri Strumenti di Tracciamento simili possono variare a seconda di quanto impostato dal Titolare o da ciascun fornitore terzo. Alcuni di essi scadono al termine della sessione di navigazione dell’Utente.<br>
                    In aggiunta a quanto specificato nella descrizione di ciascuna delle categorie di seguito riportate, gli Utenti possono ottenere informazioni più dettagliate ed aggiornate sulla durata, così come qualsiasi altra informazione rilevante - quale la presenza di altri Strumenti di Tracciamento - nelle privacy policy dei rispettivi fornitori terzi (tramite i link messi a disposizione) o contattando il Titolare.
                </p>
                <h3> Attività strettamente necessarie a garantire il funzionamento di questa Applicazione e la fornitura del Servizio </h3>
                <p>Questa Applicazione utilizza Cookie comunemente detti “tecnici” o altri Strumenti di Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il funzionamento o la fornitura del Servizio.</p>
                <h3>Altre attività che prevedono l’utilizzo di Strumenti di Tracciamento</h3>
                <h4>Esperienza</h4>
                <p>Questa Applicazione utilizza Strumenti di Tracciamento per migliorare la qualità della user experience e consentire le interazioni con contenuti, network e piattaforme esterni.</p>
                <ul>    
                    <li>
                        <div>
                            <h3> Visualizzazione di contenuti da piattaforme esterne </h3>
                            <div>
                                <p>
                                    Questo tipo di servizi permette di visualizzare contenuti ospitati su piattaforme esterne direttamente dalle pagine di questa Applicazione e di interagire con essi. Tali servizi sono spesso definiti widget, ovvero piccoli elementi inseriti in un sito web o in un'applicazione. Forniscono informazioni specifiche o svolgono una funzione particolare e spesso consentono l'interazione con l'utente.<br>
                                    Questo tipo di servizio potrebbe comunque raccogliere dati sul traffico web relativo alle pagine dove il servizio è installato, anche quando gli utenti non lo utilizzano.
                                </p>        
                                <h4> Google Fonts  </h4>
                                <div>
                                <p>Google Fonts è un servizio di visualizzazione di stili di carattere gestito da Google LLC oppure da Google Ireland Limited, a seconda di come il Titolare gestisce il trattamento dei Dati, che permette a questa Applicazione di integrare tali contenuti all’interno delle proprie pagine.</p>
                                </div>
                                <p>Dati Personali trattati: Dati di utilizzo e Strumenti di Tracciamento.</p>
                                <p>Luogo del trattamento:  Stati Uniti –  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>;  Irlanda –  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <h3> Come gestire le preferenze e prestare o revocare il consenso </h3>
                <p>Esistono vari modi per gestire le preferenze relative agli Strumenti di Tracciamento e per prestare o revocare il consenso, ove necessario:</p>
                <p>Gli Utenti possono gestire le preferenze relative agli Strumenti di Tracciamento direttamente tramite le impostazioni dei propri dispositivi - per esempio, possono impedire l’uso o l’archiviazione di Strumenti di Tracciamento. </p>
                <p>In aggiunta, ogni qualvolta l’utilizzo di Strumenti di Tracciamento dipenda da consenso, l’Utente può prestare o revocare tale consenso impostando le proprie preferenze all’interno dell’informativa sui cookie o aggiornando tali preferenze tramite il widget privacy per le preferenze relative al consenso, se presente.</p>
                <p>Grazie ad apposite funzioni del browser o del dispositivo è anche possibile rimuovere Strumenti di Tracciamento precedentemente salvati, inclusi quelli utilizzati per il salvataggio delle preferenze relative al consenso inizialmente espresse dall'Utente.</p>
                <p>Altri Strumenti di Tracciamento presenti nella memoria locale del browser possono essere rimossi cancellando la cronologia di navigazione. </p>
                <p>Per quanto riguarda Strumenti di Tracciamento di terza parte, gli Utenti possono gestire le proprie preferenze visitando il relativo link di opt out (qualora disponibile), utilizzando gli strumenti descritti nella privacy policy della terza parte o contattando quest'ultima direttamente.</p>
                <h4>Individuare le impostazioni relative agli Strumenti di Tracciamento</h4>
                <p>Gli Utenti possono, per esempio, trovare informazioni su come gestire i Cookie in alcuni dei browser più diffusi ai seguenti indirizzi:</p>
                <ul>
                <li><a rel="noopener nofollow" target="_blank" href="https://support.google.com/chrome/answer/95647?hl=it&amp;p=cpn_cookies">Google Chrome</a></li>
                <li><a rel="noopener nofollow" target="_blank" href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie">Mozilla Firefox</a></li>
                <li><a rel="noopener nofollow" target="_blank" href="https://support.apple.com/it-it/guide/safari/manage-cookies-and-website-data-sfri11471/">Apple Safari</a></li>
                <li><a rel="noopener nofollow" target="_blank" href="http://windows.microsoft.com/it-it/windows-vista/block-or-allow-cookies">Microsoft Internet Explorer</a></li>
                <li><a rel="noopener nofollow" target="_blank" href="https://support.microsoft.com/it-it/help/4027947">Microsoft Edge</a></li>
                <li><a rel="noopener nofollow" target="_blank" href="https://support.brave.com/hc/articles/360022806212-How-do-I-use-Shields-while-browsing">Brave</a></li>
                <li><a rel="noopener nofollow" target="_blank" href="https://help.opera.com/latest/web-preferences/#cookies">Opera</a></li>
                </ul>
                <p>Gli Utenti possono inoltre gestire alcuni Strumenti di Tracciamento per applicazioni mobili disattivandoli tramite le apposite impostazioni del dispositivo, quali le impostazioni di pubblicità per dispositivi mobili o le impostazioni relative al tracciamento in generale (gli Utenti possono consultare le impostazioni del dispositivo per individuare quella pertinente).</p>
                <h4>Conseguenze legate al rifiuto dell'utilizzo di Strumenti di Tracciamento</h4>
                <p>Gli Utenti sono liberi di decidere se permettere o meno l'utilizzo di Strumenti di Tracciamento. Tuttavia, si noti che gli Strumenti di Tracciamento consentono a questa Applicazione di fornire agli Utenti un'esperienza migliore e funzionalità avanzate (in linea con le finalità delineate nel presente documento). Pertanto, qualora l'Utente decida di bloccare l'utilizzo di Strumenti di Tracciamento, il Titolare potrebbe non essere in grado di fornire le relative funzionalità.</p>
                <h3> Titolare del Trattamento dei Dati </h3>
                    <p> <?php echo $nome ?>  -  <?php echo $indirizzo ?> </p>
                    <p><strong>Indirizzo email del Titolare:</strong> <?php echo $email ?> </p>
                    <p>Dal momento che l’uso di Strumenti di Tracciamento di terza parte su questa Applicazione non può essere completamente controllato dal Titolare, ogni riferimento specifico a Strumenti di Tracciamento di terza parte è da considerarsi indicativo. Per ottenere informazioni complete, gli Utenti sono gentilmente invitati a consultare la privacy policy dei rispettivi servizi terzi elencati in questo documento.</p>
                    <p>Data l'oggettiva complessità di identificazione delle tecnologie di tracciamento, gli Utenti sono invitati a contattare il Titolare qualora volessero ricevere ulteriori informazioni in merito all'utilizzo di tali tecnologie su questa Applicazione.</p>
                </div>
                <div>
                <div>
                    <h3> Definizioni e riferimenti legali </h3>
                    <div id='cElenco'>
                        <h4>Dati Personali (o Dati)</h4>
                        <p>Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione personale, renda identificata o identificabile una persona fisica.</p>
                        <h4>Dati di Utilizzo</h4>
                        <p>Sono le informazioni raccolte automaticamente attraverso questa Applicazione (anche da applicazioni di parti terze integrate in questa Applicazione), tra cui: gli indirizzi IP o i nomi a dominio dei computer utilizzati dall’Utente che si connette con questa Applicazione, gli indirizzi in notazione URI (Uniform Resource Identifier), l’orario della richiesta, il metodo utilizzato nell’inoltrare la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta dal server (buon fine, errore, ecc.) il paese di provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal visitatore, le varie connotazioni temporali della visita (ad esempio il tempo di permanenza su ciascuna pagina) e i dettagli relativi all’itinerario seguito all’interno dell’Applicazione, con particolare riferimento alla sequenza delle pagine consultate, ai parametri relativi al sistema operativo e all’ambiente informatico dell’Utente.</p>
                        <h4>Utente</h4>
                        <p>L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato, coincide con l'Interessato.</p>
                        <h4>Interessato</h4>
                        <p>La persona fisica cui si riferiscono i Dati Personali.</p>
                        <h4>Responsabile del Trattamento (o Responsabile)</h4>
                        <p>La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.</p>
                        <h4>Titolare del Trattamento (o Titolare)</h4>
                        <p>La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che, singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al funzionamento ed alla fruizione di questa Applicazione. Il Titolare del Trattamento, salvo quanto diversamente specificato, è il titolare di questa Applicazione.</p>
                        <h4>Questa Applicazione</h4>
                        <p>Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali degli Utenti.</p>
                        <h4>Servizio</h4>
                        <p>Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se presenti) su questo sito/applicazione.</p>
                        <h4>Unione Europea (o UE)</h4>
                        <p>Salvo ove diversamente specificato, ogni riferimento all’Unione Europea contenuto in questo documento si intende esteso a tutti gli attuali stati membri dell’Unione Europea e dello Spazio Economico Europeo.</p>
                        <h4>Cookie</h4>
                        <p>I Cookie sono Strumenti di Tracciamento che consistono in piccole porzioni di dati conservate all'interno del browser dell'Utente.</p>
                        <h4>Strumento di Tracciamento</h4>
                        <p>Per Strumento di Tracciamento s’intende qualsiasi tecnologia - es. Cookie, identificativi univoci, web beacons, script integrati, e-tag e fingerprinting - che consenta di tracciare gli Utenti, per esempio raccogliendo o salvando informazioni sul dispositivo dell’Utente.</p>
                        <hr>
                        <h4>Riferimenti legali</h4>
                        <p>Ove non diversamente specificato, questa informativa privacy riguarda esclusivamente questa Applicazione.</p>
                    </div>
                </div>
                <div>
                    <p> Ultima modifica: 26 febbraio 2024 </p>
                </div>
            </div>
        </div>
    </div>
</div>

