function copier(){
    var entrer = document.getElementById('entrer').value;
    document.getElementById("sortie").value = entrer;
};

// Version 1

// function paysCapital(){
//     var pays = document.getElementsByName('pays');
//     if(pays[0].checked){
//         document.getElementById("capital").value = "Paris";
//     }else if(pays[1].checked){
//         document.getElementById("capital").value = "Madrid";
//     }else if(pays[2].checked){
//         document.getElementById("capital").value = "Lisbone";
//     }else if(pays[3].checked){
//         document.getElementById("capital").value = "Berlin";
//     }else if(pays[4].checked){
//         document.getElementById("capital").value = "Rome";
//     }
// }

// Version 2

function paysCapital(){
    var pays = document.getElementsByName('pays');
    for(i = 0; i < pays.length; i++){
        if(pays[i].checked){
            document.getElementById("capital").value = pays[i].value;
        }
    }
}

function continent(){
    var list = document.getElementById('list');
    var valeur = list.options[list.selectedIndex].value;
    document.getElementById("continent").value = valeur;
}