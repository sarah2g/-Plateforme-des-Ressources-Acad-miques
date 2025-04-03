document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner tous les boutons principaux
    const mainBtns = document.querySelectorAll(".main-btn");

    mainBtns.forEach((btn) => {
        const subOptions = btn.nextElementSibling; // Récupérer les sous-options associées

        // Afficher/masquer les sous-options au clic
        btn.addEventListener("click", function (event) {
            event.preventDefault(); // Empêcher le comportement par défaut du lien
            if (subOptions.style.display === "block") {
                subOptions.style.display = "none";
            } else {
                // Masquer toutes les autres sous-options avant d'afficher celle-ci
                document.querySelectorAll(".sub-options").forEach((options) => {
                    options.style.display = "none";
                });
                subOptions.style.display = "block";
            }
        });

        // Masquer les sous-options lorsque l'utilisateur quitte la zone
        subOptions.addEventListener("mouseleave", function () {
            subOptions.style.display = "none";
        });
    });

    // Masquer les sous-options si l'utilisateur clique en dehors
    document.addEventListener("click", function (event) {
        const isClickInside = Array.from(mainBtns).some((btn) =>
            btn.contains(event.target)
        );
        if (!isClickInside) {
            document.querySelectorAll(".sub-options").forEach((options) => {
                options.style.display = "none";
            });
        }
    });
});

function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}
