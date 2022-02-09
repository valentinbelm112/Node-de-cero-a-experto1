const inquirer = require("inquirer");

require("colors");
const menuOpt = [
  {
    type: "list",
    name: "opcion",
    message: "¿que desea hacer",
    choices: [
      {
        value: "1",
        name: "1.Crear tarea",
      },
      {
        value: "2",
        name: "2.Listar tareas",
      },
      {
        value: "3",
        name: "3.Listar tareas completadas",
      },
      {
        value: "4",
        name: "4.Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5.Completar tarea(s)",
      },
      {
        value: "6",
        name: "6.Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];
const inquirerMenu = async () => {
  console.clear();
  console.log("=============================".green);
  console.log("Seleciones una opcion".green);
  console.log("================================".green);
  const { opcion } = await inquirer.prompt(menuOpt);
  return opcion;
};

const pausa = async () => {
  const question = {
    type: "input",
    name: "entersd",
    message: `presione ${"enter".green} para continuar`,
  };
  console.log("\n");
  await inquirer.prompt(question);
};

const leerInput = async (mensaje) => {
  const question = [
    {
      type: "input",
      name: "desc",
      mensaje,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingresa un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

const listadoTareasBorrar = async (tareas = {}) => {
  const choices = tareas.map((tarea, idx) => {
    const i = `${idx + 1}`;

    return {
      value: tarea.id,
      name: `${i} ${tarea.desc}`,
    };
  });
  const preguntas = {
    type: "list",
    name: "id",
    message: "Borrar",
    choices,
  };
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
};
