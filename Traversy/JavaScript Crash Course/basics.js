// Good JS reference: https://developer.mozilla.org/en-US/

// alert('Hello World'); // Don't use for debugging
// console.log('Hello World');  // Use for debugging
// console.error('This is an error.');
// console.warn('This is a warning.');

/* Declaring variables
    var (not recommended since ES6; global scope)
    let (use unless you know you're going to reassign a value; block-level scope)
    const (block-level scope)
*/
/* Data types (types in JS are dynamically/loosely typed)
    Primitive (value stored directly in memory): String, Number (no int, double, etc. in JS), Boolean, null, undefined
*/
const name = 'Jeff',
    age = 29,
    rating = 4.5,
    isCool = true,
    nullVal = null, // typeOf(x) evaluates to 'object', which is bogus
    undVal = undefined;

// Concatenation
console.log('My name is ' + name + ', and I am ' + age + '.'); // 'Old' way of of doing it (pre-ES6)
// Template string
console.log(`My name is ${name}, and I am ${age}.`);
// String properties
const s = 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5).toLowerCase()); // Chaining methods
const tags = 'technology, computers, it, code';
console.log(tags.split(', ')); // Returns array with 4 values

// Arrays
const numbers = new Array(); // Constructing an array (keyword 'new' indicates a constructor)
const fruits = ['apples', 'oranges', 'pears', 10, true]; // Since JS is not statically typed, arrays can hold values of different data types
console.log(fruits);
console.log(fruits[1]); // Accessing by index
fruits[3] = 'grapes'; // Adding by index; even though fruits is a const, we can still add values, just can't redefined fruits itself
fruits.push('mangos'); // Add to end
fruits.unshift('strawberries'); // Add to beginning
fruits.pop(); // Remove last element
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

// Object literals (key-value pairs)
const person = {
    firstName: 'Jeff',
    lastName: 'Brown',
    age: 29,
    hobbies: ['music', 'games', 'movies'],
    address: {
        street: '123 Main St.',
        city: 'Springfield',
        state: 'MO'
    }
}
console.log(person);
console.log(person.firstName, person.lastName, person.age); // Log multiple outputs
console.log(person.hobbies[0], person.address.city);
const {firstName, lastName, address: { city }} = person; // Assigning variables directly from object literal
console.log(firstName, lastName, city);
person.email = 'misterjeffbrown@gmail.com'; // Add properties
console.log(person);

// Arrays of objects
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];
console.log(todos);
console.log(todos[1].text);
const todosJson = JSON.stringify(todos); // Convert to JSON
console.log(todosJson);

// Loops
for(let i = 0; i < 10; i++) {
    console.log(i);
}
let i = 0;
while(i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text); // Not the best way to iterate through elements
}
for(let todo of todos) {
    console.log(todo.text);
}
todos.forEach(function(todo) {
    console.log(todo.text);
});
// Map
const todoMap = todos.map(function(todo) {
    return todo.text;
});
console.log(todoMap);
// Filter
const todoFilter = todos.filter(function(todo) {
    return todo.isCompleted === true; // Returns only completed ToDos
});
console.log(todoFilter);
// Filter and Map chaining
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompleted);

// Conditionals
const x = 6;
if(x == 10) { // == does not match data types, just value; === matches value and data type and is recommended for general use
    console.log('x is 10');
} else if (x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}
const y = 11;
if(x > 5 || y > 10) { // Or operator: ||
    console.log('x is more than 5 or y is more than 10');
}
if (x > 5 && y > 10) { // And operator: &&
    console.log('x is more than 5 and y is more than 10');
}
const color = x > 10 ? 'red' : 'blue'; // Ternary operator: ?
console.log(color);
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is neither red nor blue');
        break;
}

// Functions
function addNums(num1 = 1, num2 = 4) { // Parameters inside parentheses; in this case, the parameters have default values
    return num1 + num2;
}
addNums(); // Returns NaN (Not a Number)
console.log(addNums(5, 8));
const subNums = (num1 = 5, num2 = 4) => { // Example of an Arrow Function; => is called a 'fat arrow'
    console.log(num1 - num2);
}
subNums();
const multNums = (num1 = 2, num2 = 6) => num1 * num2; // Shortened Arrow Function; automatically returns value
console.log(multNums());
todos.forEach((todo) => console.log(todo));

// Object-oriented programming
// Contructor function (pre-ES6)
function Person(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = new Date(dateOfBirth);
    this.getBirthYear = function() {
        return this.dateOfBirth.getFullYear(); // Using Date method
    }
}
// Instantiate object
const person1 = new Person('Jeff', 'Brown', '11/1/1989');
console.log(person1);
console.log(person1.getBirthYear());
// Prototypes
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
console.log(person1.getFullName());

// Classes
class Book {
    constructor(title, author, isbn10) {
        this.title = title;
        this.author = author;
        this.isbn10 = isbn10;
    }

    getTitleAndAuthor() {
        return `${this.title} (${this.author})`;
    }
}
const book = new Book('Catch-22', 'Joseph Heller', 1451626657);
console.log(book, book.getTitleAndAuthor());