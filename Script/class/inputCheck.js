export class InputCheck{

    currentsIssues = 0;

    inputBlur(nodeElement,strError){
        nodeElement.addEventListener("blur", (e) => {

            const elementValue = nodeElement.value.trim();
            switch (nodeElement.type){
                case "text":
                    this.inputError(elementValue, strError);
                    break;
                case "date":
                    this.dateError(elementValue, strError);
                    break;
                case "time":
                    this.timeError(elementValue, strError)
                default:
                    break;
            }
            
        })
    }

    inputPeriodeBlur(periodeDebut, periodeFin,strError){
        periodeFin.addEventListener("blur", (e) => {
            const periodeDebutStamp = Date.parse(periodeDebut.value);
            const periodeFinStamp = Date.parse(periodeFin.value);
            const nombreJours = document.getElementById('nombreJours');

            if(periodeDebutStamp > periodeFinStamp){
                this.errorDisplayer(strError);
                this.currentsIssues +=1;
            }else{
                this.removeError(strError);
                this.currentsIssues -= 1;
            }
        })
    }

    inputError(value, strError){
    if(value === "" || value === null){
            this.errorDisplayer(strError);
            this.currentsIssues += 1;
        }else{
            this.removeError(strError);
            this.currentsIssues -= 1;
        }
    }

    dateError(value, strError){
        const valueStamp = Date.parse(value);
        
        if(value === "" || value === null){
            this.errorDisplayer(strError);
            this.currentsIssues += 1;
        }else{
            if(valueStamp < Date.now()){
                this.errorDisplayer(strError);
            }else{
                this.removeError(strError);
                this.currentsIssues -= 1;
            }
        }
    }


    timeError(endHour, strError){
        let [hour,minute] = endHour.split(":");
        const endHourStamp = hour * 60 + minute;
        
        const startHour = document.getElementById("horraireDebut");
        let [hour1,minute1] = startHour.value.split(":");
        const startHourStamp = hour1 * 60 + minute1;
        
        if(endHourStamp === 0 || isNaN(endHourStamp) || startHourStamp === 0 || isNaN(startHourStamp)){
            this.errorDisplayer(strError);
            this.currentsIssues += 1;
        }else{
            if(endHourStamp < startHourStamp){
            this.errorDisplayer(strError);
            this.currentsIssues += 1;
        }else{
            this.removeError(strError);
            this.currentsIssues -= 1;
        }
        }
        
    }

    errorDisplayer(strError){
        if(!document.getElementById(strError)){
            const errorDisplay = document.getElementById("errorDisplay");
            const invalid = document.createElement("p");
            invalid.classList = "danger";
            invalid.id = strError;
            invalid.textContent = strError;
            errorDisplay.appendChild(invalid);
        }
        
    }

    removeError(strError){
        let invalid = document.getElementById(strError);
            if(invalid){
                invalid.remove();
            }
    }

}





