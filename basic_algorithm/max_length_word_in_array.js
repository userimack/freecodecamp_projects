function findLongestWord(str) {
  var arr = str.split(" ");
  var max = arr[0].length;
  for (var i=1;i< arr.length;i++){
    if (max < arr[i].length){
      max = arr[i].length;
    }
  }
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
