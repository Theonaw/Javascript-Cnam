function physique() {
    var sexe = document.getElementsByName('sexe');
    var activite = document.getElementsByName('activite');
    var taille = document.getElementById('taille').value;
    var age = document.getElementById('age').value;
    var poids = document.getElementById('poids').value;
    var nom = document.getElementsByClassName('nom');
    for (i = 0; i < sexe.length; i++) {
        if (sexe[i].checked) {
            for (j = 0; j < activite.length; j++) {
                if (activite[j].checked) {
                    let poidsnb = ["13.707","9.74"];
                    let taillenb = ["492.3","172.9"];
                    let agenb = ["6.673","4.737"];
                    let sexenb = ["77.607","667.051"];
                    let activitenb = ["1.375","1.56","1.64","1.82"];
                    var res = Math.round(((poidsnb[i] * poids) + (taillenb[i] * (taille / 100)) - (agenb[i] * age) + (sexenb[i] * 1)) * activitenb[j]);
                    document.getElementById('final').innerHTML = `Activité physique ${nom[j].innerText}: ${res} kcal/jour.`;
                }
            }
        }
    }
}