import { InputCheck } from "./class/inputCheck.js";

document.addEventListener('DOMContentLoaded', (e) => {

    const unJour = document.querySelector(".unJour");
    const periode = document.querySelector(".periode");

    const lastNameIn = document.getElementById("nom");
    const firstNameIn = document.getElementById("prenom");
    const currentStudies = document.getElementById("formation");

    const periodeOrDay = document.querySelectorAll('input[name="absence"]');
    

    const absenceDay = document.getElementById("jour");
    const endHour = document.getElementById("horraireFin");

    const periodeDebut = document.getElementById("periodeDebut");
    const periodeFin = document.getElementById("periodeFin");


    const validBtn = document.getElementById("validBtn");
    
    
    const check = new InputCheck();
    check.inputBlur(lastNameIn,"nom-invalide");
    check.inputBlur(firstNameIn,"prenom-invalide");

    periodeOrDay.forEach(radio => {
        radio.addEventListener("change", (e) => {
            if(!e.target.checked) return;
            const periodeOrDayValue = e.target.value;
            if(periodeOrDayValue === "1"){
                unJour.style.display = "grid";
                periode.style.display = 'none';
                check.inputBlur(absenceDay, "date-absence-invalide");
                check.inputBlur(endHour, "horaire-absence-invalide");
            }else if(periodeOrDayValue === "2"){
                check.removeError("date-absence-invalide");
                check.removeError("horaire-absence-invalide");
                unJour.style.display = "none";
                periode.style.display = 'grid';
                check.inputBlur(periodeDebut, "debut-periode-invalide");
                check.inputPeriodeBlur(periodeDebut,periodeFin,"periode-absence-invalide")
            }
            
        })
    })

    validBtn.addEventListener("click", (e) => {
        e.preventDefault();
        
        check.inputError(lastNameIn.value,"nom-invalide");
        check.inputError(firstNameIn.value,"prenom-invalide");

        if(check.currentsIssues > 0){
            alert("Validation impossible, des erreurs subsistent dans la saisie.")
        }else{
            document.querySelector("form").submit();
        }
        
    })
    
})
