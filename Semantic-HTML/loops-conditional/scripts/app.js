console.log('lets doooo it');

/*

CONTROL FLOW
***********************************************************************************
Conditionals - Skip lines of code or entire blocks
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