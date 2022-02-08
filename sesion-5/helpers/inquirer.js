const inquirer = require("inquirer");

require("colors");
const menuOpt = [
  {
    type: "list",
    name: "opcion",
    message: "¿que desea hacer",
    choices: ["opt1", "opt2", "opt3"],
  },
];
const inquirerMenu = async () => {
  console.clear();
  console.log("=============================".green);
  console.log("Seleciones una opcion".green);
  console.log("================================".green);
  const opt = await inquirer.prompt(menuOpt);
  return opt;
};

module.exports = {
  inquirerMenu,
};
