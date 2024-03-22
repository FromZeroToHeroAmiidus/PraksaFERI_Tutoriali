// .at() - vrne element k se nahaja na podanem indexu

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = 2;
let fruit = fruits.at(index);

function log (something){
    console.log(something);
}

log(fruit)

// concat() - zdruzi dve polji

const polje1 = ["Amko", "Sanko", "Banko"];
const polje2 = ["David", "Manca", "Brigita"];
const vseskupaj = polje1.concat(polje2);

log(vseskupaj);

// constructor - vrne prototip spremenljivke

// fruits ... 
let text = fruits.constructor;
log(text);
let stevilo = 10;
text = stevilo.constructor;
log(text);

// copyWithin() : 
/*
The copyWithin() method copies array elements to another position in an array.

The copyWithin() method overwrites the existing values.

The copyWithin() method does not add items to the array.
*/

let copyPolje = [];
copyPolje = polje1.copyWithin(2,0); // Copy to index 2, all elements from index 0:
log(copyPolje);

// enteries() - dejansko vrne nam neko matriko, kjer imamo clearly videno ostevilcenje

// The entries() method returns an Array Iterator object with key/value pairs:

// [0, "Banana"]
// [1, "Orange"]
// [2, "Apple"]
// [3, "Mango"]

// The entries() method does not change the original array.

const f = fruits.entries();

for (let x of f)
{
    log(x);
}

// every() - metoda k executa funkcijo za vsak element polja
// every() returns true if all elements in an array pass a test (provided as a function)
const ages = [32, 10, 25, 36];
function checkage(age) {
    return age > 18;
}

log(ages.every(checkage));

// .fill() - nafilas array 
// loh cel - loh od kam do kam 

const fruit2 = ["ha", "ho", "he"];
fruit2.fill("Kiwi",1,3);
log(fruit2);
fruit2.fill("Jaoo");
log(fruit2);

// filter()
// - metoda k naredi novo polje z elementi k so passali test
const leta = [15, 60, 33, 11, 5, 32];

function checkAdult(age){
    return age >= 18;
}

const adulti = leta.filter(checkAdult);
log (adulti);

// findIndex() - vrne index kjer se iskan element PRVIC pojavi - če se ne pa -1
// PODATI MORAMO FUNKCIJO JAOOOOOOOO

const buckoti = [11, 20, 20, 20, 50];
result = buckoti.findIndex(checkAdult);
log(result);

// findLast() ... isto sam od zadaj lol

// findLastIndex() ... podobno k find index sam da zadnje pojavljanje v polju ... npr ce je 22 22 22 je result 2

// flat() - zdruzi / concantenates matriko v polje 
// primer : 
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
log(myArr);
log(newArr);

// flatMap()

const myArr1 = [1, 2, 3, 4, 5, 6];
const newArr1 = myArr1.flatMap((x) => x * 2);
log(newArr1);

// forEach()
const idioti = ["Denis", "Ziga", "Crnogorac"];

function povejVse (ime){ // tle bi loh dal se ime, index pa bi dubu loh tud indexe poleg noro 
    console.log("Tole je butl -> " + ime);
}

idioti.forEach(povejVse);



// from - ustvaris array iz stringa

const stringArray = Array.from("Zapornik je zuni po 70% kazni, lepo");
log (stringArray);

// .includes() ... vrne true ce array vsebuje iskan element ... loh das tud od ket naj štarta (default 0)
// polje.includes("kiwi", 2);

// indexOf() - spreminja se od findIndex tko, da tle loh dam element ne rabm dat funkcije oz testa ...

// .isArray() - vrne true če je array podan objekt

// .join() - ZELO pomembna metoda
// zdruzi array (elemente) v string 
// loh tud podas s cim naj poveze npr join(" and ")

let kretenckovi = idioti.join(", ");
log (kretenckovi);

// keys() - blage niam zgleda k neki aray iterator object ... 

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(fruits2);

let text2 = "";
for (let x of keys) {
  text2 += x + "<br>";
}

log(text2);

// length ni () :D

console.log("Fruits2 ma 4 torej koliko elementov ima : " + fruits2.length);
log (fruits2)

// map() - zelo zanimiv - vzames array in ustvaris novi array tk da gres prek danega arraya z neko funkcijo

// of() - ustvaris array iz danih elementov : -> let fruits = Array.of("Banana", "Orange", "Apple", "Mango");

// pop() - removas zadn element v polju (izpise ti ga ) ce ga logas npr c... log(fruits.pop()); al pa shrans nekamm v kak let

// prototype allows you to add new properties and methods to arrays.
// zelo zanumivo ... loh spremenis kake lastnosti polja s funkcijo noro

Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };

  var sadje = ["Banana", "Orange", "Apple", "Mango"];
sadje.myUcase();
log(sadje);

// push() ... - dodas element na konc polja

// reduce ... vzame funkcijo in vrne vsoto kukr pri paralelno k sesteje npr na bazi sum ali pa pomnozi na podlagi *

// reverse() - spremeni vrstni red elementov v olju - SPREMENI dano polje

// shift() - odstrani prvi element

// slice() - odrezes del polja in dobis novega kot del le-tega

const sadjee = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = sadjee.slice(1, 3);
log(citrus);

const myBest = sadjee.slice(-3, -1);
log(myBest);

// splice - dodas loh elemente al pa pobrises na dolocenem mestu (uštuljis)

// toString() - logika ...


let texty = sadjee.toString();
log(texty);

// unshift() - doda elemente na zacetek arraya

// with() - zelo zanimivo - dobis nov array od danega, ki ga popravis ... 
// primer : 
/*
const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
*/

/*  doneeeeeeeeeeeeeeeeeeeeee */