// Change this function so as to reverse strings.
// When given argument "Hello", it should return "olleH".
String.prototype.reverse = function() {
    return this.split("").reverse().join("");
}

// test it:
console.log("hello".reverse().toUpperCase());
