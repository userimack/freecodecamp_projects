function truncateString(str, num) {
  // Clear out that junk in your trunk
  var newArr = str.split("");
  var length = newArr.length;
  
  if (length > num ){
   endPoint = num-3;
    if(num-3 < 0){
      endPoint = num;
    }
      
    return str.slice(0,endPoint) + "...";
  }
  else
  {
    return str;
  }
  
}
  

truncateString("A-tisket a-tasket A green and yellow basket", 11);
