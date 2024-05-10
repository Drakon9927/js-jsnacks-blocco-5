// Snack 1 
// const zucchine = [
//     {
//         peso: '3',
//         lunghezza: '4',

//     }, {
//         peso: '5',
//         lunghezza: '2',

//     }, {
//         peso: '9',
//         lunghezza: '9',

//     }, {
//         peso: '1',
//         lunghezza: '2',

//     }, {
//         peso: '2',
//         lunghezza: "1",

//     },
//     {
//         peso: '6',
//         lunghezza: '8',

//     }, {
//         peso: '3',
//         lunghezza: '1',

//     }, {
//         peso: '4',
//         lunghezza: '4',

//     }, {
//         peso: '8',
//         lunghezza: '9',

//     }, {
//         peso: '4',
//         lunghezza: "2",

//     }
// ];

// let pesoTotale = 0;

// for (let i = 0; i < zucchine.length; i++) {
//     pesoTotale += parseInt(zucchine[i].peso);
// }

// console.log(`Il peso totale delle zucchine è: ${pesoTotale} kg`);


// Snack 2 
// const zucchine = [
//     {
//         peso: '23',
//         lunghezza: '4',

//     }, {
//         peso: '5',
//         lunghezza: '22',

//     }, {
//         peso: '29',
//         lunghezza: '9',

//     }, {
//         peso: '1',
//         lunghezza: '2',

//     }, {
//         peso: '22',
//         lunghezza: "21",

//     },
//     {
//         peso: '6',
//         lunghezza: '18',

//     }, {
//         peso: '23',
//         lunghezza: '1',

//     }, {
//         peso: '4',
//         lunghezza: '4',

//     }, {
//         peso: '28',
//         lunghezza: '29',

//     }, {
//         peso: '4',
//         lunghezza: "2",

//     }
// ];

// zucchineCorte = [];
// zucchineLunghe = [];

// for (let zucchina of zucchine) {
//     if (zucchina.lunghezza < 15) {
//         zucchineCorte.push(zucchina);
//     } else {
//         zucchineLunghe.push(zucchina);
//     }
// }

// console.log(zucchineCorte, zucchineLunghe);

// pesoTotaleCorte = 0
// pesoTotaleLunghe = 0

// for (let i = 0; i < zucchineCorte.length; i++) {
//     pesoTotaleCorte += parseInt(zucchineCorte[i].peso);
// }

// for (let i = 0; i < zucchineLunghe.length; i++) {
//     pesoTotaleLunghe += parseInt(zucchineLunghe[i].peso);
// }

// console.log("Le zucchine corte pesano: " + pesoTotaleCorte + " kg", "Le zucchine lunghe pesano: " + pesoTotaleLunghe + " kg");

// Snack 3

// function invertiStringa(str) {
//     return str.split('').reverse().join('');
//   }

//   console.log(invertiStringa(("reverse")));

// Snack 4 

let aUno = ["a", "b", "c", "d"];
let aDue = ["1", "2", "3", "4"];
let aTre = [];

for (let i = 0; i < aUno.length; i++) {
    aTre.push(aUno[i]);
    aTre.push(aDue[i]);
}

console.log(aTre);