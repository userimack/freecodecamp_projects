function largestOfFour(arr) {
  // You can do this!
  var max=[];
  
  for (var i=0;i<arr.length;i++ ){
    var tmp= arr[i][0];
    for(var j=0;j<arr.length;j++){       
      if (arr[i][j] > tmp ){
        tmp = arr[i][j];
      }
     }
    max.push(tmp);
  }
  return max;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
