require("dotenv").config();
//console.log(process.env.Mapbox);
const {
  inquirerMenu,
  pausa,
  listarLugares,
  confirmar,
  leerInput,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
console.log("Hola mindo");

const main = async () => {
  let opt = "";
  const busquedas = new Busquedas();

  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const lugar = await leerInput("ciudad: ");
        //  console.log(lugar);
        const lugares = await busquedas.ciudad(lugar);
        const id = await listarLugares(lugares);
        const lugarSeleccionado = lugares.find((l) => l.id === id);
        console.clear();

        console.log("\nInformación de la ciudad\n".green);
        console.log("Ciudad:", lugarSeleccionado.nombre.green);
        console.log("Lat:", lugarSeleccionado.lat);
        console.log("Lng:", lugarSeleccionado.lng);
        /* console.log('Temperatura:', clima.temp );
       console.log('Mínima:', clima.min );
       console.log('Máxima:', clima.max );
       console.log('Como está el clima:',  clima.desc.green );
        console.log(id);*/
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
