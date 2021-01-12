// EXO 1

// 1.1

// let demande = prompt("Valeur ?")

// while (demande.length == 0) {
//     demande = prompt("Valeur ?")
// }
// console.log(demande);

// 1.2

// let nb = parseInt(prompt("Nombre ?"))

// while (nb < 10) {
//     nb = parseInt(prompt(`${nb} est plus petit que 10. Nombre ?`))
// } 
// console.log(nb);

// EXO 2

// 2.1

// let compt = 0

// while (compt <= 11) {
//     if (compt % 2 == 1) {
//         console.log(compt);
//     };
//     compt++
// }

// 2.2

// let prenom = prompt("Prénom ?")
// let prenomTaille = prenom.length
// let compt = 0

// while (compt < prenomTaille) {
//     console.log(prenom);
//     compt++
// }

// 2.3

// let prenom = prompt("Prénom ?")
// let prenomTaille = prenom.length
// let compt = 0

// while (compt < prenomTaille) {
//     console.log(prenom.charAt(compt));
//     compt++
// }

// EXO 3

// 3.1

// let prenom = prompt("Prénom ?")
// let prenomTaille = prenom.length
// let compt = 0

// while (compt < prenomTaille) {
//     if (compt % 2 == 1) {
//         console.log(`${prenom.charAt(compt).toUpperCase()} => à l'indice ${compt}`);
//     } else {
//         console.log(`${prenom.charAt(compt).toLowerCase()} => à l'indice ${compt}`);
//     }
//     compt++
// }

// 3.2

// let calcul = prompt("Quel est ton calcul ?");
// let condition = true;

// while (condition == true) {
//     console.log(Math.ceil(eval(calcul)));

//     let stop = prompt("Veux-tu arrêter");
//     if (stop == "oui") {
//         condition = false
//         console.log("Merci");
//     } else {
//         calcul = prompt("Quel est ton calcul ?");
//     }
// }

// 3.3

let prenom = prompt("Prénom ?")

while (prenom.length < 5) {
    prenom = prompt("Prénom trop court, + long svp")
}

if (prenom.length >= 5) {
    console.log(prenom.toUpperCase());
}
