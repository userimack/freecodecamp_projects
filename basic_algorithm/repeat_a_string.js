function repeatStringNumTimes(str, num) {
  // repeat after me
  if( num < 0){
    return "";
  }
  var newStr="";
  for(var i=0;i<num;i++){
    newStr+=str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
