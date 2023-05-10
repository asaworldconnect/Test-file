//  To DO :- Write a function in JavaScript that takes two
//  numbers as parameters and returns their sum.
// Call the function with the arguments 5 and 7,
//  and store the result in a variable called "result".

// let result = sumNumbers(5, 7);
// console.log(result);

// function sumNumbers(num1, num2) {
//   return num1 + num2;
// }
// document.getElementById("demo").innerHTML = result;

// (2)Write a function in JavaScript that takes an array of numbers as a parameter and returns the sum of all the even numbers in the array.
//  Use a for loop to iterate over the array and an if statement to check if each element is even.
//  Call the function with the argument [1, 2, 3, 4, 5, 6] and store the result in a variable called "result".

// const numbers = [1, 2, 3, 4, 5, 6];
// const result = sumEvenNumbers(numbers);
// console.log(result);

// function sumEvenNumbers(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// }

// document.getElementById("demo").innerHTML = result;

// (3) To Do :-Write a function in JavaScript that takes an array of objects as a parameter.
// Each object represents a book and has the following
//  properties: title (string), author (string), and pageCount (number).
//  The function should return an array of book titles (strings)
// that have more than 300 pages.
// array.filter(function(value, index, arr), thisValue)

// const books = [
//   { title: "The Catcher in the Rye", author: "J.D. Salinger", pageCount: 224 },
//   { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 336 },
//   { title: "1984", author: "George Orwell", pageCount: 328 },
//   { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pageCount: 180 },
// ];

// const Titles = getBooksMoreThan300Pages(books);
// console.log(Titles);

// function getBooksMoreThan300Pages(books) {
//   const longBooks = books.filter((book) => {
//     return book.pageCount > 300;
//   });
//   const titles = longBooks.map((book) => book.title);
//   return titles;
// }

// document.getElementById("demo").innerHTML = Titles;

// 1. Write a function that takes an array of strings as a parameter and
//  returns a new array that only contains strings with more
// than 5 characters. Use the `filter` method.

const words = ["apple", "banana", "cat", "dog", "elephant", "fish", "giraffe"];
const five = char5(words);
console.log(five);

function char5(arrayOfStrings) {
  return arrayOfStrings.filter((str) => str.length > 5);
}

document.getElementById("demo1").innerHTML = five;

// 2. Write a function that takes an array of numbers
// as a parameter and returns the sum of all the numbers.
//  Use the `reduce` method.
// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// or this method

const number = [4, 9, 16, 25, 29, 100, 66, 77];

const sum = number.reduce((p, c) => {
  console.log(`Previous: ${p}`);
  console.log(`Current: ${c}`);
  return p + c;
}, 0);
console.log(sum);
document.getElementById("demo2").innerHTML = sum;

//  3. Write a function that takes an array of objects as a parameter.
//   Each object represents a student and has the following
//   properties: name (string) and grade (number).
//  The function should return an array of student names (strings)
//  that have a grade higher than 80.
//   Use the `filter` and `map` methods.
const students = [
  { name: "Alice", grade: 75 },
  { name: "Bob", grade: 90 },
  { name: "Charlie", grade: 85 },
  { name: "David", grade: 80 },
  { name: "Eve", grade: 95 },
];

const topPerformers = getTopPerformers(students);

function getTopPerformers(studentsArray) {
  const topPerformers = studentsArray
    .filter((student) => student.grade > 80)
    .map((student) => student.name);

  return JSON.stringify(topPerformers);
}
console.log(topPerformers);
document.getElementById("demo3").innerHTML = topPerformers;

// const students = [
//   { name: "Mary", grade: 99 },
//   { name: "Mark", grade: 80 },
//   { name: "Luke", grade: 90 },
//   { name: "John", grade: 60 },
//   { name: "Joe", grade: 82 },
// ];
// // console.log(students);
// const grade = getTopStudents(students);

// function getTopStudents(students) {
//   return students;
//   students
//     .filter((student) => student.grade > 80)
//     .map((student) => student.name);
// }
// console.log(grade);

//

// 4. Write a function that takes an array of numbers
// as a parameter and returns a new array that only contains numbers that are even.
// Use the `filter` method.

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = filterEvenNumbers(numbers);

console.log(evenNumbers);

function filterEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(
    function (number) {
      return number % this.divisor === 0;
    }
    // { divisor: 2 }
  );
  return evenNumbers;
}

document.getElementById("demo4").innerHTML = numbers;

//document.getElementById("demo4").innerHTML = person;
// 5. Write a function that takes an array of objects as a parameter.
//  Each object represents a person and has the following
//  properties: name (string), age (number), and occupation (string).
// The function should return an array of strings in the format
//  "NAME is AGE years old and works as an OCCUPATION". Use the `map` method.

//let person = [
//   { name: "John", occupation: "operator", age: 46 },
//   { name: "joseph", occupation: "chemist", age: 77 },
// ];

// let formattedWorkers = formatWorkers(person);

// function formatWorkers(persons) {
//   return persons.map(
//     (person) =>
//       `${person.name} is ${person.age} years old and works as an ${person.occupation}`
//   );
// }
//document.getElementById("demo5").innerHTML = formattedWorkers;

// Or

const people = [{ name: "grace", occupation: "engineer", age: 50 }];

const graces = grace(people);

function grace(people) {
  return people.map(function (worker) {
    return (
      worker.name +
      " is " +
      worker.age +
      " years old and works as an " +
      worker.occupation
    );
  });
}

// const person = { name: "grace", occupation: "engineer", age: 50 };

// const graceStrings = formatPerson(person);

// function formatPerson(person) {
//   return [
//     `${person.name} is ${person.age} years old and works as an ${person.occupation}`,
//   ];
// }

// console.log(graceStrings);

// document.getElementById("demo").innerHTML = graceStrings;
