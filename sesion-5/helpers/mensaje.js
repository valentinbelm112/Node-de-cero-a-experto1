require("colors");

const mostrarMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("=============================".green);
    console.log("Seleciones una opcion".green);
    console.log("================================".green);

    console.log(`${"1.".green} Crear una tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas prendientes`);
    console.log(`${"5.".green} Borrar tarea`);
    console.log(`${"0.".green}salir\n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Selecione una opcion:", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve, reject) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(
      `\nPrecione  ${"ENTER".green} para continuar\n`,
      (opt) => {
        readline.close();
        resolve();
      }
    );
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
