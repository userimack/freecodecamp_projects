function rot13(str) { // LBH QVQ VG!
   return str.replace( /[A-Za-z]/g , function(c) {
    return String.fromCharCode( c.charCodeAt(0) + ( c.toUpperCase() <= "M" ? 13 : -13 ) );
  } );
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
