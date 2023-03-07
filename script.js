// // Øvelse 2
// var tekst = "Hej verden";

// alert(tekst);

// // Øvelse 3
// var start = "Hej "; 
// var slut = "verden"; 
// var samlet = start + slut; 

// // Øvelse 4
// var tal1 = 2; 
// var tal2 = 8; 
// var tallet = tal1 + tal2; 

// document.write(tallet);
// Undskriver i øverste venstre

// // Øvelse 5
// var en_tekst = " dette er en tekst ";
// var et_tal = 1337;
// var de_to = en_tekst + et_tal;

// document.write(de_to)

// // Øvelse 6
// var tal3 = 15;
// var tal4 = 5;

// var plus = " " + tal3 + tal4 + " ";
// document.write(plus)
// var minus = tal3 - tal4 + " ";
// document.write(minus)
// var gange = tal3 * tal4 + " ";
// document.write(gange)
// var divideret = tal3 / tal4 + " ";
// document.write(divideret)

// // Øvelse 7
// var tal = prompt("Skriv et tal"); 

// document.write(tal)

// // Øvelse 8
// var nummer = prompt("Skriv et tal")

// if (isNaN(nummer)){
//     alert(nummer + " er IKKE et tal"); 
// } else {
//     document.write(nummer + " er et tal");
// }

// // Øvelse 10
// var skriv_tal = prompt("Skriv et tal");

// while (isNaN(skriv_tal)) {
//     skriv_tal = prompt("skriv et tal");
// };

// document.write(skriv_tal + " er et tal");

// // Øvelse 11
// var tal5 = 50;
// var tal6 = 10;
// var booleans = true

// alert(typeof(tal5));
// alert(typeof(tal6));
// alert(typeof(booleans));

// // Øvelse 12
// var prompt = prompt("Skriv et tal, en tekst, true eller false ")

// alert(typeof(prompt))

// //nej der er ikke forskel det bliver altid string

// // Øvelse 13
// var prompt1 = prompt("skriv et tal");
// var prompt2 = prompt("skriv et andetttal");

// document.write(prompt1*1 + prompt2*1);

// // Øvelse 14
// var i = 1;

// while(i < 5) {
//     document.write(i);
//     i++; 
// };
// // den udskriver 1234

// // Øvelse 15
// var i = 1;

// while(i < 11) {
//     if(i % 2 == 0){
//         document.write("variablens indhold er lige ");
//     } else {
//         document.write("variablens indhold er ulige ");
//     }
//     i++;
// };

// // Øvelse 16
// var tal = prompt("Skriv et tal")

// if (isNaN(tal)) {
//     tal = prompt(tal + " er ikke et tal. Du skal skrive et tal");
//     alert(tal);
// } else {
//     if(i % 2 == 0){
//         document.write("variablens indhold er lige ");
//     } else {
//         document.write("variablens indhold er ulige ");
//     }
// }

// // Øvelse 17
// var j = 1;

// while (j < 5) {
//     document.write("hej verden ");
//     j++;
// }

// Øvelse 18
document.addEventListener("DOMContentLoaded", function() {
    var i = 1;
    while (i < 5) {
        document.getElementById('id').innerHTML += "<p>Tekst</p>"; 
        i++
    }
})