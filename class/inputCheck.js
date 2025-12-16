export class InputCheck{

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

            if(periodeDebutStamp > periodeFinStamp){
                this.errorDisplayer(strError);
            }else{
                this.removeError(strError);
            }
        })
    }

    inputError(value, strError){
    if(value === "" || value === null){
            this.errorDisplayer(strError);
        }else{
            this.removeError(strError);
        }
    }

    dateError(value, strError){
        const valueStamp = Date.parse(value);
        
        if(value === "" || value === null){
            this.errorDisplayer(strError);
        }else{
            if(valueStamp < Date.now()){
                this.errorDisplayer(strError);
            }else{
                this.removeError(strError);
            }
        }
    }


    timeError(endHour, strError){
        let [hour,minute] = endHour.split(":");
        const endHourStamp = hour * 60 + minute;
        console.log(endHourStamp);
        
        const startHour = document.getElementById("horraireDebut");
        let [hour1,minute1] = startHour.value.split(":");
        const startHourStamp = hour1 * 60 + minute1;
        console.log(startHourStamp);
        if(endHourStamp === 0 || isNaN(endHourStamp) || startHourStamp === 0 || isNaN(startHourStamp)){
            this.errorDisplayer(strError);
        }else{
            if(endHourStamp < startHourStamp){
            this.errorDisplayer(strError);
        }else{
            this.removeError(strError);
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





