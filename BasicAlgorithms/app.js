//!EJERCICIO 1

let myFavorite= "Hulk";
let x= 50;
let h= 5
let y= 10;
let z= h+y;

//!EJERCICIO 2
//1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
character.age= 25;
console.log(character);

// Declara 3 variables con los nombres y valores siguientes 
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let	age = 24; 

// 	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
let frase= `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`
console.log(frase);
// Dado el siguiente javascript, imprime con un console.log la suma del precio de
// ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price+toy2.price); 

// 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000 
// y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad 
// basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
globalBasePrice= 25000;

const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
car1.finalPrice = car1.basePrice+globalBasePrice;

const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
car2.finalPrice = car2.basePrice+globalBasePrice;


console.log(car1, car2);



//!EJERCICIO 3

console.log(10*5);

console.log(10/2);

console.log(15%9);

let p= 10;
let j=5;
let o= p+j;
console.log(o);

let c= 10;
let m= 5;
let i= c*m;
console.log(i);

//!EJERCICIO 4

// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

// 1.2 Cambia el primer elemento de avengers a "IRONMAN"
console.log(avengers.shift());
console.log(avengers.unshift("IRONMAN"));
console.log(avengers);

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length);

// 1.4 Añade 2 elementos al array: "Morty" y "Summer". 
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
console.log(rickAndMortyCharacters.push("Morty", "Summer"));
console.log(rickAndMortyCharacters[4]);

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
console.log(rickAndMortyCharacters2.pop());
console.log(rickAndMortyCharacters2);
console.log(rickAndMortyCharacters2[0]);
console.log(rickAndMortyCharacters2[4]);


// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const rickandMorty= rickAndMortyCharacters3.splice(1,1);

console.log(rickAndMortyCharacters3);


