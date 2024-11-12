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
            if (sexe[i].value == 'femme') {
                sexeIMG = 1;
            } else {
                sexeIMG = 0;
            };
            if (age >= 65) {
                if (res.toFixed(2) < 25 - sexeIMG) {
                    document.getElementById('final2').value = "Insuffisance pondérale"
                } else if (res.toFixed(2) >= 25 - sexeIMG && res.toFixed(2) < 30 - sexeIMG) {
                    document.getElementById('final2').value = "Poids normal"
                } else if (res.toFixed(2) >= 30 - sexeIMG && res.toFixed(2) < 35 - sexeIMG) {
                    document.getElementById('final2').value = "Surpoids"
                } else if (res.toFixed(2) >= 35 - sexeIMG && res.toFixed(2) < 45 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité"
                } else if (res.toFixed(2) > 45 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité importante"
                };
            } else if (age > 18 && age < 24) {
                if (res.toFixed(2) < 20 - sexeIMG) {
                    document.getElementById('final2').value = "Insuffisance pondérale"
                } else if (res.toFixed(2) >= 20 - sexeIMG && res.toFixed(2) < 25 - sexeIMG) {
                    document.getElementById('final2').value = "Poids normal"
                } else if (res.toFixed(2) >= 25 - sexeIMG && res.toFixed(2) < 30 - sexeIMG) {
                    document.getElementById('final2').value = "Surpoids"
                } else if (res.toFixed(2) >= 30 - sexeIMG && res.toFixed(2) < 40 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité"
                } else if (res.toFixed(2) > 40 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité importante"
                };
            } else if (age > 25 && age < 34) {
                if (res.toFixed(2) < 21 - sexeIMG) {
                    document.getElementById('final2').value = "Insuffisance pondérale"
                } else if (res.toFixed(2) >= 21 - sexeIMG && res.toFixed(2) < 26 - sexeIMG) {
                    document.getElementById('final2').value = "Poids normal"
                } else if (res.toFixed(2) >= 26 - sexeIMG && res.toFixed(2) < 31 - sexeIMG) {
                    document.getElementById('final2').value = "Surpoids"
                } else if (res.toFixed(2) >= 31 - sexeIMG && res.toFixed(2) < 41 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité"
                } else if (res.toFixed(2) > 41 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité importante"
                };
            } else if (age > 35 && age < 44) {
                if (res.toFixed(2) < 22 - sexeIMG) {
                    document.getElementById('final2').value = "Insuffisance pondérale"
                } else if (res.toFixed(2) >= 22 - sexeIMG && res.toFixed(2) < 27 - sexeIMG) {
                    document.getElementById('final2').value = "Poids normal"
                } else if (res.toFixed(2) >= 27 - sexeIMG && res.toFixed(2) < 32 - sexeIMG) {
                    document.getElementById('final2').value = "Surpoids"
                } else if (res.toFixed(2) >= 32 - sexeIMG && res.toFixed(2) < 42 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité"
                } else if (res.toFixed(2) > 42 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité importante"
                };
            } else if (age > 45 && age < 54) {
                if (res.toFixed(2) < 23 - sexeIMG) {
                    document.getElementById('final2').value = "Insuffisance pondérale"
                } else if (res.toFixed(2) >= 23 - sexeIMG && res.toFixed(2) < 28 - sexeIMG) {
                    document.getElementById('final2').value = "Poids normal"
                } else if (res.toFixed(2) >= 28 - sexeIMG && res.toFixed(2) < 33 - sexeIMG) {
                    document.getElementById('final2').value = "Surpoids"
                } else if (res.toFixed(2) >= 33 - sexeIMG && res.toFixed(2) < 43 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité"
                } else if (res.toFixed(2) > 43 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité importante"
                };
            } else if (age > 55 && age < 64) {
                if (res.toFixed(2) < 24 - sexeIMG) {
                    document.getElementById('final2').value = "Insuffisance pondérale"
                } else if (res.toFixed(2) >= 24 - sexeIMG && res.toFixed(2) < 29 - sexeIMG) {
                    document.getElementById('final2').value = "Poids normal"
                } else if (res.toFixed(2) >= 29 - sexeIMG && res.toFixed(2) < 34 - sexeIMG) {
                    document.getElementById('final2').value = "Surpoids"
                } else if (res.toFixed(2) >= 34 - sexeIMG && res.toFixed(2) < 44 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité"
                } else if (res.toFixed(2) > 44 - sexeIMG) {
                    document.getElementById('final2').value = "Obésité importante"
                };
            };
        };
    };
};