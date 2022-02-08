//

const multiplicar1 = require("./helpers/multiplicar");
const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error("La base debe ser un numero");
    } else {
      return true; // tell Yargs that the arguments passed the check
    }
  }).argv;

const color = require("colors");
//require("colors");
//console.log(process.argv); //enviando datos por consola node app.js --base=9
//const [, , base = "base=5"] = process.argv; //desestrucutracion de obejtos obteniendo el tercer valor
//const [, valor] = base.split("=");
//console.log(valor);
console.log(/*valor*/ argv);
console.log(argv.base);

multiplicar1(/*valor*/ argv.b, argv.h) // escribir esto por consola:node app -b 3 -l -h=25
  .then((e) => {
    //console.log(e.rainbow);
    console.log(color.blue(e));
  })
  .catch((err) => {
    console.log(err);
  });
