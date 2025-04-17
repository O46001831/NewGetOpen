<!-- MODELLO 231 -->
<div id='mater231' class="superelement">
    <div class="element">        
        <div class='PeCTitle'>
            <h2 class='first'>MOD</h2>
            <h2 class='secondMarginless'>ELLO 231</h2>
        </div>  
        <div class="line lineRight"></div>   
        <div class="PDFcontainer">                        
            <a href="pdf/GETOPEN-Modello-231-del-20.03.2024.pdf" download="GetOpen_Modello231.pdf">
                <div class="boxPDF">
                    <img class='downloadImage' src='img/pdfdownload.png'>
                    <span>MODELLO 231</span>
                </div>
            </a>                            
            <a href="pdf/GETOPEN-Codice-Etico3.pdf" download="GetOpen_CodiceEtico.pdf">
                <div class="boxPDF">
                    <img class='downloadImage' src='img/pdfdownload.png'>
                    <span>CODICE ETICO</span>
                </div>
            </a>                     
            <a href="pdf/GETOPEN-Statuto-ODV.pdf" download="GetOpen_Statuto-ODV.pdf">
                <div class="boxPDF">
                    <img class='downloadImage' src='img/pdfdownload.png'>
                    <span>STATUTO ODV</span>
                </div>
            </a>                        
            <a href="pdf/GETOPEN-Modulo-segnalazione-ODV.pdf" download="GetOpen_Modulo_segnalazione-ODV.pdf">
                <div class="boxPDF">
                    <img class='downloadImage' src='img/pdfdownload.png'>
                    <span>MODULO DI SEGNALAZIONE</span>
                </div>
            </a>              
        </div>                     
    </div>                  
</div>
<!-- SOCIETÀ TRASPARENTE -->
<div id='masterTrasparente' class="superelement">
    <div class="element">              
        <div class='PeCTitle'>
            <h2 class='first'>SOCIE</h2>
            <h2 class='secondMarginless'>TÀ TRASPARENTE</h2>
        </div>  
        <div class="line "></div>   
        <div id='filterForm'>
            <label for="filter">Categoria:</label>
            <select id="filter">
                <option value="all">Tutte le categorie</option>
                <option value="organizzazione">Organizzazione</option>
                <option value="bandi">Bandi di Gara e Contratti</option>
                <option value="bilanci">Bilanci</option>
                <option value="personale">Personale</option>
                <option value="consulenze">Consulenze e Collaborazioni</option>
                <option value="provvedimenti">Provvedimenti</option>
                <option value="atti">Atti Generali</option>
            </select>
        </div>                        
        <div id='trasparenzaContainer'>
            <div id='trasparenzaTitle'>
                <strong>CATEGORIA</strong>
                <strong>DESCRIZIONE</strong>
                <strong>DATA PUBBLICAZIONE</strong>
                <strong id='lastTableTitleElement'></strong>
            </div>
            <div id='trasparenza' class='containerMainText'>
                <div id='trasparenzaCard' class='hidden'>
                    <div class='mainTopic' style='display: none'></div>
                    <div class='categoria'></div>
                    <div class='descrizione'></div>
                    <div class='dataPubblicazione'></div>
                    <div class='linkAlDownload'></div>
                </div>
            </div>     
            <div id='errorTrasparenza' class='hidden'>Nessun elemento corrispondente trovato</div>
            <div id='loadingContainer' style='width: 100%; display: flex; justify-content: center;'><img style='width: 30%; height: auto; max-width: 275px;' src='./img/loading.gif'></div>
            <div id='navigatorWrap'>
                <div id='trasparenzaNavigatorPage'>
                    <div id='left'> < </div>
                    <div id='currentPage'> 1 </div>
                    <div id='right'> > </div>
                </div>
            </div>
        </div>                                 
    </div>                  
</div>