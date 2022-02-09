require("colors");
const {
  inquirerMenu,
  pausa,
  listadoTareasBorrar,
  confirmar,
} = require("./helpers/inquirer");
//const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");
const { leerInput } = require("./helpers/inquirer");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");

console.clear();
const main = async () => {
  console.log("holamundo");
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.cargarTareasFromArray(tareasDB);
  }
  //await pausa();
  do {
    //imprimir el menu
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("Descripcion: ");
        tareas.crearTarea(desc);
        break;
      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listaPendientesCompletadas(true);
        break;
      case "4":
        tareas.listaPendientesCompletadas(false);
        break;

      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        const ok1 = await confirmar("Estas Seguro?");
        if (ok1) {
          tareas.borrarTarea(id);
          console.log("Tarea borrada");
        }

        break;
    }
    guardarDB(tareas.listadoArr);
    await pausa();
  } while (opt !== "0");
};

main();
