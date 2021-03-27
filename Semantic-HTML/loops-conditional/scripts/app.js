console.log('lets doooo it');

/*

CONTROL FLOW
***********************************************************************************
Conditionals - Skip lines of code or entire blocks
    // to check on a Boolean expression and can use it to skip code blocks
    // always work with an if / else statment
Loops - Repeat lines of code
Functions - Saves lines of code to be reused or used later
***********************************************************************************
*/

// expression
// const a = 'apple';

// const doThings = function () {


// }
// expression
// 1 + 2 or true || false
// everything u write down is pretty much an expression

// has to go into a true or false statement

// this is a code block
// {
//     const a = 'apple';
// }

//////

if (true) {
    console.log('The result is true');
}

// TRUTHINESS - true or false?
// easier to define falsy
// 8 types
/*
0
-0
''
null
undefined
false
NaN
*/

// conditionals - skip lines of code

const temp = 60;
const isSunny = false;

// comparison operator
if (temp > 70 && isSunny ) { 
    console.log('Its a beautiful day');
} else if (temp > 70 && !isSunny) {
    console.log('Muggy Day');
}

// else {
//     console.log('fuggin cold!');
// }

////// Logical Operators

// || DOUBLE PIPE => Logical OR - Return the first Truthy value
// && Logical AND - Both sides must be true to return true

// if (false || true)

// maybe if user is admin and we need to log in

const isAdmin = true;
const isEditor = false;

// LOGICAL OR STATEMENT
// ONLY ONE CONDITION HAS TO BE TRUE FOR THE OPERATOR
if ( isAdmin && isEditor) {
    console.log('You get access to resource');
}

// Default Pattern
const num = 1;

const number = num || 2;
// OR IS ONLY INTERESTED IN THE FIRST TRUTHY STATEMENT
// so if u set it to any falsey value or 0 youll get false for the pattern

console.log(number)

/// Comparison Operators

/*

    <, >, <=, >=

*/

const age = 20;

if (age >= 21) {
    console.log('What would u like');
} else {
    console.log("heres yo milk nerd");
}

// ---------- Equality Operators

// loose equality == - how we check loose equality VALUE - with example it becomes true
// strict equality ==== - value and data type are the same - not true
// not equal != - inverse, value is not the same - true
// not strictly equal !== - - value and data type are not the same - not true

const val1 = '1'
const val2 = 1;

if (val1 !== val2) {
    console.log('The value are equal')
} else {
    console.log('The value are not equal');
}

// ------------ LOOPS
// for keyword
// for will allow conditions to work
// need to provide an iterator
    // will use LET for i
    // seperate arguments by semi- colon ;
    // next argument will allow conditions to contuine iterate or looping
    // increment the value of i. ie. i = i + 1 or i++
for (let i = 10; i <= 0; i--) {
    console.log('The value of i = ' + i) // example of concatinations
}

// ----- FizzBuzz

// Print the number 1 - 100 and if the number is divisible by 3 print Fizz, if divisible by 5
// print Buz and if its divisble by both print FizzBuzz

// Modulus operator - Remainder division
// Pretty much Andys example //
for ( let i = 1; i <= 101; i++ ) {
    if ( i % 15 == 0 ) console.log("FizzBuzz");
    else if ( i % 3 == 0) console.log("Fizz");
    else if ( i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

//// break it down
    // can we print out some numbers?
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
// BOOM 1 2 3 

// next step - try out Modulus operator within an IF statement
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}
// This now gives us every number divisible by 3 from 1 to 100 

// next step - lets add another if statement

// to make it clearer to see divisible by 5 ill block out 3
for (let i = 1; i <= 100; i++) {
    // if (i % 3 === 0) {
    //     console.log(i);
    // }
    if ( i % 5 === 0) {
        console.log(i);
    }
}
// YAY only number divs by 5!

// next step, see if we can do divisible by both 3 and 5
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz'); // we know 3 works. lets throw in Fizz
    } else if ( i % 5 === 0) {
        console.log('Buzz'); // we know 3 works. lets throw in Buzz
    } else if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz'); // we know 3 & 5 works. lets throw in FizzBuzz
    } else {
        console.log (i) // If nothing happens then throw this in
    }
}
// It works but it is giving duplicates
// because we are checking the conditions its gonna run all 3 blocks. and that will cause duplicates
// to clean it up we can add the else statement to skip blocks of code like we learned earlier

// ok so the code works for fizz buzz but theres a bit more to clean up.

// we find that fizzbuzz stops at 15. 15 should be FizzBuzz but only shows FIZZ
//the issue is because i % 3 block is first. checking for the other parameters will never happen because its never gonna pass i % 3

// RULE OF THUMB - MOST SPECIFIC CONDITION SHOULD ALWAYS be at the top

// next step
for (let i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz'); // we know 3 works. lets throw in Fizz
    } else if (i % 3 === 0) {
        console.log('Fizz'); // we know 3 works. lets throw in Buzz
    } else if   ( i % 5 === 0) {
        console.log('Buzz'); // we know 3 & 5 works. lets throw in FizzBuzz
    } else {
        console.log (i); // If nothing happens then throw this in
    }
}

// ANDYS EXAMPLE
