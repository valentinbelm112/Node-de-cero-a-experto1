const Deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "regeneracion",
  getNombre: function () {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

console.log(Deadpool.getNombre());

//const nombre = Deadpool.nombre;

//const apellido = Deadpool.apellido;

//const poder = Deadpool.poder;

//console.log(nombre, apellido, poder);

//const { nombre, apellido, poder } = Deadpool;

//console.log(nombre, apellido, poder); //desestructuracion

function imprimeHeroe({ nombre, apellido, poder }) {
  console.log(nombre, apellido, poder); //desestructuracion
}

imprimeHeroe(Deadpool);

const heroes = ["Deaspool", "Superman", "Batman"];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];

//console.log(h1, h2, h3);

const [, , h3] = heroes;
console.log(h3);
