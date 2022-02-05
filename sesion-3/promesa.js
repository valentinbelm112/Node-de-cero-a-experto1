const empleados = [
  { id: 5, nombre: "linda" },
  { id: 3, nombre: "maria" },
  { id: 2, nombre: "elizabeth" },
];

const salarios = [
  { id: 6, salario: 1000 },
  { id: 1, salario: 1400 },
  { id: 3, salario: 14500 },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id);
  return new Promise((resolve, reject) => {
    empleado ? resolve(empleado) : reject("No existe el empleado");
  });
  return promesa;
};

const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id);
  return new Promise((resolve, reject) => {
    salario ? resolve(salario) : reject("No existe el salario");
  });
};
/*getEmpleado(5)
  .then((empleado1) => console.log(empleado1))
  .catch((err) => {
    console.log(err);
  });

getSalario(3)
  .then((salario1) => console.log(salario1))
  .catch((err) => {
    console.log(err);
  });*/
/*
getEmpleado(3)
  .then((empleado1) => {
    getSalario(3)
      .then((salario1) =>
        console.log("El empleado ", empleado1, "tiene un salario de:", salario1)
      )
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
*/
getEmpleado(3)
  .then((empleado) => {
    return getSalario(3);
  })
  .then((salario) => {
    console.log(salario.salario);
  });
