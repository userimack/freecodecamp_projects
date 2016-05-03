function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
  return a - b;
});
  console.log(arr);
  var count=0;
  for(var i=0; i< arr.length;i++){
    console.log(count);
    if( arr[i]< num )
      count++;
    else 
      return count;
  }
  return count;
}

//getIndexToIns([40, 60], 50);
getIndexToIns([1,2,3,4], 1.5)
//getIndexToIns([5, 3, 20, 3], 5)

//getIndexToIns([2, 5, 10], 15)