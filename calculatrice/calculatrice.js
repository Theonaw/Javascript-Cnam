function afficher(valeur){
    if(valeur == "="){
        document.getElementById("resultat").value = eval(document.getElementById("resultat").value);
    }else if(valeur == "C"){
        document.getElementById("resultat").value = "";
    }else if(valeur == "supp"){
        document.getElementById("resultat").value = document.getElementById("resultat").value.slice(0,-1);
    }else if(valeur == "mod"){
        document.getElementById("resultat").value += "%";
    }else if(valeur == "x²"){
        var a = document.getElementById("resultat").value;
        document.getElementById("resultat").value = "";
        document.getElementById("resultat").value += `Math.pow(${a},2)`;
    }else if(valeur == "exp"){
        var a = document.getElementById("resultat").value;
        document.getElementById("resultat").value = "";
        document.getElementById("resultat").value += `Math.exp(${a})`;
    }else if(valeur == "racine"){
        var a = document.getElementById("resultat").value;
        document.getElementById("resultat").value = "";
        document.getElementById("resultat").value += `Math.sqrt(${a})`;
    }else if(valeur == "log"){
        var a = document.getElementById("resultat").value;
        document.getElementById("resultat").value = "";
        document.getElementById("resultat").value += `Math.log10(${a})`;
    }else{
        document.getElementById("resultat").value += valeur;
    };
};