function reverseString(str) {
  newArray = str.split("");
  newArray = newArray.reverse();
  newArray = newArray.join("");
  return newArray;
}

reverseString("hello");