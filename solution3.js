function primeNum(numArr) {
  //conditional check on each number on the array to filter out prime numbers
  return numArr.filter(
    (number) =>
      number === 2 ||
      number === 3 ||
      number === 5 ||
      number === 7 ||
      (number % 2 !== 0 &&
        number % 3 !== 0 &&
        number % 5 !== 0 &&
        number % 7 !== 0 &&
        number !== 1),
  );
}

//test code
console.log(primeNum([1, 2, 3, 4, 5, 6, 17, 27, 37]));
