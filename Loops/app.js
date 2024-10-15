//! EJERCICIO 1: USA INCLUDES

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

let rep = products.filter(e => e.includes('Camiseta'));

console.log(rep);

//!EJERCICIO 2: CONDICIONALES AVANZADOS
// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados 
//añade la propiedad isApproved a true o false
//Una vez lo tengas compruébalo con un console.log.  


const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (const alumn of alumns) {
    if (alumn.T1 + alumn.T2 + alumn.T3 >= 2) {
        alumn.isApproved = true;
    } else {
        alumn.isApproved = false;
    }
}

console.log(alumns);
	
	
	



//!EJERCICIO 3: PROBANDO FOR...OF

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for(const value of placesToTravel){
	console.log(value)
};

//!EJERCICIO 4: PROBANDO FOR..IN
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for(const value in alien){
	console.log(`${alien[value]}`); 
};


//!EJERCICIO 5: PROBANDO FOR


const lugares = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for(let sitios= 0; sitios<lugares.length; sitios++){
	const filtrados= lugares.filter(e=>e.id !== 40 && e.id !== 11);
	console.log(filtrados);
};



//!EJERCICIO 6: MIX FOR..OF E INCLUDES
const toys = [
	{id: 5, name: 'Buzz MyYear'}, 
	{id: 11, name: 'Action Woman'}, 
	{id: 23, name: 'Barbie Man'}, 
	{id: 40, name: 'El gato con Guantes'},
	{id: 40, name: 'El gato felix'}
	]

const filtrarJuguetes= [];
	for(const juego of toys){  //bucle para revisar todos los elementos
		if (juego.name.includes("gato")=== false){  //si  incluye la palabra gato
			filtrarJuguetes.push(juego) //lo eliminamos de la lista
		}
	};

	console.log(filtrarJuguetes);



//! EJERCICIO 7 : FOR...OF AVANZADO


const popularToys = [];
const juguete = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
];

juguete.forEach(toy => {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
});

console.log(popularToys);


