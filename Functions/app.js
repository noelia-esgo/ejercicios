//!EJERCICIO 1: BUSCA EL MAXIMO

function sum(numberOne , numberTwo) {
    return numberOne>numberTwo ? numberOne:numberTwo
}
console.log(sum(6,3));

//!EJERCICIO 2:  BUSCAR LA PALABRA MAS LARGA

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(e){
return e.reduce((acc,value)=>{
    return value.length>acc.length?value:acc;
},'');
}

console.log(findLongestWord(avengers));


//!EJERCICIO 3: CALCULAR LA SUMA

const numbers = [1, 2, 3, 5, 45, 37, 58];
let total= numbers.reduce(
function (acumulador,valorActual) {

return acumulador+valorActual;
},0)



console.log(total);

//!EJERCICIO 4: CALCULAR EL PROMEDIO
const numeros = [12, 21, 38, 5, 45, 37, 6];
function promedio(e){
const sum= e.reduce((acc,value)=>acc+value,0);
const pro= sum/e.length;
return pro.toFixed(1);
}

console.log(promedio(numeros));
    

    //!EJERCICIO 5: CALCULAR UN PROMEDIO DE STRING

    const mix = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];



    function sumaMix(array) {
        const total = array.reduce((acc, actual) => {
            if (typeof actual == 'number') {
                return acc + actual; 
            } else if (typeof actual == 'string') {
                return acc + actual.length; 
            } else {
                return acc;
            }
        }, 0);
        
const count = array.filter(item => typeof item === 'number' || typeof item === 'string').length;
return count ? (total / count).toFixed(1) : 0;
    }
    console.log(sumaMix(mix));



//!EJERCICIO 6: VALORES UNICOS

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

let repetidos= duplicates.filter((acc,value)=>{
    return duplicates.indexOf(acc)===value;
}
)
console.log(repetidos);

//!EJERCICIO 7 : BUSCADOR DE NOMBRES

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
let nombre= nameFinder.find(
function finderName(nameFinder) {
    if (nameFinder === 'Logan'){
        console.log('true')
    }else {
        console.log('false')
    }
    
});

  //!EJERCICIO 8: CONTADOR DE REPETICIONES
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

const result ={}
counterWords.forEach((value) => {
result[value] = (result[value] || 0) + 1;
});
console.log(result);

//otra forma

function eliminarDuplicados(e) {
    const unicos = [];
    
    e.forEach(e => {
        if (!unicos.includes(e)) {
            unicos.push(e); 
        }
    });
    return unicos;
    
};




