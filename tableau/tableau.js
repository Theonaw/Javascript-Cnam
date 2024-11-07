// document.body.onload = addElement();
// function addElement() {
//     var tableau = ["Abricot (34 kcal pour 100g)","Ananas (50 kcal pour 100g)","Avocat (134 kcal pour 100g)","Clémentine (39 kcal pour 100g)","Compote de pommes (68 kcal pour 100g)","Fruit de la passion (67 kcal pour 100g)","Oranges sanguines (50 kcal pour 100g)","Rôti de veau (175 kcal pour 100g)","Viande hachée (250 kcal pour 100g)","Brie (334 kcal pour 100g)","Chaource (276 kcal pour 100g)","Maroilles (348 kcal pour 100g)"];

//     var l0 = document.getElementById('liste1');
//     // alert(index0);
//     // var index0 = l0.options.selectedIndex; //<----

//     for(i = 0; i < tableau.lenght; i++){
//         // var valeur0 = l0.options[index0].value;
//         // var texte0 = l0.options[index0].text;
//         var option0 = new Option(tableau[i], i);
//         l0.options[l0.options.lenght + 1]= option0;
//     }
// };
var calo = 0; 
function basculer(l1, l2) {
    var index = l1.options.selectedIndex;
    if (index >= 0) {
        var valeur = l1.options[index].value;
        var text = l1.options[index].text;
        var option = new Option(text, valeur);
        l2.options[l2.options.length] = option;
        l1.options[index] = null;
    } else {
        alert("Aucun aliment sélectionné")
    }
    if(l1.id == "liste1"){
        calo += parseFloat(valeur);
        document.getElementById("res").innerHTML = `Votre panier en calories est de ${calo} kcal.`
    }else if(l1.id == "liste2"){
        calo -= parseFloat(valeur);
        document.getElementById("res").innerHTML = `Votre panier en calories est de ${calo} kcal.`
    }
    if (calo == "NaN")
        calo = 0;
}