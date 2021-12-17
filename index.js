// Answer Sheet - all answers should go here
// Abgabe Datei - Alle Lösungen müssen hier stehen.

/* 
except for A-1 and C, you will always write a function that returns values
Mit Ausnahme von A-1 und C, sollen immer Funktionen mit Rückgabewerten geschrieben werden.
*/

/* A-1 (5)
define and fill an object
Definiere und fülle ein Objekt */
const profileData = {
  name: `Zoya`,
  surname: `Ali`,
  age: 35,
  city: `Mumbai`,
};

/* A-2 (5) */
const convertObjectToArray = function (object) {
  return Object.entries(object);
};
console.log(
  convertObjectToArray({
    1: 10,
    2: 20,
    3: 30,
  })
);

/* B-1 (10) */
const convertArrayData = function (array) {
  return `${array[1]} ${array[0]} milk`.split(` `);
};
console.log(convertArrayData(["coffee", "tea", "juice"]));

/* B-2 (15) */
const convertArraysToObject = function (array1, array2) {
  return array1.reduce((acc, element, index) => {
    acc[element] = array2[index];
    return acc;
  }, {});
};
let cities = ["Berlin", "Hamburg", "Munich", "Stuttgart", "Duesseldorf"];

let areas = [
  "891.68 km2",
  "755.3 km2",
  "310.7 km2",
  "207.35 km2",
  "217.41 km2",
];
console.log(convertArraysToObject(cities, areas));
/* B-3 (10) */
const createGrid = function (size, char) {
  let gridArray = [];
  for (ii = 0; ii < size; ii++) {
    gridArray.push([]);
  }
  for (jj = 0; jj < size; jj++) {
    for (kk = 0; kk < size; kk++) {
      gridArray[jj].push(char);
    }
  }
  return gridArray;
};
console.log(createGrid(3, "*"));
/* B-4 (10) */
const wordConverter = function (array, suffix) {
  return array.map((element) => element + suffix);
};
let adjectives = ["smart", "kind", "sweet", "small", "clear"];
console.log(wordConverter(adjectives, "er"));
/* B-5 (10) */
const calculateHours = function (arrayOfObj) {
  return arrayOfObj.reduce((hrs, day) => {
    hrs += day.end - day.start;
    return hrs;
  }, 0);
};
const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 },
];
console.log(calculateHours(hourTracking));
/* C (10) 
write a class
schreibe eine Klasse */
//const Course = null;
class Course {
  constructor(teacher, type, number) {
    this.teacher = teacher;
    this.type = type;
    this.number = number;
  }
  spaceNeeded() {
    return `The classroom should be ${this.number * 2}m².`;
  }
  details() {
    return `This is a ${this.type} course taught by ${this.teacher}. There are ${this.number} students taking the course.`;
  }
}
const course = new Course(`John`, `web development`, 22);
console.log(course.spaceNeeded());
console.log(course.details());
/* D-1 (10) */
const getFirstAlphabetPosition = function (word) {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = -1;

  let letters = word.split("");
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    if (alphabets.includes(letter)) {
      index = i;
      break;
    }
  }
  return index;
};
console.log(getFirstAlphabetPosition(`_the quick brown fox_`));

const capitalizeFirstLetter = function (string) {
  return string
    .toString()
    .split(" ")
    .map((element) => {
      const firstLetterPos = getFirstAlphabetPosition(element);
      if (firstLetterPos === 0) {
        return element[firstLetterPos].toUpperCase() + element.slice(1);
      } else if (firstLetterPos > 0) {
        return (
          element.slice(0, firstLetterPos) +
          element[firstLetterPos].toUpperCase() +
          element.slice(firstLetterPos + 1)
        );
      } else if (firstLetterPos === -1) {
        return string;
      }
    })
    .join(" ");
};
console.log(capitalizeFirstLetter("hey there"));
console.log(capitalizeFirstLetter(true));
console.log(capitalizeFirstLetter(`_the quick brown fox_`));
console.log(capitalizeFirstLetter(`what Is This?`));
console.log(capitalizeFirstLetter("????"));

/* D-2 (15) */
const validPin = function (number) {
  if (Number.isNaN(number)) {
    return false;
  }
  if (isNaN(number)) {
    return false;
  }
  if (number.toString().length !== 4) {
    return false;
  }
  if (parseInt(number.toString().slice(-1)) % 2 === 1) {
    // console.log(num, parseInt(num.toString().slice(-1)));
    return false;
  }
  const numToString = number.toString();
  if (
    numToString[0] === numToString[1] &&
    (numToString[0] === numToString[2]) & (numToString[0] === numToString[3])
  ) {
    return false;
  }

  const total = numToString.split("").reduce((acc, element) => {
    acc += Number(element);
    return acc;
  }, 0);

  if (total < 5) {
    return false;
  }

  return true;
};
console.log(validPin("1234"));
console.log(validPin("1235"));
console.log(validPin("wwww"));
console.log(validPin("12345"));
console.log(validPin("2222"));
console.log(validPin("1000"));
console.log(validPin("2224"));
console.log(validPin("0026"));
console.log(validPin(`abcd`));

// Do not edit or answer below this line
// Bearbeite die letzte Zeile nicht. Das wird vom Unit-Test gebraucht
// EDITING MODULE EXPORTS WILL RESULT IN AN AUTOMATIC FAIL
module.exports = {
  profileData,
  convertObjectToArray,
  convertArrayData,
  convertArraysToObject,
  createGrid,
  wordConverter,
  calculateHours,
  Course,
  capitalizeFirstLetter,
  validPin,
};
