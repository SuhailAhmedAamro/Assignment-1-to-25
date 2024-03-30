"use strict";
// Personal Message
let personName = "Eric";
console.log(`Hello ${personName}, would you like to learn some TypeScript today?`);
// Name Cases
let personNameCase = "John Doe";
console.log(personNameCase.toLowerCase());
console.log(personNameCase.toUpperCase());
console.log(personNameCase.replace(/\b\w/g, c => c.toUpperCase())); // Titlecase
// Famous Quote
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
// Famous Quote 2
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
// Stripping Names
let personNameWithWhitespace = "\t  John Doe\n";
console.log("Name with whitespace:", personNameWithWhitespace);
console.log("Stripped name:", personNameWithWhitespace.trim());
// Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// Favorite Number
let favoriteNumber = 7;
console.log(`My favorite number is: ${favoriteNumber}`);
// Adding Comments
// This program prints a personalized message to a person.
// Author: [Your Name]
// Date: [Current Date]
// Names
// let names: string[] = ["John", "Jane", "Alice"];
for (let name of names) {
    console.log(name);
}
// Greetings
for (let name of names) {
    console.log(`Hello ${name}, would you like to join us for dinner?`);
}
// Your Own Array
let transportationModes = ["car", "motorcycle", "bicycle"];
for (let mode of transportationModes) {
    console.log(`I would like to own a ${mode}.`);
}
// Guest List
let guests = ["Albert Einstein", "Isaac Newton", "Marie Curie"];
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
// Changing Guest List
let unableToAttend = guests.pop();
console.log(`${unableToAttend} is unable to attend the dinner.`);
guests.push("Nikola Tesla");
for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
// More Guests
console.log("We found a bigger dinner table!");
guests.unshift("Leonardo da Vinci");
guests.splice(Math.floor(guests.length / 2), 0, "Galileo Galilei");
guests.push("Stephen Hawking");
for (let guest of guests) {
    console.log(`Dear ${guest}, you are invited to dinner.`);
}
// Shrinking Guest List
console.log("Sorry, we can only invite two guests now.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}
for (let guest of guests) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}
guests.length = 0; // Emptying the list
console.log("Guest list is now empty:", guests);
// Seeing the World
let placesToVisit = ["Paris", "Tokyo", "Rio de Janeiro", "Rome", "Sydney"];
console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", placesToVisit.slice().sort());
console.log("Original order after sorting:", placesToVisit);
console.log("Reverse alphabetical order:", placesToVisit.slice().sort().reverse());
console.log("Original order after reverse sorting:", placesToVisit);
// Dinner Guests
console.log(`Number of people invited to dinner: ${guests.length}`);
// Arrays
// Program to create a list of mountains
let mountains = ["Everest", "K2", "Kangchenjunga", "Lhotse"];
console.log(mountains);
// TypeScript Objects
// Program to create objects containing information about different programming languages
let programmingLanguages = [
    { name: "JavaScript", paradigm: "Object-oriented" },
    { name: "Python", paradigm: "Object-oriented" },
    { name: "TypeScript", paradigm: "Object-oriented" }
];
console.log(programmingLanguages);
// Intentional Error
// Index error example
let fruits = ["apple", "banana", "orange"];
// Accessing an index that does not exist to produce an intentional error
// console.log(fruits[3]); // Uncomment to see the error
// Conditional Tests
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car != 'audi'? I predict True.");
console.log(car != 'audi');
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');
console.log("Is car !== 'SUBARU'? I predict True.");
console.log(car !== 'SUBARU');
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5);
console.log("Is car.startsWith('su')? I predict True.");
console.log(car.startsWith('su'));
// More Conditional Tests
let favoriteFruits = ["apple", "banana", "mango"];
console.log("Equality Test with Strings:");
// console.log("apple" === "Apple");
console.log("Lowercase Function Test:");
console.log("PYTHON".toLowerCase() === "python");
console.log("Numerical Tests:");
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 3);
console.log("Logical Tests:");
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log("Item in List Test:");
let fruitsList = ["apple", "banana", "orange"];
console.log("banana" in fruitsList);
console.log("Item not in List Test:");
// console.log("grape" not in fruitsList);
