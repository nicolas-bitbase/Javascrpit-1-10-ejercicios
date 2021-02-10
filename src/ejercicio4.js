let combinarNombres = function(texto) {
  let person = texto.charAt(0).toUpperCase() + texto.slice(1);

  return person;
};
console.log(combinarNombres("hola que tal"));