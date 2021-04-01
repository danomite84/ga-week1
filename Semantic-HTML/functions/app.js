console.log('HELLO');

// FUNCTIONS

// reuseable code that performs an action

// function logAlert() {
//     console.log('Ah ah ah ... you didnt say the magic word.');

// }

//Function Call
// Nothing happens until its called

// logAlert();
// logAlert();
// logAlert();
// logAlert();

// Why Functions

// Code Reusability
//DRY
// Organize Logic

// function allows us to organize our code

// function getTopMemes() {
//     // code that gets all memes
// }

// function printMemes() {
//     // code that prints the memes
// }

// function handleMemeClicks() {
//     // gives that meme a thumbs up
// }

////////////////////////////////////////
// We want our function name to be a verb
// the function names describes what the function are doing
function printGreeting(name)/* parameter */ {
    console.log(`Welcome ${name}`) //backticks for different string interpilation. 
    // lines after function is called. this is a define or FUNCTION DECLARATION
}

// THIS FUNCTION TAKES IN AN INPUT
// IN THE FUNCTION DEFINITION WE REFER TO THE INPUT AS A "PARAMETER"

// WE CAN REUSE THIS FUNCTION AS MANY TIMES AS WE WANT PASSING IT
// DIFFERENT "ARGUMENT" EACH TIME
// WHEN CALLING THE FUNCTION WE REFER TO THE INPUTS AS ARGUMENTS

printGreeting('Brittany');
printGreeting('Kyle');
printGreeting('Laura');
printGreeting('Min');
printGreeting('Cirrus');

/////////////////////////////////////////////////
// WRITE A FUNCTION THAT TAKES PERSONS NAME AND 1 OTHER PARAMETER THAT
// SHOULD BE A STRING AND CONCATENATE  THEM TOGETHER

// We can dine a function that takes multiple parameters
function getTheDifference(a, b) {
    console.log(a - b);
}

// The order of the arguments matter here
//For the first cuntion call 2 is passed at "a" and 1 as "b"
// const theDifference = getTheDifference(2, 1);
// console.log('theDifference:', theDifference);
// 1
// getTheDifference(1000, 5);

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// function practiceDan (a, b) {
//     console.log( a + b);
// }

// practiceDan(5 + 10);

// function divideDan(a, b);
// console.log (a % b);

// WE can have a function return a value
function getGreeting(name) {
    return `Welcome ${name}`;
}
// Now the value from that function call can be stored in a Variable
const greeting = getGreeting('Pascal');

console.log('greeting:', greeting);
// greeting: Welcome Pascal


// If we dont explicity return a value a function with return 'undefined'
// Review above functions where we dont explicity return anything ^^^

/////////////////////////////////////////////////
/////////////////////////////////////////////////
function getTheSum(a, b) {
    return a + b;
}

const sum1 = getTheSum(1, 2);
const sum2 = getTheSum(4, 5);
const sum3 = getTheSum(sum1, sum2);
// console.log('sum3', sum3);

// We can even pass function calls into function calls
// EX. the above can be written like so..
const sum4 = getTheSum(getTheSum(1, 2), getTheSum(4, 5));
console.log(sum4);

//////////////////////////////////////
// get movie quotes

function getMovieQuote(movie) {
    if (movie === 'Zoolander') {
        return 'The building has to be at least... 3 times bigger than this!';
    } else if (movie === 'Blazing Saddles') {
        return 'Yeah, but i shoot with this hand.';
    } else if (movie === 'Office Space') {
        return 'Excuse me. I believe you have my stapler'
    } else {
        return 'We don\'t know that movie';
    }
}

const movieQuote = getMovieQuote('Zoolander');

console.log('movieQuote:', movieQuote);

// WITH A SWITCH STATEMENT
    // break;
        // if there is no return value
function getMovieQuote(movie) {
    switch(movie) {
        case 'Zoolander':
            return 'The building has to be at least... 3 times bigger than this!';

        case 'Blazing Saddles':
            return 'Yeah, but i shoot with this hand.';

        case 'Office Space':
            return 'Excuse me. I believe you have my stapler.';
        default:
            return 'We don\'t know about that movie.';
            
    }
}