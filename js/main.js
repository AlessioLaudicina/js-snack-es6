/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*/

const targetDom = document.getElementById('target')

const bici = [
    {
        nome: 'Graziella',
        peso: 30
    },
    {
        nome: 'MontainBike',
        peso: 33
    },
    {
        nome: 'CarbonioBike',
        peso: 15
    },
]

const squadre = [
    {
        nome: 'Inter',
        punti: 0,
        gol: 0,
    },
    {
        nome: 'Juve',
        punti: 0,
        gol: 0,
    },
    {
        nome: 'Milan',
        punti: 0,
        gol: 0,
    },
    {
        nome: 'Napoli',
        punti: 0,
        gol: 0,
    }
]

console.log(squadre)



squadre.forEach(elemento => {
    elemento.punti = numeroCasuale()
    console.log(squadre)
})


function numeroCasuale(){
    const numeroCasuale = Math.floor((Math.random() * 100) + 1);
    return numeroCasuale
}