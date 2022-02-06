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

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado:${empleado.nombre} es de ${salario}`;
  } catch (error) {
    throw error; //para que sea capturado por el catch de la promesa con throw
  }
};

//console.log(getInfoUsuario()); //funcion async retorna //Promise { 'Hola Mundo' }
getInfoUsuario(3)
  .then((e) => console.log(e))
  .catch((error) => console.log(error)); //con then
