function chunkArrayInGroups(arr, size) {
 var allArr=[];
  var midArr=[];
   var count =0;
  for (var i=0; i < arr.length;i++){
    //var count =0;
    console.log(count);
    if (count < size ){
      midArr.push(arr[i]);
      //console.log(midArr);
      count++ ;
    }
    else{
      allArr.push(midArr);
      midArr=[];
      count =1;
      midArr.push(arr[i]);
    }
  }
  allArr.push(midArr);
  return allArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
