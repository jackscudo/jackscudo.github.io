// Dichiarazione delle variabili globali per memorizzare gli elementi del menu principale e dei sottomenu
var menuItems;
var subItems;

// Funzione che gestisce l'apertura e la chiusura dei sottomenu
function gestoreSubMenu() {
    try {
        // Ottiene il sottomenu associato all'elemento cliccato
        var submenu = this.nextElementSibling;
        // Chiude tutti i sottomenu aperti
        var allSubmenus = document.getElementsByClassName('submenu');
        for (var i = 0; i < allSubmenus.length; i++) {
            if (allSubmenus[i] !== submenu) {
                allSubmenus[i].classList.remove('open');
            }
        }
        // Alterna la classe 'open' per mostrare o nascondere il sottomenu
        submenu.classList.toggle('open');
    } catch (e) {
        // Gestisce eventuali errori con un alert
        alert('gestoreSubMenu' + e);
    }
}

// Funzione che gestisce l'apertura e la chiusura dei singoli elementi del sottomenu
function gestoreSubItem() {
    try {
        // Ottiene tutti gli elementi con la classe 'subitem-content' e li nasconde
        var allSubitemContents = document.getElementsByClassName('subitem-content');
        for (var i = 0; i < allSubitemContents.length; i++) {
            if (allSubitemContents[i] !== this.nextElementSibling) {
                allSubitemContents[i].classList.remove('open');
            }
        }

        // Ottiene il contenuto dell'elemento subitem cliccato e alterna la classe 'open'
        var subitemContent = this.nextElementSibling;
        subitemContent.classList.toggle('open');
    } catch (e) {
        // Gestisce eventuali errori con un alert
        alert('gestoreSubItem' + e);
    }
}

// Funzione che viene chiamata quando la finestra si carica
function gestoreLoad() {
    try {
        // Ottiene tutti gli elementi con la classe 'menu-item' e assegna loro un gestore di eventi per il click
        menuItems = document.getElementsByClassName('menu-item');
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].onclick = gestoreSubMenu;
        }

        // Ottiene tutti gli elementi con la classe 'subitem' e assegna loro un gestore di eventi per il click
        subItems = document.getElementsByClassName('subitem');
        for (var i = 0; i < subItems.length; i++) {
            subItems[i].onclick = gestoreSubItem;
        }
    } catch (e) {
        // Gestisce eventuali errori con un alert
        alert('gestoreLoad' + e);
    }
}

// Assegna la funzione gestoreLoad all'evento di caricamento della finestra
window.onload = gestoreLoad;
