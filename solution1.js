function swapCase(words) {
  if (typeof words === "string") {
    charArr = Array.from(words); //to convert the input string into an array of individual characters

    //swaps the characters in the created array from lowercase to uppercase and vice-versa depending on current case
    let alteredChars = charArr.map((item) => {
      if (item === item.toUpperCase()) {
        return item.toLowerCase();
      } else return item.toUpperCase();
    });

    return alteredChars.join(""); //joins the case altered characters in the array back into a string
  } else return "Error: Entry must be a string";
}

//test code//
console.log(
  swapCase(
    "The Sacrifices Worthy to be made Are Those That lead to Fulfilment",
  ),
);
