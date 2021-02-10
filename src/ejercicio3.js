let combinarNombres = function(nombre, apellido) {
  let person = {
    nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1),
    apellido: apellido.charAt(0).toUpperCase() + apellido.slice(1)
  };
  return person;
};
console.log(combinarNombres("jose", "Hernandez"));