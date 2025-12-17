document.addEventListener("DOMContentLoaded", (e) => {
    const urlSearch = new URLSearchParams(window.location.search);

    const lastName = document.getElementById("nom");
    lastName.value = urlSearch.get("nom");
    lastName.disabled = true;

    const firstName = document.getElementById("prenom");
    firstName.value = urlSearch.get("prenom");
    firstName.disabled = true;

    const formation = document.getElementById("formation");
    formation.value = urlSearch.get("formation");
    formation.disabled = true;

    const unJour = document.querySelector(".unJour");
    const periode = document.querySelector(".periode");
    const periodeOrDay = document.querySelectorAll('input[name="absence"]');

    periodeOrDay.forEach(radio => {
        if(radio.value === urlSearch.get("absence")){
            radio.checked = true;

            if(radio.value === "1"){
                unJour.style.display = "grid";
                periode.style.display = 'none';

                const jour = document.getElementById("jour");
                jour.value = urlSearch.get("jour");
                jour.disabled = true;

                const horraireDebut = document.getElementById("horraireDebut");
                horraireDebut.value = urlSearch.get("horraireDebut");
                horraireDebut.disabled = true;

                const horraireFin = document.getElementById("horraireFin");
                horraireFin.value = urlSearch.get("horraireFin");
                horraireFin.disabled = true;

            }else if(radio.value === "2"){
                unJour.style.display = "none";
                periode.style.display = 'grid';

                const periodeDebut = document.getElementById("periodeDebut");
                periodeDebut.value = urlSearch.get("periodeDebut");
                periodeDebut.disabled = true;
                
                const periodeFin = document.getElementById("periodeFin");
                periodeFin.value = urlSearch.get("periodeFin");
                periodeFin.disabled = true;

                const nombreDeJours = document.getElementById("nombreDeJours");
                nombreDeJours.value = urlSearch.get("nombreDeJours");
                nombreDeJours.disabled = true;

            }
        }

    })

    setTimeout(() => {
        const motifAbsence = document.querySelectorAll('input[name="motif-absence"]');
        motifAbsence.forEach(radio => {
            if(radio.value === urlSearch.get("motif-absence")){
                radio.checked = true;
            }
        })
    },1000)

})