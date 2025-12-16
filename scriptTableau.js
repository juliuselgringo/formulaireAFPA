const divMotifAbsence = document.getElementById("motifAbsence");

fetch("https://juliuselgringo.github.io/apiFormulaire/formData.json", {
    method:"GET",
})
.then(response => {
    if(!response.ok){
        throw new Error('Erreur réseau: ' + response.status);
    }
    return response.json();
})
.then(data => {
    displayData(data);
})
.catch(error => {
    console.error("Erreur lors de la récupération des données: " + error);
})

function displayData(data){
    const tableMotifAbsence = document.createElement("table");
    const tableTitle = document.createElement("tr");
    const tableTitleLine = document.createElement("td");
    tableTitleLine.classList = "tableMainTitle";
    tableTitleLine.textContent = "Motif de l'absence";
    tableTitleLine.appendChild(tableTitle);
    tableMotifAbsence.appendChild(tableTitleLine);
    
    for(let code in data){
        const ligne = document.createElement("tr");
        const divLigne = document.createElement("div");
        divLigne.id = "ligneTableau";
        const labelLine = document.createElement("td");
        labelLine.classList = "tableTitle"
        labelLine.textContent = String(data[code].title);
        labelLine.style.fontWeight = "bold";
        divLigne.appendChild(labelLine);
        
        for(let option of data[code].option){
            const checkLine = document.createElement("td");
            const checkB = document.createElement("input");
            checkB.setAttribute("type", "radio");
            checkB.setAttribute("name", "motif-absence");
            checkB.value = code;
            checkLine.appendChild(checkB);
            
            const labelCheck = document.createElement("label");
            labelCheck.textContent = option;
            checkLine.append(labelCheck);
            
            divLigne.append(checkLine);
        }
        
        ligne.appendChild(divLigne);
        tableMotifAbsence.appendChild(ligne);
    }
    
    divMotifAbsence.appendChild(tableMotifAbsence);
}