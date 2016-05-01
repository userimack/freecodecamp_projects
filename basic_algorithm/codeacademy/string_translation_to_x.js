 // This is a dummy, to be refined later
function mapping(character) {
    if (character >= 'A' && character <= 'z') {
        return 'x';
    }
    else return character;
}

function substitute(string) {
    /* your code here */
    return string.split("").map(mapping).join("");
}

// Test your function:
// this should print   "xxxx xx xxxxxxxxxx!"
console.log(substitute("Make me unreadable!"));
 
