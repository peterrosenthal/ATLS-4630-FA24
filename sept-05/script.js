/*
this is a multi line comment!
*/

// this is a single line comment

console.log("hello world");

let helloWorldVariable = "hello world";
console.log(helloWorldVariable);

const helloWorldConst = "hello world constant"; // double quote string
console.log(helloWorldConst);

helloWorldVariable = 'hello world variable'; // single quote string
console.log(helloWorldVariable);

const stringWithQuotesInside = 'this is a string with "quotes" inside of it';

const number = 7;
const stringLiteral = `this is a string literal, number + 10 is :${number + 10}`;
const stringConcatenation = 'this is a string concatenation, number + 10 is:' + number + 10;

console.log(stringLiteral);
console.log(stringConcatenation);

const myArray = ['cats', 'dogs', 'goats'];
console.log(myArray);
console.log(myArray[2]);
console.log(myArray.length);

myArray.push('pigs');
console.log(myArray);

const thisClassroom = {
  building: "ATLAS",
  roomNumber: 104,
  "key-with-dash": 'value-with-dash'
};
console.log(thisClassroom);
console.log(thisClassroom.building);
console.log(thisClassroom["building"]);
console.log(thisClassroom["key-with-dash"]);

thisClassroom.newProperty = 'new value';
console.log(thisClassroom);

const x = 5;
const y = 7;

if (x + y > 10) {
  console.log("we should reach here!");
} else {
  console.log("this code should never run");
}

let z = 0;
while (z < 10) {
  console.log(z);
  z++;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (const animal of myArray) {
  console.log(animal);
}

const num = 17;

function addTen(num) {
  console.log(num); // not 17
  return num + 10;
}

console.log(num); // 17

console.log(addTen(5));
console.log(addTen);

function printToConsole(something) {
  console.log(something);
}

myArray.forEach(printToConsole);

const printToConsoleArrowFn = (something) => {
  console.log(something);
}

(() => { console.log("inside anonymous function!") })();

myArray.forEach((animal) => {
  console.log(animal);
});

myArray[0] = 'something new';

const numbers = [1, 2, 7, 13, 4, 6];

function double(num) {
  return num * 2;
}

const numsDoubled = numbers.map(double);

const numsTrippled = numbers.map((num) => {
  return num * 3;
});

const numsQuadroupled = numbers.map(num => num * 4);

console.log(numbers);
console.log(numsDoubled);
console.log(numsTrippled);

console.log(document);

// const firstParagaph = document.querySelector("#first-para");
const firstParagraph = document.getElementById("first-para");
console.log(firstParagraph);

// const myParagraphs = document.querySelectorAll(".my-para");
const myParagraphs = document.getElementsByClassName("my-para");
console.log(myParagraphs);

function changeLink() {
  const googleLink = document.querySelector("#google-link");
  googleLink.href = 'https://colorado.edu';
}

const changeLinkButton = document.querySelector('#change-link-button');
changeLinkButton.addEventListener('click', changeLink);
