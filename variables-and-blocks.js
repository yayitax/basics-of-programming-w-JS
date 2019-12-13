/**
 * Variables and blocks
 */

//Variables should be formally declared before using it

//hoisting
a = 42;
var a;

//Formal declaration
var a = 42;

//Let & const are block scope declarations
let b = 42;
const c = 42;

//Declaring functions
function d() {

}

if (a > 10) {
    a = 10;
}