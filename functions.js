/**
 * Functions
 */

// Number.toFixed() formats decimal numbers by rounding and padding
function printAmount() {
    console.log(amount.toFixed(2));
}

var amount = 99.99;
printAmount();
amount *= 2;
printAmount();

console.log(Math.PI.toFixed(4));

function foo(b) {
    a *= 2;
    a = a + b;
    return a / 2;
}

var a = 10;
var b = foo(5);

console.log(a);
console.log(b);