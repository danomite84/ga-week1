console.log("Hey Dan");

// const favFoods = [];
// Array literal
// []
// Array Construcctor OLD WAY
// new Array()

const favFoods = ['Pizza', 'Rootbeer', 'Steak', 'Tacos', 'Cake', 'Spaghetti' ];


// ACCESSING ARRAY VALUES - Bracket Notation
console.log(favFoods[2]);

// ---- Modifying Array Value

    // Use a Method
favFoods[0] = 'Apples';

// Deleting Array Values
delete favFoods[0];

// Kenny was saying something like delete removes the value of that space. But doesnt remove the value of
// the object? ie. So if 0 was 'delete' the space of Pizza would be empty but the value of pizza is still there?
console.log(favFoods);
// [empty, 'Rootbeer', 'Steak', 'Tacos' ectecetcetcet....];

// We dont do this cuz its dumb
// so we use SPLICE

//SPLICE

// splice can remove, replace and add
//ie.
// const months = [ 'Jan', 'Match', 'April', 'May'];
// months.splice = (1, 0, 'Feb');
// months.splice = (4, 1, 'Aug');
// console.log(months);

////////

favFoods.splice(0, 1);
// Cut out the first item off the array 'Pizza';
favFoods.splice(0, 3, 'Ice Cream');
// cut out 3 items from front on Array


favFoods.shift();
favFoods.pop();


// Adding elements to array

favFoods.push('Sushi');
// pushes at the end of the araray.

favFoods.unshift('Burritos');
// Add new Element to the beginning of the array
// shifting or shifting away from the starting index position
// in this example it shows that you can add sushi and still put something ahead of it or behind 
// by using push again or unshifting before it.
console.log(favFoods);
// console.log(favFoods.length);

// Iteration on Arrays

const numberList = [1,2,3,4,5,6,7,8];
// loop through array and iterate each item

// i = index , incrimentor
// DRY CODE = Dont Repeat Yourself
// for (let i = 0; i <= 7; i++) {
//     // console.log(numberList[i] = numberList[i] * 2);
//     console.log(numberList[i] = numberList[i] * i);
// }
// get numbers in array instead of interger value

// how to make it without HARD CODE¬¬¬¬
// for (let i = 0; i <= numberList.length - 1; i++) {
//     console.log( numberList[i] = numberList[i] * 2)
// }
// console.log(numberList);

//Only double even numbers
for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
        numberList[i] = numberList[i] * 2
    }
}

console.log(numberList);

// ----- Multi Dimensional Arrays

const matrix = [['username', 'jDoe'], ['username', ['ksmith', 23]]];

console.log(matrix[1][1])
// grabbing only ksmith

console.log(matrix[1][1][0])

// CHECK OUT EXAMPLES OF TETRIS TO SEE 2D methods of multidementional arrays