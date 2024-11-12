function img() {
    var sexe = document.getElementsByName('sexe');
    var taille = (document.getElementById('taille').value) / 100;
    var age = document.getElementById('age').value;
    var poids = document.getElementById('poids').value;
    for (i = 0; i < sexe.length; i++) {
        if (sexe[i].checked) {
            let tab = [0, 10.83];
            var res = (1.20 * poids / (taille * taille)) + (0.23 * age) - (tab[i] * 1) - 5.4;
            document.getElementById('final').value = res.toFixed(2);
            if (sexe[0].checked = true){
                sexeIMG = 0;
            }
            if (age >= 65) {
                if(res.toFixed(2) < 25){
                    document.getElementById('final2').value = "Insuffisance pondérale"
                }else if(res.toFixed(2) >= 25 && res.toFixed(2) < 30){
                    document.getElementById('final2').value = "Poids normal"
                }else if(res.toFixed(2) >= 30 && res.toFixed(2) < 35){
                    document.getElementById('final2').value = "Surpoids"
                }else if(res.toFixed(2) >= 35 && res.toFixed(2) < 45){
                    document.getElementById('final2').value = "Obésité"
                }else if(res.toFixed(2) > 45){
                    document.getElementById('final2').value = "Obésité importante"
                };
            } else if (age > 18 && age < 24) {
                if(res.toFixed(2) < 20){
                    document.getElementById('final2').value = "Insuffisance pondérale"
                }else if(res.toFixed(2) >= 20 && res.toFixed(2) < 25){
                    document.getElementById('final2').value = "Poids normal"
                }else if(res.toFixed(2) >= 25 && res.toFixed(2) < 30){
                    document.getElementById('final2').value = "Surpoids"
                }else if(res.toFixed(2) >= 30 && res.toFixed(2) < 40){
                    document.getElementById('final2').value = "Obésité"
                }else if(res.toFixed(2) > 40){
                    document.getElementById('final2').value = "Obésité importante"
                };
            }else if (age > 25 && age < 34) {
                if(res.toFixed(2) < 21){
                    document.getElementById('final2').value = "Insuffisance pondérale"
                }else if(res.toFixed(2) >= 21 && res.toFixed(2) < 26){
                    document.getElementById('final2').value = "Poids normal"
                }else if(res.toFixed(2) >= 26 && res.toFixed(2) < 31){
                    document.getElementById('final2').value = "Surpoids"
                }else if(res.toFixed(2) >= 31 && res.toFixed(2) < 41){
                    document.getElementById('final2').value = "Obésité"
                }else if(res.toFixed(2) > 41){
                    document.getElementById('final2').value = "Obésité importante"
                };
            }else if (age > 35 && age < 44) {
                if(res.toFixed(2) < 22){
                    document.getElementById('final2').value = "Insuffisance pondérale"
                }else if(res.toFixed(2) >= 22 && res.toFixed(2) < 27){
                    document.getElementById('final2').value = "Poids normal"
                }else if(res.toFixed(2) >= 27 && res.toFixed(2) < 32){
                    document.getElementById('final2').value = "Surpoids"
                }else if(res.toFixed(2) >= 32 && res.toFixed(2) < 42){
                    document.getElementById('final2').value = "Obésité"
                }else if(res.toFixed(2) > 42){
                    document.getElementById('final2').value = "Obésité importante"
                };
            }else if (age > 45 && age < 54) {
                if(res.toFixed(2) < 23){
                    document.getElementById('final2').value = "Insuffisance pondérale"
                }else if(res.toFixed(2) >= 23 && res.toFixed(2) < 28){
                    document.getElementById('final2').value = "Poids normal"
                }else if(res.toFixed(2) >= 28 && res.toFixed(2) < 33){
                    document.getElementById('final2').value = "Surpoids"
                }else if(res.toFixed(2) >= 33 && res.toFixed(2) < 43){
                    document.getElementById('final2').value = "Obésité"
                }else if(res.toFixed(2) > 43){
                    document.getElementById('final2').value = "Obésité importante"
                };
            }else if (age > 55 && age < 64) {
                if(res.toFixed(2) < 24){
                    document.getElementById('final2').value = "Insuffisance pondérale"
                }else if(res.toFixed(2) >= 24 && res.toFixed(2) < 29){
                    document.getElementById('final2').value = "Poids normal"
                }else if(res.toFixed(2) >= 29 && res.toFixed(2) < 34){
                    document.getElementById('final2').value = "Surpoids"
                }else if(res.toFixed(2) >= 34 && res.toFixed(2) < 44){
                    document.getElementById('final2').value = "Obésité"
                }else if(res.toFixed(2) > 44){
                    document.getElementById('final2').value = "Obésité importante"
                };
            };
        };
    };
};