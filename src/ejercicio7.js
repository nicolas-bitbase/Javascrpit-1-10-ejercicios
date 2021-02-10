let combinarNombres = function() {
  let nombreCompletos = [];

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
