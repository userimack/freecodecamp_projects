function sumAll(arr) {
  var sum = 0;
  for(var i=Math.min.apply(null,arr);i<=Math.max.apply(null,arr);i++){
     sum+= i;
  }
  return sum;
}

sumAll([1, 4]);
sumAll([5, 10])