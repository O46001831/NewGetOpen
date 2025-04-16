ISTRUZIONI PER L'USO:

includere il file preferenzeButton.php alla fine dei ogni pagina php dopo il footer, ma IN UN BLOCCO A PARTE:
              <?php require __DIR__ . '/cookie/preferenzeButton.php' ?>

cambiare $nome, $sito, $indirizzo ed $email in cookie.php all'inizio.

i bottoni del footer che aprono cookie policy e privacy policy DEVONO ESSERE:
                <div id='footerPrivacyPolicy'>Privacy Policy</div>
                <div id='footerCookiePolicy'>Cookie Policy</div> 

Nel file cookie.js sostituire a inizio file le costanti sotto il commento "Costanti da cambiare".

LANGCONTAINER:
    inserire il lang container dove si vuole con questo comando: 
    ----    (default: solo italiano e inglese)    ----
    <?php require __DIR__ . '/langContainer/langContainer.php' ?>

Language Updating:
    Per poter aggiornare correttamente la lingua della tua pagina devi costruire un json con questa struttura:
    NomeJson = {
        "ita": {        
            "tag_HTML": "Contenuto_HTML_In_Italiano",
            "tag_HTML": "Contenuto_HTML_In_Italiano",
            .......
            "tag_HTML": "Contenuto_HTML_In_Italiano"
        },
        "eng": {       
            "tag_HTML": "Contenuto_HTML_In_Inglese",
            "tag_HTML": "Contenuto_HTML_In_Inglese",
            .......
            "tag_HTML": "Contenuto_HTML_In_Inglese"
        } 
    }
    Dopodichè, nella funzione updateLanguages di lang.js, dentro l'array elementsLanguagesArray, inserisci tutti i NomeJson.