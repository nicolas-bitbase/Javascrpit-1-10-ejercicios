let nombres = ["nico", "alex", "adri", "christian"];
let apellidos = ["Balcells", "Fernandez", "Llorenc", "Bono"];
let edades = [23, 8, 18, 12];

let combinarNombres1 = function(nombres, apellidos, edades) {
  let nombreCompletos = [];

  let parsed = "";
  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let apellido = apellidos[i];
    let edad = edades[i];
    let person = {
      nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
      apellido: apellido.charAt(0).toUpperCase() + apellido.slice(1),
      edad: edad
    };
    nombreCompletos.push(person);
  }
  for (let j = 0; j < nombreCompletos.length; j++) {
    var myobj = nombreCompletos[j];
    for (var value in myobj) {
      parsed += value + ": " + myobj[value] + "<li>";
    }
  }
  return parsed;
};

let element1 = document.querySelector(".titulo1");
element1.innerHTML = combinarNombres1(nombres, apellidos, edades);

let combinarNombres2 = function(nombres, apellidos, edades) {
  let nombreCompletosMayores = [];

  let parsed = "";
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
      console.log(nombreCompletosMayores);
    }
  }
  for (let j = 0; j < nombreCompletosMayores.length; j++) {
    var myobj = nombreCompletosMayores[j];
    for (var value in myobj) {
      parsed += value + ": " + myobj[value] + "<li>";
    }
  }
  return parsed;
};

let element2 = document.querySelector(".titulo2");
element2.innerHTML = combinarNombres2(nombres, apellidos, edades);

let combinarNombres3 = function(nombres, apellidos, edades) {
  let nombreCompletosMayores = [];

  let parsed = "";
  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let apellido = apellidos[i];
    let edad = edades[i];
    let person = {
      nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
      apellido: apellido.charAt(0).toUpperCase() + apellido.slice(1),
      edad: edad
    };

    if (edad < 18) {
      nombreCompletosMayores.push(person);
      console.log(nombreCompletosMayores);
    }
  }
  for (let j = 0; j < nombreCompletosMayores.length; j++) {
    var myobj = nombreCompletosMayores[j];
    for (var value in myobj) {
      parsed += value + ": " + myobj[value] + "<li>";
    }
  }
  return parsed;
};

let element3 = document.querySelector(".titulo3");
element3.innerHTML = combinarNombres3(nombres, apellidos, edades);
