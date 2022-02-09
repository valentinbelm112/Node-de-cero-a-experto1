const {
  inquirerMenu,
  pausa,
  listadoTareasBorrar,
  confirmar,
  leerInput,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
console.log("Hola mindo");

const main = async () => {
  let opt = "";
  const buesquedas = Busquedas();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const lugar = await leerInput("ciudad: ");
        break;
      case "2":
        break;
      case "3":
        break;
    }

    await pausa();
  } while (opt != 0);
};

main();
