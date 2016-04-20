// Sum of squares of negatives, using a loop:
function sum_squares_negatives_loop(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) { // filter: negatives only
            sum += (array[i] * array[i]); // square & add
        }
    }
    return sum;
}

// Same thing without a loop, using Array methods:
function my_sum_squares_neg(array) {
    return array
        .filter( // filter negative numbers:
            function(n) {
                return n<0; // <-- true if and only if n is negative
            }
        )
              // at this point we have an array of negative numbers
        .map( // map each of these numbers to its square
            function(n) {
                return n * n; // <-- the square of n
            }
        )
                 // now, we have an array of squared numbers
        .reduce( // let’s add them all together!
            function(sum, next) { // each array element in turn is next
                return  sum+=next; // <-- add next (value) to sum
            }, 0 // set sum = 0 initially
        );
}

// test if your function does the same as the loop:
var numbers = [-23, 95, 0, -2, -47];
console.log(sum_squares_negatives_loop(numbers));
console.log(my_sum_squares_neg(numbers));