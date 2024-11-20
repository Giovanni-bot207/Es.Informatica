let Tasks = [
    {"titolo": "Studiare italiano", "done": false},
    {"titolo": "Giocare a basket", "done": false},
    {"titolo": "Svegliarsi", "done": true},
    {"titolo": "Mangiare", "done": false},
    {"titolo": "Giocare", "done": false}
];

let elencoAzioniSvolte= document.getElementById("ul-done");
let elencoAzioniDaSvolgere= document.getElementById("ul-not-done");

let azioni= "";

Tasks.forEach(task => {
    if(task.done){
        azioniSvolte += "<li>" + task.titolo + "</li>";
    }
    else {
        azioniDaSvolgere += "<li>" + task.titolo + "</li>";
    }
    azioni += "<li>" + task.titolo + "</li>"
})



elencoAzioniSvolte.innerHTML= azioniSvolte;
elencoAzioniDaSvolgere.innerHTML= azioniDaSvolgere;