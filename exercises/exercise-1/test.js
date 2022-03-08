numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(numbers) {
  let str = "(";
  for (let i = 0; i < 3; i++) {
    str += numbers[i];
  }
  str += ") ";

  for (let i = 3; i < 6; i++) {
    str += numbers[i];
  }
  str += "-";
  for (let i = 6; i < numbers.length; i++) {
    str += numbers[i];
  }
  return str;
}

console.log(createPhoneNumber(numbers));
