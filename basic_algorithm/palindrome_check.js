function palindrome(str) {
  // Good luck!
  var res = (str.replace(/[^a-z0-9]+/gi,"")).toLowerCase();
  
  var newVal = (res.split('').reverse().join('')).toLowerCase();
  
  if (res == newVal){
    return true;
  }
  else{
    return false;
  }
}

palindrome("eye");
