// // 1

// console.log(typeof (1 + 2));
// console.log(typeof (4 / 2 * 2));
// console.log(typeof (-4 / (2 * 2)));
// console.log(typeof (5 / 2));
// console.log(typeof (5 % 2));
// console.log(typeof (1 / 0));
// console.log(typeof (1.0 / 2.5));
// console.log(typeof (1 + 3.6));
// console.log(typeof (1.2 + 3.4));

// // 2

// console.log(typeof (Math.sqrt(4.0)));
// console.log(typeof (Math.sqrt(4)));
// console.log(typeof (Math.floor(2.6)));
// console.log(typeof (Math.floor(-3.7)));
// console.log(typeof (Math.ceil(2.6)));
// console.log(typeof (Math.ceil(-3.7)));
// console.log(typeof (Math.sqrt(4.000000000000001)));
// console.log(typeof (Math.sqrt(4.00000000000000001)));

// // 3

// console.log(typeof (1 < 2 || 1.1 != 3.2));
// console.log(typeof (2 === 3 && 1.34e+6 - 4.9e-4 > 23.4e+5));
// console.log(typeof (2 > 1 || 3 < 4 & 5 >= 6));
// console.log(typeof ((2 > 1 || 3 < 4) && 5 >= 6));
// console.log(typeof (!2 < 1 || 3 < 4));
// console.log(typeof (!(2 < 1 || 3 < 4)));

// // 4

// // Prevoir un nombre
// typeof (Number("3") + 5);
// typeof ("3" + 5);
// typeof (String(3) + "5");
// typeof (Number("trois") + 5);
// typeof (parseInt("9.6"));
// typeof (parseFloat("9.6"));
// typeof (parseFloat("9.6cm"));
// typeof (Number("9.6cm"));

// // 5

// console.log("Le résultat est : " + (7 * 3));
// //string
// console.log("salut"[0]);
// //string
// console.log("salut".charAt(3));
// //string
// console.log("salut"[3]);
// //string
// console.log("salut"[8]);
// //undefined
// console.log("salut".substring(0, 3));
// //string
// console.log("salut".substring(3, "salut".length - 3));
// //string
// console.log(12345.substring(1, 3)); //Probleme !!!
// console.log("ABC".charCodeAt(0));
// //number
// console.log("ABC".charCodeAt(1));
// //number
// console.log("ABC".charCodeAt(2));
// //number

// console.log("ABC".charCodeAt(3));
// //NaN

// //6

// var p = 5; q = 3 * p;
// console.log(`p vaut ${p} et q vaut ${q}, leur somme fait ${p + q}`);
// console.log(q % p); //vrai

// var tmp;
// tmp = p;
// p = q;
// q = tmp;
// console.log(`p = 5, p != ${p}, q = 15, q != ${q}`)

// p = p / 3;
// q = q * 3;
// console.log(`p doit faire 5 donc p = ${p} et q doit faire 15 donc q = ${q}`)

// //7

// HT = parseFloat(prompt('Donnez moi un prix'));
// var TVA = 0.2; var TTC = HT * TVA; var PRIX = HT + TTC;
// alert(`Votre montant avec TVA est de ${PRIX}`);

// var R = 6; 
// console.log(sphere = ((4/3)*Math.PI*R**3));

// var note = parseFloat(prompt('Donnez moi une note étrangère'));
// var mention;
// var note1;
// if(note >= '1.0' && note <= '2.0'){
//     mention = 'mention très bien';
//     if(note == '1.0'){
//         note1 = '20';
//     }else if(note == '1.1'){
//         note1 = '19';
//     }else if(note >= '1.2' && note <= '1.3'){
//         note1 = '18';
//     }else if(note >= '1.4' && note <= '1.7'){
//         note1 = '17';
//     }else if(note >= '1.8' && note <= '2.0'){
//         note1 = '16';
//     };
// }else if(note >= '2.1' && note <= '2.7'){
//     mention = 'mention bien';
//     if(note >= '2.1' && note <= '2.3'){
//         note1 = '15';
//     }
// }
// alert(`Votre note est de ${note} dans votre pays et en france elle est de ${note1} avec une ${mention}.`);

// var a = parseFloat(prompt('Donne moi le premier chiffre'));
// var ope = prompt('Donnez moi un oppérande (+, -, *, /)');
// var b = parseFloat(prompt('Donne moi le second chiffre'));
// var res;
// if (ope == '+') {
//     res = (a + b);
// } else if (ope == '-') {
//     res = (a - b);
// } else if (ope == '*') {
//     res = (a * b);
// } else if (ope == '/') {
//     res = (a / b);
// };
// alert(`le résultat est de ${res}.`);

// var nb = parseInt(prompt('Donnez moi un chiffre entier'));
// var res = 1;
// for(var i = 1 ; i < nb + 1 ; i++){
//     res = res * i;
// }
// alert(`mon nombre est ${res}`);

// var nb1 = parseFloat(prompt('Donnez moi un nombre'));
// do{
// var nb2 = parseFloat(prompt(`Donnez moi un chiffre plus petit que ${nb1}`));
// }while(nb1 <= nb2);
// alert(`${nb1} est plus grand que ${nb2}.`);

// for(var i = 20; i > 0; i-=2){
//     if(i == 14){
//         continue;
//     }else if(i == 10){
//         document.write('100 <br>');
//     }else{
//         document.write(`${i}<br>`);
//     };
// };

// var chiffre = parseInt(prompt('Donnez moi un chiffre entier.'));
// for(var i = 1; i <= 10; i++){
//     res = chiffre * i;
//     document.write(`${chiffre} * ${i} = ${res} <br>`);
// }

// for(j = 1; j <= 15; j++){
// for(var i = 1; i <= 10; i++){
//     res = j * i;
//     document.write(`${j} * ${i} = ${res} <br>`);
// };
// document.write("<br>");
// };

// var nb = parseInt(prompt('Donner moi un nombre')); var res = 0; var i = 1;
// while(i <= nb){
//     res = res + i;
//     i++;
// }
// document.write(res);

// var nb = 5; var som = 0; var moy = 0;
// for (var i = 1; i <= nb; i++) {
//     var note = parseFloat(prompt('Entrer un nombre'));
//     som += note;
// }
// moy = som / nb;
// document.write(`Votre moyenne est de ${moy}.`);

// var S1 = "NFA041 Javascript";
// var l = S1.length;
// for (var i = 0; i < l; i++) {
//     document.write(S1.charAt(i) + "<br>");
// };

// var S1 = "NFA041 Javascript";
// var l = S1.length;
// for (var i = l - 1; i >= 0; i--) {
//     document.write(S1.charAt(i) + "<br>");
// };

// function moyenne(nb){
//     var som = 0; var moy = 0;
//     for (var i = 1; i <= nb; i++) {
//         var note = parseFloat(prompt('Entrer un nombre'));
//         som += note;
//     }
//     moy = som / nb;
//     document.write(`Votre moyenne est de ${moy}.`);
// }
// var nb = parseInt(prompt('Donnez moi combien de fois vous voulez répéter.'));
// moyenne(nb);

// function estPremier(nb){
//     if(isNaN(nb)) return false;
//     for(var i = 2; i <= nb; i++){
//         if((nb % i == 0)&&(nb !== 2)){
//             return false;
//         }else{
//             return true;
//         }
//     }
// }
// var nb = parseFloat(prompt('Donner moi un nombre pour savoir si il est un nombre premier.'))
// alert(estPremier(nb));

// function dateCourante(sep){
//     var d = new Date();
//     var j = d.getDate();
//     var m = d.getMonth()+1;
//     var a = d.getFullYear();
//     return j + sep + m + sep + a + '<br>';
// };

// document.write(dateCourante('/'));
// document.write(dateCourante('-'));

// function getDayInMonth(m, y){
//     return new Date(y, m, 0).getDate();
// }
// document.write(getDayInMonth(2, 2024));

// function login(dem){
//     if(dem == "login"){
//         var a = prompt(`Demander le ${dem}.`);
//         if(a =="prof" && a != null){
//             login("mot de passe");
//         }else if (a != null){
//             login("login"); 
//         }
//     }else if(dem == "mot de passe"){
//         for(i = 3; i>0; i--){
//             var a = prompt(`Demander le ${dem}, ${i} essaies restants.` );
//             if(a == "abcd"){
//                 login("prénom");
//                 break;
//             }
//         }
//         if (i == '0')alert('Erreur !!!');
//     }else if(dem == "prénom"){
//         do{
//             var a = prompt(`Demander le ${dem}`);
//             var b;
//             if(a == "" || a == "null" || a != isNaN || a == "e"){
//             break;
//             }else{
//                 b = confirm(`Votre prénom est bien ${a} ?`);
//             }
//         }while(b == false);
//         if(b == true){
//             document.write(`Merci de votre visite ${a}.`);
//         }else{
//             document.write('revoit ton code <br>');
//             document.write(typeof(a));
//         }
//     }
// };
// login("login")
