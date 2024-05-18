// question 1

// Create an array named fruits that contains the following string  elements: "apple", "banana", "mango", "orange".
let fruits:string[]=["apple","banana", "mango","orange"];
// Question 2

// Declare an array named numbers that can contain only number  elements and initialize it with the values 10, 20, 30, and 40.
let numbers:number[]=[10,20,30,40];

// Question 3

// Access the third element of the fruits array and assign it to a  variable named thirdFruit.

let thirdFruit=fruits[2];
console.log(thirdFruit);
// Question 4

// Change the second element of the numbers array to 25.
let number:number[]=[10,20,30,40];
number[1]=25;
console.log(number);
// Question 5

// Add the element "grape" to the end of the fruits array using the  method.
let fruit:string[]=["apple","banana", "mango","orange"];
fruit.push("grapes");
console.log(fruit);
// Question 6

// Remove the last element from the fruits array using the  method and assign it to a variable named lastFruit.
let lastfruit=fruits.pop();
console.log(lastfruit);
console.log(fruits);
// Question 7

// Remove the first element from the fruits array using the  method and assign it to a variable named firstFruit.
let firstfruit=fruits.shift();
console.log(firstfruit);
console.log(fruits);
// Question 8
// Add the element "kiwi" to the beginning of the fruits array using the method.
let fruits1:string[]=["apple","banana", "mango","orange"];
fruits1.unshift("kiwi");
console.log(fruits1);

