require("colors");
const { inquirerMenu } = require("./helpers/inquirer");

console.clear();
const main = async () => {
  console.log("holamundo");
  let opt = "";

  do {
    opt = await inquirerMenu();
    //  if (opt != 0) await pausa();
  } while (opt !== "0");
};

main();
