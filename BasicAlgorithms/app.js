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

//!EJERCICIO 5

const number1 = 10;
const number2 = 20;
const number3 = 2;


if (number2/number1 == 2) {
console.log("number2 dividido entre number1 es igual a 2");
};

if (number1 !== number2) {
console.log("number1 es estrictamente distinto a number2");
};

if (number3 != number1) {
console.log("number3 es distinto number1");
};

if (number3 * 5 == number1) {
console.log("number3 por 5 es igual a number1");
};

if (number3 * 5 == number1 && number1 * 2 == number2) {
console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
};

if (number2/2==number1 || number1/5==number3) {
console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
};


//! EJERCICIO 6

// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i <= 9; i++) {
    console.log(i);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.

let numeros= [0,1,2,3,4,5,6,7,8,9]

for (let i = 0; i < numeros.length; i++) 
    if (numeros[i] % 2 === 0){
        console.log(numeros[i]);
    }


// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle 
// y cambia el mensaje en la décima vuelta a 'Dormido!'

let number= [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i < number.length; i++){
if(number[i]===1){
    console.log('Intentando dormir 🐑')
} 
else if (number[i]===2){
    console.log('Intentando dormir 🐑')
}else if (number[i]===3){
    console.log('Intentando dormir 🐑') }
    else if (number[i]===4){
        console.log('Intentando dormir 🐑')}
        else if (number[i]===5){
            console.log('Intentando dormir 🐑')}
            else if (number[i]===6){
                console.log('Intentando dormir 🐑')}
                else if (number[i]===7){
                    console.log('Intentando dormir 🐑')}
                    else if (number[i]===8){
                        console.log('Intentando dormir 🐑')}
                        else if (number[i]===9){
                            console.log('Intentando dormir 🐑')}
                            else if(number[i]===10)
                                console.log('Dormido!!!😪')
                            }

//otra forma

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let e = 0; e < numbers.length; e++) {
    if (numbers[e] === 10) {
        console.log(e, 'Dormido!!!😪');
    } else {
        console.log(e,'Intentando dormir 🐑');
    }
}
                            
                            