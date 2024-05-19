// question 1
// Create an array named fruits that contains the following string  elements: "apple", "banana", "mango", "orange".
var fruits = ["apple", "banana", "mango", "orange"];
// Question 2
// Declare an array named numbers that can contain only number  elements and initialize it with the values 10, 20, 30, and 40.
var numbers = [10, 20, 30, 40];
// Question 3
// Access the third element of the fruits array and assign it to a  variable named thirdFruit.
var thirdFruit = fruits[2];
console.log(thirdFruit);
// Question 4
// Change the second element of the numbers array to 25.
var number = [10, 20, 30, 40];
number[1] = 25;
console.log(number);
// Question 5
// Add the element "grape" to the end of the fruits array using the  method.
var fruit = ["apple", "banana", "mango", "orange"];
fruit.push("grapes");
console.log(fruit);
// Question 6
// Remove the last element from the fruits array using the  method and assign it to a variable named lastFruit.
var lastfruit = fruits.pop();
console.log(lastfruit);
console.log(fruits);
// Question 7
// Remove the first element from the fruits array using the  method and assign it to a variable named firstFruit.
var firstfruit = fruits.shift();
console.log(firstfruit);
console.log(fruits);
// Question 8
// Add the element "kiwi" to the beginning of the fruits array using the method.
var fruits1 = ["apple", "banana", "mango", "orange"];
fruits1.unshift("kiwi");
console.log(fruits1);
// Question 9
// Remove 2 elements from the fruits array starting from index 1 using the method.
fruit.splice(1, 2);
console.log(fruits);
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);
// Question 11
// Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
var citrusFruits = fruit.slice(0, 2);
console.log(citrusFruits);
// Question 12
// Create a new array named lastTwoFruits that contains the last  two elements of the fruits array using the method.
var lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);
