<link rel="stylesheet" href="./cookie/cookie.css">
<div id='preferenzeBtn'>
    <button id='infoRaccolta'>Informativa sulla raccolta</button>
    <button id='preferenze'>
        <div id='preferenzeText'>Le tue preferenze relative alla privacy</div>
        <svg width="20px" height="20px" viewBox="0 -6 40 40" xmlns="http://www.w3.org/2000/svg">
            <g id="Lager_113" data-name="Lager 113" transform="translate(4 -2)">
                <g id="Rectangle_58" data-name="Rectangle 58" transform="translate(-4 2)" fill="none" stroke="#161615" stroke-miterlimit="10" stroke-width="4">
                <rect width="40" height="28" rx="14" stroke="none"/>
                <rect x="2" y="2" width="36" height="24" rx="12" fill="none"/>
                </g>
                <circle id="Ellipse_15" data-name="Ellipse 15" cx="6" cy="6" r="6" transform="translate(4 10)" fill="#161615"/>
            </g>
        </svg>
    </button>
</div>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const preferenze = document.querySelector('#preferenze');
        preferenze.addEventListener('click', function(){
            openModal();
        });
    });
    document.getElementById('infoRaccolta').addEventListener('click', function(){
        openPrivacyPolicyModal();
    });
    
    function openModal(){
        checkEsperienzaChecked();
        document.getElementById('cookieModal').style.display = 'block';
        stuffToDpWhenOpenAModal();
    }
</script>

<style>
#preferenzeBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #252326;
}
#infoRaccolta, #preferenze {
    color: #17c8f4;
    background-color: white;    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5em 1em;
    line-height: 1;
    text-decoration: none;
    transition: background-color .3s ease;
    cursor: pointer;
    border: none;
    font-weight: 700;
    box-sizing: border-box;
    font-size: 14px;
}
#infoRaccolta {
    padding: 10px 20px;
    border-top-left-radius: 5px; 
    border-bottom-left-radius: 5px; 
}
#infoRaccolta:hover {
    color: #ff6e40;
    background-color: #e4e6e8;
}
#preferenze {
    border-top-right-radius: 5px; 
    border-bottom-right-radius: 5px;     
    border-left: 1px solid #17c8f4;
}
#preferenze:hover {
    color: #ff6e40;
    background-color: #e4e6e8;
    border-left: 1px solid #ff6e40;
}
#preferenze > svg {
    margin-left: 10px;
}
</style>
<?php require './cookie/cookie.php' ?>
<script src="./cookie/cookie.js" defer></script>