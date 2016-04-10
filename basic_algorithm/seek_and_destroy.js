function destroyer(arr) {
  // Remove all the values
 console.log(arguments.length);
  var args = Array.prototype.slice.call(arguments);
  console.log(args);
  
  function isIt(val){
    //console.log(arguments[1]);
    return (val!=args[1] && val !=args[2] && val!=args[3]) ;
    
  }
  return arr.filter(isIt,args);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);