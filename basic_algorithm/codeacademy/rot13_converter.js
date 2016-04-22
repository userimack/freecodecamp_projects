// Paste the rotate function here:

String.prototype.rotate = function(n) { // n is an integer
    n %= this.length; // too large numbers: modulo
    var cut = n < 0 ? -n : this.length - n; // cutting point
    return this.substr(cut) + this.substr(0,cut);
};

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var rot13_dict = {};
var first= (alphabet.substr(0,13) + alphabet.substr(13).toLowerCase()).split("");
var second= (alphabet.substr(13) + alphabet.substr(0,13).toLowerCase()).split("");

for(var i=0;i< first.length;i++){
rot13_dict[first[i]] = second[i];
}

for(var i=0;i<first.length;i++){
rot13_dict[second[i]] = first[i];
}

var rot13_map = function(value){
     return rot13_dict[value] || value ;
};

var rot13 = function (arg) {
    return arg.split("").map(rot13_map).join("");
}

// Now use it:
console.log(rot13("N pnegbba."));
