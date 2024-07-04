document.addEventListener("DOMContentLoaded", function() {
    try {
        const hamburgerMenu = document.getElementById("hamburger-menu");
        const mobileNav = document.getElementById("mobile-nav");

        hamburgerMenu.addEventListener("click", function() {
            if (mobileNav.classList.contains("hidden")) {
                mobileNav.classList.remove("hidden");
                mobileNav.classList.add("visible");
            } else {
                mobileNav.classList.remove("visible");
                mobileNav.classList.add("hidden");
            }
        });
    } catch (error) {
        console.error("Errore durante l'inizializzazione del menu:", error);
    }
});


