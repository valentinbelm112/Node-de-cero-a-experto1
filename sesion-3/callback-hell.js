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

  if (empleado) {
    callback(null, empleado.nombre);
  } else {
    callback(`El empleado con id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id);

  if (salario) {
    callback(null, salario.salario);
  } else {
    callback(`El salario con id ${id} no existe`);
  }
};

getEmpleado(3, (err, empleado) => {
  if (err) {
    console.log("!ERROR");
    return console.log(err);
  }
  getSalario(3, (err, salario) => {
    if (err) {
      console.log("!ERROR");
      return console.log(err);
    }
    console.log("El empleado:", empleado, "tiene un salario", salario);
  });
});
