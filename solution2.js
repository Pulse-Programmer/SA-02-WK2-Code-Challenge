function arrGenerator(num1, num2) {
  const numArr = []; //creates an empty array

  //checks for difference between entered arguments and fills up the created array with the integers
  while (num1 <= num2) {
    numArr.push(num1);
    num1 += 1;
  }

  return numArr; //returns the array filled with integers between the entered arguments
}

//test code
console.log(arrGenerator(-2, 10));
