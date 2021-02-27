/*
PRAVIDLA HRY:

- Hra má dva hráče, kteří se střídají každé kolo
- V každé kole hází hráč kostkou kolikrát chce. Hodnota každého hodu se přičítá k jeho bodů v daném kole.
- Pokud na kostce padne 1, ztrácí všechny body v daném kole a na řadu se dostává hráč dvě.
- Hráč může zvolit "dost", což znamená, že všechny body nahrané v jeho kole se přičtou k jeho celkovým bodům. Poté je na řadě hráč dvě.
- Hra končí jakmile jeden z hráčů dosáhne dopředu určeného počtu bodů (typicky 100 bodů).

*/

let body;
let bodyVKole;
let aktivniHrac;
let kostka;
let koncoveBody;

body = [0, 0];
bodyVKole = 0;
aktivniHrac = 0;
koncoveBody = 25;
kostka = Math.floor(Math.random() * 6) + 1;

document.querySelector('#soucasne-' + aktivniHrac).textContent = kostka;

document.querySelector('.kostka').style.display = "none";
