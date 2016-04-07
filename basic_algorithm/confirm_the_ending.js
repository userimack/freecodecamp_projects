function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.split(" ").length==1){   
    
    str=str.substr(-1,1);
  }
  else{
    str= str.split(" ");
    str= str[str.length-1]; 

  }
  
  if (target == str ){
         return true;
       }
       else{
         return false;
       }
}

confirmEnding("Bastian", "n");

/*

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.split(" ").length==1){   
    
      str=str.substr(-1,1);
  }
  else{
    str= str.split(" ");
    str= str[str.length-1]; 

  }
    
    //console.log(target.split(""));
 // console.log(str.substr(-1,2));
  //console.log(str);
   if(target.split("").length == 2 ){
      str = str.substr(-2,2);
      //console.log(str);
    }
  
  if (target == str ){
         return true;
       }
       else{
         return false;
       }
}


confirmEnding("Bastian", "n");
*/
