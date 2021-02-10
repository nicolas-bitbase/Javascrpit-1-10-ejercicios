/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let nombres = [
  "nico",
  "alex",
  "adri",
  "christian",
  "juan",
  "isabel",
  "emilio",
  "mercedes",
  "abuelo",
  "PapaBono",
  "Andres",
  "Ruth"
];
let apellidos = [
  "Balcells",
  "Fernandez",
  "Llorenc",
  "Bono",
  "Balcells",
  "Balcells",
  "Fernandez",
  "Fernandez",
  "Balcells",
  "Bono",
  "Balcells",
  "Balcells"
];
let edades = [30, 17, 18, 12, 78, 62, 66, 65, 95, 61, 10, 32];
/*let generaciones = [
  "2a",
  "2a",
  "2a",
  "2a",
  "3a",
  "3a",
  "3a",
  "3a",
  "4a",
  "3a",
  "1a",
  "2a"
];/*

/*let combinarNombres1 = function () {
    let nombreCompletos = [];

    let parsed = "";
    for (let i = 0; i < nombres.length; i++) {
        let nombre = nombres[i];
        let apellido = apellidos[i];
        let edad = edades[i];
        let generacion = generaciones[i];
        let person = {
            nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
            apellido: apellido.charAt(0).toUpperCase() + apellido.slice(1),
            edad: edad,
            generacion: generacion
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
element1.innerHTML = combinarNombres1(nombres, apellidos, edades, generaciones);

let combinarNombres2 = function () {
    let nombreCompletosMayores = [];

    let parsed = "";
    for (let i = 0; i < nombres.length; i++) {
        let nombre = nombres[i];
        let apellido = apellidos[i];
        let edad = edades[i];
        let generacion = generaciones[i];
        let person = {
            nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
            apellido: apellido.charAt(0).toUpperCase() + apellido.slice(1),
            edad: edad,
            generacion: generacion
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
element2.innerHTML = combinarNombres2(nombres, apellidos, edades, generaciones);

let combinarNombres3 = function (nombres, apellidos, edades, generaciones) {
    let nombreCompletosMayores = [];

    let parsed = "";
    for (let i = 0; i < nombres.length; i++) {
        let nombre = nombres[i];
        let apellido = apellidos[i];
        let edad = edades[i];
        let generacion = generaciones[i];
        let person = {
            nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
            apellido: apellido.charAt(0).toUpperCase() + apellido.slice(1),
            edad: edad,
            generacion: generacion
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
element3.innerHTML = combinarNombres3(nombres, apellidos, edades, generaciones);*/

// ejercicio 7

let combinarNombres = function() {
  let nombreCompletos = [];

  for (let i = 0; i < nombres.length; i++) {
    let nombre = nombres[i];
    let apellido = apellidos[i];
    let edad = edades[i];
    //let generacion = generaciones[i];
    let person = {
      nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
      apellido: apellido.charAt(0).toUpperCase() + apellido.slice(1),
      edad: edad
      // generacion: generacion
    };
    nombreCompletos.push(person);
  }
  return nombreCompletos;
};

function separador(nombresCompletos, edat) {
  let nombresCompletosMenores = [];
  let nombresCompletosMayores = [];

  for (let i = 0; i < nombresCompletos.length; i++) {
    let person = nombresCompletos[i];
    if (person.edad < edat) {
      nombresCompletosMenores.push(person);
    } else {
      nombresCompletosMayores.push(person);
    }
  }

  return {
    mayores: nombresCompletosMayores,
    menores: nombresCompletosMenores
  };
}

let nombresCompletos = combinarNombres();
let result = separador(nombresCompletos, 18);
console.log(result);

function arrayObjToString(MyArray) {
  let parsed = "";
  for (let j = 0; j < MyArray.length; j++) {
    var myobj = MyArray[j];

    for (var value in myobj) {
      parsed += value + ": " + myobj[value] + "<li>";
    }
  }
  return parsed;
}

let mayores = arrayObjToString(result.mayores);
let menores = arrayObjToString(result.menores);

let element1 = document.querySelector(".titulo1");
let element2 = document.querySelector(".titulo2");
let element3 = document.querySelector(".titulo3");

element1.innerHTML = mayores + menores;
element2.innerHTML = mayores;
element3.innerHTML = menores;

console.log(result.mayores[0].edad);

let button1 = document.querySelector("#boton-Nombre");
button1.addEventListener("click", function() {
  console.log("click");
  getValueInInput("#new-nombre", nombres);
  getValueInInput("#new-apellido", apellidos);
  getValueInInput("#new-edad", edades);

  let nombresCompletos = combinarNombres();
  let result = separador(nombresCompletos, 18);
  console.log(result);

  let mayores = arrayObjToString(result.mayores);
  let menores = arrayObjToString(result.menores);

  element1.innerHTML = mayores + menores;
  element2.innerHTML = mayores;
  element3.innerHTML = menores;

  console.log(nombres);
});

function getValueInInput(id, donde) {
  let input = document.querySelector(id);
  let nombre = input.value;
  donde.push(nombre);
}
