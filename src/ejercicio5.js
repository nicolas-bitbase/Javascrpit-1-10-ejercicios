let nombres = ["nico", "alex", "adri", "christian"];
let apellidos = ["Balcells", "Fernandez", "Llorenc", "Bono"];
let edades = [23, 8, 18, 12];

let combinarNombres = function(nombres, apellidos) {
  let nombreCompletosMayores = [];
  let nombreCompletosMenores = [];
  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let apellido = apellidos[i];
    let edad = edades[i];
    let person = {
      nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
      apellido: apellido.charAt(0).toUpperCase() + apellido.slice(1),
      edad: edad
    };
    if (edad >= 18) {
      nombreCompletosMayores.push(person);
    } else {
      nombreCompletosMenores.push(person);
    }
  }
  console.log(nombreCompletosMayores);
  console.log(nombreCompletosMenores);
};
combinarNombres(nombres, apellidos);