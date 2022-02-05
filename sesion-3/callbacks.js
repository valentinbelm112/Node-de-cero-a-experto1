//setTimeout(function () {
//  console.log("Hola Mundo");
//}, 100);

const getUsuarioById = (id, callback) => {
  const usuario = {
    id, //por que  es redundate en javascript
    nombre: "Valentin",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioById(5, (callback) => {
  console.log(callback.id);
  console.log(callback.nombre);
});

// los callbacks son nada mas que funciones que son envados como argumentos en otras funciones que lo ejecuta
