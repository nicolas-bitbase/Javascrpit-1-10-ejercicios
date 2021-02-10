let myArray = [5, 14, 23, 28, 96, 59, 63];

let myFunction = function(num, numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (num == numbers[i]) {
      return true;
    }
  }
  return false;
};
console.log(myFunction(59, myArray));
