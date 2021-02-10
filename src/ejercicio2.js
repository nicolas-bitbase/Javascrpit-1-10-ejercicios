
let nombres = ["nico", "alex", "adri", "christian"]
let apellidos = ["Balcells", "Fernandez", "Llorenc", "Bono"]


let combinarNombres = function(nombres, apellidos) {
  let nombreCompletos = [];
  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let apellido = apellidos[i];
    let person = { nombre: nombre, apellido: apellido };
    nombreCompletos.push(person);
  }
  return nombreCompletos;
};
console.log(combinarNombres(nombres, apellidos));
