const inquirer = require("inquirer");

require("colors");

require("colors");
const menuOpt = [
  {
    type: "list",
    name: "opcion",
    message: "¿que desea hacer",
    choices: [
      {
        value: "1",
        name: "1.Buscar ciudad",
      },
      {
        value: "2",
        name: "2.Histotial",
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
      name: "ciudad",
      mensaje,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingresa un valor";
        }
        return true;
      },
    },
  ];

  const { ciudad } = await inquirer.prompt(question);
  return ciudad;
};

const listarLugares = async (lugares = []) => {
  const choices = lugares.map((lugar, idx) => {
    const i = `${idx + 1}`;

    return {
      value: lugar.id,
      name: `${i} ${lugar.nombre}`,
    };
  });
  const preguntas = {
    type: "list",
    name: "id",
    message: "Selecciones Lugar",
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
  listarLugares,
  confirmar,
};
