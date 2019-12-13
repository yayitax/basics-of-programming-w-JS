/**
 * Loops
 */
a = 10;
while (a > 10) {};

//for(initialization clause; conditional/test clause; update clause)
for (a = 5; a < 10; a++) {
    console.log(a);
}
//for(;;) it will run forever
console.log();
a = 5;
while (true) {
    if (10 <= a) {
        break;
    }

    console.log(a);
    a++;
}