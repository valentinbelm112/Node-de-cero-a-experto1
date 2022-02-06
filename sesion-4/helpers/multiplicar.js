const fs = require("fs");
const crearArchivo = (base) => {
  return new Promise((resolve, reject) => {
    const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let salida = "";
    try {
      valores.map((e) => {
        salida += `${base} X ${e}=${base * e}\n`;
      });

      fs.writeFileSync(`tabla-${base}.txt`, salida);
      resolve("tabla creada");
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = crearArchivo;
