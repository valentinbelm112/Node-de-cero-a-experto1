const fs = require("fs");

const guardarDB = (data) => {
  const archivo = "./db/data.json";
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  const archivo = "./db/data.json";
  if (!fs.existsSync(archivo)) {
    return null;
  }
  const info = fs.readFileSync(archivo, { encoding: "utf-8" });
  const data = JSON.parse(info);
  console.log(data);
  return data;
};

module.exports = {
  guardarDB,
  leerDB,
};
