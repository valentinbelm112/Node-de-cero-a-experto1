//

const multiplicar1 = require("./helpers/multiplicar");
console.log(process.argv); //enviando datos por consola node app.js --base=9
const [, , base = "base=5"] = process.argv; //desestrucutracion de obejtos obteniendo el tercer valor
const [, valor] = base.split("=");
console.log(valor);
multiplicar1(valor)
  .then((e) => {
    console.log(e);
  })
  .catch((err) => {
    console.log(err);
  });
