// Method 1**********************************


function mutation(arr) {
  var newArr = arr[0].split('');
  var obj = arr[1].split('');
  var flag=true;
  
 toLower = function(x){ 
  return x.toLowerCase();
};
  newArr=newArr.map(toLower);
  obj=obj.map(toLower);
  
  
  for(var i=0; i < obj.length; i++){
    if( newArr.indexOf(obj[i]) < 0 ) {
      flag=false;
    }
  }
  return flag;
}

//****************************************
// Method 2
function mutation(arr) {
  var newArr = arr[0].split('');
  var obj = arr[1].split('');
  var flag=true;
  
 for(var i=0; i < obj.length; i++){
    if( newArr.indexOf(obj[i].toLowerCase()) < 0  && newArr.indexOf(obj[i].toUpperCase()) < 0 ){
      flag=false;
      }    
  }
  return flag;
}

mutation(["hello", "hey"]);


//mutation(["hello", "hey"]);
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
mutation(["hello", "Hello"])